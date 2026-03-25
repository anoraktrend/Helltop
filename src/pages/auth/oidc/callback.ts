import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
  try {
    const url = new URL(request.url);
    const code = url.searchParams.get('code');
    const state = url.searchParams.get('state');

    // CSRF Protection via Stateful Cookies
    const expectedState = cookies.get('oidc_state')?.value;
    cookies.delete('oidc_state', { path: '/' });

    if (!code || !state || state !== expectedState) {
      return new Response('Invalid or missing state/code parameters', { status: 400 });
    }

    // @ts-ignore
    const issuerUrl = (env as any)?.AUTHELIA_ISSUER_URL || import.meta.env.AUTHELIA_ISSUER_URL;
    const clientId = (env as any)?.AUTHELIA_CLIENT_ID || import.meta.env.AUTHELIA_CLIENT_ID;
    const clientSecret = (env as any)?.AUTHELIA_CLIENT_SECRET || import.meta.env.AUTHELIA_CLIENT_SECRET;

    if (!issuerUrl || !clientId || !clientSecret) {
      return new Response('Server misconfiguration: Check OIDC environment variables.', { status: 500 });
    }

    // Dynamically retrieve the token endpoint
    const configRes = await fetch(`${issuerUrl}/.well-known/openid-configuration`);
    if (!configRes.ok) {
      return new Response(`Failed to fetch OIDC configuration`, { status: 500 });
    }
    const config = await configRes.json() as { token_endpoint: string };
    const tokenEndpoint = config.token_endpoint;

    const redirectUri = `${url.origin}/auth/oidc/callback`;

    // Exchange Authorization Code for Tokens
    const tokenParams = new URLSearchParams();
    tokenParams.set('grant_type', 'authorization_code');
    tokenParams.set('client_id', clientId);
    tokenParams.set('client_secret', clientSecret);
    tokenParams.set('code', code);
    tokenParams.set('redirect_uri', redirectUri);

    const tokenRes = await fetch(tokenEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      body: tokenParams.toString()
    });

    if (!tokenRes.ok) {
      const errText = await tokenRes.text();
      console.error('Authelia Token exchange failed:', errText);
      return new Response('Token exchange failed with Identity Provider', { status: 400 });
    }

    const tokens = await tokenRes.json() as { id_token: string, access_token: string };
    // Minimal Token Validation: The token was directly obtained over TLS back-channel using the client secret.
    if (!tokens.id_token) {
        return new Response('Did not receive an ID Token', { status: 400 });
    }
    
    // Create Local Session using Cloudflare KV
    const sessionId = crypto.randomUUID();
    
    // @ts-ignore
    const sessionKv = (env as any)?.SESSION;
    if (sessionKv) {
      // Set session expiration to 24 hours
      await sessionKv.put(`session:${sessionId}`, 'valid', { expirationTtl: 86400 });
    } else if (!import.meta.env.DEV) {
      return new Response('Server misconfiguration: SESSION KV binding missing', { status: 500 });
    }

    // Set HTTP-Only Session Cookie
    cookies.set('admin_session', sessionId, {
      path: '/',
      httpOnly: true,
      secure: import.meta.env.PROD,
      sameSite: 'lax',
      maxAge: 86400 // 24 hours
    });

    // Successfully Authenticated, Redirect to Admin Dashboard
    return redirect('/admin', 302);
  } catch (error: any) {
    console.error('OIDC callback error:', error);
    return new Response(`Internal Server Error: ${error.message || 'Unknown error'}`, { status: 500 });
  }
};
