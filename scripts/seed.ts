/**
 * One-time content seed: uploads existing images to Vercel Blob (via Payload
 * Media) and migrates all static `src/lib` data into Neon.
 *
 * Idempotent: aborts if News already has documents.
 * Run: node --env-file=.env.local --import tsx scripts/seed.ts
 */
import fs from 'fs';
import path from 'path';
import { getPayload } from 'payload';
import config from '../src/payload.config';

import { news } from '../src/lib/news';
import { teams } from '../src/lib/teams';
import { schedule } from '../src/lib/schedule';
import { group1, group2 } from '../src/lib/standings';
import { sponsors, partners } from '../src/lib/sponsors';
import { timeline, gameDescription, ripkaToday, rules } from '../src/lib/about';
import { siteConfig } from '../src/lib/site';

const PUBLIC = path.resolve(process.cwd(), 'public');

const run = async () => {
  const payload = await getPayload({ config });

  const already = await payload.find({ collection: 'news', limit: 1 });
  if (already.totalDocs > 0) {
    console.log('ℹ️  Content already seeded (news exists) — aborting to stay idempotent.');
    process.exit(0);
  }

  // ---- Media uploader (dedupes by source path) ----
  const cache = new Map<string, number>();
  const missing: string[] = [];
  const upload = async (relPath: string | undefined, alt: string): Promise<number | undefined> => {
    if (!relPath) return undefined;
    if (cache.has(relPath)) return cache.get(relPath);
    const filePath = path.join(PUBLIC, relPath.replace(/^\//, ''));
    if (!fs.existsSync(filePath)) {
      missing.push(relPath);
      console.warn(`  ⚠️  missing image, skipping: ${relPath}`);
      return undefined;
    }
    const doc = await payload.create({ collection: 'media', data: { alt }, filePath });
    cache.set(relPath, doc.id as number);
    return doc.id as number;
  };

  // ---- News ----
  console.log('Seeding news…');
  for (const n of news) {
    await payload.create({
      collection: 'news',
      data: {
        title: n.title,
        slug: n.slug,
        date: n.date,
        excerpt: n.excerpt,
        body: n.body ?? n.excerpt,
        variant: String(n.variant ?? 1) as '1' | '2',
        sport: 'ripka',
        photo: await upload(n.photo, n.title),
      },
    });
  }

  // ---- Teams ----
  console.log('Seeding teams…');
  for (const t of teams) {
    await payload.create({
      collection: 'teams',
      data: {
        name: t.name,
        slug: t.slug,
        school: t.school,
        coach: t.coach,
        quote: t.quote,
        quoteAuthor: t.quoteAuthor,
        sport: 'ripka',
        logo: await upload(t.logo, `${t.name} logotipas`),
        photo: await upload(t.photo, t.name),
        players: t.players.map((p) => ({ name: p.name, role: p.role })),
      },
    });
  }

  // ---- Standings (group1 + group2) ----
  console.log('Seeding standings…');
  for (const [group, rows] of [
    ['group1', group1],
    ['group2', group2],
  ] as const) {
    for (const r of rows) {
      await payload.create({
        collection: 'standings',
        data: {
          team: r.team,
          school: r.school,
          group,
          wins: r.wins,
          draws: r.draws,
          losses: r.losses,
          points: r.points,
          sport: 'ripka',
          logo: await upload(r.logo, r.team),
        },
      });
    }
  }

  // ---- Schedule ----
  console.log('Seeding schedule…');
  let order = 0;
  for (const s of schedule) {
    const teamsArr: { name: string; logo?: number }[] = [];
    for (const tm of s.teams) {
      teamsArr.push({ name: tm.name, logo: await upload(tm.logo, tm.name) });
    }
    await payload.create({
      collection: 'schedule',
      data: {
        date: s.date,
        time: s.time,
        location: s.location,
        group: s.group,
        order: order++,
        sport: 'ripka',
        teams: teamsArr,
      },
    });
  }

  // ---- Sponsors + Partners ----
  console.log('Seeding sponsors & partners…');
  let so = 0;
  for (const s of sponsors) {
    await payload.create({
      collection: 'sponsors',
      data: { name: s.alt, type: 'sponsor', order: so++, logo: await upload(s.src, s.alt) },
    });
  }
  let po = 0;
  for (const p of partners) {
    await payload.create({
      collection: 'sponsors',
      data: { name: p.alt, type: 'partner', order: po++, logo: await upload(p.src, p.alt) },
    });
  }

  // ---- Global: About (Apie ripką) ----
  console.log('Seeding About global…');
  await payload.updateGlobal({
    slug: 'about',
    data: {
      timeline: timeline.map((t) => ({ period: t.period, text: t.text })),
      gameDescription: gameDescription.paragraphs.map((text) => ({ text })),
      gameDescriptionPhoto: await upload(gameDescription.photo, 'Žaidimo aprašymas'),
      ripkaToday: ripkaToday.paragraphs.map((text) => ({ text })),
      ripkaTodayPhoto: await upload(ripkaToday.photo, 'Ripka šiandien'),
      federationUrl: ripkaToday.federationUrl,
      rules: rules.paragraphs.map((text) => ({ text })),
      rulesPhoto: await upload(rules.photo, 'Taisyklės'),
      rulesUrl: rules.rulesUrl,
    },
  });

  // ---- Global: SiteSettings ----
  console.log('Seeding SiteSettings global…');
  await payload.updateGlobal({
    slug: 'site-settings',
    data: {
      heroImage: await upload(siteConfig.heroImage, 'Pagrindinė nuotrauka'),
      heroSubtitle: siteConfig.heroSubtitle,
      etnolygaTitle: siteConfig.etnolyga.title,
      etnolygaDescription1: siteConfig.etnolyga.description1,
      etnolygaDescription2: siteConfig.etnolyga.description2,
      etnolygaPhoto: await upload(siteConfig.etnolyga.photo, 'Etnolyga'),
      organizerTitle: siteConfig.organizer.title,
      organizerDescription: siteConfig.organizer.description,
      organizerPhoto: await upload(siteConfig.organizer.photo, 'Organizatoriai'),
      email: siteConfig.contact.email,
      phone: siteConfig.contact.phone,
      hours: siteConfig.contact.hours,
      facebook: siteConfig.contact.facebook.url,
      instagram: siteConfig.contact.instagram.url,
      youtube: siteConfig.contact.youtube.url,
    },
  });

  console.log(`\n✅ Seed complete. Uploaded ${cache.size} images.`);
  if (missing.length) {
    console.log(`⚠️  ${missing.length} referenced images were missing (left empty):`);
    [...new Set(missing)].forEach((m) => console.log(`   - ${m}`));
  }
  process.exit(0);
};

run().catch((err) => {
  console.error('❌ seed failed:', err);
  process.exit(1);
});
