/**
 * Atlas Data API – HTTPS fallback for Cloudflare Workers.
 *
 * Why this exists: the native MongoDB driver uses TCP via cloudflare:sockets.
 * Atlas Network Access IP whitelisting blocks Workers egress IPs by default,
 * causing `MongoServerSelectionError: Topology.selectServer`. The Data API
 * is HTTPS (fetch) and therefore immune to IP whitelisting.
 *
 * Activate by setting Worker secrets:
 *   wrangler secret put ATLAS_DATA_API_URL    # e.g. https://data.mongodb-api.com/app/<appId>/endpoint/data/v1
 *   wrangler secret put ATLAS_DATA_API_KEY    # Data API key
 *   wrangler secret put ATLAS_DATA_SOURCE     # optional – cluster dataSource name, default "Cluster0"
 *
 * If neither ATLAS_DATA_API_URL nor ATLAS_DATA_API_KEY is set, the driver
 * path (src/db/index.ts) is used. Callers should try the driver first and
 * fall back to this module only on Atlas network errors.
 */

import { COMMENT_COLLECTION } from './schema';
import type { Comment, SerializedComment } from './schema';
import { ObjectId } from 'mongodb';

// ---------------------------------------------------------------------------
// Env helpers – same strategy as src/db/index.ts (cloudflare:workers first)
// ---------------------------------------------------------------------------

async function readEnvValueAsync(key: string): Promise<string | undefined> {
  try {
    const mod = (await import('cloudflare:workers')) as unknown as {
      env?: Record<string, unknown>;
    };
    const maybe = mod?.env?.[key];
    if (typeof maybe === 'string' && maybe.trim() !== '') return maybe.trim();
  } catch {
    // not in Workers runtime
  }

  try {
    const maybe = (globalThis as unknown as { process?: { env?: Record<string, string> } })
      .process?.env?.[key];
    if (typeof maybe === 'string' && maybe.trim() !== '') return maybe.trim();
  } catch {
    // ignore
  }

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

export interface DataApiConfig {
  url: string;
  key: string;
  dataSource: string;
  database: string;
}

export async function getDataApiConfig(): Promise<DataApiConfig | null> {
  const url = await resolveFirstSet(['ATLAS_DATA_API_URL']);
  const key = await resolveFirstSet(['ATLAS_DATA_API_KEY']);

  if (!url || !key) return null;

  const dataSource =
    (await resolveFirstSet(['ATLAS_DATA_SOURCE', 'ATLAS_DATA_API_DATA_SOURCE'])) ?? 'Cluster0';

  // DB name resolution mirrors src/db/index.ts
  let database = await resolveFirstSet(['MONGODB_DB_NAME', 'MONGODB_DB']);
  if (!database) {
    const uri = await resolveFirstSet(['MONGODB_URI']);
    if (uri) {
      try {
        const parsed = new URL(uri.replace('mongodb+srv://', 'https://').replace('mongodb://', 'https://'));
        const pathDb = parsed.pathname.replace(/^\//, '').split('/')[0]?.trim();
        if (pathDb) database = pathDb;
      } catch {
        // ignore
      }
    }
  }
  if (!database) database = 'helltop';

  // Normalize URL – strip trailing slash
  const normalizedUrl = url.replace(/\/+$/, '');

  return { url: normalizedUrl, key, dataSource, database };
}

export async function isDataApiConfigured(): Promise<boolean> {
  const cfg = await getDataApiConfig();
  return cfg !== null;
}

// ---------------------------------------------------------------------------
// Low-level fetch helper
// ---------------------------------------------------------------------------

async function dataApiFetch(
  cfg: DataApiConfig,
  action: string,
  body: Record<string, unknown>,
): Promise<unknown> {
  const endpoint = `${cfg.url}/action/${action}`;
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': cfg.key,
      Accept: 'application/json',
    },
    body: JSON.stringify({
      dataSource: cfg.dataSource,
      database: cfg.database,
      collection: COMMENT_COLLECTION,
      ...body,
    }),
  });

  const text = await res.text();
  let json: unknown;
  try {
    json = text ? JSON.parse(text) : {};
  } catch {
    throw new Error(`Atlas Data API ${action} returned non-JSON: ${text.slice(0, 500)}`);
  }

  if (!res.ok) {
    throw new Error(
      `Atlas Data API ${action} failed (${res.status}): ${typeof json === 'object' && json !== null && 'error' in json ? String((json as { error: unknown }).error) : text.slice(0, 500)}`,
    );
  }

  return json;
}

// ---------------------------------------------------------------------------
// Comment operations via Data API
// ---------------------------------------------------------------------------

export interface DataApiDocument {
  _id: { $oid: string } | string;
  author: string;
  body: string;
  postId: string;
  parentId: { $oid: string } | string | null;
  publishedAt: { $date: string } | string | Date;
}

function normalizeDataApiDoc(raw: DataApiDocument): SerializedComment {
  const id = typeof raw._id === 'string' ? raw._id : raw._id.$oid;
  const parentId = raw.parentId
    ? typeof raw.parentId === 'string'
      ? raw.parentId
      : (raw.parentId as { $oid: string }).$oid
    : null;

  let publishedAt: Date;
  if (raw.publishedAt instanceof Date) publishedAt = raw.publishedAt;
  else if (typeof raw.publishedAt === 'string') publishedAt = new Date(raw.publishedAt);
  else if (raw.publishedAt && typeof raw.publishedAt === 'object' && '$date' in raw.publishedAt)
    publishedAt = new Date((raw.publishedAt as { $date: string }).$date);
  else publishedAt = new Date();

  return {
    id,
    _id: id,
    author: raw.author,
    body: raw.body,
    postId: raw.postId,
    parentId,
    publishedAt,
  };
}

export async function dataApiFindComments(filter: Record<string, unknown> = {}): Promise<SerializedComment[]> {
  const cfg = await getDataApiConfig();
  if (!cfg) throw new Error('Atlas Data API not configured – set ATLAS_DATA_API_URL and ATLAS_DATA_API_KEY');

  // Translate simple postId filter to Data API filter; Data API uses EJSON
  const dataApiFilter: Record<string, unknown> = { ...filter };

  const result = (await dataApiFetch(cfg, 'find', {
    filter: dataApiFilter,
    sort: { publishedAt: -1 },
    limit: 1000,
  })) as { documents?: DataApiDocument[] };

  const docs = result.documents ?? [];
  return docs.map(normalizeDataApiDoc);
}

export async function dataApiInsertComment(doc: Omit<Comment, '_id'> & { _id?: ObjectId }): Promise<string> {
  const cfg = await getDataApiConfig();
  if (!cfg) throw new Error('Atlas Data API not configured – set ATLAS_DATA_API_URL and ATLAS_DATA_API_KEY');

  const payload: Record<string, unknown> = {
    document: {
      author: doc.author,
      body: doc.body,
      postId: doc.postId,
      parentId: doc.parentId ? { $oid: doc.parentId.toString() } : null,
      publishedAt: { $date: doc.publishedAt.toISOString() },
    },
  };

  const result = (await dataApiFetch(cfg, 'insertOne', payload)) as { insertedId?: string };

  return result.insertedId ?? new ObjectId().toString();
}

export async function dataApiDeleteManyByIds(ids: string[]): Promise<number> {
  const cfg = await getDataApiConfig();
  if (!cfg) throw new Error('Atlas Data API not configured');

  if (ids.length === 0) return 0;

  const objectIds = ids.map((id) => ({ $oid: id }));
  const result = (await dataApiFetch(cfg, 'deleteMany', {
    filter: { _id: { $in: objectIds } },
  })) as { deletedCount?: number };

  return result.deletedCount ?? 0;
}

export async function dataApiDeleteOneById(id: string): Promise<boolean> {
  const cfg = await getDataApiConfig();
  if (!cfg) throw new Error('Atlas Data API not configured');

  const result = (await dataApiFetch(cfg, 'deleteOne', {
    filter: { _id: { $oid: id } },
  })) as { deletedCount?: number };

  return (result.deletedCount ?? 0) > 0;
}
