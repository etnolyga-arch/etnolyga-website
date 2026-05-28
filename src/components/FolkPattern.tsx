// Renders the Figma horizontal folk ornament (357×112px) as a repeating band.
// straddle=true: top half white+dark marks, bottom half dark-green+white marks — straddles the white/green boundary
// dark=true: white marks on dark green background
// inverted=true: dark marks on light green background (legacy)
// default: dark marks on white background
export default function FolkPattern({ className = '', inverted = false, dark = false, straddle = false, offset =7, rows = 1 }: { className?: string; inverted?: boolean; dark?: boolean; straddle?: boolean; offset?: number; rows?: number }) {
  if (straddle) {
    const tileH = 66;
    const half = tileH / 2; // each div = 33px; top shows rows 0-33, bottom shows rows 33-66 of the image
    // offset > 0 → split line moves up (more white area); offset < 0 → split line moves down (more green area)
    const topH = half + offset;
    const botH = half - offset;
    const base = { backgroundRepeat: 'repeat-x' as const, backgroundSize: `auto ${tileH}px` };
    return (
      <div
        className={`w-full ${className}`}
        style={{ marginTop: `-${topH}px`, position: 'relative', zIndex: 10 }}
        aria-hidden="true"
      >
        <div style={{ height: topH, backgroundColor: '#ffffff', backgroundImage: "url('/images/ui/patterns/folk-ornament-horizontal.png')", backgroundPosition: 'left top', ...base }} />
        <div style={{ height: botH, backgroundColor: '#204C36', backgroundImage: "url('/images/ui/patterns/folk-ornament-horizontal-inverse.png')", backgroundPosition: 'left bottom', ...base }} />
      </div>
    );
  }

  const h = 66 * rows;
  const bgColor = dark ? '#204C36' : inverted ? '#BBDBBF' : '#ffffff';
  const bgImage = dark
    ? "url('/images/ui/patterns/folk-ornament-horizontal-inverse.png')"
    : "url('/images/ui/patterns/folk-ornament-horizontal.png')";

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

