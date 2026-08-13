export type PlayerRole = 'Žaidėjas' | 'Vartininkas' | 'Treneris' | 'Puolėjas' | 'Gynėjas';
export type Player = {
  name: string;
  role: PlayerRole;
  photo?: string;
  number?: number;
  bio?: string;
};

export type Team = {
  slug: string;
  name: string;
  school: string;
  logo: string;
  photo: string;
  coach: string;
  players: Player[];
  quote?: string;
  quoteAuthor?: string;
};

export const teams: Team[] = [
  {
    slug: 'uz-jona',
    name: '„Už Joną"',
    school: 'Jono Basanavičiaus gimnazija',
    logo: '/images/organizations/schools/jono-basanaviciaus-gimnazija.png',
    photo: '/images/sports/ripka/teams/uz-jona-team.png',
    coach: 'Vyr. mok. Jonas Jonaitis',
    players: [
      { name: 'Mantas Petrauskas', role: 'Puolėjas' },
      { name: 'Lukas Kazlauskas', role: 'Puolėjas' },
      { name: 'Tomas Stankevičius', role: 'Puolėjas' },
      { name: 'Erikas Vaitkus', role: 'Gynėjas' },
      { name: 'Paulius Jankauskas', role: 'Gynėjas' },
      { name: 'Darius Baranauskas', role: 'Gynėjas' },
      { name: 'Matas Žilinskas', role: 'Gynėjas' },
    ],
    quote: 'Kaip aušrai auštant nyksta ant žemės nakties tamsybė, o kad taip jau prašvistų ir Lietuvos dvasia',
    quoteAuthor: 'Dr. Jonas Basanavičius',
  },
  {
    slug: 'ballerina-cappuccina',
    name: '„Ballerina Cappuccina"',
    school: 'Žirmūnų gimnazija',
    logo: '/images/organizations/schools/zirmunu-gimnazija.png',
    photo: '/images/sports/ripka/gameplay/girl-playing.png',
    coach: 'Vyr. mok. Rasa Klimienė',
    players: [
      { name: 'Ieva Mockutė', role: 'Puolėjas' },
      { name: 'Greta Viliūnaitė', role: 'Puolėjas' },
      { name: 'Kotryna Žukaitė', role: 'Puolėjas' },
      { name: 'Simona Paulauskaitė', role: 'Gynėjas' },
      { name: 'Viktorija Krasauskaitė', role: 'Gynėjas' },
      { name: 'Eglė Janušaitė', role: 'Gynėjas' },
      { name: 'Rūta Bielskytė', role: 'Gynėjas' },
    ],
  },
  {
    slug: 'basomis',
    name: '„Basomis"',
    school: 'Šv. Kristoforo gimnazija',
    logo: '/images/organizations/schools/sv-kristoforo-gimnazija.png',
    photo: '/images/sports/ripka/gameplay/gameplay-wide.png',
    coach: 'Vyr. mok. Algirdas Tamošiūnas',
    players: [
      { name: 'Karolis Urbanas', role: 'Puolėjas' },
      { name: 'Marius Sinkevičius', role: 'Puolėjas' },
      { name: 'Donatas Vaičiūnas', role: 'Puolėjas' },
      { name: 'Rokas Šimkus', role: 'Gynėjas' },
      { name: 'Tadas Venskus', role: 'Gynėjas' },
      { name: 'Ignas Liutkevičius', role: 'Gynėjas' },
      { name: 'Vilius Norvaišas', role: 'Gynėjas' },
    ],
  },
  {
    slug: 'septyniese',
    name: '„Septyniese"',
    school: 'Simono Daukanto gimnazija',
    logo: '/images/organizations/schools/simono-daukanto-gimnazija.png',
    photo: '/images/sports/ripka/teams/team-group-goal.png',
    coach: 'Vyr. mok. Daiva Morkūnienė',
    players: [
      { name: 'Emilija Račaitė', role: 'Puolėjas' },
      { name: 'Justė Milaševičiūtė', role: 'Puolėjas' },
      { name: 'Agnė Petraitytė', role: 'Puolėjas' },
      { name: 'Laura Skardžiūtė', role: 'Gynėjas' },
      { name: 'Monika Žukauskaitė', role: 'Gynėjas' },
      { name: 'Viktorija Grigaravičiūtė', role: 'Gynėjas' },
      { name: 'Rasa Kazlauskaitė', role: 'Gynėjas' },
    ],
  },
  {
    slug: 'vazhiuojam',
    name: '„Vazhiuojam"',
    school: 'Tuskulėnų gimnazija',
    logo: '/images/organizations/schools/tuskulenu-gimnazija.png',
    photo: '/images/sports/ripka/gameplay/player-at-dusk.png',
    coach: 'Vyr. mok. Mindaugas Jurevičius',
    players: [
      { name: 'Aurimas Butkus', role: 'Puolėjas' },
      { name: 'Edvinas Pašilis', role: 'Puolėjas' },
      { name: 'Linas Stonkus', role: 'Puolėjas' },
      { name: 'Kasparas Ragauskas', role: 'Gynėjas' },
      { name: 'Dominykas Kubilius', role: 'Gynėjas' },
      { name: 'Andrius Mačiulis', role: 'Gynėjas' },
      { name: 'Saulius Vaičekonis', role: 'Gynėjas' },
    ],
  },
];

export function getTeam(slug: string): Team | undefined {
  return teams.find((t) => t.slug === slug);
}
