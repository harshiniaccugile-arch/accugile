import type { Metadata } from 'next';
import ServiceTemplate from '@/components/Service/ServiceTemplate';
import { ecommerceSolutions } from '@/lib/services/ecommerce-solutions';

export const metadata: Metadata = {
    title: ecommerceSolutions.metaTitle,
    description: ecommerceSolutions.metaDescription,
};

export default function EcommerceSolutionsPage() {
    return <ServiceTemplate data={ecommerceSolutions} />;
}