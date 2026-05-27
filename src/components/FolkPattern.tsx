// Renders folk-pattern.png (96×592px, marks at x=48..95) rotated 90° as a horizontal band
// using an inline SVG <pattern>. The 96px-wide image is rotated -90° so its 592px height
// becomes the horizontal tile width. Marks are centered vertically in the band.
export default function FolkPattern({ className = '', inverted = false, rows = 1 }: { className?: string; inverted?: boolean; rows?: number }) {
  const h = 96 * rows;
  const bgColor = inverted ? '#BBDBBF' : '#ffffff';
  // After rotate(-90°): original 96×592 → visual 592×96. Tile width = 592 (original height).
  const tileW = 592;
  // With transform="translate(0, ty) rotate(-90)" applied right-to-left in SVG:
  // pixel at (px, py) in image → band position (py, ty - px).
  // Marks at px=48..95. Center marks in band: ty = h/2 + (48+95)/2 = h/2 + 71.5
  const ty = Math.round(h / 2 + 71.5);
  const patId = `fp-${h}-${inverted ? 'i' : 'n'}`;

  return (
    <div className={`w-full ${className}`} style={{ height: `${h}px` }} aria-hidden="true">
      <svg width="100%" height={h} style={{ display: 'block' }}>
        <defs>
          <pattern id={patId} x="0" y="0" width={tileW} height={h} patternUnits="userSpaceOnUse">
            <rect width={tileW} height={h} fill={bgColor} />
            <image
              href="/figma-assets/folk-pattern.png"
              width="96"
              height="592"
              transform={`translate(0, ${ty}) rotate(-90)`}
              style={{ imageRendering: 'pixelated' } as React.CSSProperties}
            />
          </pattern>
        </defs>
        <rect width="100%" height={h} fill={`url(#${patId})`} />
      </svg>
    </div>
  );
}

