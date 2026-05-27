import Image from "next/image";
import FolkPattern from "@/components/FolkPattern";
import SponsorsRow from "@/components/SponsorsRow";

export default function KontaktaiPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[240px] flex items-end overflow-hidden">
        <Image src="/figma-assets/fill-1-0493a574f954.png" alt="Kontaktai" fill className="object-cover object-top" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 w-full pb-10 pt-24">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-white">Kontaktai</h1>
        </div>
      </section>
      <FolkPattern />

      {/* Contact info + photo */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 grid grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-graphite/40 mb-1">El. paštas</p>
              <a href="mailto:etnosportas@gmail.com" className="text-sm font-semibold text-graphite hover:text-green-dark transition-colors">etnosportas@gmail.com</a>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-graphite/40 mb-1">Facebook</p>
              <a href="https://facebook.com/etnolyga" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-graphite hover:text-green-dark transition-colors">facebook.com/etnolyga</a>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-graphite/40 mb-1">Tel. numeris</p>
              <a href="tel:+37067992665" className="text-sm font-semibold text-graphite hover:text-green-dark transition-colors">+37067992665</a>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-graphite/40 mb-1">Instagram</p>
              <a href="https://instagram.com/etnolyga" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-graphite hover:text-green-dark transition-colors">instagram.com/etnolyga</a>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-graphite/40 mb-1">Darbo laikas</p>
              <p className="text-sm font-semibold text-graphite">I–V – 8:00–17:00</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-graphite/40 mb-1">Youtube</p>
              <a href="https://youtube.com/@etnolyga" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-graphite hover:text-green-dark transition-colors">youtube.com/@etnolyga</a>
            </div>
          </div>
          <div className="relative min-h-[280px]">
            <Image src="/figma-assets/fill-36-725adf135808.png" alt="Etnolyga komanda" fill className="object-cover" />
          </div>
        </div>
      </section>

      <SponsorsRow />
      <FolkPattern />
    </div>
  );
}
