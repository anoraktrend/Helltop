import rss from '@astrojs/rss';
import {getCollection} from 'astro:content';
import {sanitizeHtml} from '../utils/sanitize';

export async function GET(context: {site: URL}) {
  const posts = await getCollection('blog', ({data}) => !data.draft);
  const sorted = posts.sort((a, b) => {
    const da = a.data.date?.getTime() ?? 0;
    const db = b.data.date?.getTime() ?? 0;
    return db - da;
  });
  const site = (context.site.toString().replace(/\/$/, ''));

  function absUrl(val: string | undefined) {
    return val?.startsWith('/') ? site + val : val ?? '';
  }

  return rss({
    title: 'Helltop | My Digital Rebellion',
    description: 'Fuck the corporate cloud. Build your own.',
    site,
    items: sorted.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date ?? new Date(),
      description: post.data.description,
      link: `/blog/${post.data.slug}`,
      content: sanitizeHtml(post.rendered?.html ?? post.data.description ?? '', {
        a: (a) => ({...a, href: absUrl(a.href)}),
        img: (a) => ({...a, src: absUrl(a.src)}),
      }),
    })),
  });
}
