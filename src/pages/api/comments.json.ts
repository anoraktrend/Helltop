import type { APIRoute } from 'astro';
import { getCommentsCollection } from '../../db';
import { ObjectId } from 'mongodb';
import { serializeComment } from '../../db/schema';
import { isAdmin } from '../../utils/admin';
import { getKv } from '../../utils/env';
import { checkRateLimit, getClientIp, type RateLimitResult } from '../../utils/rateLimit';

const MAX_BULK_DELETE = 500;

// Comment spam protection: burst of 5, sustained ~12/min per IP
const COMMENT_LIMIT = { capacity: 5, refillPerSecond: 0.2, ttlSeconds: 60 } as const;

interface CommentRequestBody {
  author: string;
  body: string;
  post_id: string;
  parent_id?: string | number | null;
}

function rateLimitHeaders(rl: RateLimitResult): Record<string, string> {
  return {
    'X-RateLimit-Limit': String(COMMENT_LIMIT.capacity),
    'X-RateLimit-Remaining': String(rl.remaining),
    ...(rl.retryAfter ? { 'Retry-After': String(rl.retryAfter) } : {}),
  };
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const rateLimit = await checkRateLimit(
      getKv('RATE_LIMIT'),
      `comment:${getClientIp(request)}`,
      COMMENT_LIMIT,
    );

    if (!rateLimit.allowed) {
      return new Response(
        JSON.stringify({
          error: 'Rate limit exceeded. Please try again later.',
          retryAfter: rateLimit.retryAfter,
        }),
        { status: 429, headers: rateLimitHeaders(rateLimit) },
      );
    }

    const body = (await request.json()) as CommentRequestBody;
    const { author, body: commentBody, post_id, parent_id } = body;

    if (!author || !commentBody || !post_id) {
      console.error('Missing fields in comment submission:', {
        author,
        commentBody,
        post_id,
      });
      return new Response(
        JSON.stringify({
          error: 'Missing fields',
          received: { author, commentBody, post_id },
        }),
        { status: 400, headers: rateLimitHeaders(rateLimit) },
      );
    }

    // Parse parentId – accept string ObjectId or legacy number? Only ObjectId is valid now.
    let parentObjectId: ObjectId | null = null;
    if (parent_id !== undefined && parent_id !== null && String(parent_id).trim() !== '') {
      const raw = String(parent_id).trim();
      if (!ObjectId.isValid(raw)) {
        return new Response(JSON.stringify({ error: 'Invalid parent_id format' }), {
          status: 400,
          headers: rateLimitHeaders(rateLimit),
        });
      }
      parentObjectId = new ObjectId(raw);
    }

    const collection = await getCommentsCollection();
    await collection.insertOne({
      author: String(author).trim(),
      body: String(commentBody).trim(),
      postId: String(post_id).trim(),
      parentId: parentObjectId,
      publishedAt: new Date(),
    } as never);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: rateLimitHeaders(rateLimit),
    });
  } catch (error) {
    console.error('Error in POST /api/comments.json:', error);
    return new Response(JSON.stringify({ error: 'Failed' }), { status: 500 });
  }
};

export const DELETE: APIRoute = async ({ request, cookies }) => {
  try {
    if (!(await isAdmin(cookies))) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    const body = (await request.json().catch(() => null)) as { ids?: unknown } | null;

    if (!body || !Array.isArray(body.ids) || body.ids.length === 0) {
      return new Response(JSON.stringify({ error: 'Comment IDs are required' }), {
        status: 400,
      });
    }

    // Parse, dedupe and validate as ObjectId strings
    const rawIds = [...new Set(body.ids.map((id) => String(id).trim()).filter(Boolean))];
    const validIds = rawIds.filter((id) => ObjectId.isValid(id));

    if (validIds.length === 0) {
      return new Response(JSON.stringify({ error: 'Invalid ID format' }), {
        status: 400,
      });
    }

    if (validIds.length > MAX_BULK_DELETE) {
      return new Response(JSON.stringify({ error: 'Too many comment IDs' }), {
        status: 413,
      });
    }

    const collection = await getCommentsCollection();
    const objectIds = validIds.map((id) => new ObjectId(id));
    await collection.deleteMany({ _id: { $in: objectIds } } as never);

    return new Response(JSON.stringify({ success: true, deleted: validIds.length }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error in DELETE /api/comments.json:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    });
  }
};

export const GET: APIRoute = async ({ request }) => {
  try {
    const collection = await getCommentsCollection();
    const url = new URL(request.url);
    const postId = url.searchParams.get('postId');

    const filter = postId ? { postId } : {};

    const docs = await collection.find(filter).sort({ publishedAt: -1 }).toArray();
    const serialized = docs.map(serializeComment);

    return new Response(JSON.stringify(serialized), { status: 200 });
  } catch (error) {
    console.error('Error in GET /api/comments.json:', error);
    return new Response(JSON.stringify({ error: 'Failed' }), { status: 500 });
  }
};
