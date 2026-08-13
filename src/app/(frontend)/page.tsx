import Image from "next/image";
import Link from "next/link";
import SponsorsSection from "@/components/SponsorsSection";
import { getTeams } from '@/lib/cms';
import { getNews } from '@/lib/cms';
import { getSiteSettings } from '@/lib/cms';
import { getSchedule } from '@/lib/cms';

export const revalidate = 30;

export default async function Home() {
  const [siteConfig, teams, news, schedule] = await Promise.all([
    getSiteSettings(),
    getTeams(),
    getNews(),
    getSchedule(),
  ]);
  const nextMatch = schedule[0];
  return (
    <div>
      <section className="relative min-h-[640px] overflow-hidden -mt-14">
        <Image src={siteConfig.heroImage} alt="Ripkos rungtynės" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <Image
            src="/images/brand/logos/etnolyga-horizontal.png"
            alt="ETN♦LYGA"
            width={960}
            height={67}
            className="w-full max-w-[960px] h-auto"
            style={{ imageRendering: 'pixelated' }}
            priority
          />
        </div>
        <div className="absolute bottom-12 left-0 right-0 text-center z-10">
          <p className="text-sm text-white/65 max-w-lg mx-auto leading-relaxed">
            {siteConfig.heroSubtitle}
          </p>
          <a href="#after-hero" className="mt-6 inline-block opacity-60 hover:opacity-90 transition-opacity" aria-label="Slinkti žemyn">
            <img src="/images/ui/arrows/down.png" alt="" width={48} height={48} style={{ filter: 'brightness(0) invert(1)' }} />
          </a>
        </div>
      </section>
      <section id="after-hero" className="bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 items-stretch">
          <div className="py-16 px-8 md:px-10 flex flex-col justify-between">
            <div>
              <h2 className="font-display text-3xl font-semibold text-graphite mb-6">{siteConfig.etnolyga.title}</h2>
              <p className="text-sm text-graphite/70 leading-relaxed mb-4">{siteConfig.etnolyga.description1}</p>
              <p className="text-sm text-graphite/70 leading-relaxed">{siteConfig.etnolyga.description2}</p>
            </div>
            <div className="mt-8">
              <Link href="/apie-ripka" className="inline-flex items-center gap-2 text-sm font-semibold text-green-dark hover:underline">Plačiau apie ripką <img src="/images/ui/arrows/link-to.png" alt="" width={20} height={20} /></Link>
            </div>
          </div>
          <div className="relative min-h-[360px]">
            <Image src={siteConfig.etnolyga.photo} alt="Ripkos žaidimas" fill className="object-cover" />
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 items-stretch">
          <div className="py-16 px-8 md:px-10">
            <h2 className="font-display text-3xl font-semibold text-graphite mb-2">Artimiausios varžybos</h2>
            <p className="text-sm text-graphite/55 mb-1">{nextMatch.date} {nextMatch.time}</p>
            <p className="text-sm text-graphite/55 mb-8">{nextMatch.location}</p>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-graphite/35 mb-5">Susitinka 1-o pogrūpio komandos:</p>
            <div className="space-y-4 mb-10">
              {teams.map((team) => (
                <div key={team.slug} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 border border-graphite/10 bg-white">
                    <Image src={team.logo} alt={team.school} width={36} height={36} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-graphite leading-tight">Komanda {team.name}</p>
                    <p className="text-[11px] text-graphite/50 leading-tight">{team.school}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/tvarkarastis" className="inline-flex items-center gap-2 text-sm font-semibold text-green-dark hover:underline">Detalus tvarkaraštis <img src="/images/ui/arrows/link-to.png" alt="" width={20} height={20} /></Link>
          </div>
          <div className="relative min-h-[400px] flex flex-col">
            <div className="flex-1 min-h-[320px]">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(nextMatch?.location ?? '')}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '320px', display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Varžybų vieta"
              />
            </div>
            <Link href="/tvarkarastis" className="bg-green-light px-6 py-5 flex items-center justify-between hover:bg-green-light/80 transition-colors">
              <span className="font-display text-base font-semibold text-green-dark">Detalus tvarkaraštis</span>
              <img src="/images/ui/arrows/link-to.png" alt="" width={32} height={32} />
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-semibold text-graphite mb-8">Naujienos</h2>
          <div className="grid grid-cols-2 gap-1">
            {/* Top row — 2 tall cards from news lib */}
            <Link href={`/naujienos/${news[0].slug}`} className="relative block overflow-hidden group" style={{ aspectRatio: '4/3' }}>
              <Image src={news[0].photo} alt={news[0].title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-[11px] text-white/60 mb-1">{news[0].date}</p>
                <h3 className="text-sm font-semibold text-white leading-snug">{news[0].title}</h3>
              </div>
            </Link>
            <Link href={`/naujienos/${news[1].slug}`} className="relative block overflow-hidden group" style={{ aspectRatio: '4/3' }}>
              <Image src={news[1].photo} alt={news[1].title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-[11px] text-white/60 mb-1">{news[1].date}</p>
                <h3 className="text-sm font-semibold text-white leading-snug">{news[1].title}</h3>
              </div>
            </Link>
            {/* Bottom row — 1 card + inline CTA */}
            <Link href={`/naujienos/${news[2].slug}`} className="relative block overflow-hidden group" style={{ aspectRatio: '16/7' }}>
              <Image src={news[2].photo} alt={news[2].title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-[11px] text-white/60 mb-1">{news[2].date}</p>
                <h3 className="text-sm font-semibold text-white leading-snug">{news[2].title}</h3>
              </div>
            </Link>
            <Link href="/naujienos" style={{ aspectRatio: '16/7' }} className="flex items-center justify-between px-8 py-6 border border-green-light hover:bg-green-light/30 transition-colors">
              <span className="font-display text-lg font-semibold text-green-dark">Daugiau naujienų</span>
              <img src="/images/ui/arrows/link-to.png" alt="" width={32} height={32} />
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 items-stretch">
          <div className="py-16 px-8 md:px-10 flex flex-col justify-between">
            <div>
              <h2 className="font-display text-3xl font-semibold text-graphite mb-6">{siteConfig.organizer.title}</h2>
              <p className="text-sm text-graphite/70 leading-relaxed">{siteConfig.organizer.description}</p>
            </div>
            <div className="mt-8">
              <Link href="/kontaktai" className="inline-flex items-center gap-2 text-sm font-semibold text-green-dark hover:underline">Plačiau apie organizatorius <img src="/images/ui/arrows/link-to.png" alt="" width={20} height={20} /></Link>
            </div>
          </div>
          <div className="relative min-h-[360px]">
            <Image src={siteConfig.organizer.photo} alt="Organizatoriai" fill className="object-cover object-center" />
          </div>
        </div>
      </section>
      <SponsorsSection />
    </div>
  );
}
