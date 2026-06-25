import Image from "next/image";
import Link from "next/link";
import SponsorsRow from "@/components/SponsorsRow";
import { timeline, gameDescription, ripkaToday, rules } from '@/lib/about';
import { siteConfig } from '@/lib/site';

export default function ApieRipkaPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[240px] flex items-end overflow-hidden -mt-14">
        <Image src={siteConfig.pages.apieRipka.heroImage} alt="Ripka" fill className="object-cover object-top" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 w-full pb-10 pt-24">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-white">Ripka (ritinis)</h1>
        </div>
      </section>

      {/* Game description */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 items-stretch">
          <div className="py-16 px-8 md:px-10">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-graphite mb-6">Žaidimo aprašymas</h2>
            <div className="space-y-4 text-sm text-graphite/75 leading-relaxed">
              {gameDescription.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
          <div className="relative min-h-[360px]">
            <Image src={gameDescription.photo} alt="Ripkos žaidimas" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* History */}
      <section className="bg-green-dark py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-10">Ripkos istorija</h2>
          <div className="grid md:grid-cols-4 gap-px bg-white/10">
            {timeline.map((item) => (
              <div key={item.period} className="bg-green-dark p-6">
                <p className="font-display text-lg font-semibold text-green-light mb-3">{item.period}</p>
                <p className="text-sm text-white/70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ripka today */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 items-stretch">
          <div className="relative min-h-[360px]">
            <Image src={ripkaToday.photo} alt="Ripka šiandien" fill className="object-cover" />
          </div>
          <div className="py-16 px-8 md:px-10 bg-green-light/20 flex flex-col justify-between">
            <div>
              <h2 className="font-display text-2xl font-semibold text-graphite mb-4">Ripka šiandien</h2>
              {ripkaToday.paragraphs.map((p, i) => <p key={i} className="text-sm text-graphite/75 leading-relaxed mb-4">{p}</p>)}
            </div>
            <div className="mt-8">
              <div className="mt-6">
                <Link href={ripkaToday.federationUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-green-dark hover:underline">
                  Plačiau apie federaciją <img src="/images/ui/arrows/link-to.png" alt="" width={20} height={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 items-stretch">
          <div className="py-16 px-8 md:px-10 flex flex-col justify-between">
            <div>
              <h2 className="font-display text-2xl font-semibold text-graphite mb-4">Taisyklės</h2>
              {rules.paragraphs.map((p, i) => <p key={i} className="text-sm text-graphite/75 leading-relaxed mb-4">{p}</p>)}
            </div>
            <div className="mt-8">
              <div className="mt-6">
                <Link href={rules.rulesUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-green-dark hover:underline">
                  Ripkos taisyklės <img src="/images/ui/arrows/link-to.png" alt="" width={20} height={20} />
                </Link>
              </div>
            </div>
          </div>
          <div className="relative min-h-[380px]">
            <Image src={rules.photo} alt="Ripkos įranga" fill className="object-cover" />
          </div>
        </div>
      </section>

      <SponsorsRow />
    </div>
  );
}
