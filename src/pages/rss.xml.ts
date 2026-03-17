import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const blog = await getCollection('blog');
  return rss({
    title: 'Helltop | My Digital Rebellion',
    description: 'Fuck the corporate cloud. Build your own.',
    site: context.site || 'https://helltop.net',
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date ? new Date(post.data.date) : new Date(),
      description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
  });
}
