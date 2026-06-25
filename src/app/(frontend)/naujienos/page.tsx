import Image from "next/image";
import Link from "next/link";
import SponsorsRow from "@/components/SponsorsRow";
import { news } from '@/lib/news';

export default function NaujienosPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[240px] flex items-end overflow-hidden -mt-14">
        <Image src="/images/sports/ripka/equipment/stick-and-disc.png" alt="Naujienos" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 w-full pb-10 pt-24">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-white">Naujienos</h1>
        </div>
      </section>

      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {news.map((item, i) => (
              <Link
                key={i}
                href={"/naujienos/" + item.slug}
                className="relative block overflow-hidden group"
                style={{ aspectRatio: "3/4" }}
              >
                <Image src={item.photo} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-[10px] text-white/55 mb-1">{item.date}</p>
                  <h2 className="text-sm font-semibold text-white leading-snug mb-2">{item.title}</h2>
                  <p className="text-[11px] text-white/65 leading-snug line-clamp-2">{item.excerpt}</p>
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
