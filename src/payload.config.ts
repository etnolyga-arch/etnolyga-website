import path from 'path';
import { fileURLToPath } from 'url';

import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';
import { lt } from '@payloadcms/translations/languages/lt';
import { buildConfig } from 'payload';

import { Users } from './collections/Users';
import { Media } from './collections/Media';
import { News } from './collections/News';
import { Teams } from './collections/Teams';
import { Schedule } from './collections/Schedule';
import { Standings } from './collections/Standings';
import { Sponsors } from './collections/Sponsors';
import { About } from './globals/About';
import { SiteSettings } from './globals/SiteSettings';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '— Etnolyga',
    },
    // Lets custom admin components be referenced as '/components/...'.
    importMap: {
      baseDir: dirname,
    },
    components: {
      // Payload has no built-in way back to the public site.
      afterNavLinks: ['/components/admin/ViewSiteLink#ViewSiteLink'],
    },
  },
  collections: [Users, Media, News, Teams, Schedule, Standings, Sponsors],
  globals: [SiteSettings, About],
  // Lithuanian-only admin UI (built-in labels like "Sukurti naują").
  i18n: {
    supportedLanguages: { lt },
    fallbackLanguage: 'lt',
    translations: {
      lt: {
        general: {
          // Payload's default is „Neužpavadinamas", which shows as the heading
          // on every new record and reads like an error to a non-technical user.
          untitled: 'Naujas įrašas',
        },
      },
    },
  },
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      // Use the unpooled (direct) Neon connection — avoids pgbouncer
      // prepared-statement issues during schema push / migrations.
      connectionString: process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL,
    },
  }),
  // sharp intentionally omitted: on Vercel its linux-x64 native binary fails to
  // load (ERR_DLOPEN_FAILED, libvips-cpp.so), which took every API route and the
  // whole admin down with 500s. No collection defines imageSizes, so sharp was
  // doing no work here. Re-add it only alongside actual resizing, and verify the
  // binary loads on Vercel first.
  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: {
        [Media.slug]: true,
      },
      // Uploads go straight from the browser to Blob storage instead of through
      // a serverless function, whose request body is capped at ~4.5MB on every
      // Vercel plan. That cap is why anything around 5MB failed to upload.
      clientUploads: true,
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
  ],
});
