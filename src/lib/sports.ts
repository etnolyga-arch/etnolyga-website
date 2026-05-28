import type { NavLink } from './nav';

export type Sport = {
  key: string;
  label: string;
  available: boolean;
  comingSoonLabel?: string;
  links: NavLink[];
};

export const sports: Sport[] = [
  {
    key: 'RIPKA',
    label: 'RIPKA',
    available: true,
    links: [
      { href: '/', label: 'Pradžia' },
      { href: '/tvarkarastis', label: 'Tvarkaraštis' },
      { href: '/turnyrine-lentele', label: 'Turnyrinė lentelė' },
      { href: '/komandos', label: 'Komandos' },
      { href: '/apie-ripka', label: 'Apie ripką' },
    ],
  },
  {
    key: 'KYLA',
    label: 'KYLA',
    available: false,
    comingSoonLabel: 'Netrukus',
    links: [
      { href: '/', label: 'Pradžia' },
      { href: '/tvarkarastis', label: 'Tvarkaraštis' },
      { href: '/turnyrine-lentele', label: 'Turnyrinė lentelė' },
      { href: '/komandos', label: 'Komandos' },
      { href: '/apie-kyla', label: 'Apie kylą' },
    ],
  },
  {
    key: 'RISTYNĖS',
    label: 'RISTYNĖS',
    available: false,
    comingSoonLabel: 'Netrukus',
    links: [],
  },
];

/** The currently active (live) sport. */
export const activeSport = sports.find((s) => s.available) ?? sports[0];
