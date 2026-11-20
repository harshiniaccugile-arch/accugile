import type { ServiceData } from '@/lib/service-types';

// Content that is identical across the AI Solutions pages.

export const aiOverviewCard: ServiceData['overview'] = [
    ['Delivery team', 'Solution architect, ML and data engineers, QA analyst, project lead'],
    ['Engagement models', 'Fixed-scope project, dedicated developer or dedicated team'],
    ['Governance', 'Weekly status reporting, sprint demonstrations, named project lead'],
    ['Contractual', 'NDA before discovery, full IP assignment on payment'],
];

export const aiPhases: ServiceData['phases'] = [
    { title: 'Discovery workshop', text: 'Define the business problem, users, constraints and measurable success criteria.', output: 'Use-case brief and success metrics' },
    { title: 'Data and feasibility assessment', text: 'Review data sources, quality, access and risk to confirm the approach is viable.', output: 'Data readiness report' },
    { title: 'Proof of value', text: 'Build a time-boxed pilot on real data and measure it against the agreed baseline.', output: 'Pilot results and evaluation report' },
    { title: 'Production engineering', text: 'Harden the solution with security, integrations, testing and documentation.', output: 'Production release and model documentation' },
    { title: 'Deployment and adoption', text: 'Roll out to users with training, communication and support.', output: 'Training materials and adoption plan' },
    { title: 'Monitoring and optimisation', text: 'Track accuracy, cost and usage, and improve the solution over time.', output: 'Monthly performance report' },
];

export const aiGovernance: ServiceData['governance'] = {
    deliverables: [
        'Use-case assessment and prioritisation',
        'Data readiness and risk report',
        'Model and prompt documentation',
        'Evaluation and accuracy report',
        'Integration and API documentation',
        'Operations runbook and monitoring dashboards',
    ],
    ipNote: 'All deliverables, source code and intellectual property are assigned to your organisation.',
    kpis: [
        { title: 'Accuracy against baseline', text: 'How much better the solution performs than the current process.' },
        { title: 'Automation rate', text: 'Share of requests or tasks completed without manual work.' },
        { title: 'Time saved', text: 'Hours returned to teams each month.' },
        { title: 'Cost per transaction', text: 'Including model usage and infrastructure.' },
        { title: 'Adoption', text: 'Active users and usage frequency.' },
        { title: 'Response time', text: 'Latency experienced by users.' },
    ],
};

export const commonFaqs: ServiceData['faqs'] = [
    { q: 'How is an engagement priced?', a: 'Fixed-scope projects are priced on an agreed scope and timeline. Dedicated developers and teams are billed monthly. Every proposal sets out the team, deliverables, schedule and investment in writing before work begins.' },
    { q: 'How will we communicate with the team?', a: 'You will have a named project lead, a shared project channel, weekly status reports and sprint demonstrations. Meetings are scheduled within agreed overlapping working hours.' },
    { q: 'Will you sign our NDA and master services agreement?', a: 'Yes. We sign mutual NDAs before discovery and work under your MSA or our standard agreement, whichever you prefer.' },
    { q: 'What support is available after launch?', a: 'Every launch includes a hypercare period, followed by optional maintenance plans with defined response times, monitoring and a monthly allocation of enhancement hours.' },
    { q: 'Where is the team located?', a: 'Our delivery team works from Coimbatore, Tamil Nadu, India, with working hours arranged to overlap with clients in the US, UK, Europe and Asia-Pacific.' },
];
