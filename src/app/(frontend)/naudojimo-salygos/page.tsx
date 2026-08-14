import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { TERMS } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Naudojimo sąlygos',
  description: 'Svetainės etnolyga.lt naudojimo sąlygos ir autorių teisės.',
};

export default function NaudojimoSalygosPage() {
  return (
    <LegalPage
      title="Naudojimo sąlygos"
      updated={TERMS.updated}
      intro={TERMS.intro}
      sections={TERMS.sections}
    />
  );
}
