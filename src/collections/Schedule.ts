import type { CollectionConfig } from 'payload';
import { sportField } from '../fields/sport';

export const Schedule: CollectionConfig = {
  slug: 'schedule',
  labels: { singular: 'Varžybos', plural: 'Tvarkaraštis' },
  admin: {
    useAsTitle: 'location',
    // Schedule has no image of its own; showing the teams makes rows identifiable.
    defaultColumns: ['date', 'group', 'location', 'teamRefs'],
    group: 'Turinys',
  },
  access: { read: () => true },
  fields: [
    {
      name: 'date',
      type: 'date',
      label: 'Data',
      required: true,
      admin: {
        date: { pickerAppearance: 'dayOnly', displayFormat: 'yyyy-MM-dd' },
        description:
          'Pasirinkite datą iš kalendoriaus. Svetainėje ji automatiškai rodoma lietuviškai, pvz. „2026 m. rugsėjo 18 d.“.',
      },
    },
    {
      name: 'time',
      type: 'text',
      label: 'Laikas',
      admin: {
        placeholder: '11:00–18:00',
        description: 'Laiko intervalas nuo–iki, pvz. „11:00–18:00“. Galima palikti tuščią.',
      },
    },
    {
      name: 'location',
      type: 'text',
      label: 'Vieta',
      required: true,
      admin: {
        placeholder: 'Žirmūnų gimnazija, Vilnius',
        description: 'Vietos pavadinimas ir miestas.',
      },
    },
    {
      name: 'group',
      type: 'text',
      label: 'Pogrūpis / etapas',
      admin: {
        placeholder: '1-asis pogrūpis',
        description: 'Pvz.: „1-asis pogrūpis“, „2-asis pogrūpis“, „Finalinis turas“.',
      },
    },
    {
      name: 'order',
      type: 'number',
      label: 'Eiliškumas',
      defaultValue: 0,
      admin: { description: 'Mažesnis skaičius rodomas pirmiau.' },
    },
    {
      name: 'teamRefs',
      type: 'relationship',
      relationTo: 'teams',
      hasMany: true,
      label: 'Komandos',
      admin: { description: 'Pasirink komandas iš sąrašo.' },
    },
    {
      // Was hidden, which meant leftover demo rows still rendered on the site
      // (getSchedule falls back to this when teamRefs is empty) with no way for
      // an editor to see or remove them. Visible now so it can be cleared.
      name: 'teams',
      type: 'array',
      label: 'Senas komandų sąrašas (ištrinkite)',
      admin: {
        description:
          'Senas laukelis iš pradinės svetainės versijos. Jis rodomas tik tada, kai viršuje nepasirinkta nė viena komanda. Ištrinkite šias eilutes ir naudokite laukelį „Komandos“.',
      },
      fields: [
        { name: 'name', type: 'text', label: 'Pavadinimas', required: true },
        { name: 'logo', type: 'upload', relationTo: 'media', label: 'Logotipas' },
      ],
    },
    sportField,
  ],
};
