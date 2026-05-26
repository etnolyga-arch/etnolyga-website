import FolkPattern from '@/components/FolkPattern';

type Match = {
  date: string;
  time: string;
  location: string;
  group: string;
  teams: string[];
};

const schedule: Match[] = [
  {
    date: '2026 m. gegužės 7 d.',
    time: '9:00–17:00',
    location: 'Simono Daukanto gimnazijos stadionas, Vilnius',
    group: '1-asis pogrūpis',
    teams: ['Komanda „už Joną"', 'Komanda „Ballerina Cappuccina"', 'Komanda „Septyniese"', 'Komanda „Basomis"', 'Komanda „Vazhiuojam"'],
  },
  {
    date: '2026 m. gegužės 14 d.',
    time: '10:00–16:00',
    location: 'Žirmūnų gimnazija, Vilnius',
    group: '2-asis pogrūpis',
    teams: ['Komanda „Ąžuolai"', 'Komanda „Pelėdžiukai"', 'Komanda „Liūtai"', 'Komanda „Vanagai"'],
  },
  {
    date: '2026 m. birželio 4 d.',
    time: '11:00–18:00',
    location: 'LKL arenos sporto aikštynas, Vilnius',
    group: 'Finalinis etapas',
    teams: ['Geriausi 1-ojo ir 2-ojo pogrūpių'],
  },
];

export default function TvarkarastisPage() {
  return (
    <div>
      <section className="bg-green-dark text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-green-light mb-3">2025–2026 m. sezonas</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold">Tvarkaraštis</h1>
        </div>
      </section>
      <FolkPattern />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-10">
          {schedule.map((match, i) => (
            <div key={i} className="border border-graphite/10">
              <div className="bg-green-dark text-white px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <p className="font-display text-lg font-semibold">{match.date}</p>
                  <p className="text-xs text-green-light">{match.time} · {match.location}</p>
                </div>
                <span className="text-xs font-semibold tracking-widest uppercase text-green-light/70">
                  {match.group}
                </span>
              </div>
              <div className="px-6 py-5">
                <p className="text-xs uppercase tracking-widest text-graphite/40 mb-3">Dalyvaujančios komandos</p>
                <ul className="space-y-2">
                  {match.teams.map((team) => (
                    <li key={team} className="text-sm text-graphite flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-dark inline-block" />
                      {team}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
