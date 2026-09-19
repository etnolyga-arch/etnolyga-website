import type { Field } from 'payload';

const LT: Record<string, string> = {
  ą: 'a', č: 'c', ę: 'e', ė: 'e', į: 'i', š: 's', ų: 'u', ū: 'u', ž: 'z',
};

/** "Vilniaus „Sostinės" gimnazija" -> "vilniaus-sostines-gimnazija" */
export const slugify = (v: string): string =>
  v
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .replace(/[ąčęėįšųūž]/g, (c) => LT[c] ?? c)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);

const isSlug = (v: unknown): v is string => typeof v === 'string' && /^[a-z0-9-]+$/.test(v);

/**
 * URL part of a record's page. Editors read "Nuoroda" as "link to their
 * website" and paste a full URL, which produces /komandos/https://vsgi.lt/
 * and a 404. So anything that isn't already slug-shaped is derived from
 * `from` instead of trusted.
 */
export const slugField = (from: string): Field => ({
  name: 'slug',
  type: 'text',
  label: 'Nuoroda (slug)',
  unique: true,
  index: true,
  admin: {
    readOnly: true,
    description: 'Sukuriama automatiškai iš pavadinimo. Naudojama puslapio adrese.',
  },
  hooks: {
    beforeValidate: [
      ({ value, data }) => (isSlug(value) ? value : slugify(String(data?.[from] ?? value ?? ''))),
    ],
  },
});
