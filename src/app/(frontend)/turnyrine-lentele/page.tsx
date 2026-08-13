import Image from "next/image";
import SponsorsSection from "@/components/SponsorsSection";
import { type StandingRow } from '@/lib/standings';
import { getStandings } from '@/lib/cms';
import { siteConfig } from '@/lib/site';

function StandingsTable({ label, standings }: { label: string; standings: StandingRow[] }) {
  return (
    <div className="mb-10">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-graphite/40 mb-4 px-4">{label}</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-graphite/10">
              <th className="text-left py-3 px-4 text-xs font-semibold uppercase tracking-wider text-graphite/40 w-8">#</th>
              <th className="text-left py-3 px-4 text-xs font-semibold uppercase tracking-wider text-graphite/40">Komanda</th>
              <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-graphite/40 text-center">Pergalės</th>
              <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-graphite/40 text-center">Lygiosios</th>
              <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-graphite/40 text-center">Pralaimėjimai</th>
              <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-green-dark text-center">Taškai</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((row, i) => (
              <tr key={row.team} className="border-b border-graphite/8 hover:bg-graphite/3 transition-colors">
                <td className="py-3 px-4 text-graphite/40 font-semibold text-xs">{i + 1}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border border-graphite/10 bg-white">
                      <Image src={row.logo} alt={row.team} width={32} height={32} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <p className="font-semibold text-graphite text-sm leading-tight">Komanda {row.team}</p>
                      <p className="text-[11px] text-graphite/50">{row.school}</p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4 text-center text-graphite/70 text-sm">{row.wins}</td>
                <td className="py-3 px-4 text-center text-graphite/70 text-sm">{row.draws}</td>
                <td className="py-3 px-4 text-center text-graphite/70 text-sm">{row.losses}</td>
                <td className="py-3 px-4 text-center font-bold text-green-dark text-sm">{row.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export const revalidate = 30;

export default async function TurnyrineLetelePage() {
  const groups = await getStandings();
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[240px] flex items-end overflow-hidden -mt-14">
        <Image src={siteConfig.pages.turnyrineLentele.heroImage} alt="Turnyrinė lentelė" fill className="object-cover object-top" priority />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 w-full pb-10 pt-24 flex items-end justify-between">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-white">Turnyrinė lentelė</h1>
          <div className="flex items-center gap-2 text-xs pb-1">
            <span className="text-white/50">Sezonas:</span>
            <span className="border border-green-light text-green-light px-3 py-1">{siteConfig.pages.turnyrineLentele.season} ▾</span>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {groups.map(({ label, rows }) => (
            <StandingsTable key={label} label={label} standings={rows} />
          ))}
        </div>
      </section>

      <SponsorsSection />
    </div>
  );
}
