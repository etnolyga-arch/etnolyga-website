import Image from "next/image";
import SponsorsRow from "@/components/SponsorsRow";

const schedule = [
  {
    date: "2026 m. gegužės 7 d.",
    time: "9:00–17:00",
    location: "Simono Daukanto gimnazijos stadionas, Vilnius",
    group: "1-asis pogrūpis",
    teams: ["Komanda „Už Joną\"", "Komanda „Ballerina Cappuccina\"", "Komanda „Septyniese\"", "Komanda „Basomis\"", "Komanda „Vazhiuojam\""],
    logos: ["/figma-assets/fill-51-b1709e66d56c.png", "/figma-assets/fill-50-afcb95bb3939.png", "/figma-assets/fill-4-0c2ce59a681e.png", "/figma-assets/fill-28-5cc1867c0b1b.png", "/figma-assets/fill-14-2f58aff4c3d8.png"],
  },
  {
    date: "2026 m. gegužės 14 d.",
    time: "10:00–16:00",
    location: "Žirmūnų gimnazija, Vilnius",
    group: "2-asis pogrūpis",
    teams: ["Komanda „Ąžuolai\"", "Komanda „Pelėdžiukai\"", "Komanda „Liūtai\"", "Komanda „Vanagai\""],
    logos: ["/figma-assets/fill-51-b1709e66d56c.png", "/figma-assets/fill-28-5cc1867c0b1b.png", "/figma-assets/fill-50-afcb95bb3939.png", "/figma-assets/fill-4-0c2ce59a681e.png"],
  },
  {
    date: "2026 m. birželio 4 d.",
    time: "11:00–18:00",
    location: "LKL arenos sporto aikštynas, Vilnius",
    group: "Finalinis etapas",
    teams: ["Geriausi 1-ojo ir 2-ojo pogrūpių"],
    logos: [],
  },
];

export default function TvarkarastisPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[240px] flex items-end overflow-hidden">
        <Image src="/figma-assets/fill-6-149c9987ca45.png" alt="Tvarkaraštis" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 w-full pb-10 pt-24">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-green-light mb-3">2025–2026 m. sezonas</p>
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
                  {match.teams.map((team, j) => (
                    <li key={team} className="flex items-center gap-3">
                      {match.logos[j] && (
                        <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 border border-graphite/10 bg-white">
                          <Image src={match.logos[j]} alt={team} width={28} height={28} className="w-full h-full object-contain" />
                        </div>
                      )}
                      <span className="text-sm text-graphite">{team}</span>
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
