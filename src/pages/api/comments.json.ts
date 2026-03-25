import type {APIRoute} from 'astro';
import {getDb} from '../../db';
import {comments} from '../../db/schema';
import {eq, desc} from 'drizzle-orm';

interface CommentRequestBody {
  author: string;
  body: string;
  post_id: string;
}

export const POST: APIRoute = async ({request}) => {
  try {
    const db = getDb();
    const body = (await request.json()) as CommentRequestBody;
    const {author, body: commentBody, post_id} = body;

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

    await db.insert(comments).values({
      author,
      body: commentBody,
      postId: post_id,
      publishedAt: new Date(),
    });

    return new Response(JSON.stringify({success: true}), {status: 200});
  } catch (error) {
    console.error('Error in POST /api/comments.json:', error);
    return new Response(JSON.stringify({error: 'Failed'}), {status: 500});
  }
};

export const GET: APIRoute = async ({request: _request}) => {
  try {
    const db = getDb();
    const url = new URL(_request.url);
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
