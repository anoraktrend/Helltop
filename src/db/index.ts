import {drizzle} from 'drizzle-orm/d1';
import * as schema from './schema';
import { env } from 'cloudflare:workers';

function mockDb(): ReturnType<typeof drizzle> {
  const p: any = new Proxy(() => p, {
    get: (_, prop) => prop === 'then' ? (r: (x: any) => any) => r([]) : prop === 'catch' ? () => {} : p,
    apply: () => p,
  });
  return p;
}

export function getDb() {
  const d1 = (env as unknown as Record<string, unknown>).DB as D1Database | undefined;
  if (!d1) {
    if (import.meta.env.DEV) return mockDb();
    throw new Error('D1 database binding "DB" not found');
  }
  return drizzle(d1, {schema});
}
