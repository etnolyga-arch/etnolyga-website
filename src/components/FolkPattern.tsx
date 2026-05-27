// Renders folk-pattern-h.png (592×96px, pre-rotated horizontal strip) as a repeating band.
export default function FolkPattern({ className = '', inverted = false, rows = 1 }: { className?: string; inverted?: boolean; rows?: number }) {
  const h = 96 * rows;
  const bgColor = inverted ? '#BBDBBF' : '#ffffff';

  return (
    <div
      className={`w-full ${className}`}
      style={{
        height: `${h}px`,
        backgroundColor: bgColor,
        backgroundImage: "url('/figma-assets/folk-pattern-h.png')",
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'auto 100%',
        backgroundPosition: 'left center',
        imageRendering: 'pixelated',
      }}
      aria-hidden="true"
    />
  );
}

