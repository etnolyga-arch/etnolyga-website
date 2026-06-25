import SponsorsRow from './SponsorsRow';
import { getSponsors } from '@/lib/cms';

/** Server wrapper: fetches sponsors/partners from the CMS and renders the carousel. */
export default async function SponsorsSection() {
  const { sponsors, partners } = await getSponsors();
  return <SponsorsRow sponsors={sponsors} partners={partners} />;
}
