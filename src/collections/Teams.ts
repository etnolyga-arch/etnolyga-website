import type { CollectionConfig } from 'payload';
import { sportField } from '../fields/sport';

export const Teams: CollectionConfig = {
  slug: 'teams',
  labels: { singular: 'Komanda', plural: 'Komandos' },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'school', 'sport'],
    group: 'Turinys',
  },
  access: { read: () => true },
  fields: [
    { name: 'name', type: 'text', label: 'Pavadinimas', required: true },
    {
      name: 'slug',
      type: 'text',
      label: 'Nuoroda (slug)',
      required: true,
      unique: true,
    },
    { name: 'school', type: 'text', label: 'Mokykla', required: true },
    { name: 'logo', type: 'upload', relationTo: 'media', label: 'Logotipas' },
    { name: 'photo', type: 'upload', relationTo: 'media', label: 'Komandos nuotrauka' },
    { name: 'coach', type: 'text', label: 'Treneris' },
    {
      name: 'players',
      type: 'array',
      label: 'Žaidėjai',
      labels: { singular: 'Žaidėjas', plural: 'Žaidėjai' },
      fields: [
        { name: 'name', type: 'text', label: 'Vardas', required: true },
        {
          name: 'role',
          type: 'select',
          label: 'Pozicija',
          required: true,
          options: [
            { label: 'Žaidėjas', value: 'Žaidėjas' },
            { label: 'Vartininkas', value: 'Vartininkas' },
            { label: 'Treneris', value: 'Treneris' },
            { label: 'Puolėjas', value: 'Puolėjas' },
            { label: 'Gynėjas', value: 'Gynėjas' },
          ],
        },
        { name: 'photo', type: 'upload', relationTo: 'media', label: 'Nuotrauka' },
        {
          name: 'number',
          type: 'number',
          label: 'Numeris (apranga)',
          admin: { description: 'Žaidėjo marškinėlių numeris.' },
        },
        { name: 'bio', type: 'textarea', label: 'Aprašymas / titulai', admin: { description: 'Trumpa informacija apie žaidėją, titulai ir t.t.' } },
      ],
    },
    { name: 'quote', type: 'textarea', label: 'Citata' },
    { name: 'quoteAuthor', type: 'text', label: 'Citatos autorius' },
    sportField,
  ],
};
