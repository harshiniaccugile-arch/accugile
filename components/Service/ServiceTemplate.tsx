import type { CSSProperties } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { ServiceData } from '@/lib/service-types';
import ServiceHero from './ServiceHero';
import TrustStrip from './TrustStrip';
import ServiceOverview from './ServiceOverview';
import ChallengeSection from './ChallengeSection';
import Capabilities from './Capabilities';
import UseCases from './UseCases';
import DeliveryPhases from './DeliveryPhases';
import Governance from './Governance';
import TechStack from './TechStack';
import EngagementModels from './EngagementModels';
import CompareTable from './CompareTable';
import QualitySecurity from './QualitySecurity';
import FeaturedEngagement from './FeaturedEngagement';
import ServiceFaq from './ServiceFaq';
import RelatedCapabilities from './RelatedCapabilities';
import RelatedReading from './RelatedReading';
import StatsStrip from './StatsStrip';
import ServiceCTA from './ServiceCTA';

// Defines the --ac accent colour that buttons, eyebrows and links rely on.
// Remove this wrapper if your layout.tsx already provides it.
const shell = { '--ac': '#304DDB', width: '100%', background: '#FFFFFF', overflowX: 'clip' } as CSSProperties;

export default function ServiceTemplate({ data }: { data: ServiceData }) {
    return (
        <div className="acc motion-on" style={shell}>
            <Header />
            <main>
                <ServiceHero
                    parent={data.parent}
                    name={data.name}
                    eyebrow={data.eyebrow}
                    title={data.title}
                    lead={data.lead}
                    overview={data.overview}
                />
                <TrustStrip />
                <ServiceOverview paras={data.overviewParas} outcomes={data.outcomes} />
                <ChallengeSection {...data.challenge} />
                <Capabilities {...data.capabilities} />
                <UseCases items={data.useCases} />
                <DeliveryPhases phases={data.phases} />
                <Governance {...data.governance} />
                <TechStack {...data.tools} />
                <EngagementModels />
                <CompareTable />
                <QualitySecurity />

                <ServiceFaq faqs={data.faqs} />
                <RelatedCapabilities items={data.related} />

                <StatsStrip />
                <ServiceCTA />
            </main>
            <Footer />
        </div>
    );
}
