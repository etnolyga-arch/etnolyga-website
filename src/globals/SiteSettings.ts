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
      admin: { description: 'Didelis blokas pačiame pradinio puslapio viršuje.' },
      fields: [
        {
          name: 'heroImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Pagrindinė nuotrauka',
          admin: {
            description:
              'Plati horizontali nuotrauka, rekomenduojama ne mažiau kaip 1920×1080 px. Ant jos dedamas tamsus permatomas sluoksnis, todėl tinka ir šviesios nuotraukos.',
          },
        },
        {
          name: 'heroSubtitle',
          type: 'textarea',
          label: 'Paantraštė',
          admin: {
            placeholder: 'Iniciatyva, siekianti inovatyviai plėtoti Lietuvos tradicinius sporto žaidimus.',
            description: 'Vienas trumpas sakinys po pavadinimu. Rekomenduojama iki ~120 simbolių.',
          },
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Apie Etnolygą (pradinis puslapis)',
      admin: { description: 'Sekcija pradiniame puslapyje, pasakojanti apie Etnolygą.' },
      fields: [
        {
          name: 'etnolygaTitle',
          type: 'text',
          label: 'Antraštė',
          defaultValue: 'Etnolyga',
          admin: { placeholder: 'Etnolyga', description: 'Sekcijos antraštė.' },
        },
        {
          name: 'etnolygaDescription1',
          type: 'textarea',
          label: 'Aprašymas 1',
          admin: { description: 'Pirmoji pastraipa. Rodoma iš karto po antrašte.' },
        },
        {
          name: 'etnolygaDescription2',
          type: 'textarea',
          label: 'Aprašymas 2',
          admin: { description: 'Antroji pastraipa. Galima palikti tuščią — tada rodoma tik pirmoji.' },
        },
        {
          name: 'etnolygaPhoto',
          type: 'upload',
          relationTo: 'media',
          label: 'Nuotrauka',
          admin: { description: 'Horizontali nuotrauka šalia teksto, rekomenduojama ~1200×800 px.' },
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Organizatoriai',
      admin: { description: 'Sekcija apie organizatorius. Ši nuotrauka naudojama ir Kontaktų puslapyje.' },
      fields: [
        {
          name: 'organizerTitle',
          type: 'text',
          label: 'Antraštė',
          defaultValue: 'Organizatoriai',
          admin: { placeholder: 'Organizatoriai', description: 'Sekcijos antraštė.' },
        },
        {
          name: 'organizerDescription',
          type: 'textarea',
          label: 'Aprašymas',
          admin: { description: 'Trumpas tekstas apie organizatorius (LEK).' },
        },
        {
          name: 'organizerPhoto',
          type: 'upload',
          relationTo: 'media',
          label: 'Nuotrauka',
          admin: {
            description:
              'Dėmesio: ši nuotrauka rodoma ir Organizatorių sekcijoje, ir Kontaktų puslapyje. Rekomenduojama ~1200×800 px.',
          },
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Kontaktai',
      admin: { description: 'Rodoma Kontaktų puslapyje ir svetainės apačioje (footer).' },
      fields: [
        {
          name: 'email',
          type: 'email',
          label: 'El. paštas',
          admin: { placeholder: 'info@etnolyga.lt', description: 'Pagrindinis kontaktinis el. paštas.' },
        },
        {
          name: 'phone',
          type: 'text',
          label: 'Telefonas',
          admin: { placeholder: '+370 600 00000', description: 'Su šalies kodu, pvz. „+370 600 00000“.' },
        },
        {
          name: 'hours',
          type: 'text',
          label: 'Darbo laikas',
          admin: { placeholder: 'I–V 9:00–17:00', description: 'Pvz. „I–V 9:00–17:00“.' },
        },
        {
          name: 'facebook',
          type: 'text',
          label: 'Facebook URL',
          admin: {
            placeholder: 'https://facebook.com/etnolyga',
            description: 'Pilna nuoroda su https://. Svetainėje rodoma be „https://“.',
          },
        },
        {
          name: 'instagram',
          type: 'text',
          label: 'Instagram URL',
          admin: {
            placeholder: 'https://instagram.com/etnolyga',
            description: 'Pilna nuoroda su https://.',
          },
        },
        {
          name: 'youtube',
          type: 'text',
          label: 'YouTube URL',
          admin: {
            placeholder: 'https://youtube.com/@etnolyga',
            description: 'Pilna nuoroda su https://.',
          },
        },
      ],
    },
  ],
};
