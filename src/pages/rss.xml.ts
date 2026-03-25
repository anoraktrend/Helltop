import rss from '@astrojs/rss';
import { getCollection, type CollectionEntry } from 'astro:content';
import sanitizeHtml from 'sanitize-html';

export async function GET(context: { site: URL }) {
  const blog = await getCollection('blog', ({ data }: CollectionEntry<'blog'>) => {
    return data.draft !== true;
  });

  // Sort posts by date (newest first)
  const sortedPosts = blog.sort((a: CollectionEntry<'blog'>, b: CollectionEntry<'blog'>) => {
    const dateA = a.data.date ? new Date(a.data.date).getTime() : 0;
    const dateB = b.data.date ? new Date(b.data.date).getTime() : 0;
    return dateB - dateA;
  });

  const site = (context.site ? context.site.toString() : 'https://helltop.net').replace(/\/$/, '');

  return rss({
    title: 'Helltop | My Digital Rebellion',
    description: 'Fuck the corporate cloud. Build your own.',
    site: site,
    items: sortedPosts.map((post: CollectionEntry<'blog'> & { rendered?: { html: string } }) => {
      // Use post.rendered.html if available (Astro 5+ Content Layer)
      // Fallback to description if no rendered content exists
      const htmlContent = post.rendered?.html || sanitizeHtml(post.data.description || '');
      
      return {
        title: post.data.title,
        pubDate: post.data.date ? new Date(post.data.date) : new Date(),
        description: post.data.description,
        link: `/blog/${post.data.slug}`,
        content: sanitizeHtml(htmlContent, {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
          transformTags: {
            'a': (tagName: string, attribs: Record<string, string>) => {
              if (attribs.href && attribs.href.startsWith('/')) {
                attribs.href = site + attribs.href;
              }
              return { tagName, attribs };
            },
            'img': (tagName: string, attribs: Record<string, string>) => {
              if (attribs.src && attribs.src.startsWith('/')) {
                attribs.src = site + attribs.src;
              }
              return { tagName, attribs };
            }
          }
        }),
      };
    }),
  });
}
