import type {APIRoute} from 'astro';
import { getKv } from '../../../utils/env';
import { getOidcConfig, getOidcCredentials } from '../../../utils/oidc';

interface TokenResponse {
  id_token: string;
  access_token: string;
}

export const GET: APIRoute = async ({request, cookies, redirect}) => {
  try {
    const url = new URL(request.url);
    const code = url.searchParams.get('code');
    const state = url.searchParams.get('state');

    const expectedState = cookies.get('oidc_state')?.value;
    cookies.delete('oidc_state', {path: '/'});

    if (!code || !state || state !== expectedState) {
      return new Response('Invalid or missing state/code parameters', {status: 400});
    }

    const { token_endpoint: tokenEndpoint } = await getOidcConfig();
    const { clientId, clientSecret } = getOidcCredentials();
    const redirectUri = `${url.origin}/auth/oidc/callback`;

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
        Accept: 'application/json',
      },
      body: tokenParams,
    });

    if (!tokenRes.ok) {
      const errText = await tokenRes.text();
      console.error('Authelia Token exchange failed:', errText);
      return new Response('Token exchange failed with Identity Provider', {status: 400});
    }

    const tokens = (await tokenRes.json()) as TokenResponse;
    if (!tokens.id_token) {
      return new Response('Did not receive an ID Token', {status: 400});
    }

    const sessionId = crypto.randomUUID();
    const sessionKv = getKv('SESSION');
    if (sessionKv) {
      await sessionKv.put(`session:${sessionId}`, 'valid', { expirationTtl: 86400 });
    } else if (!import.meta.env.DEV) {
      return new Response('Server misconfiguration: SESSION KV binding missing', {status: 500});
    }

    cookies.set('admin_session', sessionId, {
      path: '/',
      httpOnly: true,
      secure: import.meta.env.PROD,
      sameSite: 'lax',
      maxAge: 86400,
    });

    return redirect('/admin', 302);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('OIDC callback error:', message);
    return new Response(`Internal Server Error: ${message}`, {status: 500});
  }
};
