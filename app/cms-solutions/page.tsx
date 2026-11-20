import type { Metadata } from 'next';
import ServiceTemplate from '@/components/Service/ServiceTemplate';
import { cmsSolutions } from '@/lib/services/cms-solutions';

export const metadata: Metadata = {
    title: cmsSolutions.metaTitle,
    description: cmsSolutions.metaDescription,
};

export default function CmsSolutionsPage() {
    return <ServiceTemplate data={cmsSolutions} />;
}