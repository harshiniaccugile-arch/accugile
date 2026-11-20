import type { Metadata } from 'next';
import ServiceTemplate from '@/components/Service/ServiceTemplate';
import { mean } from '@/lib/services/mean';

export const metadata: Metadata = {
    title: mean.metaTitle,
    description: mean.metaDescription,
};

export default function MeanPage() {
    return <ServiceTemplate data={mean} />;
}