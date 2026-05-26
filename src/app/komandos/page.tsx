import Button from '@/components/Button';
import FolkPattern from '@/components/FolkPattern';
import Link from 'next/link';

const teams = [
  { slug: 'uz-jona', name: '„už Joną"', school: 'Jono Basanavičiaus gimnazija' },
  { slug: 'ballerina-cappuccina', name: '„Ballerina Cappuccina"', school: 'Žirmūnų gimnazija' },
  { slug: 'basomis', name: '„Basomis"', school: 'Šv. Kristoforo gimnazija' },
  { slug: 'septyniese', name: '„Septyniese"', school: 'Simono Daukanto gimnazija' },
  { slug: 'vazhiuojam', name: '„Vazhiuojam"', school: 'Tuskulėnų gimnazija' },
];

export default function KomandosPage() {
  return (
    <div>
      <section className="bg-green-dark text-white py-16 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs tracking-widest uppercase text-green-light mb-3">Ripka</p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold">Komandos</h1>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-white/50">Sezonas:</span>
            <span className="border border-green-light text-green-light px-3 py-1">2025–2026 m.</span>
          </div>
        </div>
      </section>
      <FolkPattern />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((team) => (
              <Link
                key={team.slug}
                href={`/komandos/${team.slug}`}
                className="block group border border-graphite/10 p-6 hover:border-green-dark transition-colors"
              >
                <div className="h-20 bg-green-light/20 mb-4 flex items-center justify-center text-green-dark/30 text-xs">
                  [Komandos logotipas]
                </div>
                <h2 className="font-display text-xl font-semibold text-graphite group-hover:text-green-dark transition-colors">
                  Komanda {team.name}
                </h2>
                <p className="text-xs text-graphite/50 mt-1">{team.school}</p>
                <p className="text-xs text-green-dark font-semibold tracking-wider uppercase mt-4">
                  Žiūrėti komandą →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
