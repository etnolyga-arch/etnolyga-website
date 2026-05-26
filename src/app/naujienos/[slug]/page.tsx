import Button from '@/components/Button';
import FolkPattern from '@/components/FolkPattern';

const articles: Record<string, { title: string; date: string; body: string; variant: number }> = {
  'etnozyaidynes-naisiuose': {
    title: 'Ketvirtosios etnožaidynės Naisiuose',
    date: '2025 m. liepos 10 d.',
    variant: 1,
    body: `Tai buvo ne tik sportas. Tai buvo jausmas – kai širdis plaka lietuviškai, bet rankos draugiškai spaudžia ukrainietiškai.

Ketvirtosios etnožaidynės Naisiuose surinko daugiau nei šimtą dalyvių iš viso Lietuvos. Šiemet ypatingas akcentas teko bendradarbiavimui su Ukrainos jaunimu, kurie atvyko kaip svečiai.

Žaidynėse varžytasi ripkos, kylos ir ristynių rungtyse. Nugalėtojai buvo apdovanoti tradiciniais rankdarbiais ir diplomais.

Renginio metu vyko ir edukacinė programa – dalyviai susipažino su lietuviškų žaidimų istorija, tradiciniais raštais ir liaudies muzika.`,
  },
  'stovykla-trakuose': {
    title: 'Etnosporto stovykla Trakuose',
    date: '2025 m. rugpjūčio 3 d.',
    variant: 2,
    body: `Projekto metu net 42 jauni žmonės susitiko ne tik tam, kad žaistų, bet ir kad kalbėtų apie labai svarbius dalykus – toleranciją, pilietiškumą ir tapatybę.

Trakų pilyje ir jos apylinkėse vyko intensyvi keturių dienų stovykla. Dalyviai mokėsi žaisti ripką, kylą ir ristyneles, o vakarais dalyvavo diskusijose ir kultūrinėse programose.

Stovyklą finansavo Jaunimo reikalų departamentas prie Socialinės apsaugos ir darbo ministerijos.`,
  },
  'nauja-sezona-prasideda': {
    title: 'Nauja 2025–2026 m. sezonas prasideda',
    date: '2025 m. rugsėjo 1 d.',
    variant: 1,
    body: `Lietuvos etnosporto komitetas skelbia naujojo 2025–2026 m. sezono startą.

Šiais metais prie lygos gali jungtis mokyklos iš visos Lietuvos. Komandos kviečiamos registruotis iki spalio 1 d. per oficialų el. paštą etnosportas@gmail.com.

Naujajame sezone dalyvaus ne mažiau kaip 10 komandų. Varžybos vyks dviem etapais – grupiniame ir išmušimo etapuose.`,
  },
};

export default async function NaujienosSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return (
      <div className="py-32 px-4 text-center">
        <h1 className="font-display text-2xl text-graphite">Straipsnis nerastas</h1>
        <Button href="/naujienos" className="mt-6">Grįžti į naujienas</Button>
      </div>
    );
  }

  const paragraphs = article.body.split('\n\n').filter(Boolean);

  return (
    <div>
      {/* Hero */}
      <section className="bg-green-dark text-white py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-green-light mb-4">{article.date}</p>
          <h1 className="font-display text-3xl md:text-5xl font-semibold leading-tight">
            {article.title}
          </h1>
        </div>
      </section>
      <FolkPattern />

      {/* Article body */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <article className="space-y-6">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-graphite/80 leading-relaxed">
                {p}
              </p>
            ))}
          </article>

          {/* Image placeholder */}
          <div className="mt-10 h-64 bg-green-light/20 border border-green-light flex items-center justify-center text-green-dark/30 text-sm">
            [Straipsnio nuotrauka]
          </div>

          <div className="mt-10">
            <Button href="/naujienos" variant="outline">← Grįžti</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
