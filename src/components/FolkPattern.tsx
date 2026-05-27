export default function FolkPattern({ className = '', inverted = false, rows = 1 }: { className?: string; inverted?: boolean; rows?: number }) {
  const height = 32 * rows;

  return (
    <div
      className={`w-full overflow-hidden ${className}`}
      style={{
        height: `${height}px`,
        backgroundColor: inverted ? '#BBDBBF' : '#ffffff',
        backgroundImage: "url('/figma-assets/folk-pattern.png')",
        backgroundSize: '96px auto',
        backgroundRepeat: 'repeat-x',
      }}
      aria-hidden="true"
    />
  );
}


