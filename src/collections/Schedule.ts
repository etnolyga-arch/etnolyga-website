import type { CollectionConfig } from 'payload';
import { sportField } from '../fields/sport';

export const Schedule: CollectionConfig = {
  slug: 'schedule',
  labels: { singular: 'Varžybos', plural: 'Tvarkaraštis' },
  admin: {
    useAsTitle: 'location',
    defaultColumns: ['date', 'group', 'location', 'sport'],
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
      name: 'teams',
      type: 'array',
      label: 'Komandos (senas laukelis)',
      admin: { hidden: true },
      fields: [
        { name: 'name', type: 'text', label: 'Pavadinimas', required: true },
        { name: 'logo', type: 'upload', relationTo: 'media', label: 'Logotipas' },
      ],
    },
    sportField,
  ],
};
