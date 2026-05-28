export type NavLink = { href: string; label: string };

export const mainLinks: NavLink[] = [
  { href: '/', label: 'Pradžia' },
  { href: '/tvarkarastis', label: 'Tvarkaraštis' },
  { href: '/turnyrine-lentele', label: 'Turnyrinė lentelė' },
  { href: '/komandos', label: 'Komandos' },
  { href: '/apie-ripka', label: 'Apie ripką' },
];

export const sideLinks: NavLink[] = [
  { href: '/naujienos', label: 'Naujienos' },
  { href: '/kontaktai', label: 'Kontaktai' },
];

export const allLinks: NavLink[] = [...mainLinks, ...sideLinks];
