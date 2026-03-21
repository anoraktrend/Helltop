import { drizzle } from 'drizzle-orm/d1';
import * as schema from './schema';

export function getDb(runtime: any) {
  // In Cloudflare Pages/Workers, the D1 binding is available on the runtime object
  // For Astro, it's typically in context.locals.runtime.env.DB or similar
  const d1 = runtime?.env?.DB || runtime?.DB;
  
  if (!d1) {
    if (import.meta.env.DEV) {
      console.warn('D1 database binding "DB" not found. Comments will be disabled in local dev unless using wrangler.');
      // Return a proxy that handles common drizzle methods to prevent crashing
      return {
        select: () => ({ from: () => ({ where: () => ({ orderBy: () => [] }) }) }),
        insert: () => ({ values: () => ({ returning: () => [] }) }),
      } as any;
    }
    throw new Error('D1 database binding "DB" not found');
  }
  return drizzle(d1, { schema });
}
