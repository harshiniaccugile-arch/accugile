import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CareersHero from '@/components/Careers/CareersHero';
import WhyAccugile from '@/components/Careers/WhyAccugile';
import OpenRoles from '@/components/Careers/OpenRoles';
import HiringProcess from '@/components/Careers/HiringProcess';
import Benefits from '@/components/Careers/Benefits';
import LifeAtAccugile from '@/components/Careers/LifeAtAccugile';
import CareersFaq from '@/components/Careers/CareersFaq';
import CareersCTA from '@/components/Careers/CareersCTA';

export const metadata: Metadata = {
    title: 'Careers | Accugile',
    description: 'Careers at Accugile in engineering, design, QA and marketing.',
};

// Defines the --ac accent colour that buttons, eyebrows and links rely on.
// Remove this wrapper if your layout.tsx already provides it.
const shell = { '--ac': '#304DDB', width: '100%', background: '#FFFFFF', overflowX: 'clip' } as CSSProperties;

export default function CareersPage() {
    return (
        <div className="acc motion-on" style={shell}>
            <Header />
            <main>
                <CareersHero />
                <WhyAccugile />
                <OpenRoles />
                <HiringProcess />
                <Benefits />
                <LifeAtAccugile />
                <CareersFaq />
                <CareersCTA />
            </main>
            <Footer />
        </div>
    );
}
