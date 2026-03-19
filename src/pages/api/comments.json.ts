import type { APIRoute } from 'astro';
import { db, Comment, eq, desc } from 'astro:db';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { author, body: commentBody, post_id } = body;

    if (!author || !commentBody || !post_id) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const result = await db.insert(Comment).values({
      author,
      body: commentBody,
      postId: post_id,
    }).returning();

    return new Response(JSON.stringify({ 
      success: true, 
      id: result[0].id 
    }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error creating comment:', error);
    return new Response(JSON.stringify({ error: 'Failed to create comment' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const post_id = url.searchParams.get('post_id');
    
    if (!post_id) {
      return new Response(JSON.stringify({ error: 'Missing post_id' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const comments = await db.select()
      .from(Comment)
      .where(eq(Comment.postId, post_id))
      .orderBy(desc(Comment.publishedAt));

    return new Response(JSON.stringify(comments || []), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error fetching comments:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch comments' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
