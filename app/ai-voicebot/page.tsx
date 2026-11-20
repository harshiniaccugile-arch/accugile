import type { Metadata } from 'next';
import ServiceTemplate from '@/components/Service/ServiceTemplate';
import { aiVoicebot } from '@/lib/services/ai-voicebot';

export const metadata: Metadata = {
    title: aiVoicebot.metaTitle,
    description: aiVoicebot.metaDescription,
};

export default function AiVoicebotPage() {
    return <ServiceTemplate data={aiVoicebot} />;
}
