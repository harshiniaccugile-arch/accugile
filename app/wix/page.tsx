import type { Metadata } from 'next';
import ServiceTemplate from '@/components/Service/ServiceTemplate';
import { wix } from '@/lib/services/wix';

export const metadata: Metadata = {
    title: wix.metaTitle,
    description: wix.metaDescription,
};

export default function WixPage() {
    return <ServiceTemplate data={wix} />;
}