import type { Metadata } from 'next';
import ServiceTemplate from '@/components/Service/ServiceTemplate';
import { cloudSolutions } from '@/lib/services/cloud-solutions';

export const metadata: Metadata = {
    title: cloudSolutions.metaTitle,
    description: cloudSolutions.metaDescription,
};

export default function CloudSolutionsPage() {
    return <ServiceTemplate data={cloudSolutions} />;
}