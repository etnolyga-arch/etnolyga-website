import Button from '@/components/Button';
import FolkPattern from '@/components/FolkPattern';

const timeline = [
  {
    period: 'XVII–XIX a.',
    text: 'Ripka minima kronikose, pasakojimuose, S. Daukanto ir M. Valančiaus raštuose kaip populiarus liaudies žaidimas.',
  },
  {
    period: '1923 m.',
    text: 'Karolis Dineika parengė pirmąsias stadionui pritaikytas taisykles. Surengtos pirmosios oficialios rungtynės.',
  },
  {
    period: '1961 m.',
    text: 'Įvyko pirmasis Lietuvos ripkos čempionatas – svarbus žingsnis organizuojant šį sportą nacionaliniu mastu.',
  },
  {
    period: 'Šiandien',
    text: 'Ripka aktyviausiai žaidžiama Žemaitijoje (Plungė, Kupiškis, Kaunas, Vilkaviškis, Elektrėnai ir Šiauliai). Lietuvos ritinio sporto federacija skatina žaidimo plėtrą.',
  },
];

export default function ApieRipkaPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-green-dark text-white py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-green-light mb-4">Tradicinis lietuvių žaidimas</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold mb-8">Ripka (ritinis)</h1>
          <p className="text-sm text-white/70 max-w-2xl leading-relaxed">
            Futbolo aikštėje susitinka dvi komandos po 7 žaidėjus, kurie stengiasi paridenti gumos diską (ripką) per varžovų galinę liniją.
          </p>
        </div>
      </section>
      <FolkPattern />

      {/* Game description */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-graphite mb-6">
              Žaidimo aprašymas
            </h2>
            <div className="space-y-4 text-sm text-graphite/75 leading-relaxed">
              <p>
                Futbolo aikštėje susitinka dvi komandos po 7 žaidėjus, kurie stengiasi paridenti gumos diską (ripką) per varžovų galinę liniją. Žaidimas reikalauja greitumo, koordinacijos ir komandinio darbo.
              </p>
              <p>
                Ripka žaidžiama specialiomis lazdelėmis, kuriomis ritinamas guminis diskas. Žaidimo trukmė – du kėliniai po 20 minučių.
              </p>
              <p>
                Komandos sudaro puolėjai ir gynėjai, kurių vaidmenys kinta dinamiškai per rungtynes.
              </p>
            </div>
          </div>
          <div className="h-72 bg-green-light/25 border border-green-light flex items-center justify-center text-green-dark/30 text-sm">
            [Ripkos žaidimo nuotrauka]
          </div>
        </div>
      </section>

      <FolkPattern inverted />

      {/* Timeline */}
      <section className="py-20 px-4 bg-green-light/15">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-graphite mb-12">
            Ripkos istorija
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-green-dark/20" />
            <div className="space-y-10">
              {timeline.map((item) => (
                <div key={item.period} className="pl-12 relative">
                  <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-green-dark border-2 border-white" />
                  <p className="font-display text-lg font-semibold text-green-dark mb-2">{item.period}</p>
                  <p className="text-sm text-graphite/75 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FolkPattern />

      {/* Ripka today + Rules */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-2xl font-semibold text-graphite mb-4">Ripka šiandien</h2>
            <p className="text-sm text-graphite/75 leading-relaxed mb-6">
              Ripka aktyviausiai žaidžiama Žemaitijoje (Plungė, Kupiškis, Kaunas, Vilkaviškis, Elektrėnai ir Šiauliai). Lietuvos ritinio sporto federacija koordinuoja čempionatų organizavimą ir taisyklių kūrimą.
            </p>
            <Button
              href="https://www.lrsf.lt"
              variant="outline"
            >
              Plačiau apie federaciją
            </Button>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-graphite mb-4">Taisyklės</h2>
            <p className="text-sm text-graphite/75 leading-relaxed mb-6">
              Lietuvos ritinio sporto federacijos puslapyje pateikiamos detalios ripkos žaidimo taisyklės, patvirtintos 2023 m. Kviečiame susipažinti su oficialiu dokumentu.
            </p>
            <Button
              href="https://www.lrsf.lt/taisykles"
              variant="outline"
            >
              Ripkos taisyklės
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
