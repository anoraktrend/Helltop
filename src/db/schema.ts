import {sqliteTable, text, integer} from 'drizzle-orm/sqlite-core';

export const comments = sqliteTable('comments', {
  id: integer('id').primaryKey({autoIncrement: true}),
  author: text('author').notNull(),
  body: text('body').notNull(),
  postId: text('post_id').notNull(),
  publishedAt: integer('published_at', {mode: 'timestamp'})
    .notNull()
    .$defaultFn(() => new Date()),
});

export type Comment = typeof comments.$inferSelect;
export type NewComment = typeof comments.$inferInsert;
