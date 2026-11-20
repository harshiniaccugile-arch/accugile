import React from 'react';
import type { Metadata } from 'next';
import PageShell from '@/components/Home/PageShell';
import RecomonkHero from '@/components/Recomonk/RecomonkHero';
import WhatIsRecomonk from '@/components/Recomonk/WhatIsRecomonk';
import RecomonkCategories from '@/components/Recomonk/RecomonkCategories';
import ContentTypes from '@/components/Recomonk/ContentTypes';
import ShopByBudget from '@/components/Recomonk/ShopByBudget';
import LatestArticles from '@/components/Recomonk/LatestArticles';
import GiftFinder from '@/components/Recomonk/GiftFinder';
import ReaderFeatures from '@/components/Recomonk/ReaderFeatures';
import ForBrands from '@/components/Recomonk/ForBrands';
import RecomonkFaq from '@/components/Recomonk/RecomonkFaq';
import BuiltByAccugileWeb from '@/components/Recomonk/BuiltByAccugileWeb';
import RecomonkCTA from '@/components/Recomonk/RecomonkCTA';
import RecomonkTrialBar from '@/components/Recomonk/RecomonkTrialBar';

export const metadata: Metadata = {
  title: 'Recomonk: Best Product Recommendations and Buying Guides | Accugile',
  description:
    'Recomonk turns Amazon listings into clear buying guides, comparisons and best-of lists across home, kitchen, beauty, tech, gifts and more. Built and run by Accugile.',
};

export default function RecomonkPage() {
  return (
    <PageShell>
      <div className="rm motion-on" style={{ width: '100%', background: '#FFFFFF', overflowX: 'clip' }}>
        <main className="rm">
          <RecomonkHero />
          <WhatIsRecomonk />
          <RecomonkCategories />
          <ContentTypes />
          <ShopByBudget />
          <LatestArticles />
          <GiftFinder />
          <ReaderFeatures />
          <ForBrands />
          <RecomonkFaq />
          <BuiltByAccugileWeb />
          <RecomonkCTA />
          <RecomonkTrialBar />
        </main>
      </div>
    </PageShell>
  );
}
