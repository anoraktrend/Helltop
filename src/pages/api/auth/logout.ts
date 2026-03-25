import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const POST: APIRoute = async ({ cookies, locals }) => {
  try {
    const sessionId = cookies.get('admin_session')?.value;
    
    if (sessionId) {
      // @ts-ignore
      const sessionKv = (env as any)?.SESSION;
      if (sessionKv) {
        await sessionKv.delete(`session:${sessionId}`);
      }
    }

    cookies.delete('admin_session', { path: '/' });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Logout error:', error);
    return new Response(JSON.stringify({ error: 'Server Error' }), { status: 500 });
  }
};
