import type { Metadata } from 'next';
import ServiceTemplate from '@/components/Service/ServiceTemplate';
import { automatedWorkflows } from '@/lib/services/automated-workflows';

export const metadata: Metadata = {
    title: automatedWorkflows.metaTitle,
    description: automatedWorkflows.metaDescription,
};

export default function AutomatedWorkflowsPage() {
    return <ServiceTemplate data={automatedWorkflows} />;
}