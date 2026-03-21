import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
  try {
    // @ts-ignore
    const issuerUrl = (env as any)?.AUTHELIA_ISSUER_URL || import.meta.env.AUTHELIA_ISSUER_URL;
    // @ts-ignore
    const clientId = (env as any)?.AUTHELIA_CLIENT_ID || import.meta.env.AUTHELIA_CLIENT_ID;

    if (!issuerUrl || !clientId) {
      return new Response('Server misconfiguration: OIDC variables missing. Please configure AUTHELIA_ISSUER_URL and AUTHELIA_CLIENT_ID.', { status: 500 });
    }

    // Fetch openid-configuration to get the actual auth endpoint dynamically
    const configRes = await fetch(`${issuerUrl}/.well-known/openid-configuration`);
    if (!configRes.ok) {
      return new Response(`Failed to fetch OIDC configuration from ${issuerUrl}`, { status: 500 });
    }
    const config = await configRes.json() as { authorization_endpoint: string };
    const authEndpoint = config.authorization_endpoint;

    // Generate secure random state string
    const state = crypto.randomUUID();
    
    // Store state in a strict cookie to mitigate CSRF attacks
    cookies.set('oidc_state', state, {
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 300 // 5 minutes expiration for login flow
    });

    const url = new URL(request.url);
    const redirectUri = `${url.origin}/api/auth/callback`;

    // Build the authorization redirect URL
    const authUrl = new URL(authEndpoint);
    authUrl.searchParams.set('response_type', 'code');
    authUrl.searchParams.set('client_id', clientId);
    authUrl.searchParams.set('redirect_uri', redirectUri);
    authUrl.searchParams.set('scope', 'openid profile email');
    authUrl.searchParams.set('state', state);

    return redirect(authUrl.toString(), 302);
  } catch (error) {
    console.error('Login redirect error:', error);
    return new Response('Login Error', { status: 500 });
  }
};
