import type { Metadata } from 'next';
import ServiceTemplate from '@/components/Service/ServiceTemplate';
import { phpFrameworks } from '@/lib/services/php-frameworks';

export const metadata: Metadata = {
    title: phpFrameworks.metaTitle,
    description: phpFrameworks.metaDescription,
};

export default function PhpFrameworksPage() {
    return <ServiceTemplate data={phpFrameworks} />;
}