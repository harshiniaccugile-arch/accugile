import type { Metadata } from 'next';
import ServiceTemplate from '@/components/Service/ServiceTemplate';
import { saasDevelopment } from '@/lib/services/saas-development';

export const metadata: Metadata = {
    title: saasDevelopment.metaTitle,
    description: saasDevelopment.metaDescription,
};

export default function SaasDevelopmentPage() {
    return <ServiceTemplate data={saasDevelopment} />;
}