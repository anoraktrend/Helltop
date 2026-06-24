import type {APIRoute} from 'astro';
import { getOidcConfig, getOidcCredentials } from '../../../utils/oidc';

export const GET: APIRoute = async ({request, cookies, redirect}) => {
  try {
    const { authorization_endpoint: authEndpoint } = await getOidcConfig();
    const { clientId } = getOidcCredentials();

    const state = crypto.randomUUID();

    cookies.set('oidc_state', state, {
      path: '/',
      httpOnly: true,
      secure: import.meta.env.PROD,
      sameSite: 'lax',
      maxAge: 300,
    });

    const url = new URL(request.url);
    const redirectUri = `${url.origin}/auth/oidc/callback`;

    const authUrl = new URL(authEndpoint);
    authUrl.searchParams.set('response_type', 'code');
    authUrl.searchParams.set('client_id', clientId);
    authUrl.searchParams.set('redirect_uri', redirectUri);
    authUrl.searchParams.set('scope', 'openid profile email');
    authUrl.searchParams.set('state', state);

    return redirect(authUrl.toString(), 302);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Login redirect error:', message);
    return new Response(`Login Error: ${message}`, {status: 500});
  }
};
