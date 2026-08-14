import sharp from 'sharp';

/**
 * Payload runs uploads through sharp. If sharp cannot read an SVG, enabling SVG
 * in the admin would fail at upload time rather than at render time, so check
 * that first before changing any config.
 */
const SVG = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" width="200" height="100">
     <rect width="200" height="100" fill="#0b3d2e"/>
     <text x="100" y="58" font-size="28" fill="#fff" text-anchor="middle">TEST</text>
   </svg>`
);

console.log('sharp version:', sharp.versions?.sharp ?? 'unknown');
console.log('librsvg present:', Boolean(sharp.format?.svg?.input?.buffer));

try {
  const meta = await sharp(SVG).metadata();
  console.log('\nOK - sharp read the SVG');
  console.log('  format:', meta.format);
  console.log('  width :', meta.width);
  console.log('  height:', meta.height);
} catch (e) {
  console.error('\nFAIL - sharp cannot read SVG:', e.message);
  process.exit(1);
}

try {
  const png = await sharp(SVG).resize(64).png().toBuffer();
  console.log(`  resize to PNG: OK (${png.length} bytes) - thumbnails would work`);
} catch (e) {
  console.error('  resize FAILED:', e.message);
}
