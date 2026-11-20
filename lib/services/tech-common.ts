import type { ServiceData } from '@/lib/service-types';

export { commonFaqs } from './ai-common';

export const techOverviewCard: ServiceData['overview'] = [
    ['Delivery team', 'Technical lead, senior engineers, QA analyst, project lead'],
    ['Engagement models', 'Fixed-scope project, dedicated developer or dedicated team'],
    ['Governance', 'Weekly status reporting, sprint demonstrations, named project lead'],
    ['Contractual', 'NDA before discovery, full IP assignment on payment'],
];

export const techPhases: ServiceData['phases'] = [
    { title: 'Technical assessment', text: 'Review requirements, current systems and constraints to confirm platform fit.', output: 'Technical assessment report' },
    { title: 'Solution architecture', text: 'Document architecture, data flows, integrations and coding standards.', output: 'Architecture document' },
    { title: 'Environment set-up', text: 'Provision repositories, environments and CI/CD pipelines.', output: 'Development, staging and production environments' },
    { title: 'Sprint development', text: 'Senior engineers deliver features with peer review and automated tests.', output: 'Sprint releases and demonstrations' },
    { title: 'Testing and release', text: 'Regression, performance and security testing before each release.', output: 'Release notes and test results' },
    { title: 'Support and optimisation', text: 'Monitoring, updates and continuous performance improvements.', output: 'Service level reporting' },
];

export const techGovernance: ServiceData['governance'] = {
    deliverables: [
        'Technical assessment and recommendations',
        'Architecture and integration documentation',
        'Coding standards and repository set-up',
        'Automated CI/CD pipeline',
        'Test coverage and release reports',
        'Operations and support runbook',
    ],
    ipNote: 'All deliverables, source code and intellectual property are assigned to your organisation.',
    kpis: [
        { title: 'Performance', text: 'Server response and page load metrics.' },
        { title: 'Availability', text: 'Production uptime against target.' },
        { title: 'Release frequency', text: 'How often improvements reach users.' },
        { title: 'Defect escape rate', text: 'Issues found after release.' },
        { title: 'Security currency', text: 'Time to apply critical updates.' },
        { title: 'Total cost of ownership', text: 'Hosting, licences and maintenance.' },
    ],
};