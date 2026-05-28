import { teams } from './teams';

export type ScheduleEntry = {
  date: string;
  time: string;
  location: string;
  group: string;
  teams: { name: string; logo: string }[];
};

export const schedule: ScheduleEntry[] = [
  {
    date: '2026 m. gegužės 7 d.',
    time: '9:00–17:00',
    location: 'Simono Daukanto gimnazijos stadionas, Vilnius',
    group: '1-asis pogrūpis',
    teams: teams.map(t => ({ name: `Komanda ${t.name}`, logo: t.logo })),
  },
  {
    date: '2026 m. gegužės 14 d.',
    time: '10:00–16:00',
    location: 'Žirmūnų gimnazija, Vilnius',
    group: '2-asis pogrūpis',
    teams: [
      { name: 'Komanda „Ąžuolai"', logo: '/images/organizations/schools/jono-basanaviciaus-gimnazija.png' },
      { name: 'Komanda „Pelėdžiukai"', logo: '/images/organizations/schools/sv-kristoforo-gimnazija.png' },
      { name: 'Komanda „Liūtai"', logo: '/images/organizations/schools/zirmunu-gimnazija.png' },
      { name: 'Komanda „Vanagai"', logo: '/images/organizations/schools/simono-daukanto-gimnazija.png' },
    ],
  },
  {
    date: '2026 m. birželio 4 d.',
    time: '11:00–18:00',
    location: 'LKL arenos sporto aikštynas, Vilnius',
    group: 'Finalinis etapas',
    teams: [{ name: 'Geriausi 1-ojo ir 2-ojo pogrūpių', logo: '' }],
  },
];

/** The next upcoming match — used by the homepage widget */
export const nextMatch = schedule[0];
