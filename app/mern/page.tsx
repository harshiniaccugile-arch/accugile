import type { Metadata } from 'next';
import ServiceTemplate from '@/components/Service/ServiceTemplate';
import { mern } from '@/lib/services/mern';

export const metadata: Metadata = {
    title: mern.metaTitle,
    description: mern.metaDescription,
};

export default function MernPage() {
    return <ServiceTemplate data={mern} />;
}