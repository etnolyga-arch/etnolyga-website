import type { CollectionConfig } from 'payload';
import { sportField } from '../fields/sport';

export const Teams: CollectionConfig = {
  slug: 'teams',
  labels: { singular: 'Komanda', plural: 'Komandos' },
  admin: {
    useAsTitle: 'name',
    // Logo first so teams are identifiable at a glance in the list.
    defaultColumns: ['logo', 'name', 'school', 'sport'],
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
        placeholder: 'Pelėdžiukai',
        description: 'Komandos pavadinimas be žodžio „Komanda“ — jis pridedamas automatiškai.',
      },
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Nuoroda (slug)',
      required: true,
      unique: true,
      admin: {
        placeholder: 'peledziukai',
        description:
          'URL dalis, pvz. „peledziukai“. Tik mažosios raidės be lietuviškų raidžių, tarpus keiskite brūkšneliais. Turi būti unikalus.',
      },
    },
    {
      name: 'school',
      type: 'text',
      label: 'Mokykla',
      required: true,
      admin: { placeholder: 'Žirmūnų gimnazija', description: 'Mokyklos pavadinimas.' },
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logotipas',
      admin: {
        description:
          'Kvadratinis logotipas permatomu arba baltu fonu, rekomenduojama ~400×400 px. Rodomas apskritime.',
      },
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      label: 'Komandos nuotrauka',
      admin: { description: 'Horizontali bendra komandos nuotrauka, rekomenduojama ~1200×800 px.' },
    },
    {
      name: 'coach',
      type: 'text',
      label: 'Treneris',
      admin: { placeholder: 'Vardas Pavardė', description: 'Trenerio vardas ir pavardė.' },
    },
    {
      name: 'players',
      type: 'array',
      label: 'Žaidėjai',
      labels: { singular: 'Žaidėjas', plural: 'Žaidėjai' },
      admin: { description: 'Pridėkite po vieną žaidėją. Tvarką galima keisti tempiant.' },
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Vardas',
          required: true,
          admin: { placeholder: 'Vardas Pavardė', description: 'Žaidėjo vardas ir pavardė.' },
        },
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
        {
          name: 'photo',
          type: 'upload',
          relationTo: 'media',
          label: 'Nuotrauka',
          admin: {
            description: 'Portretinė žaidėjo nuotrauka, rekomenduojama kvadratinė ~600×600 px.',
          },
        },
        {
          name: 'number',
          type: 'number',
          label: 'Numeris (apranga)',
          admin: { placeholder: '10', description: 'Žaidėjo marškinėlių numeris.' },
        },
        { name: 'bio', type: 'textarea', label: 'Aprašymas / titulai', admin: { description: 'Trumpa informacija apie žaidėją, titulai ir t.t.' } },
      ],
    },
    {
      name: 'quote',
      type: 'textarea',
      label: 'Citata',
      admin: { description: 'Citata, rodoma komandos puslapyje. Rašykite be kabučių — jos pridedamos automatiškai.' },
    },
    {
      name: 'quoteAuthor',
      type: 'text',
      label: 'Citatos autorius',
      admin: { placeholder: 'Vardas Pavardė, treneris', description: 'Kas pasakė citatą.' },
    },
    sportField,
  ],
};
