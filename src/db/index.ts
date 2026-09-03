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

async function createClient(): Promise<MongoClient> {
  const uri = await resolveMongoUri();
  const client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 8000,
    // Cloudflare Workers outbound TCP can have higher latency via proxy;
    // 8s balances user experience vs Atlas handshake time.
  });
  return client.connect();
}

function getMongoClientPromise(): Promise<MongoClient> {
  if (globalThis.__mongoClientPromise) return globalThis.__mongoClientPromise;

  const promise = createClient().then((connected) => {
    globalThis.__mongoClient = connected;
    return connected;
  });

  promise.catch(() => {
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
