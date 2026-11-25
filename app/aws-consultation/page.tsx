import type { Metadata } from 'next';
import ServiceTemplate from '@/components/Service/ServiceTemplate';
import { awsConsultation } from '@/lib/services/aws-consultation';

export const metadata: Metadata = {
    title: awsConsultation.metaTitle,
    description: awsConsultation.metaDescription,
};

export default function AwsConsultationPage() {
    return <ServiceTemplate data={awsConsultation} />;
}
