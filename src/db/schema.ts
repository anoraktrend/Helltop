import {sqliteTable, text, integer} from 'drizzle-orm/sqlite-core';

export const comments = sqliteTable('comments', {
  id: integer('id').primaryKey(),
  author: text('author').notNull(),
  body: text('body').notNull(),
  postId: text('post_id').notNull(),
  parentId: integer('parent_id'),
  publishedAt: integer('published_at', {mode: 'timestamp'})
    .notNull()
    .$defaultFn(() => new Date()),
});

export type Comment = typeof comments.$inferSelect;
export type NewComment = typeof comments.$inferInsert;
