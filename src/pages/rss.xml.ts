import rss from '@astrojs/rss';
import { getCollection, render } from 'astro:content';
import sanitizeHtml from 'sanitize-html';

interface BlogPost {
  data: {
    title: string;
    description?: string;
    date?: string;
    slug: string;
  };
  body: Awaited<ReturnType<typeof render>>;
}

export async function GET() {
  const blog = await getCollection('blog', ({ data }) => {
    return (data as { draft?: boolean }).draft !== true;
  });

  // Sort posts by date (newest first)
  const sortedPosts: BlogPost[] = blog.sort((a, b) => {
    const dateA = a.data.date ? new Date(a.data.date.toString()).getTime() : 0;
    const dateB = b.data.date ? new Date(b.data.date.toString()).getTime() : 0;
    return dateB - dateA;
  });

  const site = import.meta.env.SITE || 'https://helltop.net';

  return rss({
    title: 'Helltop | My Digital Rebellion',
    description: 'Fuck the corporate cloud. Build your own.',
    site: site,
    items: sortedPosts.map((post) => {
      const htmlContent = post.body.content || sanitizeHtml(post.data.description || '');
      return {
        title: post.data.title,
        pubDate: post.data.date ? new Date(post.data.date.toString()) : new Date(),
        description: post.data.description,
        link: `/blog/${post.data.slug}`,
        content: sanitizeHtml(htmlContent),
      };
    }),
  });
}
