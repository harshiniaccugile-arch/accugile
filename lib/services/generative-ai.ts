import type { ServiceData } from '@/lib/service-types';
import { aiGovernance, aiOverviewCard, aiPhases, commonFaqs } from './ai-common';

export const generativeAi: ServiceData = {
    metaTitle: 'Generative AI Solutions | Accugile',
    metaDescription:
        'We build secure, production-grade applications on large language models, from internal copilots and knowledge assistants to content engines that operate within your brand and compliance requirements.',
    parent: { label: 'AI Solutions', href: '/ai' },
    name: 'Generative AI',
    eyebrow: 'AI Solutions',
    title: 'Generative AI Solutions',
    lead: 'We build secure, production-grade applications on large language models, from internal copilots and knowledge assistants to content engines that operate within your brand and compliance requirements.',
    overview: aiOverviewCard,
    overviewParas: [
        'Generative AI offers substantial productivity gains, but enterprise adoption depends on accuracy, data security and predictable cost. Our practice focuses on applications that meet all three conditions.',
        'We combine retrieval-augmented generation, structured prompting and rigorous evaluation so that outputs are grounded in your own content. Solutions are delivered with access controls, audit logging and usage reporting from the first release.',
    ],
    outcomes: [
        'Faster research, drafting and summarisation across teams',
        'Consistent, on-brand content at significantly higher volume',
        'Institutional knowledge available to every employee',
        'Controlled model costs with usage visibility',
    ],
    challenge: {
        title: 'Moving beyond experimentation',
        intro: 'Most organisations have trialled generative AI, but few have deployed it in ways that are trusted, secure and cost-controlled. Without grounding in company knowledge and proper governance, outputs remain unreliable. Our approach addresses these issues directly, with clear ownership and measurable outcomes from the outset.',
        items: [
            'Inaccurate or unverifiable answers that erode user trust',
            'Uncertainty about data privacy and model training',
            'Unpredictable usage costs as adoption grows',
        ],
    },
    capabilities: {
        aside: 'Each capability is delivered by specialists from our in-house teams and can be engaged individually or as part of a wider programme.',
        items: [
            { title: 'Use case discovery', text: 'Workshops that identify, size and prioritise generative AI opportunities across business functions.' },
            { title: 'Knowledge assistants', text: 'Retrieval-augmented assistants that answer questions from policies, manuals and internal documentation.' },
            { title: 'Copilots for teams', text: 'Embedded assistants for sales, support, legal and operations, integrated with existing tools.' },
            { title: 'Content generation engines', text: 'Governed pipelines for product descriptions, marketing copy and localisation.' },
            { title: 'Evaluation and guardrails', text: 'Automated quality testing, hallucination checks, content filtering and human review workflows.' },
            { title: 'Model selection and cost control', text: 'Benchmarking across commercial and open models, caching and routing to manage spend.' },
        ],
    },
    useCases: [
        { title: 'Customer support', text: 'Drafted responses and knowledge retrieval that reduce handling time.' },
        { title: 'Sales and marketing', text: 'Proposal drafting, campaign copy and personalised outreach at scale.' },
        { title: 'Legal and compliance', text: 'Contract summarisation, clause comparison and policy question answering.' },
        { title: 'Product and catalogue teams', text: 'Bulk generation and enrichment of product content.' },
    ],
    phases: aiPhases,
    governance: aiGovernance,
    tools: {
        aside: 'Technology is selected for maintainability, security and fit with your existing estate, not vendor preference.',
        items: ['OpenAI', 'Anthropic Claude', 'Llama', 'LangChain', 'LlamaIndex', 'Pinecone', 'pgvector', 'Python', 'Node.js', 'Azure OpenAI'],
    },
    featuredTag: '[Client] · [Industry] · Generative AI',
    faqs: [
        { q: 'Is our data used to train public models?', a: 'No. We configure enterprise model endpoints that do not retain or train on your data, and we document the data flow for your security review.' },
        { q: 'How do you prevent inaccurate answers?', a: 'Responses are grounded in your approved content, cite their sources and are tested against an evaluation set before release. Sensitive workflows include human approval steps.' },
        { q: 'Which model do you recommend?', a: 'The choice depends on accuracy, latency, cost and hosting requirements. We benchmark candidate models on your actual tasks before recommending one.' },
        { q: 'How long does a first release take?', a: 'A focused pilot is typically delivered within a few weeks of discovery. The precise timeline is confirmed in the proposal.' },
        ...commonFaqs,
    ],
    related: [
        { href: '/enterprise-ai', label: 'AI Solutions', title: 'Enterprise AI Integration', text: 'We integrate artificial intelligence into core enterprise systems with the security, governance and change management that large organisations…' },
        { href: '/ai-chatbot', label: 'AI Solutions', title: 'AI Chatbot Development', text: 'We build intelligent chatbots for websites, WhatsApp and messaging platforms that answer enquiries, qualify leads and complete transactions around…' },
        { href: '/ai-ml', label: 'AI Solutions', title: 'AI and Machine Learning Development', text: 'We design, train and operationalise machine learning models that convert enterprise data into reliable forecasts, classifications and decisions,…' },
    ],
    reading: [
        { tag: 'Generative AI · [X] min read', title: '[Article on Generative AI]' },
        { tag: 'Engineering · [X] min read', title: '[Article title]' },
        { tag: 'Strategy · [X] min read', title: '[Article title]' },
    ],
};
