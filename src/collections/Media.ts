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
    // 'image/*' covers image/svg+xml, so SVG logos upload like any other image.
    // Rendering them also requires images.dangerouslyAllowSVG in next.config.ts.
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
