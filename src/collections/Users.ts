import type { Access, CollectionConfig } from 'payload';

/** Only users with role=admin may manage other users. */
const isAdmin: Access = ({ req }) => req.user?.role === 'admin';

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  // Was the only untranslated entry in an otherwise Lithuanian sidebar.
  labels: { singular: 'Naudotojas', plural: 'Naudotojai' },
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'name', 'role'],
    group: 'Administravimas',
  },
  access: {
    read: ({ req }) => !!req.user,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Vardas',
    },
    {
      name: 'role',
      type: 'select',
      label: 'Rolė',
      required: true,
      defaultValue: 'editor',
      options: [
        { label: 'Administratorius', value: 'admin' },
        { label: 'Redaktorius', value: 'editor' },
      ],
      access: {
        // Only admins can change roles (editors can't promote themselves).
        update: ({ req }) => req.user?.role === 'admin',
      },
      admin: {
        description: 'Administratorius tvarko vartotojus; redaktorius redaguoja tik turinį.',
      },
    },
  ],
};
