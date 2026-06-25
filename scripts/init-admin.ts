/**
 * One-off bootstrap: initialises Payload (pushes schema to Neon in dev)
 * and creates the first admin user if none exists.
 *
 * Run: node --env-file=.env.local --import tsx scripts/init-admin.ts
 */
import { getPayload } from 'payload';
import config from '../src/payload.config';

const run = async () => {
  const payload = await getPayload({ config });

  const email = process.env.ADMIN_EMAIL || 'ajmeile.agency@gmail.com';
  const password = process.env.ADMIN_PASSWORD || 'changeme';

  const existing = await payload.find({ collection: 'users', limit: 1 });

  if (existing.totalDocs === 0) {
    await payload.create({
      collection: 'users',
      data: { email, password, name: 'Etnolyga Admin' },
    });
    console.log(`✅ Created admin user: ${email}`);
  } else {
    console.log(`ℹ️  Users already exist (${existing.totalDocs}) — skipping creation.`);
  }

  process.exit(0);
};

run().catch((err) => {
  console.error('❌ init-admin failed:', err);
  process.exit(1);
});
