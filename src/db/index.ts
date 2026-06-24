import {drizzle} from 'drizzle-orm/d1';
import * as schema from './schema';
import { env } from 'cloudflare:workers';

function mockDb() {
  return new Proxy({} as ReturnType<typeof drizzle>, {
    get: () => () => Promise.resolve([]),
  });
}

export function getDb() {
  const d1 = (env as unknown as Record<string, unknown>).DB as D1Database | undefined;
  if (!d1) {
    if (import.meta.env.DEV) return mockDb();
    throw new Error('D1 database binding "DB" not found');
  }
  return drizzle(d1, {schema});
}
