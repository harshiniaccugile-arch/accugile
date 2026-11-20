import type { Metadata } from 'next';
import ServiceTemplate from '@/components/Service/ServiceTemplate';
import { nodejs } from '@/lib/services/nodejs';

export const metadata: Metadata = {
    title: nodejs.metaTitle,
    description: nodejs.metaDescription,
};

export default function NodeJsPage() {
    return <ServiceTemplate data={nodejs} />;
}