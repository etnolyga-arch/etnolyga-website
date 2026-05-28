import Image from 'next/image';
import Button from '@/components/Button';
import BackButton from '@/components/BackButton';
import { getNewsItem } from '@/lib/news';

export default async function NaujienosSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getNewsItem(slug);

  if (!article) {
    return (
      <div className="py-32 px-4 text-center">
        <h1 className="font-display text-2xl text-graphite">Straipsnis nerastas</h1>
        <Button href="/naujienos" className="mt-6">Grįžti į naujienas</Button>
      </div>
    );
  }

  const paragraphs = (article.body ?? '').split('\n\n').filter(Boolean);

  return (
    <div>
      {article.variant === 2 ? (
        /* Type 2: side-by-side header */
        <section className="bg-green-dark -mt-14">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2">
            <div className="flex flex-col justify-end px-8 pb-12 pt-28 text-white">
              <p className="text-xs tracking-widest uppercase text-green-light mb-4">{article.date}</p>
              <h1 className="font-display text-3xl md:text-4xl font-semibold leading-tight">{article.title}</h1>
            </div>
            <div className="relative min-h-[320px]">
              <Image src={article.photo} alt={article.title} fill className="object-cover" priority sizes="50vw" />
            </div>
          </div>
        </section>
      ) : (
        /* Type 1: full-width hero image with title overlay */
        <section className="relative min-h-[420px] flex items-end overflow-hidden -mt-14">
          <Image src={article.photo} alt={article.title} fill className="object-cover object-center" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
          <div className="relative z-10 max-w-3xl mx-auto px-4 w-full pb-12 pt-24">
            <p className="text-xs tracking-widest uppercase text-green-light mb-4">{article.date}</p>
            <h1 className="font-display text-3xl md:text-5xl font-semibold leading-tight text-white">
              {article.title}
            </h1>
          </div>
        </section>
      )}

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

          <div className="mt-10">
            <BackButton />
          </div>
        </div>
      </section>
    </div>
  );
}
