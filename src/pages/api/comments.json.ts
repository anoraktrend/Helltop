import type {APIRoute} from 'astro';
import {getDb} from '../../db';
import {comments} from '../../db/schema';
import {eq, desc, inArray} from 'drizzle-orm';
import { isAdmin } from '../../utils/admin';

const MAX_BULK_DELETE = 500;
const BATCH_SIZE = 100;

interface CommentRequestBody {
  author: string;
  body: string;
  post_id: string;
  parent_id?: number;
}

export const POST: APIRoute = async ({request}) => {
  try {
    const db = getDb();
    const body = (await request.json()) as CommentRequestBody;
    const {author, body: commentBody, post_id, parent_id} = body;

    if (!author || !commentBody || !post_id) {
      console.error('Missing fields in comment submission:', {
        author,
        commentBody,
        post_id,
      });
      return new Response(
        JSON.stringify({
          error: 'Missing fields',
          received: {author, commentBody, post_id},
        }),
        {status: 400},
      );
    }

    const parentId = parent_id ? Number(parent_id) : null;

    await db.insert(comments).values({
      author,
      body: commentBody,
      postId: post_id,
      parentId: Number.isFinite(parentId) ? parentId : null,
      publishedAt: new Date(),
    });

    return new Response(JSON.stringify({success: true}), {status: 200});
  } catch (error) {
    console.error('Error in POST /api/comments.json:', error);
    return new Response(JSON.stringify({error: 'Failed'}), {status: 500});
  }
};

export const DELETE: APIRoute = async ({request, cookies}) => {
  try {
    if (!(await isAdmin(cookies))) {
      return new Response(JSON.stringify({error: 'Unauthorized'}), {status: 401});
    }

    const body = (await request.json().catch(() => null)) as {ids?: unknown} | null;

    if (!body || !Array.isArray(body.ids) || body.ids.length === 0) {
      return new Response(JSON.stringify({error: 'Comment IDs are required'}), {
        status: 400,
      });
    }

    const ids = [...new Set(body.ids.map((id) => Number(id)).filter((id) => Number.isFinite(id)))];

    if (ids.length === 0) {
      return new Response(JSON.stringify({error: 'Invalid ID format'}), {
        status: 400,
      });
    }

    if (ids.length > MAX_BULK_DELETE) {
      return new Response(JSON.stringify({error: 'Too many comment IDs'}), {
        status: 413,
      });
    }

    const db = getDb();

    // D1 limits statements to 100 bindings each — chunk to be safe
    for (let i = 0; i < ids.length; i += BATCH_SIZE) {
      await db.delete(comments).where(inArray(comments.id, ids.slice(i, i + BATCH_SIZE)));
    }

    return new Response(JSON.stringify({success: true, deleted: ids.length}), {status: 200});
  } catch (error) {
    console.error('Error in DELETE /api/comments.json:', error);
    return new Response(JSON.stringify({error: 'Internal Server Error'}), {
      status: 500,
    });
  }
};

export const GET: APIRoute = async ({request}) => {
  try {
    const db = getDb();
    const url = new URL(request.url);
    const postId = url.searchParams.get('postId');

    const query = db
      .select()
      .from(comments)
      .orderBy(desc(comments.publishedAt));

    if (postId) {
      query.where(eq(comments.postId, postId));
    }

    const allComments = await query;
    return new Response(JSON.stringify(allComments), {status: 200});
  } catch (error) {
    console.error('Error in GET /api/comments.json:', error);
    return new Response(JSON.stringify({error: 'Failed'}), {status: 500});
  }
};
