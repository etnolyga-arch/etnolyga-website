import Image from 'next/image';

/**
 * Team logo with a graceful fallback.
 *
 * Not every team has a logo uploaded, and next/image with an empty src renders
 * a broken image. Showing the team's initial instead keeps the row looking
 * deliberate rather than broken.
 */
export default function TeamLogo({
  src,
  name,
  size,
  className = '',
}: {
  src?: string;
  name: string;
  size: number;
  className?: string;
}) {
  const box = `rounded-full overflow-hidden flex-shrink-0 border border-graphite/10 ${className}`;

  if (src) {
    return (
      <div className={`${box} bg-white`} style={{ width: size, height: size }}>
        <Image
          src={src}
          alt={name}
          width={size}
          height={size}
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  return (
    <div
      className={`${box} bg-graphite/10 flex items-center justify-center font-semibold text-graphite/50`}
      style={{ width: size, height: size, fontSize: Math.max(11, Math.round(size * 0.4)) }}
      aria-label={name}
    >
      {name.trim().slice(0, 1).toUpperCase()}
    </div>
  );
}
