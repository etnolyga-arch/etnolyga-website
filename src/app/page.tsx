import Button from '@/components/Button';
import FolkPattern from '@/components/FolkPattern';

const upcomingTeams = [
  { name: '„Už Joną“', school: 'Jono Basanavičiaus gimnazija', bg: ['#0d2d1c', '#1a4a2e'] },
  { name: '„Ballerina Cappuccina“', school: 'Žirmūnų gimnazija', bg: ['#1a3d28', '#2d6040'] },
  { name: '„Septyniese“', school: 'Simono Daukanto gimnazija', bg: ['#0a2418', '#162f20'] },
  { name: '„Basomis“', school: 'Šv. Kristoforo gimnazija', bg: ['#153122', '#1e4530'] },
  { name: '„Vazhiuojam“', school: 'Tuskulėnų gimnazija', bg: ['#0f2c1e', '#1b3d28'] },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-green-dark text-white py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-green-light mb-6">Etnolyga</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-8 max-w-3xl">
            Etnolyga – iniciatyva, siekianti inovatyviai plėtoti Lietuvos tradicinius sporto žaidimus.
          </h1>
          <p className="text-sm text-white/70 max-w-2xl mb-10 leading-relaxed">
            Etnolyga yra skirta 16–19 m. moksleiviams, kurie varžysis žaisdami lietuvišką ripką. Lygos tikslas – integruoti lietuvišką tradiciją į šiuolaikinę jaunimo kultūrą ir ugdyti bendrystės jausmą.
          </p>
          <Button href="/apie-ripka" variant="white">Plačiau apie ripką</Button>
        </div>
      </section>

      <FolkPattern />

      {/* Upcoming matches */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-graphite mb-3">
            Artimiausios varžybos
          </h2>
          <p className="text-sm text-graphite/60 mb-1">2026 m. gegužės 7 d. 9–17 val.</p>
          <p className="text-sm text-graphite/60 mb-8">Simono Daukanto gimnazijos stadionas, Vilnius</p>
          <p className="text-xs font-semibold uppercase tracking-widest text-graphite/40 mb-5">
            Susitinka 1-o pogrūpio komandos:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-10">
            {upcomingTeams.map((team, i) => (
              <div
                key={team.name}
                className="relative h-44 overflow-hidden"
                style={{ background: `linear-gradient(145deg, ${team.bg[0]} 0%, ${team.bg[1]} 100%)` }}
              >
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full border border-white/25 bg-white/10 flex items-center justify-center">
                  <span className="text-[9px] font-bold text-white/50">{i + 1}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-sm leading-snug">Komanda {team.name}</p>
                  <p className="text-white/60 text-[11px] mt-0.5 leading-tight">{team.school}</p>
                </div>
              </div>
            ))}
          </div>
          <Button href="/tvarkarastis">Detalus tvarkaraštis</Button>
        </div>
      </section>

      <FolkPattern inverted />

      {/* News */}
      <section className="py-20 px-4 bg-green-light/25">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-graphite mb-10">Naujienos</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white p-8 border border-graphite/10">
              <p className="text-xs text-graphite/40 mb-3">2025 m. liepos 10 d.</p>
              <h3 className="font-display text-2xl font-semibold text-graphite mb-4 leading-snug">
                Ketvirtosios etnožaidynės Naisiuose
              </h3>
              <p className="text-sm text-graphite/65 leading-relaxed mb-6">
                Tai buvo ne tik sportas. Tai buvo jausmas – kai širdis plaka lietuviškai, bet rankos draugiškai spaudžia ukrainietiškai.
              </p>
              <Button href="/naujienos/etnozyaidynes-naisiuose" variant="outline">Skaityti</Button>
            </div>
            <div className="bg-white p-8 border border-graphite/10 flex flex-col justify-between">
              <div>
                <p className="text-xs text-graphite/40 mb-3">2025 m.</p>
                <h3 className="font-display text-2xl font-semibold text-graphite mb-4 leading-snug">
                  Etnosporto stovykla Trakuose
                </h3>
                <p className="text-sm text-graphite/65 leading-relaxed">
                  Projekto metu net 42 jauni žmonės susitiko ne tik tam, kad žaistų, bet ir kad kalbėtų apie svarbius dalykus.
                </p>
              </div>
              <Button href="/naujienos/stovykla-trakuose" variant="outline" className="mt-6 self-start">Skaityti</Button>
            </div>
          </div>
          <Button href="/naujienos">Daugiau naujienų</Button>
        </div>
      </section>

      <FolkPattern />

      {/* Organisers */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-graphite mb-6">Organizatoriai</h2>
            <p className="text-sm text-graphite/70 leading-relaxed mb-8">
              Etnosporto lygą organizuoja Lietuvos etnosporto komitetas (LEK) – 2019 m. etnosporto entuziastų įkurta organizacija, siekianti puoselėti lietuviškus tradicinius žaidimus ir ugdyti jaunąją kartą tradicijų dvasia.
            </p>
            <Button href="/kontaktai" variant="outline">Plačiau apie organizatorius</Button>
          </div>
          <div className="h-48 bg-green-light/30 flex items-center justify-center text-green-dark/30 text-sm border border-green-light">
            [Organizatorių nuotrauka]
          </div>
        </div>
      </section>

      <FolkPattern />

      {/* Sponsors */}
      <section className="py-20 px-4 bg-green-dark text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl font-semibold mb-8 text-green-light">Rėmėjai</h2>
          <div className="flex items-center gap-3 mb-16">
            <button className="flex-shrink-0 w-8 h-8 border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white/50 transition-colors text-lg leading-none">‹</button>
            <div className="flex-1 flex gap-3">
              {['DLG', 'CO', '–', '–', '–'].map((name, i) => (
                <div key={i} className="flex-1 h-14 bg-white/10 border border-white/10 flex items-center justify-center text-white/30 text-xs font-semibold min-w-0">
                  {name}
                </div>
              ))}
            </div>
            <button className="flex-shrink-0 w-8 h-8 border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white/50 transition-colors text-lg leading-none">›</button>
          </div>
          <h2 className="font-display text-2xl font-semibold mb-8 text-green-light">Partneriai</h2>
          <div className="flex items-center gap-3">
            <button className="flex-shrink-0 w-8 h-8 border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white/50 transition-colors text-lg leading-none">‹</button>
            <div className="flex-1 flex gap-3">
              {['Jūrų', '–', '–', '–'].map((name, i) => (
                <div key={i} className="flex-1 h-14 bg-white/10 border border-white/10 flex items-center justify-center text-white/30 text-xs font-semibold min-w-0">
                  {name}
                </div>
              ))}
            </div>
            <button className="flex-shrink-0 w-8 h-8 border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white/50 transition-colors text-lg leading-none">›</button>
          </div>
        </div>
      </section>
    </div>
  );
}


