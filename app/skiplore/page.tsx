import React from 'react';
import type { Metadata } from 'next';
import PageShell from '@/components/Home/PageShell';
import SkiploreHero from '@/components/Skiplore/SkiploreHero';
import WhatIsSkiplore from '@/components/Skiplore/WhatIsSkiplore';
import ThreeWays from '@/components/Skiplore/ThreeWays';
import SkiploreThemes from '@/components/Skiplore/SkiploreThemes';
import SkiploreTour from '@/components/Skiplore/SkiploreTour';
import ListingBadges from '@/components/Skiplore/ListingBadges';
import HowItWorks from '@/components/Skiplore/HowItWorks';
import ForProviders from '@/components/Skiplore/ForProviders';
import WhoItsForTravel from '@/components/Skiplore/WhoItsForTravel';
import SkipStories from '@/components/Skiplore/SkipStories';
import SkiploreFaq from '@/components/Skiplore/SkiploreFaq';
import BuiltByAccugileMarketplace from '@/components/Skiplore/BuiltByAccugileMarketplace';
import SkiploreCTA from '@/components/Skiplore/SkiploreCTA';
import SkiploreTrialBar from '@/components/Skiplore/SkiploreTrialBar';

export const metadata: Metadata = {
  title: 'Skiplore: Travel Packages, Experiences and Local Services in India | Accugile',
  description:
    'Skiplore is a marketplace for travel packages, day experiences and local services across India, booked directly with verified local hosts. Built and run by Accugile.',
};

export default function SkiplorePage() {
  return (
    <PageShell>
      <div className="sk motion-on" style={{ width: '100%', background: '#FFFFFF', overflowX: 'clip' }}>
        <main className="sk">
          <SkiploreHero />
          <WhatIsSkiplore />
          <ThreeWays />
          <SkiploreThemes />
          <SkiploreTour />
          <ListingBadges />
          <HowItWorks />
          <ForProviders />
          <WhoItsForTravel />
          <SkipStories />
          <SkiploreFaq />
          <BuiltByAccugileMarketplace />
          <SkiploreCTA />

        </main>
      </div>
    </PageShell>
  );
}
