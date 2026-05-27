// Renders the Figma horizontal folk ornament (357×112px) as a repeating band.
// dark=true: white marks on dark green background (for use on the dark green footer)
// inverted=true: dark marks on light green background (legacy)
// default: dark marks on white background
export default function FolkPattern({ className = '', inverted = false, dark = false, rows = 1 }: { className?: string; inverted?: boolean; dark?: boolean; rows?: number }) {
  const h = 96 * rows;
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

