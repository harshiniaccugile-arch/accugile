import type { Metadata } from 'next';
import ServiceTemplate from '@/components/Service/ServiceTemplate';
import { membershipManagement } from '@/lib/services/membership-management';

export const metadata: Metadata = {
    title: membershipManagement.metaTitle,
    description: membershipManagement.metaDescription,
};

export default function MembershipManagementPage() {
    return <ServiceTemplate data={membershipManagement} />;
}