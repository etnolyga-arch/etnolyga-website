import Image from "next/image";
import Link from "next/link";
import FolkPattern from "@/components/FolkPattern";
import SponsorsRow from "@/components/SponsorsRow";

const timeline = [
  { period: "XVII–XIX a.", text: "Ripka minima kronikose, pasakojimuose, S. Daukanto ir M. Valančiaus raštuose kaip populiarus liaudies žaidimas." },
  { period: "1923 m.", text: "Karolis Dineika parengė pirmąsias stadionui pritaikytas taisykles. Surengtos pirmosios oficialios rungtynės." },
  { period: "1961 m.", text: "Įvyko pirmasis Lietuvos ripkos čempionatas – svarbus žingsnis organizuojant šį sportą nacionaliniu mastu." },
  { period: "Šiandien", text: "Ripka aktyviausiai žaidžiama Žemaitijoje. Lietuvos ritinio sporto federacija skatina žaidimo plėtrą." },
];

export default function ApieRipkaPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[240px] flex items-end overflow-hidden">
        <Image src="/figma-assets/fill-1-0493a574f954.png" alt="Ripka" fill className="object-cover object-top" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 w-full pb-10 pt-24">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-white">Ripka (ritinis)</h1>
        </div>
      </section>
      <FolkPattern />

      {/* Game description */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 items-stretch">
          <div className="py-16 px-8 md:px-10">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-graphite mb-6">Žaidimo aprašymas</h2>
            <div className="space-y-4 text-sm text-graphite/75 leading-relaxed">
              <p>Futbolo aikštėje susitinka dvi komandos po 7 žaidėjus, kurie stengiasi paridenti gumos diską (ripką) per varžovų galinę liniją. Žaidimas reikalauja greitumo, koordinacijos ir komandinio darbo.</p>
              <p>Ripka žaidžiama specialiomis lazdelėmis, kuriomis ritinamas guminis diskas. Žaidimo trukmė – du kėliniai po 20 minučių.</p>
              <p>Komandos sudaro puolėjai ir gynėjai, kurių vaidmenys kinta dinamiškai per rungtynes.</p>
            </div>
          </div>
          <div className="relative min-h-[360px]">
            <Image src="/figma-assets/fill-20-3a15b0153bfe.png" alt="Ripkos žaidimas" fill className="object-cover" />
          </div>
        </div>
      </section>

      <FolkPattern inverted />

      {/* History */}
      <section className="bg-green-dark py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-10">Ripkos istorija</h2>
          <div className="grid md:grid-cols-4 gap-px bg-white/10">
            {timeline.map((item) => (
              <div key={item.period} className="bg-green-dark p-6">
                <p className="font-display text-lg font-semibold text-green-light mb-3">{item.period}</p>
                <p className="text-sm text-white/70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FolkPattern />

      {/* Ripka today */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 items-stretch">
          <div className="relative min-h-[360px]">
            <Image src="/figma-assets/fill-80-fce1b546192c.png" alt="Ripka šiandien" fill className="object-cover" />
          </div>
          <div className="py-16 px-8 md:px-10 bg-green-light/20 flex flex-col justify-between">
            <div>
              <h2 className="font-display text-2xl font-semibold text-graphite mb-4">Ripka šiandien</h2>
              <p className="text-sm text-graphite/75 leading-relaxed mb-4">Ripka aktyviausiai žaidžiama Žemaitijoje (Plungė, Kupiškis, Kaunas, Vilkaviškis, Elektrėnai ir Šiauliai). Lietuvos ritinio sporto federacija koordinuoja čempionatų organizavimą ir taisyklių kūrimą.</p>
              <p className="text-sm text-graphite/75 leading-relaxed">Federacija vienija daugiau nei 20 klubų visoje Lietuvoje ir kasmet rengia Lietuvos čempionatą.</p>
            </div>
            <div className="mt-8">
              <FolkPattern />
              <div className="mt-6">
                <Link href="https://www.lrsf.lt" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-green-dark hover:underline">
                  Plačiau apie federaciją ↗
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FolkPattern inverted />

      {/* Rules */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 items-stretch">
          <div className="py-16 px-8 md:px-10 flex flex-col justify-between">
            <div>
              <h2 className="font-display text-2xl font-semibold text-graphite mb-4">Taisyklės</h2>
              <p className="text-sm text-graphite/75 leading-relaxed mb-4">Lietuvos ritinio sporto federacija tvirtina žaidimo taisykles, paskelbtas 2023 m. taisyklių sąvade.</p>
              <p className="text-sm text-graphite/75 leading-relaxed">Ripkoje draudžiama: žaidėjus stumti, laikyti, naudoti lazdelę kaip ginklą, skraidinti ripką per tam tikrą aukštį.</p>
            </div>
            <div className="mt-8">
              <FolkPattern />
              <div className="mt-6">
                <Link href="https://www.lrsf.lt/taisykles" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-green-dark hover:underline">
                  Ripkos taisyklės ↗
                </Link>
              </div>
            </div>
          </div>
          <div className="relative min-h-[380px]">
            <Image src="/figma-assets/fill-64-ddc0a7c6718c.png" alt="Ripkos įranga" fill className="object-cover" />
          </div>
        </div>
      </section>

      <FolkPattern />
      <SponsorsRow />
    </div>
  );
}
