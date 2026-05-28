import { getTeam } from './teams';

export type StandingRow = {
  team: string;
  logo: string;
  school: string;
  slug?: string;
  wins: number;
  draws: number;
  losses: number;
  points: number;
};

const group1Raw = [
  { slug: 'uz-jona', wins: 4, draws: 0, losses: 0, points: 12 },
  { slug: 'ballerina-cappuccina', wins: 3, draws: 1, losses: 0, points: 10 },
  { slug: 'septyniese', wins: 2, draws: 0, losses: 2, points: 6 },
  { slug: 'basomis', wins: 1, draws: 0, losses: 3, points: 3 },
  { slug: 'vazhiuojam', wins: 0, draws: 1, losses: 3, points: 1 },
];

export const group1: StandingRow[] = group1Raw.map((s) => {
  const t = getTeam(s.slug)!;
  return {
    team: t.name,
    logo: t.logo,
    school: t.school,
    slug: s.slug,
    wins: s.wins,
    draws: s.draws,
    losses: s.losses,
    points: s.points,
  };
});

export const group2: StandingRow[] = [
  { team: '„Ąžuolai"', logo: '/images/organizations/schools/jono-basanaviciaus-gimnazija.png', school: 'Jono Basanavičiaus gimnazija', wins: 3, draws: 1, losses: 0, points: 10 },
  { team: '„Liūtai"', logo: '/images/organizations/schools/zirmunu-gimnazija.png', school: 'Žirmūnų gimnazija', wins: 3, draws: 0, losses: 1, points: 9 },
  { team: '„Vanagai"', logo: '/images/organizations/schools/simono-daukanto-gimnazija.png', school: 'Simono Daukanto gimnazija', wins: 1, draws: 1, losses: 2, points: 4 },
  { team: '„Pelėdžiukai"', logo: '/images/organizations/schools/sv-kristoforo-gimnazija.png', school: 'Šv. Kristoforo gimnazija', wins: 0, draws: 0, losses: 4, points: 0 },
];
