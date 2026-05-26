export default function FolkPattern({ className = '', inverted = false }: { className?: string; inverted?: boolean }) {
  const bg = inverted ? '#BBDBBF' : '#204C36';
  const accent = inverted ? '#204C36' : '#BBDBBF';

  return (
    <div className={`w-full overflow-hidden h-8 ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 960 32"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="960" height="32" fill={bg} />
        {Array.from({ length: 30 }).map((_, i) => (
          <g key={i} transform={`translate(${i * 32}, 0)`}>
            <polygon points="16,2 30,16 16,30 2,16" fill={accent} opacity="0.5" />
            <polygon points="16,7 25,16 16,25 7,16" fill={bg} />
            <rect x="13" y="13" width="6" height="6" fill={accent} opacity="0.9" />
            <line x1="0" y1="16" x2="6" y2="16" stroke={accent} strokeWidth="1" opacity="0.3" />
            <line x1="26" y1="16" x2="32" y2="16" stroke={accent} strokeWidth="1" opacity="0.3" />
          </g>
        ))}
      </svg>
    </div>
  );
}
