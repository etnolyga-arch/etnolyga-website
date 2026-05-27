import Image from 'next/image';

const sponsors = [
  { src: '/figma-assets/fill-66-e1aec830be9e.png', alt: 'Loco Citric' },
  { src: '/figma-assets/fill-12-2a72eee61e68.png', alt: 'CoinGate' },
  { src: '/figma-assets/fill-82-fef4b7e54990.png', alt: 'DLG Logistics Group' },
  { src: '/figma-assets/fill-81-fd45324495a8.png', alt: 'Veri Beri' },
  { src: '/figma-assets/fill-56-cffecf90f350.png', alt: 'Gubernija Nealkoholinis' },
];

const partners = [
  { src: '/figma-assets/fill-69-e42b93ff6f44.png', alt: 'JRA' },
  { src: '/figma-assets/fill-53-c5345dbafdf8.png', alt: 'Kauno Tautinės Kultūros Centras' },
  { src: '/figma-assets/fill-5-0d02d56c5ff4.png', alt: 'Vilnius' },
  { src: '/figma-assets/fill-13-2c26ed9c2509.png', alt: 'Vytis' },
  { src: '/figma-assets/fill-10-283ab16ae636.png', alt: 'Etninės Kultūros Globos Taryba' },
];

function LogoCarousel({ label, items }: { label: string; items: typeof sponsors }) {
  return (
    <div className="flex items-center gap-4 py-4 border-b border-graphite/10 last:border-0">
      <h2 className="font-display text-xl font-semibold text-green-dark w-32 flex-shrink-0">{label}</h2>
      <button className="text-graphite/30 hover:text-graphite transition-colors text-xl leading-none flex-shrink-0">‹</button>
      <div className="flex items-center gap-2 flex-1 overflow-hidden">
        {items.map((item) => (
          <div
            key={item.alt}
            className="flex-1 h-14 flex items-center justify-center px-2"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={110}
              height={44}
              className="object-contain max-h-10 w-auto"
            />
          </div>
        ))}
      </div>
      <button className="text-graphite/30 hover:text-graphite transition-colors text-xl leading-none flex-shrink-0">›</button>
    </div>
  );
}

export default function SponsorsRow() {
  return (
    <section className="bg-white py-8 px-6">
      <div className="max-w-5xl mx-auto">
        <LogoCarousel label="Rėmėjai" items={sponsors} />
        <LogoCarousel label="Partneriai" items={partners} />
      </div>
    </section>
  );
}
