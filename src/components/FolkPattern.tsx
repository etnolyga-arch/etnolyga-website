export default function FolkPattern({ className = '', inverted = false, rows = 1 }: { className?: string; inverted?: boolean; rows?: number }) {
  const bg = inverted ? '#BBDBBF' : '#204C36';
  const accent = inverted ? '#204C36' : '#BBDBBF';
  const tileSize = 32;
  const svgH = tileSize * rows;

  // Pixel diamond-cross motif — each unit is 4 px, tile is 32×32
  const pixels: [number, number][] = [
    [3, 0],
    [2, 1], [3, 1], [4, 1],
    [1, 2], [3, 2], [5, 2],
    [0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3],
    [1, 4], [3, 4], [5, 4],
    [2, 5], [3, 5], [4, 5],
    [3, 6],
  ];

  return (
    <div className={`w-full overflow-hidden ${className}`} style={{ height: `${svgH}px` }} aria-hidden="true">
      <svg
        viewBox={`0 0 960 ${svgH}`}
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="960" height={svgH} fill={bg} />
        {Array.from({ length: rows }).flatMap((_, tileY) =>
          Array.from({ length: 30 }).map((_, tileX) => (
            <g key={`${tileX}-${tileY}`} transform={`translate(${tileX * tileSize}, ${tileY * tileSize})`}>
              {pixels.map(([px, py]) => (
                <rect key={`${px}-${py}`} x={px * 4} y={py * 4} width={4} height={4} fill={accent} />
              ))}
            </g>
          ))
        )}
      </svg>
    </div>
  );
}
