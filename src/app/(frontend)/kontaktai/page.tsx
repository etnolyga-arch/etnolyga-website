import Image from "next/image";
import SponsorsSection from "@/components/SponsorsSection";
import { getSiteSettings } from '@/lib/cms';
import { siteConfig } from '@/lib/site';

export const revalidate = 30;

export default async function KontaktaiPage() {
  const { contact } = await getSiteSettings();
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[240px] flex items-end overflow-hidden -mt-14">
        <Image src={siteConfig.pages.kontaktai.heroImage} alt="Kontaktai" fill className="object-cover object-top" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 w-full pb-10 pt-24">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-white">Kontaktai</h1>
        </div>
      </section>

      {/* Contact info + photo */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 grid grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-graphite/40 mb-1">El. paštas</p>
              <a href={`mailto:${contact.email}`} className="text-sm font-semibold text-graphite hover:text-green-dark transition-colors">{contact.email}</a>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-graphite/40 mb-1">Facebook</p>
              <a href={contact.facebook.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-graphite hover:text-green-dark transition-colors">{contact.facebook.label}</a>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-graphite/40 mb-1">Tel. numeris</p>
              <a href={`tel:${contact.phone}`} className="text-sm font-semibold text-graphite hover:text-green-dark transition-colors">{contact.phone}</a>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-graphite/40 mb-1">Instagram</p>
              <a href={contact.instagram.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-graphite hover:text-green-dark transition-colors">{contact.instagram.label}</a>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-graphite/40 mb-1">Darbo laikas</p>
              <p className="text-sm font-semibold text-graphite">{contact.hours}</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-graphite/40 mb-1">Youtube</p>
              <a href={contact.youtube.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-graphite hover:text-green-dark transition-colors">{contact.youtube.label}</a>
            </div>
          </div>
          <div className="relative min-h-[280px]">
            <Image src={contact.photo} alt="Etnolyga komanda" fill className="object-cover" />
          </div>
        </div>
      </section>

      <SponsorsSection />
    </div>
  );
}
