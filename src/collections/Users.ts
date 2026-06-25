import type { CollectionConfig } from 'payload';

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    group: 'Administravimas',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Vardas',
    },
  ],
};
