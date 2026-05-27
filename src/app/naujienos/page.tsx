import Image from "next/image";
import Link from "next/link";
import FolkPattern from "@/components/FolkPattern";
import SponsorsRow from "@/components/SponsorsRow";

const news = [
  { slug: "etnozyaidynes-naisiuose", title: "Ketvirtosios etnožaidynės Naisiuose", date: "2025 m. liepos 10 d.", excerpt: "Tai buvo ne tik sportas. Tai buvo jausmas – kai širdis plaka lietuviškai, bet rankos draugiškai spaudžia ukrainietiškai.", photo: "/figma-assets/fill-72-ef05760f73f6.png" },
  { slug: "stovykla-trakuose", title: "Etnosporto stovykla Trakuose", date: "2025 m. rugpjūčio 3 d.", excerpt: "Projekto metu net 42 jauni žmonės susitiko ne tik tam, kad žaistų, bet ir kad kalbėtų apie labai svarbius dalykus.", photo: "/figma-assets/fill-20-3a15b0153bfe.png" },
  { slug: "nauja-sezona-prasideda", title: "Nauja 2025–2026 m. sezonas prasideda", date: "2025 m. rugsėjo 1 d.", excerpt: "Lietuvos etnosporto komitetas skelbia naujojo sezono startą. Komandos kviečiamos registruotis iki spalio 1 d.", photo: "/figma-assets/fill-80-fce1b546192c.png" },
  { slug: "stovykla-trakuose", title: "Etnosporto stovykla Trakuose", date: "2025 m.", excerpt: "Tradiciniai žaidimai jungia jaunimą per kultūrą ir sportą.", photo: "/figma-assets/fill-24-4d93f8da3b7d.png" },
  { slug: "etnozyaidynes-naisiuose", title: "Naujienų rinkinys", date: "2025 m.", excerpt: "Naujausi etnosporto renginiai ir naujienos iš visos Lietuvos.", photo: "/figma-assets/fill-70-e56dfc5c93e2.png" },
  { slug: "stovykla-trakuose", title: "Etnolyga 2025 sezono apžvalga", date: "2025 m.", excerpt: "Sezono rezultatai, komandų pasiekimai ir artimiausi planai.", photo: "/figma-assets/fill-39-831f9e1c22a7.png" },
];

export default function NaujienosPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[240px] flex items-end overflow-hidden">
        <Image src="/figma-assets/fill-64-ddc0a7c6718c.png" alt="Naujienos" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 w-full pb-10 pt-24">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-white">Naujienos</h1>
        </div>
      </section>
      <FolkPattern />

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

      <FolkPattern />
      <SponsorsRow />
    </div>
  );
}
