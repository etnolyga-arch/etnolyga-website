import Button from '@/components/Button';
import FolkPattern from '@/components/FolkPattern';
import Link from 'next/link';

const news = [
  {
    slug: 'etnozyaidynes-naisiuose',
    title: 'Ketvirtosios etnožaidynės Naisiuose',
    date: '2025 m. liepos 10 d.',
    excerpt:
      'Tai buvo ne tik sportas. Tai buvo jausmas – kai širdis plaka lietuviškai, bet rankos draugiškai spaudžia ukrainietiškai.',
    variant: 1,
  },
  {
    slug: 'stovykla-trakuose',
    title: 'Etnosporto stovykla Trakuose',
    date: '2025 m. rugpjūčio 3 d.',
    excerpt:
      'Projekto metu net 42 jauni žmonės susitiko ne tik tam, kad žaistų, bet ir kad kalbėtų apie labai svarbius dalykus.',
    variant: 2,
  },
  {
    slug: 'nauja-sezona-prasideda',
    title: 'Nauja 2025–2026 m. sezonas prasideda',
    date: '2025 m. rugsėjo 1 d.',
    excerpt:
      'Lietuvos etnosporto komitetas skelbia naujojo sezono startą. Komandos kviečiamos registruotis iki spalio 1 d.',
    variant: 1,
  },
];

export default function NaujienosPage() {
  return (
    <div>
      <section className="bg-green-dark text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-green-light mb-3">Etnolyga</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold">Naujienos</h1>
        </div>
      </section>
      <FolkPattern />
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item) => (
              <Link
                key={item.slug}
                href={`/naujienos/${item.slug}`}
                className="block group border border-graphite/10 p-6 hover:border-green-dark transition-colors"
              >
                <p className="text-xs text-graphite/40 mb-3">{item.date}</p>
                <h2 className="font-display text-xl font-semibold text-graphite mb-3 leading-snug group-hover:text-green-dark transition-colors">
                  {item.title}
                </h2>
                <p className="text-sm text-graphite/65 leading-relaxed">{item.excerpt}</p>
                <p className="text-xs text-green-dark font-semibold tracking-wider uppercase mt-4">Skaityti →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
