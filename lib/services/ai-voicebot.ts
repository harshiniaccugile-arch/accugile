import type { ServiceData } from '@/lib/service-types';
import { aiGovernance, aiOverviewCard, aiPhases, commonFaqs } from './ai-common';

export const aiVoicebot: ServiceData = {
    metaTitle: 'AI Voicebot and Voice Agent Development | Accugile',
    metaDescription:
        'We deploy natural-sounding voice agents that handle inbound and outbound calls, bookings and IVR journeys with consistent quality at any volume.',
    parent: { label: 'AI Solutions', href: '/ai' },
    name: 'AI Voicebot',
    eyebrow: 'AI Solutions',
    title: 'AI Voicebot and Voice Agent Development',
    lead: 'We deploy natural-sounding voice agents that handle inbound and outbound calls, bookings and IVR journeys with consistent quality at any volume.',
    overview: aiOverviewCard,
    overviewParas: [
        'Telephone remains a primary channel for many customers, yet staffing it consistently is costly. AI voice agents answer immediately, follow approved scripts and integrate with your systems to complete requests during the call.',
        'We design call flows with your operations team, configure voices and languages appropriate to your market, and connect every call to analytics and recordings for quality assurance.',
    ],
    outcomes: [
        'Zero wait times during peak call periods',
        'Lower cost per call for routine requests',
        'Consistent, compliant call handling',
        'Complete transcripts and call analytics',
    ],
    challenge: {
        title: 'Telephone demand is uneven and expensive',
        intro: 'Call volumes peak unpredictably, leaving customers on hold and agents overstretched. Traditional IVR menus frustrate callers and rarely resolve requests without transfer. Our approach addresses these issues directly, with clear ownership and measurable outcomes from the outset.',
        items: [
            'Long hold times and abandoned calls during peaks',
            'High staffing cost for routine, repetitive calls',
            'Inconsistent call quality and limited visibility',
        ],
    },
    capabilities: {
        aside: 'Each capability is delivered by specialists from our in-house teams and can be engaged individually or as part of a wider programme.',
        items: [
            { title: 'Inbound call handling', text: 'Voice agents that answer, identify intent and resolve common requests.' },
            { title: 'Outbound campaigns', text: 'Appointment reminders, payment follow-ups and feedback calls at scale.' },
            { title: 'Intelligent IVR', text: 'Conversational IVR that replaces menu trees with natural speech.' },
            { title: 'Booking and scheduling', text: 'Real-time availability checks and confirmations integrated with calendars.' },
            { title: 'Telephony integration', text: 'Connection to existing numbers, SIP trunks and contact centre platforms.' },
            { title: 'Quality and compliance', text: 'Call recording, transcription, sentiment analysis and script adherence reporting.' },
        ],
    },
    useCases: [
        { title: 'Healthcare clinics', text: 'Appointment booking, reminders and rescheduling.' },
        { title: 'Financial services', text: 'Payment reminders and account information requests.' },
        { title: 'Hospitality', text: 'Reservations and guest enquiries outside business hours.' },
        { title: 'Field services', text: 'Service booking and technician arrival updates.' },
    ],
    phases: aiPhases,
    governance: aiGovernance,
    tools: {
        aside: 'Technology is selected for maintainability, security and fit with your existing estate, not vendor preference.',
        items: ['Twilio', 'Exotel', 'Vonage', 'ElevenLabs', 'Deepgram', 'OpenAI Realtime', 'Node.js', 'Python', 'Google Calendar', 'Salesforce'],
    },
    featuredTag: '[Client] · [Industry] · AI Voicebot',
    faqs: [
        { q: 'Will callers know they are speaking with AI?', a: 'We recommend clear disclosure at the start of each call, in line with good practice and applicable regulations.' },
        { q: 'Can we use our existing phone numbers?', a: 'Yes. Voice agents can be connected to existing numbers through your telephony provider or SIP trunk.' },
        { q: 'Which languages are supported?', a: 'English and a range of Indian and international languages, subject to voice and recognition quality testing for your use case.' },
        { q: 'How are complex calls handled?', a: 'Calls that require human judgement are transferred to your team with a summary of the conversation so far.' },
        ...commonFaqs,
    ],
    related: [
        { href: '/ai-chatbot', label: 'AI Solutions', title: 'AI Chatbot Development', text: 'We build intelligent chatbots for websites, WhatsApp and messaging platforms that answer enquiries, qualify leads and complete transactions around…' },
        { href: '/automated-workflows', label: 'AI Solutions', title: 'AI-Powered Workflow Automation', text: 'We automate repetitive, rules-based and judgement-assisted processes across your applications, reducing manual effort and error while improving…' },
        { href: '/enterprise-ai', label: 'AI Solutions', title: 'Enterprise AI Integration', text: 'We integrate artificial intelligence into core enterprise systems with the security, governance and change management that large organisations…' },
    ],
    reading: [
        { tag: 'AI Voicebot · [X] min read', title: '[Article on AI Voicebot]' },
        { tag: 'Engineering · [X] min read', title: '[Article title]' },
        { tag: 'Strategy · [X] min read', title: '[Article title]' },
    ],
};
