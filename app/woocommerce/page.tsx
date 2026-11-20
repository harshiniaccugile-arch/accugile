import type { Metadata } from 'next';
import ServiceTemplate from '@/components/Service/ServiceTemplate';
import { woocommerce } from '@/lib/services/woocommerce';

export const metadata: Metadata = {
    title: woocommerce.metaTitle,
    description: woocommerce.metaDescription,
};

export default function WooCommercePage() {
    return <ServiceTemplate data={woocommerce} />;
}