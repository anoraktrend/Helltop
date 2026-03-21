import type { APIRoute } from 'astro';
// import { db, Comment, eq, desc } from 'astro:db';

export const POST: APIRoute = async ({ request: _request }) => {
  try {
    return new Response(JSON.stringify({ message: 'Disabled' }), { status: 200 });
    /*
    const body = await request.json();
    const { author, body: commentBody, post_id } = body;
    // ...
    */
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed' }), { status: 500 });
  }
};

export const GET: APIRoute = async ({ request: _request }) => {
  return new Response(JSON.stringify([]), { status: 200 });
};

