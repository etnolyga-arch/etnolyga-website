import { getPayload } from 'payload';
import config from '../src/payload.config.ts';

/**
 * End-to-end check that SVG works: uploads a throwaway SVG through Payload,
 * confirms it stores as image/svg+xml, then deletes it again.
 *
 * Leaves nothing behind — the record is removed in a finally block even if the
 * assertions fail.
 */
const SVG = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" width="200" height="100">
     <rect width="200" height="100" fill="#0b3d2e"/>
     <text x="100" y="58" font-size="24" fill="#fff" text-anchor="middle">SVG OK</text>
   </svg>`
);

const payload = await getPayload({ config });
let created = null;

try {
  created = await payload.create({
    collection: 'media',
    data: { alt: 'SVG support check (laikinas failas)' },
    file: {
      data: SVG,
      name: `svg-check-${Date.now()}.svg`,
      mimetype: 'image/svg+xml',
      size: SVG.length,
    },
  });

  console.log('UPLOAD OK');
  console.log('  id       :', created.id);
  console.log('  filename :', created.filename);
  console.log('  mimeType :', created.mimeType);
  console.log('  width    :', created.width);
  console.log('  height   :', created.height);
  console.log('  url      :', created.url);

  if (created.mimeType !== 'image/svg+xml') {
    console.error(`\nWARN: expected image/svg+xml, got ${created.mimeType}`);
  }

  // Serve it through the deployed site the same way the frontend would.
  const base = 'https://etnolyga.lt';
  const raw = await fetch(`${base}${created.url}`);
  console.log(`\nRAW  ${raw.status} ${raw.headers.get('content-type')}`);

  const opt = await fetch(
    `${base}/_next/image?url=${encodeURIComponent(created.url)}&w=128&q=75`
  );
  console.log(`NEXT ${opt.status} ${opt.headers.get('content-type')}`);
  console.log(`     csp: ${opt.headers.get('content-security-policy') ?? '(none)'}`);
  console.log(
    opt.status === 200
      ? '\nRENDER OK - next/image serves the SVG'
      : '\nRENDER FAILED - check dangerouslyAllowSVG'
  );
} catch (e) {
  console.error('UPLOAD FAILED:', e.message);
  process.exitCode = 1;
} finally {
  if (created?.id) {
    await payload.delete({ collection: 'media', id: created.id });
    console.log('\nCLEANUP: test file deleted');
  }
  process.exit(process.exitCode ?? 0);
}
