import React from 'react';
import type { Metadata } from 'next';
import PageShell from '@/components/Home/PageShell';
import AdorackHero from '@/components/Adorack/AdorackHero';
import SupportedNetworks from '@/components/Adorack/SupportedNetworks';
import Showcase from '@/components/Adorack/Showcase';
import GetStarted from '@/components/Adorack/GetStarted';
import FeatureTour from '@/components/Adorack/FeatureTour';
import Gallery from '@/components/Adorack/Gallery';
import AdorackAI from '@/components/Adorack/AdorackAI';
import TeamRoles from '@/components/Adorack/TeamRoles';
import AllFeatures from '@/components/Adorack/AllFeatures';
import WhoItsFor from '@/components/Adorack/WhoItsFor';
import AdorackPricing from '@/components/Adorack/AdorackPricing';
import AdorackFaq from '@/components/Adorack/AdorackFaq';
import BuiltByAccugile from '@/components/Adorack/BuiltByAccugile';
import AdorackCTA from '@/components/Adorack/AdorackCTA';
import TrialBar from '@/components/Adorack/TrialBar';

export const metadata: Metadata = {
  title: 'Adorack — Social Media Management Platform | Accugile',
  description:
    'Plan, approve and publish to 8 social networks from one workspace. Built by Accugile for agencies and teams that manage multiple brands.',
};

export default function AdorackPage() {
  return (
    <PageShell>
      <div className="motion-on" style={{ ['--ac' as string]: '#304DDB', width: '100%', background: '#FFFFFF', overflowX: 'clip' }}>
        <AdorackHero />
        <SupportedNetworks />
        <Showcase />
        <GetStarted />
        <FeatureTour />
        <Gallery />
        <AdorackAI />
        <TeamRoles />
        <AllFeatures />
        <WhoItsFor />
        <AdorackPricing />
        <AdorackFaq />
        <BuiltByAccugile />
        <AdorackCTA />
        <TrialBar />
      </div>
    </PageShell>
  );
}
