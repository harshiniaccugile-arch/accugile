import type { Metadata } from 'next';
import ServiceTemplate from '@/components/Service/ServiceTemplate';
import { webDesign } from '@/lib/services/web-design';

export const metadata: Metadata = {
    title: webDesign.metaTitle,
    description: webDesign.metaDescription,
};

export default function WebDesignPage() {
    return <ServiceTemplate data={webDesign} />;
}