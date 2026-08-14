import pg from 'pg';

/**
 * Converts schedule.date from free text to a real timestamp column so the admin
 * gets a date picker instead of a blank box (editors had to guess the format).
 *
 * Existing values are Lithuanian long dates, e.g. "2026 m. rugsėjo 18 d.".
 * Those are rewritten to ISO first, otherwise the ALTER cannot cast them.
 *
 * The PUBLIC OUTPUT DOES NOT CHANGE: cms.ts formats the timestamp back to the
 * same Lithuanian string via Intl (lt-LT), matching what is on the site today.
 *
 * Safe to re-run: it no-ops once the column is already a timestamp.
 */
const MONTHS = {
  sausio: 1, vasario: 2, kovo: 3, balandžio: 4, gegužės: 5, birželio: 6,
  liepos: 7, rugpjūčio: 8, rugsėjo: 9, spalio: 10, lapkričio: 11, gruodžio: 12,
};

/** "2026 m. rugsėjo 18 d." -> "2026-09-18" */
function toIso(value) {
  if (!value) return null;
  if (/^\d{4}-\d{2}-\d{2}/.test(value)) return value.slice(0, 10); // already ISO
  const m = value.match(/(\d{4})\s*m\.\s*([^\s]+)\s*(\d{1,2})\s*d\./i);
  if (!m) return null;
  const month = MONTHS[m[2].toLowerCase()];
  if (!month) return null;
  return `${m[1]}-${String(month).padStart(2, '0')}-${String(m[3]).padStart(2, '0')}`;
}

const client = new pg.Client({ connectionString: process.env.DATABASE_URL_UNPOOLED });
await client.connect();

const { rows: cols } = await client.query(
  `SELECT data_type FROM information_schema.columns
   WHERE table_name = 'schedule' AND column_name = 'date'`
);
const current = cols[0]?.data_type;
console.log('schedule.date current type:', current);

if (!current) {
  console.error('ABORT: schedule.date column not found');
  await client.end();
  process.exit(1);
}

if (current.includes('timestamp')) {
  console.log('Already a timestamp column - nothing to do.');
  await client.end();
  process.exit(0);
}

const { rows } = await client.query('SELECT id, date FROM schedule ORDER BY id');
console.log(`\n${rows.length} row(s) to convert:`);

const converted = [];
for (const r of rows) {
  const iso = toIso(r.date);
  if (r.date && !iso) {
    console.error(`ABORT: cannot parse row ${r.id}: ${JSON.stringify(r.date)}`);
    await client.end();
    process.exit(1);
  }
  converted.push({ id: r.id, from: r.date, iso });
  console.log(`  ${r.id}: ${JSON.stringify(r.date)} -> ${iso}`);
}

// One transaction: rewrite values, then change the column type.
await client.query('BEGIN');
try {
  for (const c of converted) {
    await client.query('UPDATE schedule SET date = $1 WHERE id = $2', [c.iso, c.id]);
  }
  await client.query(
    `ALTER TABLE schedule
     ALTER COLUMN "date" TYPE timestamp(3) with time zone
     USING NULLIF("date", '')::timestamp(3) with time zone`
  );
  await client.query('COMMIT');
  console.log('\nCOMMIT - column converted to timestamp(3) with time zone');
} catch (e) {
  await client.query('ROLLBACK');
  console.error('\nROLLBACK -', e.message);
  await client.end();
  process.exit(1);
}

const { rows: after } = await client.query('SELECT id, date FROM schedule ORDER BY id');
console.log('\nResult:');
for (const r of after) console.log(`  ${r.id}: ${r.date?.toISOString?.() ?? r.date}`);

await client.end();
