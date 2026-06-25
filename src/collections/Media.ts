import type { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    group: 'Turinys',
  },
  access: {
    read: () => true,
  },
  upload: {
    // Stored in Vercel Blob (see payload.config.ts storage plugin).
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Alternatyvus tekstas (alt)',
      admin: {
        description: 'Trumpas paveikslėlio aprašymas prieinamumui ir SEO.',
      },
    },
  ],
};
