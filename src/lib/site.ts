export const siteConfig = {
  heroImage: '/images/sports/ripka/heroes/homepage-hero.png',
  heroSubtitle: 'Iniciatyva, siekianti inovatyviai plėtoti Lietuvos tradicinius sporto žaidimus',

  etnolyga: {
    title: 'Etnolyga',
    description1:
      'Etnolyga yra skirta 16–19 m. moksleiviams, kurie varžysis žaisdami lietuvišką ritinį (ripką). Lygos tikslas – integruoti lietuvišką tradiciją į šiuolaikinę jaunimo kultūrą ir ugdyti bendrystės jausmą.',
    description2:
      'Etnosporto lygą organizuoja Lietuvos etnosporto komitetas – 2019 m. įkurta organizacija, puoselėjanti lietuviškus tradicinius žaidimus.',
    photo: '/images/sports/ripka/teams/uz-jona-team.png',
  },

  organizer: {
    title: 'Organizatoriai',
    description:
      'Etnosporto lygą organizuoja Lietuvos etnosporto komitetas (LEK) – 2019 m. etnosporto entuziastų įkurta organizacija, siekianti puoselėti lietuviškus tradicinius žaidimus ir ugdyti jaunąją kartą tradicijų dvasia.',
    photo: '/images/sports/ripka/teams/team-group-goal.png',
  },

  /** Contact details — shared between /kontaktai page and Footer */
  contact: {
    email: 'etnosportas@gmail.com',
    phone: '+37067992665',
    hours: 'I–V – 8:00–17:00',
    facebook: { url: 'https://facebook.com/etnolyga', label: 'facebook.com/etnolyga' },
    instagram: { url: 'https://instagram.com/etnolyga', label: 'instagram.com/etnolyga' },
    youtube: { url: 'https://youtube.com/@etnolyga', label: 'youtube.com/@etnolyga' },
    photo: '/images/sports/ripka/teams/team-group-goal.png',
  },

  /** Social icon links used in Footer + contact page */
  socials: [
    { label: 'Facebook', href: 'https://facebook.com/etnolyga', icon: '/images/brand/social/facebook.png', title: 'Facebook' },
    { label: 'Instagram', href: 'https://instagram.com/etnolyga', icon: '/images/brand/social/instagram.png', title: 'Instagram' },
    { label: 'YouTube', href: 'https://youtube.com/@etnolyga', icon: '/images/brand/social/youtube.png', title: 'YouTube' },
  ],

  /** Homepage "next match" widget */
  nextMatch: {
    mapPhoto: '/images/locations/maps/vilnius-simono-daukanto.png',
  },

  /** Per-page hero images and static labels */
  pages: {
    tvarkarastis: {
      heroImage: '/images/sports/ripka/heroes/schedule-hero.png',
      season: '2025–2026 m. sezonas',
    },
    turnyrineLentele: {
      heroImage: '/images/sports/ripka/heroes/standings-hero.png',
      season: '2025–2026 m.',
    },
    apieRipka: {
      heroImage: '/images/sports/ripka/heroes/about-contact-hero.png',
    },
    kontaktai: {
      heroImage: '/images/sports/ripka/heroes/about-contact-hero.png',
    },
    komandos: {
      heroImage: '/images/sports/ripka/heroes/teams-hero.png',
      season: '2025–2026 m.',
    },
  },
};
