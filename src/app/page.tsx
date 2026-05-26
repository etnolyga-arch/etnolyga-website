import Button from '@/components/Button';
import FolkPattern from '@/components/FolkPattern';

const upcomingTeams = [
  { name: '„už Joną"', school: 'Jono Basanavičiaus gimnazija' },
  { name: '„Ballerina Cappuccina"', school: 'Žirmūnų gimnazija' },
  { name: '„Septyniese"', school: 'Simono Daukanto gimnazija' },
  { name: '„Basomis"', school: 'Šv. Kristoforo gimnazija' },
  { name: '„Vazhiuojam"', school: 'Tuskulėnų gimnazija' },
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
          <div className="mb-10">
            {upcomingTeams.map((team, i) => (
              <div key={team.name} className="flex items-center gap-4 py-3 border-b border-graphite/10">
                <span className="text-xs text-graphite/30 w-4">{i + 1}</span>
                <div>
                  <span className="text-sm font-semibold text-graphite">Komanda {team.name}</span>
                  <span className="text-sm text-graphite/55"> — {team.school}</span>
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

      {/* Sponsors */}
      <section className="py-20 px-4 bg-green-dark text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl font-semibold mb-8 text-green-light">Rėmėjai</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6 mb-16">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-14 bg-white/10 border border-white/20 flex items-center justify-center text-white/25 text-xs">
                Rėmėjas {i + 1}
              </div>
            ))}
          </div>
          <h2 className="font-display text-2xl font-semibold mb-8 text-green-light">Partneriai</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-14 bg-white/10 border border-white/20 flex items-center justify-center text-white/25 text-xs">
                Partneris {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


