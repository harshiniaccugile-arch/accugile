import type { Metadata } from 'next';
import ServiceTemplate from '@/components/Service/ServiceTemplate';
import { shopifyPlus } from '@/lib/services/shopify-plus';

export const metadata: Metadata = {
    title: shopifyPlus.metaTitle,
    description: shopifyPlus.metaDescription,
};

export default function ShopifyPlusPage() {
    return <ServiceTemplate data={shopifyPlus} />;
}