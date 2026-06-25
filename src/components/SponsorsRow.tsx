'use client';
import Image from 'next/image';
import type { SponsorItem } from '@/lib/sponsors';

function LogoCarousel({ label, items, duration = 18 }: { label: string; items: SponsorItem[]; duration?: number }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex items-center gap-6 py-5 border-b border-graphite/10 last:border-0">
      <h2 className="font-display text-xl font-semibold text-green-dark w-32 flex-shrink-0">{label}</h2>
      <div
        className="flex-1 overflow-hidden"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <div
          className="flex"
          style={{
            width: 'max-content',
            animation: `marquee-scroll ${duration}s linear infinite`,
            willChange: 'transform',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
          onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = 'running')}
        >
          {doubled.map((item, i) => (
            <div key={i} className="flex items-center justify-center px-6" style={{ width: '140px', flexShrink: 0 }}>
              <Image
                src={item.src}
                alt={item.alt}
                width={110}
                height={44}
                loading="eager"
                className="object-contain max-h-10 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SponsorsRow({
  sponsors,
  partners,
}: {
  sponsors: SponsorItem[];
  partners: SponsorItem[];
}) {
  return (
    <section className="bg-white py-8 px-6">
      <div className="max-w-5xl mx-auto">
        <LogoCarousel label="Rėmėjai" items={sponsors} duration={18} />
        <LogoCarousel label="Partneriai" items={partners} duration={22} />
      </div>
    </section>
  );
}
