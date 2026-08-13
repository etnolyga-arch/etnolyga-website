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
  hooks: {
    // Nukopijuoja pasirinktos komandos pavadinimą / mokyklą į senuosius laukelius,
    // kad sąrašo pavadinimas (useAsTitle) ir seni įrašai veiktų vienodai.
    beforeChange: [
      async ({ data, req }) => {
        if (!data?.teamRef) return data;
        const id = typeof data.teamRef === 'object' ? data.teamRef.id : data.teamRef;
        try {
          const team = await req.payload.findByID({ collection: 'teams', id, depth: 0 });
          if (team) {
            data.team = team.name;
            data.school = team.school;
          }
        } catch {
          // Komanda ištrinta ar nepasiekiama — paliekame tai, kas jau įrašyta.
        }
        return data;
      },
    ],
  },
  fields: [
    {
      name: 'teamRef',
      type: 'relationship',
      relationTo: 'teams',
      label: 'Komanda',
      admin: {
        description: 'Pasirink komandą iš sąrašo — pavadinimas, mokykla ir logotipas užsipildo automatiškai.',
      },
    },
    // Senieji laukeliai — paliekami dėl jau suvestų duomenų; „team" užpildomas
    // automatiškai iš pasirinktos komandos (žr. hooks.beforeChange).
    { name: 'team', type: 'text', label: 'Komanda (senas laukelis)', admin: { hidden: true } },
    { name: 'school', type: 'text', label: 'Mokykla (senas laukelis)', admin: { hidden: true } },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logotipas (senas laukelis)',
      admin: { hidden: true },
    },
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
