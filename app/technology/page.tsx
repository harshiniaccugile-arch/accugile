import type { Metadata } from 'next';
import TechnologyPage from '@/components/Technology/TechnologyPage';

export const metadata: Metadata = {
    title: 'Technology Expertise | Accugile',
    description: 'Specialist engineering capability across leading eCommerce platforms, back-end frameworks and front-end technologies, organised into dedicated in-house practices.',
};

export default function Technology() {
    return <TechnologyPage />;
}
