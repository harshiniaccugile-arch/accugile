import type { Metadata } from 'next';
import ServiceTemplate from '@/components/Service/ServiceTemplate';
import { shopify } from '@/lib/services/shopify';

export const metadata: Metadata = {
    title: shopify.metaTitle,
    description: shopify.metaDescription,
};

export default function ShopifyPage() {
    return <ServiceTemplate data={shopify} />;
}