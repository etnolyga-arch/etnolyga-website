import type { GlobalConfig } from 'payload';

const paragraphs = (name: string, label: string, description: string) => ({
  name,
  type: 'array' as const,
  label,
  labels: { singular: 'Pastraipa', plural: 'Pastraipos' },
  admin: { description },
  fields: [
    {
      name: 'text',
      type: 'textarea' as const,
      label: 'Tekstas',
      required: true,
      admin: { description: 'Viena pastraipa. Ilgesnį tekstą skaidykite į kelias pastraipas.' },
    },
  ],
});

/** Nuotraukų laukelių paaiškinimas — vienodas visose sekcijose. */
const PHOTO_HELP = 'Horizontali nuotrauka šalia teksto, rekomenduojama ~1200×800 px.';

export const About: GlobalConfig = {
  slug: 'about',
  label: 'Apie ripką (puslapis)',
  admin: { group: 'Puslapiai' },
  access: { read: () => true },
  fields: [
    {
      type: 'collapsible',
      label: 'Istorija (laiko juosta)',
      admin: { description: 'Laiko juosta puslapio viršuje. Įvykiai rodomi tokia tvarka, kokia surašyti.' },
      fields: [
        {
          name: 'timeline',
          type: 'array',
          label: 'Įvykiai',
          admin: { description: 'Pridėkite po vieną įvykį. Tvarką galima keisti tempiant.' },
          fields: [
            {
              name: 'period',
              type: 'text',
              label: 'Laikotarpis',
              required: true,
              admin: {
                placeholder: '1935 m.',
                description: 'Metai arba laikotarpis, pvz. „1935 m.“ arba „XX a. pr.“.',
              },
            },
            {
              name: 'text',
              type: 'textarea',
              label: 'Aprašymas',
              required: true,
              admin: { description: 'Kas tuo metu įvyko. Keli sakiniai.' },
            },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Žaidimo aprašymas',
      admin: { description: 'Sekcija, paaiškinanti kaip žaidžiama ripka.' },
      fields: [
        paragraphs('gameDescription', 'Pastraipos', 'Žaidimo aprašymo tekstas.'),
        {
          name: 'gameDescriptionPhoto',
          type: 'upload',
          relationTo: 'media',
          label: 'Nuotrauka',
          admin: { description: PHOTO_HELP },
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Ripka šiandien',
      admin: { description: 'Sekcija apie dabartinę ripkos situaciją ir federaciją.' },
      fields: [
        paragraphs('ripkaToday', 'Pastraipos', 'Tekstas apie ripką šiandien.'),
        {
          name: 'ripkaTodayPhoto',
          type: 'upload',
          relationTo: 'media',
          label: 'Nuotrauka',
          admin: { description: PHOTO_HELP },
        },
        {
          name: 'federationUrl',
          type: 'text',
          label: 'Federacijos nuoroda',
          admin: {
            placeholder: 'https://ritinis.lt',
            description: 'Pilna nuoroda su https://. Atidaroma paspaudus mygtuką šioje sekcijoje.',
          },
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Taisyklės',
      admin: { description: 'Sekcija su žaidimo taisyklėmis ir nuoroda į pilną dokumentą.' },
      fields: [
        paragraphs('rules', 'Pastraipos', 'Trumpas taisyklių aprašymas.'),
        {
          name: 'rulesPhoto',
          type: 'upload',
          relationTo: 'media',
          label: 'Nuotrauka',
          admin: { description: PHOTO_HELP },
        },
        {
          name: 'rulesUrl',
          type: 'text',
          label: 'Taisyklių nuoroda',
          admin: {
            placeholder: 'https://ritinis.lt/taisykles',
            description: 'Pilna nuoroda į taisyklių dokumentą, su https://.',
          },
        },
      ],
    },
  ],
};
