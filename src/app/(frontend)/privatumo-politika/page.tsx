import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { PRIVACY } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Privatumo politika',
  description: 'Kokius duomenis renka etnolyga.lt ir kaip jie naudojami.',
};

export default function PrivatumoPolitikaPage() {
  return (
    <LegalPage
      title="Privatumo politika"
      updated={PRIVACY.updated}
      intro={PRIVACY.intro}
      sections={PRIVACY.sections}
    />
  );
}
