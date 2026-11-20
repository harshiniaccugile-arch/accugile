import type { ServiceData } from '@/lib/service-types';
import { aiGovernance, aiOverviewCard, aiPhases, commonFaqs } from './ai-common';

export const automatedWorkflows: ServiceData = {
    metaTitle: 'AI-Powered Workflow Automation | Accugile',
    metaDescription:
        'We automate repetitive, rules-based and judgement-assisted processes across your applications, reducing manual effort and error while improving turnaround times.',
    parent: { label: 'AI Solutions', href: '/ai' },
    name: 'Automated Workflows',
    eyebrow: 'AI Solutions',
    title: 'AI-Powered Workflow Automation',
    lead: 'We automate repetitive, rules-based and judgement-assisted processes across your applications, reducing manual effort and error while improving turnaround times.',
    overview: aiOverviewCard,
    overviewParas: [
        'Significant operational cost sits in work that moves data between systems, checks it and routes it for approval. We map these processes, identify where automation and AI add value, and implement reliable workflows with full visibility.',
        'Automations are built with exception handling, logging and alerts so that your operations team retains control and can trust the outcome.',
    ],
    outcomes: [
        'Hours of manual processing removed each week',
        'Fewer errors in data entry and reconciliation',
        'Faster approvals and customer response times',
        'Clear audit trails for every automated step',
    ],
    challenge: {
        title: 'Manual processes do not scale',
        intro: 'As organisations grow, teams spend increasing time copying data between systems, chasing approvals and correcting errors. This work is costly, slow and difficult to audit. Our approach addresses these issues directly, with clear ownership and measurable outcomes from the outset.',
        items: [
            'Duplicate data entry across disconnected applications',
            'Approvals delayed in email inboxes',
            'Errors discovered only after they affect customers',
        ],
    },
    capabilities: {
        aside: 'Each capability is delivered by specialists from our in-house teams and can be engaged individually or as part of a wider programme.',
        items: [
            { title: 'Process discovery', text: 'Workshops and process mapping to quantify automation opportunities and priorities.' },
            { title: 'Integration workflows', text: 'Data synchronisation between CRM, ERP, eCommerce, accounting and support tools.' },
            { title: 'AI decision steps', text: 'Classification, extraction and summarisation embedded into workflows.' },
            { title: 'Approval routing', text: 'Rules-based approvals with notifications, escalations and service level tracking.' },
            { title: 'Document processing', text: 'Automated capture and validation of data from emails, PDFs and forms.' },
            { title: 'Monitoring and support', text: 'Dashboards, alerting and ongoing maintenance of production automations.' },
        ],
    },
    useCases: [
        { title: 'Sales operations', text: 'Lead enrichment, assignment and CRM hygiene.' },
        { title: 'Finance', text: 'Invoice capture, payment reconciliation and reporting.' },
        { title: 'eCommerce operations', text: 'Order routing, inventory synchronisation and supplier updates.' },
        { title: 'Human resources', text: 'Onboarding tasks, document collection and access provisioning.' },
    ],
    phases: aiPhases,
    governance: aiGovernance,
    tools: {
        aside: 'Technology is selected for maintainability, security and fit with your existing estate, not vendor preference.',
        items: ['n8n', 'Make', 'Zapier', 'Microsoft Power Automate', 'Python', 'Node.js', 'OpenAI', 'Google Workspace', 'Slack', 'REST and GraphQL APIs'],
    },
    featuredTag: '[Client] · [Industry] · Automated Workflows',
    faqs: [
        { q: 'Do you use off-the-shelf automation platforms or custom code?', a: 'We recommend the most maintainable option for each process. Simple integrations often suit platforms such as n8n or Make, while complex or high-volume workflows are built in code.' },
        { q: 'What if an automated step fails?', a: 'Every workflow includes error handling, retries and alerts, with failed items routed to a named owner for review.' },
        { q: 'Can automations run on our own servers?', a: 'Yes. Self-hosted options are available where data policies require it.' },
        { q: 'How do we decide what to automate first?', a: 'We score each process by volume, effort, error rate and complexity to identify the fastest returns.' },
        ...commonFaqs,
    ],
    related: [
        { href: '/ai-chatbot', label: 'AI Solutions', title: 'AI Chatbot Development', text: 'We build intelligent chatbots for websites, WhatsApp and messaging platforms that answer enquiries, qualify leads and complete transactions around…' },
        { href: '/enterprise-ai', label: 'AI Solutions', title: 'Enterprise AI Integration', text: 'We integrate artificial intelligence into core enterprise systems with the security, governance and change management that large organisations…' },
        { href: '/cloud-solutions', label: 'Services', title: 'Cloud Solutions and DevOps', text: 'We design, migrate and operate cloud infrastructure that is secure, cost-efficient and resilient, supported by modern DevOps…' },
    ],
    reading: [
        { tag: 'Automated Workflows · [X] min read', title: '[Article on Automated Workflows]' },
        { tag: 'Engineering · [X] min read', title: '[Article title]' },
        { tag: 'Strategy · [X] min read', title: '[Article title]' },
    ],
};