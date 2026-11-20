import type { Metadata } from 'next';
import ServiceTemplate from '@/components/Service/ServiceTemplate';
import { magento } from '@/lib/services/magento';

export const metadata: Metadata = {
    title: magento.metaTitle,
    description: magento.metaDescription,
};

export default function MagentoPage() {
    return <ServiceTemplate data={magento} />;
}