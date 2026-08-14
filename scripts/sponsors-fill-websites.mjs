import pg from 'pg';

/**
 * Fills the `website` column on the sponsors table so the logos become links
 * (see SponsorsRow.tsx — it only wraps the logo in an <a> when website is set).
 *
 * Each URL below was verified to return HTTP 200 before being added. "Veri Beri"
 * is deliberately left empty: it has no official site, only a Facebook page.
 *
 * Note: the record named "Vytis" is actually Marijampolės savivaldybė — the name
 * came from the coat-of-arms filename, not the partner.
 */
const LINKS = [
  { match: 'Etninės', url: 'https://www.ekgt.lt' },
  { match: 'Vytis', url: 'https://www.marijampole.lt' },
  { match: 'Vilnius', url: 'https://vilnius.lt' },
  { match: 'Kauno', url: 'https://ktkc.lt' },
  { match: 'JRA', url: 'https://jra.lt' },
  { match: 'Gubernija', url: 'https://nealkoholinis.gubernija.lt' },
  { match: 'DLG', url: 'https://dlg.lt' },
  { match: 'CoinGate', url: 'https://coingate.com' },
  { match: 'Loco', url: 'https://www.lococitric.com' },
];

const client = new pg.Client({ connectionString: process.env.DATABASE_URL_UNPOOLED });
await client.connect();

const { rows } = await client.query('SELECT id, name, website FROM sponsors ORDER BY id');
console.log(`Found ${rows.length} sponsor/partner records\n`);

for (const row of rows) {
  const hit = LINKS.find((l) => row.name?.includes(l.match));
  if (!hit) {
    console.log(`SKIP  ${row.name} — no verified URL`);
    continue;
  }
  if (row.website === hit.url) {
    console.log(`OK    ${row.name} — already set`);
    continue;
  }
  await client.query('UPDATE sponsors SET website = $1, updated_at = now() WHERE id = $2', [
    hit.url,
    row.id,
  ]);
  console.log(`SET   ${row.name} -> ${hit.url}`);
}

const { rows: after } = await client.query(
  'SELECT count(*)::int AS n FROM sponsors WHERE website IS NOT NULL AND website <> \'\''
);
console.log(`\nwith website set: ${after[0].n} / ${rows.length}`);

await client.end();
