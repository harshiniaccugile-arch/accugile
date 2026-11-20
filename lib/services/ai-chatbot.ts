import type { ServiceData } from '@/lib/service-types';
import { aiGovernance, aiOverviewCard, aiPhases, commonFaqs } from './ai-common';

export const aiChatbot: ServiceData = {
    metaTitle: 'AI Chatbot Development | Accugile',
    metaDescription:
        'We build intelligent chatbots for websites, WhatsApp and messaging platforms that answer enquiries, qualify leads and complete transactions around the clock, with seamless handover to your team.',
    parent: { label: 'AI Solutions', href: '/ai' },
    name: 'AI Chatbot',
    eyebrow: 'AI Solutions',
    title: 'AI Chatbot Development',
    lead: 'We build intelligent chatbots for websites, WhatsApp and messaging platforms that answer enquiries, qualify leads and complete transactions around the clock, with seamless handover to your team.',
    overview: aiOverviewCard,
    overviewParas: [
        'Customers expect immediate, accurate responses on the channels they already use. A well-designed chatbot reduces response times, absorbs routine demand and ensures that your team focuses on conversations that require human judgement.',
        'We design chatbots around your content, workflows and brand voice. Each solution is grounded in approved knowledge, integrated with your CRM, helpdesk and commerce systems, and delivered with analytics that show exactly how it performs.',
    ],
    outcomes: [
        'Round-the-clock responses across web and messaging channels',
        'Lower support volumes and reduced cost per enquiry',
        'Qualified leads captured and routed automatically',
        'Consistent answers aligned with approved company information',
    ],
    challenge: {
        title: 'Beyond scripted chatbots',
        intro: 'Many chatbots frustrate users with rigid scripts, incorrect answers and dead ends. Others are launched without integration, so they cannot take action on a customer’s behalf. Our approach combines language models with your own content and systems, so the chatbot resolves real requests and hands over gracefully when it cannot.',
        items: [
            'Generic answers that do not reflect your products or policies',
            'No connection to orders, bookings or customer records',
            'Poor handover, leaving customers to repeat themselves',
        ],
    },
    capabilities: {
        aside: 'Each capability is delivered by specialists from our in-house teams and can be engaged individually or as part of a wider programme.',
        items: [
            { title: 'Conversation design', text: 'Flows, tone of voice and fallback behaviour designed around real customer journeys and your brand.' },
            { title: 'Website chatbots', text: 'Embedded assistants that answer questions, guide visitors and capture leads on your website or application.' },
            { title: 'WhatsApp and messaging bots', text: 'Bots for WhatsApp Business, Instagram, Messenger and SMS, built on official APIs.' },
            { title: 'Knowledge-grounded answers', text: 'Retrieval from your documentation, catalogue and FAQs so responses stay accurate and cite their sources.' },
            { title: 'System integration', text: 'Connections to CRM, helpdesk, payments, booking and order systems so the bot can complete tasks.' },
            { title: 'Live agent handover', text: 'Context-preserving escalation to human agents, with transcripts and sentiment flags.' },
        ],
    },
    useCases: [
        { title: 'Customer support', text: 'Instant answers to order, delivery, returns and account questions.' },
        { title: 'Lead qualification', text: 'Conversational capture of requirements, budget and timing, routed to the right salesperson.' },
        { title: 'Bookings and appointments', text: 'Scheduling, rescheduling and reminders directly within the chat.' },
        { title: 'Internal helpdesk', text: 'HR and IT assistants that answer employee questions and raise tickets.' },
    ],
    phases: aiPhases,
    governance: aiGovernance,
    tools: {
        aside: 'Technology is selected for maintainability, security and fit with your existing estate, not vendor preference.',
        items: ['OpenAI', 'Anthropic Claude', 'WhatsApp Business API', 'Twilio', 'Dialogflow', 'Rasa', 'LangChain', 'Next.js', 'Node.js', 'Python'],
    },
    featuredTag: '[Client] · [Industry] · AI Chatbot',
    faqs: [
        { q: 'Which channels can the chatbot run on?', a: 'We deploy on websites, mobile apps, WhatsApp Business, Instagram, Messenger and SMS. A single knowledge base can serve all channels so answers remain consistent.' },
        { q: 'What happens when the chatbot cannot answer?', a: 'It acknowledges the limit, offers alternatives and hands the conversation to a human agent with the full transcript, so customers never have to repeat themselves.' },
        { q: 'Can it connect to our CRM or order system?', a: 'Yes. We integrate with common CRM, helpdesk, e-commerce and booking platforms through their APIs, enabling the bot to look up records and complete actions securely.' },
        { q: 'Does it support multiple languages?', a: 'Yes. Modern language models support a wide range of languages, and we test each one against your content before launch.' },
        ...commonFaqs,
    ],
    related: [
        { href: '/generative-ai', label: 'AI Solutions', title: 'Generative AI Solutions', text: 'We build secure, production-grade applications on large language models, from internal copilots and knowledge assistants to content engines…' },
        { href: '/enterprise-ai', label: 'AI Solutions', title: 'Enterprise AI Integration', text: 'We integrate artificial intelligence into core enterprise systems with the security, governance and change management that large organisations…' },
        { href: '/ai-ml', label: 'AI Solutions', title: 'AI and Machine Learning Development', text: 'We design, train and operationalise machine learning models that convert enterprise data into reliable forecasts, classifications and decisions,…' },
    ],
    reading: [
        { tag: 'AI Chatbots · [X] min read', title: '[Article on AI Chatbots]' },
        { tag: 'Engineering · [X] min read', title: '[Article title]' },
        { tag: 'Strategy · [X] min read', title: '[Article title]' },
    ],
};