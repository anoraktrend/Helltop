import { drizzle } from 'drizzle-orm/d1';
import * as schema from './schema';
// @ts-ignore - cloudflare:workers is a virtual module provided by the adapter
import { env } from 'cloudflare:workers';

export function getDb(runtimeEnv?: any) {
  // Try to get D1 from runtimeEnv (Astro.locals.runtime.env) or global env
  const d1 = runtimeEnv?.DB || (env as any)?.DB;
  
  if (!d1) {
    if (import.meta.env.DEV) {
      console.warn('D1 database binding "DB" not found. Comments will be disabled in local dev unless using wrangler.');
      // Return a proxy that handles common drizzle methods to prevent crashing
      return {
        select: () => ({ from: () => ({ where: () => ({ orderBy: () => [] }) }) }),
        insert: () => ({ values: () => ({ returning: () => [] }) }),
        delete: () => ({ where: () => [] }),
      } as any;
    }
    throw new Error('D1 database binding "DB" not found');
  }
  return drizzle(d1, { schema });
}
