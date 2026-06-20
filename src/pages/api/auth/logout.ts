import type {APIRoute} from 'astro';
import { getKv } from '../../../utils/env';

export const POST: APIRoute = async ({cookies}) => {
  try {
    const sessionId = cookies.get('admin_session')?.value;

    if (sessionId) {
      await getKv('SESSION')?.delete(`session:${sessionId}`);
    }

    cookies.delete('admin_session', {path: '/'});

    return new Response(JSON.stringify({success: true}), {status: 200});
  } catch (error) {
    console.error('Logout error:', error);
    return new Response(JSON.stringify({error: 'Server Error'}), {status: 500});
  }
};
