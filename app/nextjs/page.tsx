import type { Metadata } from 'next';
import ServiceTemplate from '@/components/Service/ServiceTemplate';
import { nextjs } from '@/lib/services/nextjs';

export const metadata: Metadata = {
    title: nextjs.metaTitle,
    description: nextjs.metaDescription,
};

export default function NextJsPage() {
    return <ServiceTemplate data={nextjs} />;
}