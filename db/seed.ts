import { db, Comment } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Comment).values([
    { author: 'Lucy', body: 'Welcome to the new digital rebellion!', postId: 'AEE' },
    { author: 'Anon', body: 'Great post on editor preservation.', postId: 'AEE' },
  ]);
}
