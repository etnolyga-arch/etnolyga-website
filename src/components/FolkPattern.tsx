// Renders the Figma horizontal folk ornament (357×112px) as a repeating band.
export default function FolkPattern({ className = '', inverted = false, rows = 1 }: { className?: string; inverted?: boolean; rows?: number }) {
  const h = 96 * rows;
  const bgColor = inverted ? '#BBDBBF' : '#ffffff';

  return (
    <div
      className={`w-full ${className}`}
      style={{
        height: `${h}px`,
        backgroundColor: bgColor,
        backgroundImage: "url('/figma-assets/folk-ornament-h.png')",
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'auto 100%',
        backgroundPosition: 'left center',
      }}
      aria-hidden="true"
    />
  );
}

