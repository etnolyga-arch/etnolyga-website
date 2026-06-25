import type { CollectionConfig } from 'payload';
import { sportField } from '../fields/sport';

export const News: CollectionConfig = {
  slug: 'news',
  labels: { singular: 'Naujiena', plural: 'Naujienos' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'date', 'sport'],
    group: 'Turinys',
  },
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', label: 'Antraštė', required: true },
    {
      name: 'slug',
      type: 'text',
      label: 'Nuoroda (slug)',
      required: true,
      unique: true,
      admin: { description: 'URL dalis, pvz. „stovykla-trakuose".' },
    },
    {
      name: 'date',
      type: 'text',
      label: 'Data',
      required: true,
      admin: { description: 'Rodoma data, pvz. „2025 m. liepos 10 d.".' },
    },
    { name: 'excerpt', type: 'textarea', label: 'Santrauka', required: true },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      label: 'Nuotrauka',
      required: true,
    },
    { name: 'body', type: 'textarea', label: 'Tekstas', required: true },
    {
      name: 'variant',
      type: 'select',
      label: 'Išdėstymo variantas',
      defaultValue: '1',
      options: [
        { label: '1 variantas', value: '1' },
        { label: '2 variantas', value: '2' },
      ],
    },
    sportField,
  ],
};
