import { MongoClient, Db, Collection, ObjectId } from 'mongodb';
import type { Comment } from './schema';
import { COMMENT_COLLECTION } from './schema';

// Re-export helpers for convenience so consumers have a single import surface.
export { ObjectId };

export function toObjectId(id: string): ObjectId {
  if (!ObjectId.isValid(id)) throw new Error(`Invalid ObjectId: "${id}"`);
  return new ObjectId(id);
}

export function isValidObjectId(id: string): boolean {
  return ObjectId.isValid(id);
}

// ---------------------------------------------------------------------------
// Connection caching – critical for Cloudflare Workers (avoid cold-start thrash
// and respect connection limits). Also handles HMR in dev via globalThis.
// ---------------------------------------------------------------------------

declare global {
  // eslint-disable-next-line no-var
  var __mongoClientPromise: Promise<MongoClient> | undefined;
  // eslint-disable-next-line no-var
  var __mongoClient: MongoClient | undefined;
}

// ---------------------------------------------------------------------------
// Env resolution helpers – normalized to support both MONGODB_DB_NAME (primary
// per user spec) and MONGODB_DB (legacy fallback) across all runtimes.
// ---------------------------------------------------------------------------

async function readEnvValueAsync(key: string): Promise<string | undefined> {
  // 1) Cloudflare Workers env (primary in production)
  try {
    const mod = (await import('cloudflare:workers')) as unknown as {
      env?: Record<string, unknown>;
    };
    const maybe = mod?.env?.[key];
    if (typeof maybe === 'string' && maybe.trim() !== '') return maybe.trim();
  } catch {
    // not in Workers runtime – fall through
  }

  // 2) Node / Wrangler process.env
  try {
    const maybe = (globalThis as unknown as { process?: { env?: Record<string, string> } })
      .process?.env?.[key];
    if (typeof maybe === 'string' && maybe.trim() !== '') return maybe.trim();
  } catch {
    // ignore
  }

  // 3) Vite / Astro import.meta.env (local dev only – guarded by DEV to avoid
  // baking secrets into production bundles). In production, secrets must come
  // from Worker bindings via cloudflare:workers env above.
  if ((import.meta as unknown as { env?: Record<string, unknown> }).env?.DEV) {
    try {
      const maybe = (import.meta as unknown as { env?: Record<string, string> }).env?.[key];
      if (typeof maybe === 'string' && maybe.trim() !== '') return maybe.trim();
    } catch {
      // ignore
    }
  }

  return undefined;
}

async function resolveFirstSet(keys: string[]): Promise<string | undefined> {
  for (const key of keys) {
    const val = await readEnvValueAsync(key);
    if (val) return val;
  }
  return undefined;
}

async function resolveMongoUri(): Promise<string> {
  const uri = await resolveFirstSet(['MONGODB_URI']);
  if (uri) return uri;

  throw new Error(
    'MONGODB_URI is not set. Set it as a Worker secret via `wrangler secret put MONGODB_URI` ' +
      'or add MONGODB_URI to your .env / .dev.vars for local development.',
  );
}

async function resolveDbName(): Promise<string> {
  // Normalized: MONGODB_DB_NAME is primary, MONGODB_DB is legacy fallback.
  // Default to 'helltop' when neither is set, so a bare URI like
  // mongodb+srv://...@cluster.net (no trailing /db) still resolves correctly.
  const fromEnv = await resolveFirstSet(['MONGODB_DB_NAME', 'MONGODB_DB']);
  if (fromEnv) return fromEnv;

  // Try to extract DB name embedded in the URI path (e.g. .../helltop?retryWrites=...)
  try {
    const uri = await resolveFirstSet(['MONGODB_URI']);
    if (uri) {
      const url = new URL(uri.replace('mongodb+srv://', 'https://').replace('mongodb://', 'https://'));
      const pathDb = url.pathname.replace(/^\//, '').split('/')[0]?.trim();
      if (pathDb) return pathDb;
    }
  } catch {
    // ignore URL parse failures
  }

  return 'helltop';
}

// ---------------------------------------------------------------------------
// Atlas Network Access error helpers – surface actionable 503 instead of generic 500
// ---------------------------------------------------------------------------

export const ATLAS_NETWORK_ERROR_PAYLOAD = {
  error: 'Database temporarily unavailable - Atlas IP whitelist needs 0.0.0.0/0',
  code: 'ATLAS_NETWORK_ACCESS' as const,
  hint: 'Atlas Network Access is blocking Cloudflare Workers egress IPs. Fix: https://cloud.mongodb.com -> Project statusdb -> Network Access -> Add IP Address -> Allow Access From Anywhere (0.0.0.0/0) -> Confirm -> Wait 2-3 mins. Alternative: enable Atlas Data API (ATLAS_DATA_API_URL + ATLAS_DATA_API_KEY) for HTTPS access with no IP whitelist.',
} as const;

export function isAtlasNetworkError(error: unknown): boolean {
  if (!error || typeof error !== 'object') return false;
  const err = error as Record<string, unknown>;
  const name = typeof err.name === 'string' ? err.name : '';
  const code = typeof err.code === 'string' ? err.code : '';
  const message = typeof err.message === 'string' ? err.message : String(error);
  const haystack = `${name} ${code} ${message}`.toLowerCase();

  // Primary: MongoServerSelectionError / Topology.selectServer – the exact production failure
  if (name === 'MongoServerSelectionError') return true;
  if (haystack.includes('mongoserverselectionerror')) return true;
  if (haystack.includes('topology.selectserver')) return true;
  if (haystack.includes('topologydescription')) return true;
  if (haystack.includes('server selection timed out')) return true;
  if (haystack.includes('server selection error')) return true;
  // Atlas IP whitelist produces connection timeout / closed before handshake
  if (haystack.includes('connection <monitor> closing')) return true;
  if (haystack.includes('mongodb') && haystack.includes('timed out') && haystack.includes('server selection')) return true;
  return false;
}

// Alias kept for consumers that import the more explicit name
export const isAtlasNetworkAccessError = isAtlasNetworkError;

export function logAtlasNetworkError(error: unknown, context: string): void {
  console.error(
    `[Atlas Network Access] ${context}: Workers egress IP blocked by Atlas Network Access. ` +
      `Atlas is whitelisting only dev IP; Cloudflare Workers have dynamic egress IPs. ` +
      `Fix: https://cloud.mongodb.com -> Project statusdb (cluster statusdb.k4c1r06.mongodb.net) -> Network Access -> Add IP Address -> Allow Access From Anywhere (0.0.0.0/0) -> Confirm -> wait 2-3 mins. ` +
      `Alternative: set ATLAS_DATA_API_URL + ATLAS_DATA_API_KEY to use Atlas Data API over HTTPS (no IP whitelist). ` +
      `Original error:`,
    error,
  );
}

export function toAtlasNetworkErrorResponse(): Response {
  return new Response(JSON.stringify(ATLAS_NETWORK_ERROR_PAYLOAD), {
    status: 503,
    headers: { 'Content-Type': 'application/json', 'Retry-After': '60' },
  });
}

async function createClient(): Promise<MongoClient> {
  const uri = await resolveMongoUri();
  const client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 8000,
    // Cloudflare Workers outbound TCP can have higher latency via proxy;
    // 8s balances user experience vs Atlas handshake time.
  });
  try {
    return await client.connect();
  } catch (error) {
    if (isAtlasNetworkError(error)) {
      logAtlasNetworkError(error, 'createClient.connect');
    }
    throw error;
  }
}

function getMongoClientPromise(): Promise<MongoClient> {
  if (globalThis.__mongoClientPromise) return globalThis.__mongoClientPromise;

  const promise = createClient().then((connected) => {
    globalThis.__mongoClient = connected;
    return connected;
  });

  promise.catch((error: unknown) => {
    if (isAtlasNetworkError(error)) {
      logAtlasNetworkError(error, 'getMongoClientPromise');
    }
    if (globalThis.__mongoClientPromise === promise) {
      globalThis.__mongoClientPromise = undefined;
    }
  });

  globalThis.__mongoClientPromise = promise;
  return promise;
}

export async function getMongoClient(): Promise<MongoClient> {
  return getMongoClientPromise();
}

export async function getDb(): Promise<Db> {
  const client = await getMongoClientPromise();
  const dbName = await resolveDbName();
  return client.db(dbName);
}

export async function getCommentsCollection(): Promise<Collection<Comment>> {
  const db = await getDb();
  return db.collection<Comment>(COMMENT_COLLECTION);
}
