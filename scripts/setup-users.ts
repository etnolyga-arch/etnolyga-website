/**
 * Sets up users for handoff: pushes the new `role` column, promotes the agency
 * account to admin, and creates the client's (Etnolyga) admin account.
 *
 * Run: CLIENT_PASSWORD=... node --env-file=.env.local --import tsx scripts/setup-users.ts
 */
import { getPayload } from 'payload';
import config from '../src/payload.config';

const run = async () => {
  const payload = await getPayload({ config });

  // Promote the agency account to admin (it predates the role field).
  const agency = await payload.find({
    collection: 'users',
    where: { email: { equals: 'ajmeile.agency@gmail.com' } },
  });
  if (agency.docs[0]) {
    await payload.update({ collection: 'users', id: agency.docs[0].id, data: { role: 'admin' } });
    console.log('✅ agency account set to admin');
  }

  // Create the client's admin account.
  const email = 'etnolyga@gmail.com';
  const password = process.env.CLIENT_PASSWORD || 'changeme';
  const existing = await payload.find({ collection: 'users', where: { email: { equals: email } } });
  if (existing.totalDocs === 0) {
    await payload.create({
      collection: 'users',
      data: { email, password, name: 'Etnolyga', role: 'admin' },
    });
    console.log(`✅ created client admin: ${email}`);
  } else {
    console.log(`ℹ️  ${email} already exists — skipping.`);
  }

  process.exit(0);
};

run().catch((err) => {
  console.error('❌ setup-users failed:', err);
  process.exit(1);
});
