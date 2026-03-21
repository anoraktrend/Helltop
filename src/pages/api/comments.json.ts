import type { APIRoute } from 'astro';
import { getDb } from '../../db';
import { comments } from '../../db/schema';
import { eq, desc } from 'drizzle-orm';

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const db = getDb(locals.runtime);
    const body = await request.json();
    const { author, body: commentBody, post_id } = body;
    
    if (!author || !commentBody || !post_id) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
    }

    await db.insert(comments).values({
      author,
      body: commentBody,
      postId: post_id,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error in POST /api/comments.json:', error);
    return new Response(JSON.stringify({ error: 'Failed' }), { status: 500 });
  }
};

export const GET: APIRoute = async ({ request: _request, locals }) => {
  try {
    const db = getDb(locals.runtime);
    const url = new URL(_request.url);
    const postId = url.searchParams.get('postId');

    let query = db.select().from(comments).orderBy(desc(comments.publishedAt));
    
    if (postId) {
      // @ts-ignore
      query = query.where(eq(comments.postId, postId));
    }

    const allComments = await query;
    return new Response(JSON.stringify(allComments), { status: 200 });
  } catch (error) {
    console.error('Error in GET /api/comments.json:', error);
    return new Response(JSON.stringify({ error: 'Failed' }), { status: 500 });
  }
};
