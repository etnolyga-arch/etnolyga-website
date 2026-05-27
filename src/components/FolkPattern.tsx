// Renders the Figma horizontal folk ornament (357×112px) as a repeating band.
// straddle=true: top half white+dark marks, bottom half dark-green+white marks — straddles the white/green boundary
// dark=true: white marks on dark green background
// inverted=true: dark marks on light green background (legacy)
// default: dark marks on white background
export default function FolkPattern({ className = '', inverted = false, dark = false, straddle = false, rows = 1 }: { className?: string; inverted?: boolean; dark?: boolean; straddle?: boolean; rows?: number }) {
  if (straddle) {
    const tileH = 76;
    const half = tileH / 2;
    const base = { backgroundRepeat: 'repeat-x' as const, backgroundSize: `auto ${tileH}px` };
    return (
      <div
        className={`w-full ${className}`}
        style={{ marginTop: `-${half}px`, position: 'relative', zIndex: 10 }}
        aria-hidden="true"
      >
        <div style={{ height: half, backgroundColor: '#ffffff', backgroundImage: "url('/figma-assets/folk-ornament-h.png')", backgroundPosition: 'left top', ...base }} />
        <div style={{ height: half, backgroundColor: '#204C36', backgroundImage: "url('/figma-assets/folk-ornament-h-inv.png')", backgroundPosition: 'left bottom', ...base }} />
      </div>
    );
  }

  const h = 76 * rows;
  const bgColor = dark ? '#204C36' : inverted ? '#BBDBBF' : '#ffffff';
  const bgImage = dark
    ? "url('/figma-assets/folk-ornament-h-inv.png')"
    : "url('/figma-assets/folk-ornament-h.png')";

  return (
    <div
      className={`w-full ${className}`}
      style={{
        height: `${h}px`,
        backgroundColor: bgColor,
        backgroundImage: bgImage,
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'auto 100%',
        backgroundPosition: 'left center',
      }}
      aria-hidden="true"
    />
  );
}

