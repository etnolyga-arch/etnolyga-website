import FolkPattern from '@/components/FolkPattern';

const contacts = [
  { label: 'El. paštas', value: 'etnosportas@gmail.com', href: 'mailto:etnosportas@gmail.com' },
  { label: 'Tel. numeris', value: '+37067992665', href: 'tel:+37067992665' },
  { label: 'Darbo laikas', value: 'I–V 8:00–17:00', href: null },
];

const socials = [
  { label: 'Facebook', value: 'facebook.com/etnolyga', href: 'https://facebook.com/etnolyga' },
  { label: 'Instagram', value: 'instagram.com/etnolyga', href: 'https://instagram.com/etnolyga' },
  { label: 'YouTube', value: 'youtube.com/@etnolyga', href: 'https://youtube.com/@etnolyga' },
];

export default function KontaktaiPage() {
  return (
    <div>
      <section className="bg-green-dark text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-green-light mb-3">Etnolyga</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold">Kontaktai</h1>
        </div>
      </section>
      <FolkPattern />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Contact info */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-graphite mb-8">
              Lietuvos etnosporto komitetas
            </h2>
            <div className="space-y-6">
              {contacts.map((c) => (
                <div key={c.label} className="border-b border-graphite/10 pb-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-graphite/40 mb-1">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="text-sm font-semibold text-green-dark hover:underline">
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-graphite">{c.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="font-display text-xl font-semibold text-graphite mb-6">Socialiniai tinklai</h3>
              <div className="space-y-4">
                {socials.map((s) => (
                  <div key={s.label} className="border-b border-graphite/10 pb-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-graphite/40 mb-1">{s.label}</p>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-green-dark hover:underline">
                      {s.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar / Map placeholder */}
          <div className="space-y-6">
            <div className="h-64 bg-graphite/5 border border-graphite/10 flex items-center justify-center text-graphite/25 text-sm">
              [Žemėlapis]
            </div>
            <div className="bg-green-light/25 border border-green-light p-6">
              <h3 className="font-display text-lg font-semibold text-graphite mb-3">Apie organizaciją</h3>
              <p className="text-sm text-graphite/70 leading-relaxed">
                Lietuvos etnosporto komitetas (LEK) – 2019 m. etnosporto entuziastų įkurta organizacija, siekianti puoselėti ir populiarinti lietuviškus tradicinius sporto žaidimus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
