import { ObjectId } from 'mongodb';

/**
 * MongoDB collection name for comments.
 */
export const COMMENT_COLLECTION = 'comments' as const;

/**
 * Comment document as stored in MongoDB.
 * _id is the native ObjectId, parentId is ObjectId | null, publishedAt is a Date.
 */
export interface Comment {
  _id: ObjectId;
  author: string;
  body: string;
  postId: string;
  parentId: ObjectId | null;
  publishedAt: Date;
}

/**
 * Shape for inserting a new comment ( _id auto-generated ).
 */
export type NewComment = Omit<Comment, '_id'>;

/**
 * Serialized comment sent to / returned from the API and used in Astro components.
 * ObjectIds are stringified so the frontend can treat `id` as an opaque string.
 * `publishedAt` stays a Date internally; JSON serialization converts it to ISO string.
 */
export interface SerializedComment {
  id: string;
  _id: string;
  author: string;
  body: string;
  postId: string;
  parentId: string | null;
  publishedAt: Date;
  replies?: SerializedComment[];
}

/**
 * Convert a raw Mongo Comment doc into a SerializedComment with string ids.
 * Pure – does not mutate input.
 */
export function serializeComment(doc: Comment): SerializedComment {
  return {
    id: doc._id.toString(),
    _id: doc._id.toString(),
    author: doc.author,
    body: doc.body,
    postId: doc.postId,
    parentId: doc.parentId ? doc.parentId.toString() : null,
    publishedAt: doc.publishedAt,
  };
}

/**
 * Validate and parse a string into an ObjectId.
 * Fails loud on invalid input – caller should translate to 400.
 */
export function toObjectId(id: string): ObjectId {
  if (!ObjectId.isValid(id)) {
    throw new Error(`Invalid ObjectId: "${id}"`);
  }
  return new ObjectId(id);
}

/**
 * Wrapper around ObjectId.isValid for ergonomic imports.
 */
export function isValidObjectId(id: string): boolean {
  return ObjectId.isValid(id);
}

/**
 * Validate the shape of an incoming comment payload at the API boundary.
 * Returns a typed result or throws with a descriptive message (Fail Fast).
 */
export function parseNewCommentInput(input: {
  author?: unknown;
  body?: unknown;
  postId?: unknown;
  parentId?: unknown;
}): Omit<NewComment, 'publishedAt'> & { publishedAt?: Date } {
  if (typeof input.author !== 'string' || input.author.trim() === '') {
    throw new Error('author is required and must be a non-empty string');
  }
  if (typeof input.body !== 'string' || input.body.trim() === '') {
    throw new Error('body is required and must be a non-empty string');
  }
  if (typeof input.postId !== 'string' || input.postId.trim() === '') {
    throw new Error('postId is required and must be a non-empty string');
  }

  let parentId: ObjectId | null = null;
  if (input.parentId !== undefined && input.parentId !== null && input.parentId !== '') {
    const raw = String(input.parentId);
    if (!ObjectId.isValid(raw)) {
      throw new Error(`parentId is not a valid ObjectId: "${raw}"`);
    }
    parentId = new ObjectId(raw);
  }

  return {
    author: input.author.trim(),
    body: input.body.trim(),
    postId: input.postId.trim(),
    parentId,
  };
}
