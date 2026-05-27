import Image from "next/image";
import Link from "next/link";
import FolkPattern from "@/components/FolkPattern";
import SponsorsRow from "@/components/SponsorsRow";

const teamsList = [
  { name: "\u201eUž Joną\u201c", school: "Jono Basanavičiaus gimnazija", logo: "/figma-assets/fill-51-b1709e66d56c.png", slug: "uz-jona" },
  { name: "\u201eBallerina Cappuccina\u201c", school: "Žirmūnų gimnazija", logo: "/figma-assets/fill-50-afcb95bb3939.png", slug: "ballerina-cappuccina" },
  { name: "\u201eSeptyniese\u201c", school: "Simono Daukanto gimnazija", logo: "/figma-assets/fill-4-0c2ce59a681e.png", slug: "septyniese" },
  { name: "\u201eBasomis\u201c", school: "Šv. Kristoforo gimnazija", logo: "/figma-assets/fill-28-5cc1867c0b1b.png", slug: "basomis" },
  { name: "\u201eVazhiuojam\u201c", school: "Tuskulėnų gimnazija", logo: "/figma-assets/fill-14-2f58aff4c3d8.png", slug: "vazhiuojam" },
];

export default function Home() {
  return (
    <div>
      <section className="relative min-h-[640px] flex items-center justify-center overflow-hidden">
        <Image src="/figma-assets/fill-37-72c6117f08c0.png" alt="Ripkos rungtynės" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <Image
            src="/figma-assets/logo-horizontal.png"
            alt="ETN♦LYGA"
            width={960}
            height={67}
            className="w-[70%] max-w-[672px] h-auto"
            style={{ imageRendering: 'pixelated' }}
            priority
          />
          <p className="mt-6 text-sm text-white/65 max-w-lg mx-auto leading-relaxed">
            Iniciatyva, siekianti inovatyviai plėtoti Lietuvos tradicinius sporto žaidimus
          </p>
          <div className="mt-10 text-white/40 text-2xl select-none">↓</div>
        </div>
      </section>
      <FolkPattern />
      <section className="bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 items-stretch">
          <div className="py-16 px-8 md:px-10 flex flex-col justify-between">
            <div>
              <h2 className="font-display text-3xl font-semibold text-graphite mb-6">Etnolyga</h2>
              <p className="text-sm text-graphite/70 leading-relaxed mb-4">Etnolyga yra skirta 16–19 m. moksleiviams, kurie varžysis žaisdami lietuvišką ripką. Lygos tikslas – integruoti lietuvišką tradiciją į šiuolaikinę jaunimo kultūrą ir ugdyti bendrystės jausmą.</p>
              <p className="text-sm text-graphite/70 leading-relaxed">Etnosporto lygą organizuoja Lietuvos etnosporto komitetas – 2019 m. įkurta organizacija, puoselėjanti lietuviškus tradicinius žaidimus.</p>
            </div>
            <div className="mt-8">
              <div className="w-44 mb-6 overflow-hidden"><FolkPattern rows={2} /></div>
              <Link href="/apie-ripka" className="inline-flex items-center gap-2 text-sm font-semibold text-green-dark hover:underline">Plačiau apie ripką ↗</Link>
            </div>
          </div>
          <div className="relative min-h-[360px]">
            <Image src="/figma-assets/fill-18-36ad8b171802.png" alt="Ripkos žaidimas" fill className="object-cover" />
          </div>
        </div>
      </section>
      <FolkPattern inverted />
      <section className="bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 items-stretch">
          <div className="py-16 px-8 md:px-10">
            <h2 className="font-display text-3xl font-semibold text-graphite mb-2">Artimiausios varžybos</h2>
            <p className="text-sm text-graphite/55 mb-1">2026 m. gegužės 7 d. 9–17 val.</p>
            <p className="text-sm text-graphite/55 mb-8">Simono Daukanto gimnazijos stadionas, Vilnius</p>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-graphite/35 mb-5">Susitinka 1-o pogrūpio komandos:</p>
            <div className="space-y-4 mb-10">
              {teamsList.map((team) => (
                <Link key={team.slug} href={"/komandos/" + team.slug} className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 border border-graphite/10 bg-white">
                    <Image src={team.logo} alt={team.school} width={36} height={36} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-graphite group-hover:text-green-dark transition-colors leading-tight">Komanda {team.name}</p>
                    <p className="text-[11px] text-graphite/50 leading-tight">{team.school}</p>
                  </div>
                </Link>
              ))}
            </div>
            <Link href="/tvarkarastis" className="text-sm font-semibold text-green-dark hover:underline">Detalus tvarkaraštis →</Link>
          </div>
          <div className="relative min-h-[400px] flex flex-col">
            <div className="relative flex-1 min-h-[320px]">
              <Image src="/figma-assets/fill-60-da247803ab32.png" alt="Vilniaus žemėlapis" fill className="object-cover" />
            </div>
            <Link href="/tvarkarastis" className="bg-green-light px-6 py-5 flex items-center justify-between hover:bg-green-light/80 transition-colors">
              <span className="font-display text-base font-semibold text-green-dark">Detalus tvarkaraštis</span>
              <span className="text-green-dark text-lg font-bold">↗</span>
            </Link>
          </div>
        </div>
      </section>
      <FolkPattern />
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-semibold text-graphite mb-8">Naujienos</h2>
          <div className="grid grid-cols-2 gap-1">
            {/* Top row — 2 tall cards */}
            <Link href="/naujienos/etnozyaidynes-naisiuose" className="relative block overflow-hidden group" style={{ aspectRatio: '4/3' }}>
              <Image src="/figma-assets/fill-72-ef05760f73f6.png" alt="Ketvirtosios etnožaidynės Naisiuose" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-[11px] text-white/60 mb-1">2025 m. liepos 10 d.</p>
                <h3 className="text-sm font-semibold text-white leading-snug">Ketvirtosios etnožaidynės Naisiuose</h3>
              </div>
            </Link>
            <Link href="/naujienos/stovykla-trakuose" className="relative block overflow-hidden group" style={{ aspectRatio: '4/3' }}>
              <Image src="/figma-assets/fill-20-3a15b0153bfe.png" alt="Etnosporto stovykla Trakuose" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-[11px] text-white/60 mb-1">2025 m. rugpjūčio 3 d.</p>
                <h3 className="text-sm font-semibold text-white leading-snug">Etnosporto stovykla Trakuose</h3>
              </div>
            </Link>
            {/* Bottom row — 1 card + inline CTA */}
            <Link href="/naujienos/nauja-sezona-prasideda" className="relative block overflow-hidden group" style={{ aspectRatio: '16/7' }}>
              <Image src="/figma-assets/fill-80-fce1b546192c.png" alt="Nauja sezona prasideda" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-[11px] text-white/60 mb-1">2025 m. rugsėjo 1 d.</p>
                <h3 className="text-sm font-semibold text-white leading-snug">Nauja 2025–2026 m. sezonas prasideda</h3>
              </div>
            </Link>
            <Link href="/naujienos" style={{ aspectRatio: '16/7' }} className="flex items-center justify-between px-8 py-6 border border-green-light hover:bg-green-light/30 transition-colors">
              <span className="font-display text-lg font-semibold text-green-dark">Daugiau naujienų</span>
              <span className="text-green-dark text-xl font-bold">↗</span>
            </Link>
          </div>
        </div>
      </section>
      <FolkPattern inverted />
      <section className="bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 items-stretch">
          <div className="py-16 px-8 md:px-10 flex flex-col justify-between">
            <div>
              <h2 className="font-display text-3xl font-semibold text-graphite mb-6">Organizatoriai</h2>
              <p className="text-sm text-graphite/70 leading-relaxed">Etnosporto lygą organizuoja Lietuvos etnosporto komitetas (LEK) – 2019 m. etnosporto entuziastų įkurta organizacija, siekianti puoselėti lietuviškus tradicinius žaidimus ir ugdyti jaunąją kartą tradicijų dvasia.</p>
            </div>
            <div className="mt-8">
              <div className="w-44 mb-6 overflow-hidden"><FolkPattern rows={2} /></div>
              <Link href="/kontaktai" className="text-sm font-semibold text-green-dark hover:underline">Plačiau apie organizatorius ↗</Link>
            </div>
          </div>
          <div className="relative min-h-[360px]">
            <Image src="/figma-assets/fill-36-725adf135808.png" alt="Organizatoriai" fill className="object-cover object-center" />
          </div>
        </div>
      </section>
      <FolkPattern />
      <SponsorsRow />
    </div>
  );
}
