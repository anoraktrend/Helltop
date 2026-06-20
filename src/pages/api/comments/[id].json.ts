import type {APIRoute} from 'astro';
import {getDb} from '../../../db';
import {comments} from '../../../db/schema';
import {eq} from 'drizzle-orm';
import { getKv } from '../../../utils/env';

export const DELETE: APIRoute = async ({params, cookies}) => {
  try {
    const sessionId = cookies.get('admin_session')?.value;
    const isAuthorized = sessionId
      ? await getKv('SESSION')?.get(`session:${sessionId}`) === 'valid'
      : !!import.meta.env.DEV;

    if (!isAuthorized) {
      return new Response(JSON.stringify({error: 'Unauthorized'}), {status: 401});
    }

    const {id} = params;
    if (!id) {
      return new Response(JSON.stringify({error: 'Comment ID is required'}), {
        status: 400,
      });
    }

    const db = getDb();
    const commentId = parseInt(id, 10);

    if (isNaN(commentId)) {
      return new Response(JSON.stringify({error: 'Invalid ID format'}), {
        status: 400,
      });
    }

    await db.delete(comments).where(eq(comments.id, commentId));

    return new Response(JSON.stringify({success: true}), {status: 200});
  } catch (error) {
    console.error(`Error deleting comment ${params?.id}:`, error);
    return new Response(JSON.stringify({error: 'Internal Server Error'}), {
      status: 500,
    });
  }
};
