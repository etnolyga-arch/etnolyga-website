import type { CollectionConfig } from 'payload';

export const Sponsors: CollectionConfig = {
  slug: 'sponsors',
  labels: { singular: 'Rėmėjas / Partneris', plural: 'Rėmėjai ir partneriai' },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'type'],
    group: 'Turinys',
  },
  access: { read: () => true },
  fields: [
    { name: 'name', type: 'text', label: 'Pavadinimas', required: true },
    {
      name: 'type',
      type: 'select',
      label: 'Tipas',
      required: true,
      defaultValue: 'sponsor',
      options: [
        { label: 'Rėmėjas', value: 'sponsor' },
        { label: 'Partneris', value: 'partner' },
      ],
    },
    { name: 'logo', type: 'upload', relationTo: 'media', label: 'Logotipas', required: true },
    {
      name: 'order',
      type: 'number',
      label: 'Eiliškumas',
      defaultValue: 0,
      admin: { description: 'Mažesnis skaičius rodomas pirmiau.' },
    },
  ],
};
