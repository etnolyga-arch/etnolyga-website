import Image from 'next/image';
import SponsorsSection from '@/components/SponsorsSection';
import { siteConfig } from '@/lib/site';
import { COPYRIGHT_HOLDER, type LegalSection } from '@/lib/legal';

/** Shared layout for the privacy policy and terms pages. */
export default function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[240px] flex items-end overflow-hidden -mt-14">
        <Image
          src={siteConfig.pages.kontaktai.heroImage}
          alt={title}
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 w-full pb-10 pt-24">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-white">{title}</h1>
          <p className="text-white/60 text-xs mt-3">Atnaujinta: {updated}</p>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-graphite/80 text-[15px] leading-relaxed mb-12">{intro}</p>

          {sections.map((section, i) => (
            <div key={section.heading} className="mb-10">
              <h2 className="font-display text-xl font-semibold text-graphite mb-3">
                <span className="text-green-dark/40 mr-2">{i + 1}.</span>
                {section.heading}
              </h2>
              {section.paragraphs.map((text) => (
                <p key={text} className="text-graphite/70 text-[15px] leading-relaxed mb-3">
                  {text}
                </p>
              ))}
              {section.list && (
                <ul className="mt-2 space-y-2">
                  {section.list.map((item) => (
                    <li
                      key={item}
                      className="text-graphite/70 text-[15px] leading-relaxed pl-4 border-l-2 border-green-light"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <p className="text-graphite/40 text-xs border-t border-graphite/10 pt-6 mt-12">
            © {new Date().getFullYear()} {COPYRIGHT_HOLDER}. Visos teisės saugomos.
          </p>
        </div>
      </section>

      <SponsorsSection />
    </div>
  );
}
