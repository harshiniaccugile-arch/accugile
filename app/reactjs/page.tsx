import type { Metadata } from 'next';
import ServiceTemplate from '@/components/Service/ServiceTemplate';
import { reactjs } from '@/lib/services/reactjs';

export const metadata: Metadata = {
    title: reactjs.metaTitle,
    description: reactjs.metaDescription,
};

export default function ReactJsPage() {
    return <ServiceTemplate data={reactjs} />;
}