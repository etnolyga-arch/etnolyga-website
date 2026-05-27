import Button from '@/components/Button';

type Player = { name: string; role: 'Puolėjas' | 'Gynėjas' };

const teams: Record<
  string,
  { name: string; school: string; coach: string; players: Player[]; quote?: string; quoteAuthor?: string }
> = {
  'uz-jona': {
    name: '„už Joną"',
    school: 'Jono Basanavičiaus gimnazija',
    coach: 'Vyr. mok. Jonas Jonaitis',
    players: [
      { name: 'Mantas Petrauskas', role: 'Puolėjas' },
      { name: 'Lukas Kazlauskas', role: 'Puolėjas' },
      { name: 'Tomas Stankevičius', role: 'Puolėjas' },
      { name: 'Erikas Vaitkus', role: 'Gynėjas' },
      { name: 'Paulius Jankauskas', role: 'Gynėjas' },
      { name: 'Darius Baranauskas', role: 'Gynėjas' },
      { name: 'Matas Žilinskas', role: 'Gynėjas' },
    ],
    quote:
      'Kaip aušrai auštant nyksta ant žemės nakties tamsybė, o kad taip jau prašvistų ir Lietuvos dvasia',
    quoteAuthor: 'Dr. Jonas Basanavičius',
  },
  'ballerina-cappuccina': {
    name: '„Ballerina Cappuccina"',
    school: 'Žirmūnų gimnazija',
    coach: 'Vyr. mok. Rasa Klimienė',
    players: [
      { name: 'Ieva Mockutė', role: 'Puolėjas' },
      { name: 'Greta Viliūnaitė', role: 'Puolėjas' },
      { name: 'Kotryna Žukaitė', role: 'Puolėjas' },
      { name: 'Simona Paulauskaitė', role: 'Gynėjas' },
      { name: 'Viktorija Krasauskaitė', role: 'Gynėjas' },
      { name: 'Eglė Janušaitė', role: 'Gynėjas' },
      { name: 'Rūta Bielskytė', role: 'Gynėjas' },
    ],
  },
};

const defaultTeam = {
  name: '„Komanda"',
  school: 'Mokykla',
  coach: 'Treneris',
  players: [],
};

export default async function KomandaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const team = teams[slug] ?? { ...defaultTeam, name: `„${slug}"` };

  const puolejai = team.players.filter((p) => p.role === 'Puolėjas');
  const gynejai = team.players.filter((p) => p.role === 'Gynėjas');

  return (
    <div>
      <section className="bg-green-dark text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-green-light mb-4">{team.school}</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold">Komanda {team.name}</h1>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Players */}
          <div className="md:col-span-2 space-y-8">
            {puolejai.length > 0 && (
              <div>
                <h2 className="font-display text-xl font-semibold text-graphite mb-4">Puolėjai</h2>
                <div className="space-y-2">
                  {puolejai.map((p) => (
                    <div key={p.name} className="flex items-center gap-3 py-2 border-b border-graphite/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-dark" />
                      <span className="text-sm text-graphite">{p.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {gynejai.length > 0 && (
              <div>
                <h2 className="font-display text-xl font-semibold text-graphite mb-4">Gynėjai</h2>
                <div className="space-y-2">
                  {gynejai.map((p) => (
                    <div key={p.name} className="flex items-center gap-3 py-2 border-b border-graphite/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-dark" />
                      <span className="text-sm text-graphite">{p.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {team.players.length === 0 && (
              <p className="text-sm text-graphite/50">Sudėtis dar nepaskelbta.</p>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-green-light/20 border border-green-light p-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-graphite/50 mb-2">
                Komandos treneris
              </h3>
              <p className="font-display text-lg font-semibold text-graphite">{team.coach}</p>
            </div>
            <div className="h-32 bg-graphite/5 border border-graphite/10 flex items-center justify-center text-graphite/25 text-xs">
              [Komandos nuotrauka]
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      {team.quote && (
        <section className="py-16 px-4 bg-green-dark text-white">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-display text-xl md:text-2xl font-semibold leading-relaxed mb-4">
              &ldquo;{team.quote}&rdquo;
            </p>
            {team.quoteAuthor && (
              <p className="text-xs tracking-widest uppercase text-green-light">— {team.quoteAuthor}</p>
            )}
          </div>
        </section>
      )}

      <section className="py-10 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <Button href="/komandos" variant="outline">← Grįžti</Button>
        </div>
      </section>
    </div>
  );
}
