import type { Metadata } from 'next';
import ServiceTemplate from '@/components/Service/ServiceTemplate';
import { websiteDevelopment } from '@/lib/services/website-development';

export const metadata: Metadata = {
    title: websiteDevelopment.metaTitle,
    description: websiteDevelopment.metaDescription,
};

export default function WebsiteDevelopmentPage() {
    return <ServiceTemplate data={websiteDevelopment} />;
}