import { drizzle } from 'drizzle-orm/d1';
import * as schema from './schema';

export function getDb(runtime: any) {
  // In Cloudflare Pages/Workers, the D1 binding is available on the runtime object
  // For Astro, it's typically in context.locals.runtime.env.DB or similar
  const d1 = runtime?.env?.DB || runtime?.DB;
  if (!d1) {
    throw new Error('D1 database binding "DB" not found');
  }
  return drizzle(d1, { schema });
}
