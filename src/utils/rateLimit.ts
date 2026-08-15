export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  retryAfter?: number;
}

export interface RateLimitOptions {
  capacity: number;
  refillPerSecond: number;
  ttlSeconds?: number;
}

interface Bucket {
  tokens: number;
  last: number;
}

// Token bucket backed by Cloudflare KV. The bucket auto-expires after ttlSeconds
// of inactivity so keys never leak. KV read-modify-write is not atomic, so under
// extreme concurrent bursts the limit is approximate — fine for spam protection.
export async function checkRateLimit(
  kv: KVNamespace | undefined,
  key: string,
  { capacity, refillPerSecond, ttlSeconds = 60 }: RateLimitOptions,
): Promise<RateLimitResult> {
  if (!kv) {
    return { allowed: true, remaining: capacity };
  }

  const now = Date.now() / 1000;
  const stored = await kv.get(key, 'text');

  let bucket: Bucket = { tokens: capacity, last: now };
  if (stored) {
    try {
      const parsed = JSON.parse(stored) as Bucket;
      if (Number.isFinite(parsed.tokens) && Number.isFinite(parsed.last)) {
        bucket = parsed;
      }
    } catch {
      // corrupt bucket entry — fall back to a fresh one
    }
  }

  const elapsed = Math.max(0, now - bucket.last);
  bucket.tokens = Math.min(capacity, bucket.tokens + elapsed * refillPerSecond);
  bucket.last = now;

  const remaining = Math.max(0, Math.floor(bucket.tokens));

  if (bucket.tokens >= 1) {
    bucket.tokens -= 1;
    await kv.put(key, JSON.stringify(bucket), { expirationTtl: ttlSeconds });
    return { allowed: true, remaining: Math.max(0, Math.floor(bucket.tokens)) };
  }

  await kv.put(key, JSON.stringify(bucket), { expirationTtl: ttlSeconds });
  return {
    allowed: false,
    remaining,
    retryAfter: Math.max(1, Math.ceil((1 - bucket.tokens) / refillPerSecond)),
  };
}

export function getClientIp(request: Request): string {
  return (
    request.headers.get('CF-Connecting-IP') ??
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    'unknown'
  );
}
