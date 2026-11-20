import type { ServiceData } from '@/lib/service-types';
import { aiGovernance, aiOverviewCard, aiPhases, commonFaqs } from './ai-common';

export const enterpriseAi: ServiceData = {
    metaTitle: 'Enterprise AI Integration | Accugile',
    metaDescription:
        'We integrate artificial intelligence into core enterprise systems with the security, governance and change management that large organisations require.',
    parent: { label: 'AI Solutions', href: '/ai' },
    name: 'Enterprise AI',
    eyebrow: 'AI Solutions',
    title: 'Enterprise AI Integration',
    lead: 'We integrate artificial intelligence into core enterprise systems with the security, governance and change management that large organisations require.',
    overview: aiOverviewCard,
    overviewParas: [
        'Enterprise AI succeeds when it is embedded into the systems and processes employees already use. We connect AI capabilities to ERP, CRM, document management and data platforms through secure, auditable integrations.',
        'Our approach is programme-led. We establish governance, select initial use cases with clear returns, deliver them to production and build the internal capability required to scale adoption across the organisation.',
    ],
    outcomes: [
        'AI embedded in existing workflows rather than standalone tools',
        'Clear governance, access control and auditability',
        'A prioritised roadmap tied to measurable returns',
        'Reduced operational cost in high-volume processes',
    ],
    challenge: {
        title: 'AI that stays outside core systems delivers little',
        intro: 'Standalone AI tools create isolated pockets of productivity. Real value is realised only when AI is integrated with the systems of record, aligned with security policy and adopted across departments. Our approach addresses these issues directly, with clear ownership and measurable outcomes from the outset.',
        items: [
            'Security and compliance concerns slowing approval',
            'Fragmented pilots with no shared roadmap or governance',
            'Low adoption because AI sits outside daily workflows',
        ],
    },
    capabilities: {
        aside: 'Each capability is delivered by specialists from our in-house teams and can be engaged individually or as part of a wider programme.',
        items: [
            { title: 'AI strategy and roadmap', text: 'Assessment of readiness, risk and opportunity, resulting in a sequenced, board-ready roadmap.' },
            { title: 'Systems integration', text: 'Secure connections between AI services and ERP, CRM, HRMS and document platforms.' },
            { title: 'Private deployment', text: 'Models hosted within your cloud tenancy or private infrastructure to meet data residency needs.' },
            { title: 'Governance frameworks', text: 'Usage policies, role-based access, audit trails and model risk documentation.' },
            { title: 'Document intelligence', text: 'Automated extraction and validation from invoices, contracts, forms and correspondence.' },
            { title: 'Adoption and enablement', text: 'Training, documentation and internal champions programmes that drive sustained usage.' },
        ],
    },
    useCases: [
        { title: 'Finance operations', text: 'Invoice processing, reconciliation support and spend analysis.' },
        { title: 'Human resources', text: 'Policy assistants, candidate screening support and onboarding guidance.' },
        { title: 'Operations', text: 'Exception handling, quality reporting and maintenance knowledge retrieval.' },
        { title: 'Executive reporting', text: 'Natural-language access to dashboards and management information.' },
    ],
    phases: aiPhases,
    governance: aiGovernance,
    tools: {
        aside: 'Technology is selected for maintainability, security and fit with your existing estate, not vendor preference.',
        items: ['Azure OpenAI', 'AWS Bedrock', 'Google Vertex AI', 'Microsoft 365', 'Salesforce', 'SAP', 'Odoo', 'Python', 'Kubernetes', 'Power BI'],
    },
    featuredTag: '[Client] · [Industry] · Enterprise AI',
    faqs: [
        { q: 'Can you work within our security and procurement processes?', a: 'Yes. We complete vendor security questionnaires, sign NDAs before discovery and align delivery with your internal change and release procedures.' },
        { q: 'Do you integrate with our existing ERP?', a: 'We have integration experience across common ERP and CRM platforms, including Odoo, SAP and Salesforce, through their supported APIs.' },
        { q: 'How do you manage AI risk?', a: 'We document intended use, data sources, limitations and controls for each solution, and we implement monitoring and human oversight proportionate to risk.' },
        { q: 'Can our internal team take over after launch?', a: 'Yes. Knowledge transfer, documentation and enablement are part of every enterprise engagement.' },
        ...commonFaqs,
    ],
    related: [
        { href: '/generative-ai', label: 'AI Solutions', title: 'Generative AI Solutions', text: 'We build secure, production-grade applications on large language models, from internal copilots and knowledge assistants to content engines that…' },
        { href: '/automated-workflows', label: 'AI Solutions', title: 'AI-Powered Workflow Automation', text: 'We automate repetitive, rules-based and judgement-assisted processes across your applications, reducing manual effort and error while improving…' },
        { href: '/software-development', label: 'Services', title: 'Custom Software Development', text: 'We engineer custom business software, portals and integrations that fit your operating model precisely and scale with your…' },
    ],
    reading: [
        { tag: 'Enterprise AI · [X] min read', title: '[Article on Enterprise AI]' },
        { tag: 'Engineering · [X] min read', title: '[Article title]' },
        { tag: 'Strategy · [X] min read', title: '[Article title]' },
    ],
};
