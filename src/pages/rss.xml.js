import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../config';

export async function GET(context) {
  const letters = (await getCollection('letters', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.number - a.data.number
  );
  return rss({
    title: SITE.newsletterName,
    description: SITE.description,
    site: context.site,
    items: letters.map((l) => ({
      title: `No. ${String(l.data.number).padStart(3, '0')} · ${l.data.title}`,
      pubDate: l.data.date,
      description: l.data.summary,
      link: `/letters/${l.id}/`
    }))
  });
}
