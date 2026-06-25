/**
 * Parses each news item's Lithuanian text date (e.g. "2025 m. liepos 10 d."
 * or "2025 m. lapkritis") into the real `publishedAt` date field.
 *
 * Run: node --env-file=.env.local --import tsx scripts/migrate-news-dates.ts
 */
import { getPayload } from 'payload';
import config from '../src/payload.config';

// Match by stem so both genitive ("liepos") and nominative ("liepa") forms work.
const MONTHS: [RegExp, number][] = [
  [/saus/i, 0], [/vasar/i, 1], [/kov/i, 2], [/baland/i, 3],
  [/geguž/i, 4], [/biržel/i, 5], [/liep/i, 6], [/rugpj/i, 7],
  [/rugsėj/i, 8], [/spal/i, 9], [/lapkri/i, 10], [/gruod/i, 11],
];

function parseLtDate(s: string): Date | null {
  if (!s) return null;
  const yearM = s.match(/\b(20\d{2})\b/);
  if (!yearM) return null;
  const year = Number(yearM[1]);
  const month = MONTHS.find(([re]) => re.test(s))?.[1] ?? 0;
  const dayM = s.match(/(\d{1,2})\s*d\./);
  const day = dayM ? Number(dayM[1]) : 1;
  // Midday UTC avoids timezone roll-over to the previous day.
  return new Date(Date.UTC(year, month, day, 12, 0, 0));
}

const run = async () => {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({ collection: 'news', limit: 200, depth: 0 });

  let updated = 0;
  for (const n of docs) {
    if (n.publishedAt) continue; // already migrated
    const parsed = parseLtDate(n.date ?? '');
    if (!parsed) {
      console.warn(`  ⚠️  could not parse date for "${n.title}": ${n.date}`);
      continue;
    }
    await payload.update({
      collection: 'news',
      id: n.id,
      data: { publishedAt: parsed.toISOString() },
    });
    console.log(`  ✓ ${n.title} → ${parsed.toISOString().slice(0, 10)}`);
    updated++;
  }
  console.log(`\n✅ Migrated ${updated} news dates.`);
  process.exit(0);
};

run().catch((err) => {
  console.error('❌ migrate-news-dates failed:', err);
  process.exit(1);
});
