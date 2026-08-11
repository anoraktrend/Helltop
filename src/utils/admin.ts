import type { AstroCookies } from 'astro';
import { getKv } from './env';

export async function isAdmin(cookies: AstroCookies): Promise<boolean> {
  const sessionId = cookies.get('admin_session')?.value;
  return sessionId
    ? (await getKv('SESSION')?.get(`session:${sessionId}`)) === 'valid'
    : !!import.meta.env.DEV;
}
