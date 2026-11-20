import type { Metadata } from 'next';
import ServiceTemplate from '@/components/Service/ServiceTemplate';
import { generativeAi } from '@/lib/services/generative-ai';

export const metadata: Metadata = {
    title: generativeAi.metaTitle,
    description: generativeAi.metaDescription,
};

export default function GenerativeAiPage() {
    return <ServiceTemplate data={generativeAi} />;
}
