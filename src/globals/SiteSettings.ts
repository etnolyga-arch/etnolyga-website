import type { GlobalConfig } from 'payload';

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Bendri nustatymai',
  admin: { group: 'Puslapiai' },
  access: { read: () => true },
  fields: [
    {
      type: 'collapsible',
      label: 'Pagrindinis (Hero)',
      fields: [
        { name: 'heroImage', type: 'upload', relationTo: 'media', label: 'Pagrindinė nuotrauka' },
        { name: 'heroSubtitle', type: 'textarea', label: 'Paantraštė' },
      ],
    },
    {
      type: 'collapsible',
      label: 'Apie Etnolygą (pradinis puslapis)',
      fields: [
        { name: 'etnolygaTitle', type: 'text', label: 'Antraštė', defaultValue: 'Etnolyga' },
        { name: 'etnolygaDescription1', type: 'textarea', label: 'Aprašymas 1' },
        { name: 'etnolygaDescription2', type: 'textarea', label: 'Aprašymas 2' },
        { name: 'etnolygaPhoto', type: 'upload', relationTo: 'media', label: 'Nuotrauka' },
      ],
    },
    {
      type: 'collapsible',
      label: 'Organizatoriai',
      fields: [
        { name: 'organizerTitle', type: 'text', label: 'Antraštė', defaultValue: 'Organizatoriai' },
        { name: 'organizerDescription', type: 'textarea', label: 'Aprašymas' },
        { name: 'organizerPhoto', type: 'upload', relationTo: 'media', label: 'Nuotrauka' },
      ],
    },
    {
      type: 'collapsible',
      label: 'Kontaktai',
      fields: [
        { name: 'email', type: 'text', label: 'El. paštas' },
        { name: 'phone', type: 'text', label: 'Telefonas' },
        { name: 'hours', type: 'text', label: 'Darbo laikas' },
        { name: 'facebook', type: 'text', label: 'Facebook URL' },
        { name: 'instagram', type: 'text', label: 'Instagram URL' },
        { name: 'youtube', type: 'text', label: 'YouTube URL' },
      ],
    },
  ],
};
