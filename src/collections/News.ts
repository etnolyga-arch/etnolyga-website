import type { CollectionConfig } from 'payload';
import { sportField } from '../fields/sport';

export const News: CollectionConfig = {
  slug: 'news',
  labels: { singular: 'Naujiena', plural: 'Naujienos' },
  admin: {
    useAsTitle: 'title',
    // 'date' was listed here but the field is called publishedAt, so that column
    // rendered nothing. Photo first gives each row a recognisable thumbnail.
    defaultColumns: ['photo', 'title', 'publishedAt', 'sport'],
    group: 'Turinys',
  },
  access: { read: () => true },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Antraštė',
      required: true,
      admin: {
        placeholder: 'Stovykla Trakuose subūrė 60 dalyvių',
        description: 'Naujienos antraštė. Rekomenduojama iki ~80 simbolių, kad gražiai tilptų kortelėje.',
      },
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Nuoroda (slug)',
      required: true,
      unique: true,
      admin: {
        placeholder: 'stovykla-trakuose',
        description:
          'URL dalis, pvz. „stovykla-trakuose“. Tik mažosios raidės be lietuviškų raidžių, tarpus keiskite brūkšneliais. Turi būti unikalus.',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: 'Data',
      required: true,
      admin: {
        date: { pickerAppearance: 'dayOnly', displayFormat: 'yyyy-MM-dd' },
        description: 'Naujienos data (svetainėje rodoma lietuviškai). Naujausios rodomos viršuje.',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Santrauka',
      required: true,
      admin: {
        description:
          'Trumpas 1–2 sakinių aprašymas. Rodomas naujienų sąraše po antrašte, ne pačioje naujienoje.',
      },
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      label: 'Nuotrauka',
      required: true,
      admin: {
        description: 'Horizontali nuotrauka, rekomenduojama ~1200×800 px. Rodoma ir sąraše, ir naujienos viršuje.',
      },
    },
    {
      name: 'body',
      type: 'textarea',
      label: 'Tekstas',
      required: true,
      admin: { description: 'Pilnas naujienos tekstas. Pastraipas skirkite tuščia eilute.' },
    },
    {
      name: 'variant',
      type: 'select',
      label: 'Išdėstymo variantas',
      defaultValue: '1',
      admin: { description: 'Kaip atrodys naujienos puslapis. Nesate tikri — palikite 1 variantą.' },
      options: [
        { label: '1 variantas', value: '1' },
        { label: '2 variantas', value: '2' },
      ],
    },
    sportField,
  ],
};
