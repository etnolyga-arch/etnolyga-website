import FolkPattern from '@/components/FolkPattern';

type Standing = {
  team: string;
  wins: number;
  draws: number;
  losses: number;
  points: number;
};

const group1: Standing[] = [
  { team: 'Komanda „už Joną"', wins: 4, draws: 0, losses: 0, points: 12 },
  { team: 'Komanda „Septyniese"', wins: 3, draws: 1, losses: 0, points: 10 },
  { team: 'Komanda „Ballerina Cappuccina"', wins: 2, draws: 0, losses: 2, points: 6 },
  { team: 'Komanda „Basomis"', wins: 1, draws: 0, losses: 3, points: 3 },
  { team: 'Komanda „Vazhiuojam"', wins: 0, draws: 1, losses: 3, points: 1 },
];

const group2: Standing[] = [
  { team: 'Komanda „Ąžuolai"', wins: 3, draws: 1, losses: 0, points: 10 },
  { team: 'Komanda „Liūtai"', wins: 3, draws: 0, losses: 1, points: 9 },
  { team: 'Komanda „Vanagai"', wins: 1, draws: 1, losses: 2, points: 4 },
  { team: 'Komanda „Pelėdžiukai"', wins: 0, draws: 0, losses: 4, points: 0 },
];

function StandingsTable({ standings }: { standings: Standing[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b-2 border-green-dark">
            <th className="text-left py-3 px-4 text-xs font-semibold uppercase tracking-wider text-graphite/50">
              #
            </th>
            <th className="text-left py-3 px-4 text-xs font-semibold uppercase tracking-wider text-graphite/50">
              Komanda
            </th>
            <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-graphite/50 text-center">
              Pergalės
            </th>
            <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-graphite/50 text-center">
              Lygiosios
            </th>
            <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-graphite/50 text-center">
              Pralaimėjimai
            </th>
            <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-green-dark text-center">
              Taškai
            </th>
          </tr>
        </thead>
        <tbody>
          {standings.map((row, i) => (
            <tr
              key={row.team}
              className={`border-b border-graphite/10 ${i === 0 ? 'bg-green-light/20' : ''}`}
            >
              <td className="py-3 px-4 text-graphite/40 font-semibold">{i + 1}</td>
              <td className="py-3 px-4 text-graphite font-semibold">{row.team}</td>
              <td className="py-3 px-4 text-center text-graphite/70">{row.wins}</td>
              <td className="py-3 px-4 text-center text-graphite/70">{row.draws}</td>
              <td className="py-3 px-4 text-center text-graphite/70">{row.losses}</td>
              <td className="py-3 px-4 text-center font-bold text-green-dark">{row.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function TurnyrineLetelePage() {
  return (
    <div>
      <section className="bg-green-dark text-white py-16 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs tracking-widest uppercase text-green-light mb-3">Ripka</p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold">Turnyrinė lentelė</h1>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-white/50">Sezonas:</span>
            <span className="border border-green-light text-green-light px-3 py-1">2025–2026 m.</span>
          </div>
        </div>
      </section>
      <FolkPattern />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-14">
          {/* Group 1 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-graphite mb-6">1-o pogrūpio komandos</h2>
            <StandingsTable standings={group1} />
          </div>

          {/* Group 2 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-graphite mb-6">2-o pogrūpio komandos</h2>
            <StandingsTable standings={group2} />
          </div>

          {/* Finals */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-graphite mb-6">Finalinis etapas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-green-dark p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-green-dark mb-4">
                  Didysis finalas
                </p>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-lg font-semibold text-graphite">Komanda „už Joną"</span>
                  <span className="text-xs text-graphite/40 font-bold">vs</span>
                  <span className="font-display text-lg font-semibold text-graphite">Komanda „Ąžuolai"</span>
                </div>
                <p className="text-xs text-graphite/40 mt-3">2026 m. birželio 4 d.</p>
              </div>
              <div className="border border-graphite/20 p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-graphite/50 mb-4">
                  Mažasis finalas (3 vieta)
                </p>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-lg font-semibold text-graphite">Komanda „Septyniese"</span>
                  <span className="text-xs text-graphite/40 font-bold">vs</span>
                  <span className="font-display text-lg font-semibold text-graphite">Komanda „Liūtai"</span>
                </div>
                <p className="text-xs text-graphite/40 mt-3">2026 m. birželio 4 d.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
