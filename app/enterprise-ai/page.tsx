import type { Metadata } from 'next';
import ServiceTemplate from '@/components/Service/ServiceTemplate';
import { enterpriseAi } from '@/lib/services/enterprise-ai';

export const metadata: Metadata = {
    title: enterpriseAi.metaTitle,
    description: enterpriseAi.metaDescription,
};

export default function EnterpriseAiPage() {
    return <ServiceTemplate data={enterpriseAi} />;
}
