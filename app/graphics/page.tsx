import type { Metadata } from 'next';
import ServiceTemplate from '@/components/Service/ServiceTemplate';
import { graphics } from '@/lib/services/graphics';

export const metadata: Metadata = {
    title: graphics.metaTitle,
    description: graphics.metaDescription,
};

export default function GraphicsPage() {
    return <ServiceTemplate data={graphics} />;
}