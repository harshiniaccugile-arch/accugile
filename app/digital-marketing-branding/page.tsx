import type { Metadata } from 'next';
import ServiceTemplate from '@/components/Service/ServiceTemplate';
import { digitalMarketingBranding } from '@/lib/services/digital-marketing-branding';

export const metadata: Metadata = {
    title: digitalMarketingBranding.metaTitle,
    description: digitalMarketingBranding.metaDescription,
};

export default function DigitalMarketingBrandingPage() {
    return <ServiceTemplate data={digitalMarketingBranding} />;
}