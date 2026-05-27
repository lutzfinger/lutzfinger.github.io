import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '~/consts';

export async function GET(context: { site?: URL }) {
  const posts = (await getCollection('writing'))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .slice(0, 100);

  return rss({
    title: `${SITE.author}, Writing`,
    description: 'Articles by Lutz Finger, Forbes column, LinkedIn pieces, and elsewhere.',
    site: context.site ?? SITE.url,
    items: posts.map(p => ({
      title: `[${p.data.source}] ${p.data.title}`,
      pubDate: p.data.date,
      description: p.data.excerpt ?? '',
      link: p.data.url ?? `/writing/${p.id}/`,
      categories: p.data.tags,
    })),
    customData: `<language>en-us</language>`,
  });
}
