import type { CollectionConfig } from 'payload';
import { sportField } from '../fields/sport';

export const Standings: CollectionConfig = {
  slug: 'standings',
  labels: { singular: 'Lentelės eilutė', plural: 'Turnyrinė lentelė' },
  admin: {
    useAsTitle: 'team',
    // Logo first so rows are identifiable at a glance; it is kept in sync with
    // the selected team by the beforeChange hook below.
    defaultColumns: ['logo', 'team', 'group', 'points'],
    group: 'Turinys',
  },
  access: { read: () => true },
  hooks: {
    // Nukopijuoja pasirinktos komandos pavadinimą / mokyklą / logotipą į senuosius
    // laukelius, kad sąrašo pavadinimas (useAsTitle) ir logotipo stulpelis veiktų
    // vienodai tiek seniems, tiek naujiems įrašams.
    beforeChange: [
      async ({ data, req }) => {
        if (!data?.teamRef) return data;
        const id = typeof data.teamRef === 'object' ? data.teamRef.id : data.teamRef;
        try {
          const team = await req.payload.findByID({ collection: 'teams', id, depth: 0 });
          if (team) {
            data.team = team.name;
            data.school = team.school;
            // depth: 0 grąžina tik ID — tiksliai tai, ko reikia upload laukeliui.
            if (team.logo) data.logo = team.logo;
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
      admin: {
        placeholder: '1-asis pogrūpis',
        description:
          'Pvz.: „1-asis pogrūpis“, „2-asis pogrūpis“, „Finalinis turas“. Kiekvienam pavadinimui svetainėje sukuriama atskira lentelė, todėl rašykite vienodai visose to paties etapo eilutėse.',
      },
    },
    {
      type: 'row',
      fields: [
        { name: 'wins', type: 'number', label: 'Pergalės', defaultValue: 0, min: 0 },
        { name: 'draws', type: 'number', label: 'Lygiosios', defaultValue: 0, min: 0 },
        { name: 'losses', type: 'number', label: 'Pralaimėjimai', defaultValue: 0, min: 0 },
        {
          name: 'points',
          type: 'number',
          label: 'Taškai',
          defaultValue: 0,
          min: 0,
          admin: { description: 'Pagal taškus komandos rikiuojamos lentelėje (daugiausia — viršuje).' },
        },
      ],
    },
    sportField,
  ],
};
