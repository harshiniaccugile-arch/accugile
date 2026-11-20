import type { Metadata } from 'next';
import ServiceTemplate from '@/components/Service/ServiceTemplate';
import { aiChatbot } from '@/lib/services/ai-chatbot';

export const metadata: Metadata = {
    title: aiChatbot.metaTitle,
    description: aiChatbot.metaDescription,
};

export default function AiChatbotPage() {
    return <ServiceTemplate data={aiChatbot} />;
}