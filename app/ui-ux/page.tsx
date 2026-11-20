import type { Metadata } from 'next';
import ServiceTemplate from '@/components/Service/ServiceTemplate';
import { uiUx } from '@/lib/services/ui-ux';

export const metadata: Metadata = {
    title: uiUx.metaTitle,
    description: uiUx.metaDescription,
};

export default function UiUxPage() {
    return <ServiceTemplate data={uiUx} />;
}