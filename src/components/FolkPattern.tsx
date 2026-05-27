// Folk pattern tile: 32×32px, two 16px diagonal blocks.
// Creates a clean alternating staircase: ■□/□■ repeating.
const FOLK_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Crect x='0' y='0' width='16' height='16' fill='%23204C36'/%3E%3Crect x='16' y='16' width='16' height='16' fill='%23204C36'/%3E%3C/svg%3E")`;

export default function FolkPattern({ className = '', inverted = false, rows = 1 }: { className?: string; inverted?: boolean; rows?: number }) {
  const height = 32 * rows;

  return (
    <div
      className={`w-full overflow-hidden ${className}`}
      style={{
        height: `${height}px`,
        backgroundColor: inverted ? '#BBDBBF' : '#ffffff',
        backgroundImage: FOLK_SVG,
        backgroundSize: '32px 32px',
        backgroundRepeat: 'repeat',
        imageRendering: 'pixelated',
      }}
      aria-hidden="true"
    />
  );
}


