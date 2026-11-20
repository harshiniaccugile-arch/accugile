import type { Metadata } from 'next';
import ServiceTemplate from '@/components/Service/ServiceTemplate';
import { softwareDevelopment } from '@/lib/services/software-development';

export const metadata: Metadata = {
    title: softwareDevelopment.metaTitle,
    description: softwareDevelopment.metaDescription,
};

export default function SoftwareDevelopmentPage() {
    return <ServiceTemplate data={softwareDevelopment} />;
}