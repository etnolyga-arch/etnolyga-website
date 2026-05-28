import Image from "next/image";
import SponsorsRow from "@/components/SponsorsRow";
import { schedule } from '@/lib/schedule';
import { siteConfig } from '@/lib/site';

export default function TvarkarastisPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[240px] flex items-end overflow-hidden -mt-14">
        <Image src={siteConfig.pages.tvarkarastis.heroImage} alt="Tvarkaraštis" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 w-full pb-10 pt-24">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-green-light mb-3">{siteConfig.pages.tvarkarastis.season}</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-white">Tvarkaraštis</h1>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          {schedule.map((match, i) => (
            <div key={i} className="border border-graphite/10">
              <div className="bg-green-dark text-white px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <p className="font-display text-lg font-semibold">{match.date}</p>
                  <p className="text-xs text-green-light">{match.time} · {match.location}</p>
                </div>
                <span className="text-xs font-semibold tracking-widest uppercase text-green-light/70">{match.group}</span>
              </div>
              <div className="px-6 py-5">
                <p className="text-[11px] uppercase tracking-widest text-graphite/40 mb-3">Dalyvaujančios komandos</p>
                <ul className="space-y-3">
                  {match.teams.map((team) => (
                    <li key={team.name} className="flex items-center gap-3">
                      {team.logo && (
                        <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 border border-graphite/10 bg-white">
                          <Image src={team.logo} alt={team.name} width={28} height={28} className="w-full h-full object-contain" />
                        </div>
                      )}
                      <span className="text-sm text-graphite">{team.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SponsorsRow />
    </div>
  );
}
