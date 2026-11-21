import type { Metadata } from 'next';
import PageShell from '@/components/Home/PageShell';
import ServicesHero from '@/components/Services/ServicesHero';
import TrustStrip from '@/components/Service/TrustStrip';
import ServicesPortfolio from '@/components/Services/ServicesPortfolio';
import Industries from '@/components/About/Industries';
import ServicesDelivery from '@/components/Services/ServicesDelivery';
import ServicesGovernance from '@/components/Services/ServicesGovernance';
import EngagementModels from '@/components/Service/EngagementModels';
import CompareTable from '@/components/Service/CompareTable';
import QualitySecurity from '@/components/Service/QualitySecurity';
import FeaturedEngagement from '@/components/Service/FeaturedEngagement';
import ServiceFaq from '@/components/Service/ServiceFaq';
import RelatedReading from '@/components/Service/RelatedReading';
import StatsStrip from '@/components/About/StatsStrip';
import PartnersCTA from '@/components/Partners/PartnersCTA';
import { commonFaqs } from '@/lib/services/ai-common';

export const metadata: Metadata = {
    title: 'Digital Services | Accugile',
    description: 'End-to-end digital services spanning strategy, design, engineering, commerce, cloud and marketing, delivered by one accountable in-house team.',
};

const serviceReading = [
    { tag: 'Services · [X] min read', title: '[Article on Services]' },
    { tag: 'Engineering · [X] min read', title: '[Article title]' },
    { tag: 'Strategy · [X] min read', title: '[Article title]' },
];

export default function ServicesPage() {
    return (
        <PageShell>
            <ServicesHero />
            <TrustStrip />
            <ServicesPortfolio />
            <Industries n="02" bg="#F7F8FB" />
            <ServicesDelivery />
            <ServicesGovernance />
            <EngagementModels />
            <CompareTable />
            <QualitySecurity />

            <ServiceFaq faqs={commonFaqs} />

            <StatsStrip padding="0 0 96px" />
            <PartnersCTA />
        </PageShell>
    );
}

