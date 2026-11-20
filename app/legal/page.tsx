import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LegalTabs from '@/components/Legal/LegalTabs';

export const metadata: Metadata = {
  title: 'Legal | Accugile',
  description:
    'Read our Privacy Policy, Terms & Conditions and Cookie Policy — the full legal documents governing the use of accugile.com and our services.',
};

export default function LegalPage() {
  return (
    <>
      <Header />
      <main>
        <LegalTabs />
      </main>
      <Footer />
    </>
  );
}

