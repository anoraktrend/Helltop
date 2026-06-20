import rss from '@astrojs/rss';
import {getCollection} from 'astro:content';
import sanitizeHtml from 'sanitize-html';

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
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
        transformTags: {
          a: (_, a) => ({tagName: 'a', attribs: {...a, href: absUrl(a.href)}}),
          img: (_, a) => ({tagName: 'img', attribs: {...a, src: absUrl(a.src)}}),
        },
      }),
    })),
  });
}
