import type { Metadata } from 'next';
import ServiceTemplate from '@/components/Service/ServiceTemplate';
import { angular } from '@/lib/services/angular';

export const metadata: Metadata = {
    title: angular.metaTitle,
    description: angular.metaDescription,
};

export default function AngularPage() {
    return <ServiceTemplate data={angular} />;
}