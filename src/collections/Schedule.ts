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
    { name: 'date', type: 'text', label: 'Data', required: true },
    { name: 'time', type: 'text', label: 'Laikas' },
    { name: 'location', type: 'text', label: 'Vieta', required: true },
    { name: 'group', type: 'text', label: 'Pogrūpis / etapas' },
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
