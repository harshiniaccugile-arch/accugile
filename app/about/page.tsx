import type { Metadata } from 'next';
import PageShell from '@/components/Home/PageShell';
import AboutHero from '@/components/About/AboutHero';
import TrustStrip from '@/components/About/TrustStrip';
import WhoWeAre from '@/components/About/WhoWeAre';
import Values from '@/components/About/Values';
import Capabilities from '@/components/About/Capabilities';
import Leadership from '@/components/About/Leadership';
import Industries from '@/components/About/Industries';
import DeliveryApproach from '@/components/About/DeliveryApproach';
import GlobalDelivery from '@/components/About/GlobalDelivery';
import Comparison from '@/components/About/Comparison';
import QualitySecurity from '@/components/About/QualitySecurity';
import FeaturedEngagement from '@/components/About/FeaturedEngagement';
import StatsStrip from '@/components/About/StatsStrip';
import PartnerCTA from '@/components/About/PartnerCTA';

export const metadata: Metadata = {
    title: 'About Us | Accugile',
    description:
        'About Accugile, a full-stack development and digital agency with one accountable in-house team.',
};

export default function AboutPage() {
    return (
        <PageShell>
            <AboutHero />
            <TrustStrip />
            <WhoWeAre />
            <Values />
            <Capabilities />
            <Leadership />
            <Industries />
            <DeliveryApproach />

            <Comparison />
            <QualitySecurity />

            <StatsStrip />
            <PartnerCTA />
        </PageShell>
    );
}