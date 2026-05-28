import Image from "next/image";
import Link from "next/link";
import SponsorsRow from "@/components/SponsorsRow";
import { teams } from '@/lib/teams';
import { siteConfig } from '@/lib/site';

export default function KomandosPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[240px] flex items-end overflow-hidden -mt-14">
        <Image src={siteConfig.pages.komandos.heroImage} alt="Komandos" fill className="object-cover object-top" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 w-full pb-10 pt-24 flex items-end justify-between">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-white">Komandos</h1>
          <div className="flex items-center gap-2 text-xs pb-1">
            <span className="text-white/50">Sezonas:</span>
            <span className="border border-green-light text-green-light px-3 py-1">{siteConfig.pages.komandos.season}</span>
          </div>
        </div>
      </section>

      <section className="bg-white py-2 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 gap-1">
            {teams.map((team) => (
              <Link
                key={team.slug}
                href={`/komandos/${team.slug}`}
                className="relative block overflow-hidden group"
                style={{ aspectRatio: "4/3" }}
              >
                <Image src={team.photo} alt={team.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/80 bg-white">
                      <Image src={team.logo} alt={team.school} width={36} height={36} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white leading-tight">Komanda {team.name}</p>
                      <p className="text-[11px] text-white/65">{team.school}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SponsorsRow />
    </div>
  );
}
