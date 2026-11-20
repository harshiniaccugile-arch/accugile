import type { ServiceData } from '@/lib/service-types';

// Reuse the shared FAQs (pricing, communication, NDA, support, location)
export { commonFaqs } from './ai-common';

export const servicePhases: ServiceData['phases'] = [
    { title: 'Discovery', text: 'Stakeholder workshops to establish objectives, users, requirements and constraints.', output: 'Discovery report and success measures' },
    { title: 'Planning and architecture', text: 'Define scope, solution architecture, integrations and delivery plan.', output: 'Scope document and project plan' },
    { title: 'Design', text: 'Information architecture, wireframes and high-fidelity designs for approval.', output: 'Approved designs and prototype' },
    { title: 'Development', text: 'Two-week sprints with code review, staging access and sprint demonstrations.', output: 'Working software each sprint' },
    { title: 'Quality assurance and UAT', text: 'Functional, performance, security and accessibility testing, followed by client acceptance.', output: 'Test reports and UAT sign-off' },
    { title: 'Launch and hypercare', text: 'Controlled go-live, monitoring and priority support through the stabilisation period.', output: 'Launch checklist and handover pack' },
];

export const serviceOverviewCard: ServiceData['overview'] = [
    ['Delivery team', 'Project lead, designers, engineers, QA analysts, specialists as required'],
    ['Engagement models', 'Fixed-scope project, dedicated developer or dedicated team'],
    ['Governance', 'Weekly status reporting, sprint demonstrations, named project lead'],
    ['Contractual', 'NDA before discovery, full IP assignment on payment'],
];

export const serviceGovernance: ServiceData['governance'] = {
    deliverables: [
        'Requirements and scope specification',
        'Sitemap, architecture and user journeys',
        'Editable design files and assets',
        'Source code in your own repository',
        'Test and acceptance reports',
        'Training, documentation and handover pack',
    ],
    ipNote: 'All deliverables, source code and intellectual property are assigned to your organisation.',
    kpis: [
        { title: 'Conversion rate', text: 'Visitors who become leads or customers.' },
        { title: 'Page performance', text: 'Core Web Vitals and load times.' },
        { title: 'Time to market', text: 'Elapsed time from approval to launch.' },
        { title: 'Defect rate', text: 'Issues found after release.' },
        { title: 'Availability', text: 'Uptime of production systems.' },
        { title: 'Commercial return', text: 'Revenue or savings attributed to the work.' },
    ],
};