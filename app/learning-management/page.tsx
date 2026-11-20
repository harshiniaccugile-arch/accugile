import type { Metadata } from 'next';
import ServiceTemplate from '@/components/Service/ServiceTemplate';
import { learningManagement } from '@/lib/services/learning-management';

export const metadata: Metadata = {
    title: learningManagement.metaTitle,
    description: learningManagement.metaDescription,
};

export default function LearningManagementPage() {
    return <ServiceTemplate data={learningManagement} />;
}