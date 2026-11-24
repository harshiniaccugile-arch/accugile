import type { Metadata } from 'next';
import AIPage from '@/components/AI/AIPage';

export const metadata: Metadata = {
    title: 'Artificial Intelligence Solutions | Accugile',
    description: 'Enterprise-grade AI, from machine learning and generative AI to conversational agents and intelligent automation, designed, built and governed by our in-house AI practice.',
};

export default function AI() {
    return <AIPage />;
}
