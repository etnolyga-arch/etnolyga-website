import pg from 'pg';

const client = new pg.Client({ connectionString: process.env.DATABASE_URL_UNPOOLED });
await client.connect();
console.log('Connected to Neon');

const statements = [
  `ALTER TYPE "enum_teams_players_role" ADD VALUE IF NOT EXISTS 'Žaidėjas'`,
  `ALTER TYPE "enum_teams_players_role" ADD VALUE IF NOT EXISTS 'Vartininkas'`,
  `ALTER TYPE "enum_teams_players_role" ADD VALUE IF NOT EXISTS 'Treneris'`,
  `ALTER TABLE teams_players ADD COLUMN IF NOT EXISTS photo_id integer`,
  `ALTER TABLE teams_players ADD COLUMN IF NOT EXISTS number numeric`,
  `ALTER TABLE teams_players ADD COLUMN IF NOT EXISTS bio varchar`,
  `ALTER TABLE sponsors ADD COLUMN IF NOT EXISTS website varchar`,
  `CREATE TABLE IF NOT EXISTS schedule_rels (
    id serial PRIMARY KEY NOT NULL,
    "order" integer,
    parent_id integer NOT NULL,
    path varchar NOT NULL,
    teams_id integer
  )`,
  `CREATE INDEX IF NOT EXISTS schedule_rels_order_idx ON schedule_rels ("order")`,
  `CREATE INDEX IF NOT EXISTS schedule_rels_parent_idx ON schedule_rels (parent_id)`,
  `CREATE INDEX IF NOT EXISTS schedule_rels_path_idx ON schedule_rels (path)`,
  `CREATE INDEX IF NOT EXISTS schedule_rels_teams_id_idx ON schedule_rels (teams_id)`,
  `DO $$ BEGIN
    ALTER TABLE schedule_rels ADD CONSTRAINT schedule_rels_parent_fk
      FOREIGN KEY (parent_id) REFERENCES schedule(id) ON DELETE CASCADE;
  EXCEPTION WHEN duplicate_object THEN NULL; END $$`,
  `DO $$ BEGIN
    ALTER TABLE schedule_rels ADD CONSTRAINT schedule_rels_teams_fk
      FOREIGN KEY (teams_id) REFERENCES teams(id) ON DELETE CASCADE;
  EXCEPTION WHEN duplicate_object THEN NULL; END $$`,
  `DO $$ BEGIN
    ALTER TABLE teams_players ADD CONSTRAINT teams_players_photo_fk
      FOREIGN KEY (photo_id) REFERENCES media(id) ON DELETE SET NULL;
  EXCEPTION WHEN duplicate_object THEN NULL; END $$`,
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
