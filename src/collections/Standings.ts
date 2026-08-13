import type { CollectionConfig } from 'payload';
import { sportField } from '../fields/sport';

export const Standings: CollectionConfig = {
  slug: 'standings',
  labels: { singular: 'Lentelės eilutė', plural: 'Turnyrinė lentelė' },
  admin: {
    useAsTitle: 'team',
    defaultColumns: ['team', 'group', 'points', 'sport'],
    group: 'Turinys',
  },
  access: { read: () => true },
  fields: [
    { name: 'team', type: 'text', label: 'Komanda', required: true },
    { name: 'school', type: 'text', label: 'Mokykla' },
    { name: 'logo', type: 'upload', relationTo: 'media', label: 'Logotipas' },
    {
      name: 'group',
      type: 'text',
      label: 'Pogrūpis / etapas',
      required: true,
      defaultValue: '1-asis pogrūpis',
      admin: { description: 'Pvz.: „1-asis pogrūpis", „2-asis pogrūpis", „Finalas", „Pusfinaliai"' },
    },
    {
      type: 'row',
      fields: [
        { name: 'wins', type: 'number', label: 'Pergalės', defaultValue: 0, min: 0 },
        { name: 'draws', type: 'number', label: 'Lygiosios', defaultValue: 0, min: 0 },
        { name: 'losses', type: 'number', label: 'Pralaimėjimai', defaultValue: 0, min: 0 },
        { name: 'points', type: 'number', label: 'Taškai', defaultValue: 0, min: 0 },
      ],
    },
    sportField,
  ],
};
