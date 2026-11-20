import type { Metadata } from 'next';
import ServiceTemplate from '@/components/Service/ServiceTemplate';
import { bigcommerce } from '@/lib/services/bigcommerce';

export const metadata: Metadata = {
    title: bigcommerce.metaTitle,
    description: bigcommerce.metaDescription,
};

export default function BigCommercePage() {
    return <ServiceTemplate data={bigcommerce} />;
}