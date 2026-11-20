import type { Metadata } from 'next';
import PageShell from '@/components/Home/PageShell';
import PartnersHero from '@/components/Partners/PartnersHero';
import PlatformPartners from '@/components/Partners/PlatformPartners';
import Awards from '@/components/Partners/Awards';
import Certifications from '@/components/Partners/Certifications';
import ClientValue from '@/components/Partners/ClientValue';
import Industries from '@/components/About/Industries';
import Comparison from '@/components/About/Comparison';
import StatsStrip from '@/components/About/StatsStrip';
import PartnersCTA from '@/components/Partners/PartnersCTA';

export const metadata: Metadata = {
    title: 'Partners & Awards | Accugile',
    description: 'Accugile technology partnerships, awards and certifications.',
};

export default function PartnersAwardsPage() {
    return (
        <PageShell>
            <PartnersHero />
            <PlatformPartners />
            <Awards />
            <Certifications />
            <ClientValue />
            <Industries n="05" bg="#F7F8FB" />
            <Comparison n="06" bg="#fff" />
            <StatsStrip padding="0 0 96px" />
            <PartnersCTA />
        </PageShell>
    );
}