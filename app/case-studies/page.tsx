import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CaseStudiesHero from '@/components/CaseStudies/CaseStudiesHero';
import FeaturedEngagements from '@/components/CaseStudies/FeaturedEngagements';
import StatsStrip from '@/components/CaseStudies/StatsStrip';
import Industries from '@/components/CaseStudies/Industries';
import Testimonials from '@/components/CaseStudies/Testimonials';
import DeliveryApproach from '@/components/CaseStudies/DeliveryApproach';
import EngagementModels from '@/components/CaseStudies/EngagementModels';
import CaseStudiesCTA from '@/components/CaseStudies/CaseStudiesCTA';

export const metadata: Metadata = {
    title: 'Case Studies | Accugile',
    description: 'Accugile client case studies across eCommerce, marketplaces, education, AI and integration.',
};

// Defines the --ac accent colour that buttons, eyebrows and links rely on.
// Remove this wrapper if your layout.tsx already provides it.
const shell = { '--ac': '#304DDB', width: '100%', background: '#FFFFFF', overflowX: 'clip' } as CSSProperties;

export default function CaseStudiesPage() {
    return (
        <div className="acc motion-on" style={shell}>
            <Header />
            <main>
                <CaseStudiesHero />
                <FeaturedEngagements />
                <StatsStrip />
                <Industries />
                <Testimonials />
                <DeliveryApproach />
                <EngagementModels />
                <CaseStudiesCTA />
            </main>
            <Footer />
        </div>
    );
}
