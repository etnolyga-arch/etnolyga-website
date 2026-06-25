import type { Field } from 'payload';

/** Shared sport selector — the site is multi-sport (RIPKA / KYLA / RISTYNĖS). */
export const sportField: Field = {
  name: 'sport',
  type: 'select',
  required: true,
  defaultValue: 'ripka',
  options: [
    { label: 'Ripka (Ritinis)', value: 'ripka' },
    { label: 'Kyla', value: 'kyla' },
    { label: 'Ristynės', value: 'ristynes' },
  ],
  admin: {
    description: 'Kuriam sportui priklauso šis įrašas.',
  },
};
