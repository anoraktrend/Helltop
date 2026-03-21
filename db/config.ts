import { defineDb, defineTable, column, NOW } from 'astro:db';

const Comment = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    author: column.text(),
    body: column.text(),
    postId: column.text(),
    publishedAt: column.date({ default: NOW }),
  }
});

// https://astro.build/db/config
export default defineDb({
  tables: { Comment }
});
