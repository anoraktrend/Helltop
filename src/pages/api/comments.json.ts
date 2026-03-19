import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const db = (locals as any).runtime?.env?.DB;
    if (!db) {
      return new Response(JSON.stringify({ error: 'Database not available' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const body = await request.json();
    const { author, body: commentBody, post_id } = body;

    if (!author || !commentBody || !post_id) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const result = await db.prepare(
      'INSERT INTO Comment (author, body, postId, publishedAt) VALUES (?, ?, ?, ?)'
    ).bind(author, commentBody, post_id, new Date().toISOString()).run();

    return new Response(JSON.stringify({ 
      success: true, 
      id: result.meta.last_row_id 
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

export const GET: APIRoute = async ({ request, locals }) => {
  try {
    const db = (locals as any).runtime?.env?.DB;
    if (!db) {
      return new Response(JSON.stringify({ error: 'Database not available' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const url = new URL(request.url);
    const post_id = url.searchParams.get('post_id');
    
    if (!post_id) {
      return new Response(JSON.stringify({ error: 'Missing post_id' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const { results } = await db.prepare(
      'SELECT * FROM Comment WHERE postId = ? ORDER BY publishedAt DESC'
    ).bind(post_id).all();

    return new Response(JSON.stringify(results || []), {
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
