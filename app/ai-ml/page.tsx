import type { Metadata } from 'next';
import ServiceTemplate from '@/components/Service/ServiceTemplate';
import { aiMl } from '@/lib/services/ai-ml';

export const metadata: Metadata = {
    title: aiMl.metaTitle,
    description: aiMl.metaDescription,
};

export default function AiMlPage() {
    return <ServiceTemplate data={aiMl} />;
}
