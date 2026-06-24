import { env } from 'cloudflare:workers';

const _env = env as unknown as Record<string, string | KVNamespace | undefined>;

export function getEnv(key: string): string | undefined {
  return (_env[key] as string) ?? import.meta.env[key];
}

export function getKv(name: string): KVNamespace | undefined {
  return _env[name] as KVNamespace | undefined;
}
