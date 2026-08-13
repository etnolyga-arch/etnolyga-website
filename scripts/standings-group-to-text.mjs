import pg from 'pg';

const client = new pg.Client({ connectionString: process.env.DATABASE_URL_UNPOOLED });
await client.connect();
console.log('Connected to Neon');

const statements = [
  // Convert standings.group from enum to varchar
  `DO $$
  BEGIN
    IF EXISTS (
      SELECT 1 FROM information_schema.columns
      WHERE table_name = 'standings' AND column_name = 'group' AND data_type = 'USER-DEFINED'
    ) THEN
      ALTER TABLE standings ALTER COLUMN "group" TYPE varchar USING "group"::varchar;
    END IF;
  END $$`,

  // Rename old enum values to human-readable Lithuanian labels
  `UPDATE standings SET "group" = '1-asis pogrūpis' WHERE "group" = 'group1'`,
  `UPDATE standings SET "group" = '2-asis pogrūpis' WHERE "group" = 'group2'`,
];

for (const sql of statements) {
  try {
    await client.query(sql);
    console.log('OK:', sql.slice(0, 70).replace(/\s+/g, ' ').trim());
  } catch (e) {
    console.error('FAIL:', sql.slice(0, 70).replace(/\s+/g, ' ').trim());
    console.error('      ', e.message);
  }
}

await client.end();
console.log('Done.');
