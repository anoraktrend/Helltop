import {drizzle} from 'drizzle-orm/d1';
import * as schema from './schema';
import {env} from 'cloudflare:workers';

export function getDb() {
  // In Astro v6 with @astrojs/cloudflare, we import env directly from 'cloudflare:workers'
  const d1 = (env as unknown as Record<string, unknown>)?.DB as
    | D1Database
    | undefined;

  if (!d1) {
    if (import.meta.env.DEV) {
      console.warn(
        'D1 database binding "DB" not found. Comments will be disabled in local dev unless using wrangler.',
      );
      // Return a proxy that handles common drizzle methods to prevent crashing
      return {
        select: () => ({from: () => ({where: () => ({orderBy: () => []})})}),
        insert: () => ({values: () => ({returning: () => []})}),
        delete: () => ({where: () => []}),
      } as unknown as ReturnType<typeof drizzle>;
    }
    throw new Error('D1 database binding "DB" not found');
  }
  return drizzle(d1, {schema});
}
