import { getPayload } from 'payload';
import config from '../src/payload.config.ts';
import { slugify } from '../src/fields/slug.ts';

/** Rewrites slugs that aren't slug-shaped (editors pasted full URLs -> 404). */
const payload = await getPayload({ config });

for (const [collection, from] of [['teams', 'name'], ['news', 'title']]) {
  const { docs } = await payload.find({ collection, limit: 200, depth: 0 });
  for (const d of docs) {
    if (/^[a-z0-9-]+$/.test(d.slug ?? '')) continue;
    const slug = slugify(String(d[from] ?? ''));
    await payload.update({ collection, id: d.id, data: { slug } });
    console.log(`${collection} ${d.id}: ${JSON.stringify(d.slug)} -> ${slug}`);
  }
}
process.exit(0);
