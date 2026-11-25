import type { Metadata } from 'next';
import ServiceTemplate from '@/components/Service/ServiceTemplate';
import { salesforceConsultation } from '@/lib/services/salesforce-consultation';

export const metadata: Metadata = {
    title: salesforceConsultation.metaTitle,
    description: salesforceConsultation.metaDescription,
};

export default function SalesforceConsultationPage() {
    return <ServiceTemplate data={salesforceConsultation} />;
}
