import type { CollectionConfig } from 'payload';

export const Sponsors: CollectionConfig = {
  slug: 'sponsors',
  labels: { singular: 'Rėmėjas / Partneris', plural: 'Rėmėjai ir partneriai' },
  admin: {
    useAsTitle: 'name',
    // Logo thumbnail and clickable website shown straight in the list view.
    defaultColumns: ['logo', 'name', 'type', 'website'],
    group: 'Turinys',
  },
  access: { read: () => true },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Pavadinimas',
      required: true,
      admin: {
        placeholder: 'CoinGate',
        description: 'Rėmėjo ar partnerio pavadinimas. Naudojamas ir kaip logotipo alternatyvus tekstas.',
      },
    },
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
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logotipas',
      required: true,
      admin: {
        description:
          'Logotipas permatomu arba baltu fonu. Rodomas vienodo aukščio juostoje, todėl geriausiai tinka horizontalus, ~400×200 px.',
      },
    },
    {
      name: 'website',
      type: 'text',
      label: 'Svetainė (URL)',
      admin: {
        placeholder: 'https://example.com',
        description: 'Pilna nuoroda su https:// — paspaudus logotipą ji atsidarys naujame lange.',
        components: { Cell: '/components/admin/WebsiteCell#WebsiteCell' },
      },
    },
    {
      name: 'order',
      type: 'number',
      label: 'Eiliškumas',
      defaultValue: 0,
      admin: { description: 'Mažesnis skaičius rodomas pirmiau.' },
    },
  ],
};
