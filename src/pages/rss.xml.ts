import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const blog = await getCollection('blog', ({ data }) => {
    return data.draft !== true;
  });

  // Sort posts by date (newest first)
  const sortedPosts = blog.sort((a, b) => {
    const dateA = a.data.date ? new Date(a.data.date).getTime() : 0;
    const dateB = b.data.date ? new Date(b.data.date).getTime() : 0;
    return dateB - dateA;
  });

  const site = context.site || import.meta.env.SITE || 'https://helltop.net';

  return rss({
    title: 'Helltop | My Digital Rebellion',
    description: 'Fuck the corporate cloud. Build your own.',
    site: site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date ? new Date(post.data.date) : new Date(),
      description: post.data.description,
      link: `/blog/${post.id}`,
      // Concatenate sections into a single content block for the RSS feed
      content: post.data.sections ? post.data.sections.map(s => `<h2>${s.title}</h2><p>${s.content}</p>`).join('') : '',
    })),
    customData: `<language>en-us</language>`,
  });
}
