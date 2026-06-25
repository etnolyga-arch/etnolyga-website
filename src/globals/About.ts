import type { GlobalConfig } from 'payload';

const paragraphs = (name: string, label: string) => ({
  name,
  type: 'array' as const,
  label,
  labels: { singular: 'Pastraipa', plural: 'Pastraipos' },
  fields: [{ name: 'text', type: 'textarea' as const, label: 'Tekstas', required: true }],
});

export const About: GlobalConfig = {
  slug: 'about',
  label: 'Apie ripką (puslapis)',
  admin: { group: 'Puslapiai' },
  access: { read: () => true },
  fields: [
    {
      type: 'collapsible',
      label: 'Istorija (laiko juosta)',
      fields: [
        {
          name: 'timeline',
          type: 'array',
          label: 'Įvykiai',
          fields: [
            { name: 'period', type: 'text', label: 'Laikotarpis', required: true },
            { name: 'text', type: 'textarea', label: 'Aprašymas', required: true },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Žaidimo aprašymas',
      fields: [
        paragraphs('gameDescription', 'Pastraipos'),
        { name: 'gameDescriptionPhoto', type: 'upload', relationTo: 'media', label: 'Nuotrauka' },
      ],
    },
    {
      type: 'collapsible',
      label: 'Ripka šiandien',
      fields: [
        paragraphs('ripkaToday', 'Pastraipos'),
        { name: 'ripkaTodayPhoto', type: 'upload', relationTo: 'media', label: 'Nuotrauka' },
        { name: 'federationUrl', type: 'text', label: 'Federacijos nuoroda' },
      ],
    },
    {
      type: 'collapsible',
      label: 'Taisyklės',
      fields: [
        paragraphs('rules', 'Pastraipos'),
        { name: 'rulesPhoto', type: 'upload', relationTo: 'media', label: 'Nuotrauka' },
        { name: 'rulesUrl', type: 'text', label: 'Taisyklių nuoroda' },
      ],
    },
  ],
};
