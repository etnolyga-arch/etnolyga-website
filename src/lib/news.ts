export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  photo: string;
  body?: string;
  variant?: 1 | 2;
};

export const news: NewsItem[] = [
  {
    slug: 'etnozyaidynes-naisiuose',
    title: 'Ketvirtosios etnožaidynės Naisiuose',
    date: '2025 m. liepos 10 d.',
    excerpt: 'Tai buvo ne tik sportas. Tai buvo jausmas – kai širdis plaka lietuviškai, bet rankos draugiškai spaudžia ukrainietiškai.',
    photo: '/images/sports/ripka/gameplay/player-swinging.png',
    variant: 1,
    body: `Tai buvo ne tik sportas. Tai buvo jausmas – kai širdis plaka lietuviškai, bet rankos draugiškai spaudžia ukrainietiškai.

Ketvirtosios etnožaidynės Naisiuose surinko daugiau nei šimtą dalyvių iš viso Lietuvos. Šiemet ypatingas akcentas teko bendradarbiavimui su Ukrainos jaunimu, kurie atvyko kaip svečiai.

Žaidynėse varžytasi ripkos, kylos ir ristynių rungtyse. Nugalėtojai buvo apdovanoti tradiciniais rankdarbiais ir diplomais.

Renginio metu vyko ir edukacinė programa – dalyviai susipažino su lietuviškų žaidimų istorija, tradiciniais raštais ir liaudies muzika.`,
  },
  {
    slug: 'stovykla-trakuose',
    title: 'Etnosporto stovykla Trakuose',
    date: '2025 m. rugpjūčio 3 d.',
    excerpt: 'Projekto metu net 42 jauni žmonės susitiko ne tik tam, kad žaistų, bet ir kad kalbėtų apie labai svarbius dalykus.',
    photo: '/images/sports/ripka/gameplay/girl-playing.png',
    variant: 2,
    body: `Projekto metu net 42 jauni žmonės susitiko ne tik tam, kad žaistų, bet ir kad kalbėtų apie labai svarbius dalykus – toleranciją, pilietiškumą ir tapatybę.

Trakų pilyje ir jos apylinkėse vyko intensyvi keturių dienų stovykla. Dalyviai mokėsi žaisti ripką, kylą ir ristyneles, o vakarais dalyvavo diskusijose ir kultūrinėse programose.

Stovyklą finansavo Jaunimo reikalų departamentas prie Socialinės apsaugos ir darbo ministerijos.`,
  },
  {
    slug: 'nauja-sezona-prasideda',
    title: 'Nauja 2025–2026 m. sezonas prasideda',
    date: '2025 m. rugsėjo 1 d.',
    excerpt: 'Lietuvos etnosporto komitetas skelbia naujojo sezono startą. Komandos kviečiamos registruotis iki spalio 1 d.',
    photo: '/images/sports/ripka/gameplay/gameplay-wide.png',
    variant: 1,
    body: `Lietuvos etnosporto komitetas skelbia naujojo 2025–2026 m. sezono startą.

Šiais metais prie lygos gali jungtis mokyklos iš visos Lietuvos. Komandos kviečiamos registruotis iki spalio 1 d. per oficialų el. paštą etnosportas@gmail.com.

Naujajame sezone dalyvaus ne mažiau kaip 10 komandų. Varžybos vyks dviem etapais – grupiniame ir išmušimo etapuose.`,
  },
  {
    slug: 'ripkos-turnyras-vilniuje',
    title: 'Ripkos turnyras Vilniuje',
    date: '2025 m. spalio 5 d.',
    excerpt: 'Tradiciniai žaidimai jungia jaunimą per kultūrą ir sportą.',
    photo: '/images/sports/ripka/gameplay/player-at-dusk.png',
    variant: 1,
    body: `Vilniuje įvyko pirmasis šio sezono ripkos turnyras, kuriame dalyvavo visos penkios 1-ojo pogrūpio komandos.

Komandos kovojo dėl pirmųjų taškų sezono lentelėje. Turnyras vyko Simono Daukanto gimnazijos stadione.

Rezultatai paskelbti turnyrinėje lentelėje.`,
  },
  {
    slug: 'etnozyaidynes-naisiuose-2',
    title: 'Naujienų rinkinys: spalis',
    date: '2025 m. spalio 20 d.',
    excerpt: 'Naujausi etnosporto renginiai ir naujienos iš visos Lietuvos.',
    photo: '/images/sports/ripka/gameplay/goal-net-bokeh.png',
    variant: 2,
    body: `Spalio mėnesį etnosporto bendruomenė aktyviai veikė visoje Lietuvoje.

Vyko treniruočių stovyklos, draugiškos rungtynės ir edukacijos. Prisijungė trys naujos mokyklos.

Kitų mėnesio naujienų ieškokite mūsų socialiniuose tinkluose.`,
  },
  {
    slug: 'sezonas-apzvalga-2025',
    title: 'Etnolyga 2025 sezono apžvalga',
    date: '2025 m. lapkritis',
    excerpt: 'Sezono rezultatai, komandų pasiekimai ir artimiausi planai.',
    photo: '/images/content/news/vr-headset-boy.png',
    variant: 1,
    body: `2025 metų sezonas Etnolyga komandoms atnešė daug įsimintinų akimirkų.

Visą sezoną varžėsi penkios komandos iš Vilniaus gimnazijų. Finaluose dalyvavo keturios stipriausios.

Ateinantis sezonas prasideda 2026 m. pradžioje – registracija jau atidaryta.`,
  },
];

export function getNewsItem(slug: string): NewsItem | undefined {
  return news.find((n) => n.slug === slug);
}
