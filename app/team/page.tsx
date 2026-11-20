import type { Metadata } from 'next';
import PageShell from '@/components/Home/PageShell';
import TeamHero from '@/components/Team/TeamHero';
import Departments from '@/components/Team/Departments';
import TeamStructure from '@/components/Team/TeamStructure';
import DepartmentLeads from '@/components/Team/DepartmentLeads';
import PeopleDevelopment from '@/components/Team/PeopleDevelopment';
import Continuity from '@/components/Team/Continuity';
import QualitySecurity from '@/components/About/QualitySecurity';
import GlobalDelivery from '@/components/About/GlobalDelivery';
import StatsStrip from '@/components/About/StatsStrip';
import TeamCTA from '@/components/Team/TeamCTA';

export const metadata: Metadata = {
    title: 'Our Team | Accugile',
    description: 'Accugile in-house departments and delivery team structure.',
};

export default function TeamPage() {
    return (
        <PageShell>
            <TeamHero />
            <Departments />
            <TeamStructure />
            <DepartmentLeads />
            <PeopleDevelopment />
            <Continuity />
            <QualitySecurity n="06" bg="#F7F8FB" />
            <GlobalDelivery />
            <StatsStrip padding="0 0 96px" />
            <TeamCTA />
        </PageShell>
    );
}