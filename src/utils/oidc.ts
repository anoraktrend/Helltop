import { getEnv } from './env';

interface OIDCConfig {
  authorization_endpoint: string;
  token_endpoint: string;
}

let cachedConfig: OIDCConfig | null = null;

export async function getOidcConfig(): Promise<OIDCConfig> {
  if (cachedConfig) return cachedConfig;

  const issuerUrl = getEnv('AUTHELIA_ISSUER_URL');
  if (!issuerUrl) throw new Error('AUTHELIA_ISSUER_URL not configured');

  const res = await fetch(`${issuerUrl}/.well-known/openid-configuration`);
  if (!res.ok) throw new Error('Failed to fetch OIDC configuration');

  cachedConfig = await res.json() as OIDCConfig;
  return cachedConfig;
}

export function getOidcCredentials() {
  const clientId = getEnv('AUTHELIA_CLIENT_ID');
  const clientSecret = getEnv('AUTHELIA_CLIENT_SECRET');
  if (!clientId || !clientSecret) throw new Error('OIDC credentials not configured');
  return { clientId, clientSecret };
}
