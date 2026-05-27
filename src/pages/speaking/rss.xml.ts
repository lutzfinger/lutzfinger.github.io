import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '~/consts';

export async function GET(context: { site?: URL }) {
  const now = Date.now();
  const events = (await getCollection('events'))
    .filter(e => e.data.status !== 'past' && e.data.date.getTime() >= now)
    .sort((a, b) => a.data.date.getTime() - b.data.date.getTime());

  return rss({
    title: `${SITE.author} — Speaking`,
    description: 'Upcoming keynotes, workshops, and conference sessions with Lutz Finger.',
    site: context.site ?? SITE.url,
    items: events.map(e => ({
      title: `[${e.data.tag}] ${e.data.title}`,
      pubDate: e.data.date,
      description: e.data.description ?? '',
      link: e.data.url ?? `/speaking/${e.id}/`,
      categories: [e.data.tag],
    })),
    customData: `<language>en-us</language>`,
  });
}
