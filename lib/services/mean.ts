import type { ServiceData } from '@/lib/service-types';
import { techGovernance, techOverviewCard, techPhases, commonFaqs } from './tech-common';

export const mean: ServiceData = {
    metaTitle: 'MEAN Stack Development | Accugile',
    metaDescription:
        'We build structured, enterprise-ready applications on MongoDB, Express, Angular and Node.js.',
    parent: { label: 'Technology', href: '/technology' },
    name: 'MEAN',
    eyebrow: 'Technology · Website Development',
    title: 'MEAN Stack Development',
    lead: 'We build structured, enterprise-ready applications on MongoDB, Express, Angular and Node.js.',
    overview: techOverviewCard,
    overviewParas: [
        'The MEAN stack pairs Angular’s opinionated structure with a JavaScript back end, making it a strong choice for large applications maintained by multiple teams.',
        'Our MEAN engineers deliver modular, well-tested applications with clear conventions that support long-term enterprise maintenance.',
    ],
    outcomes: [
        'Consistent structure across large codebases',
        'Strong typing through TypeScript',
        'Enterprise-grade front-end architecture',
        'Unified JavaScript development',
    ],
    challenge: {
        title: 'Structure for large, long-lived applications',
        intro: 'Enterprise applications are maintained by many developers over many years. Without a consistent framework and conventions, quality declines and onboarding becomes slow. Our approach addresses these issues directly, with clear ownership and measurable outcomes from the outset.',
        items: [
            'Inconsistent patterns across large codebases',
            'Ageing AngularJS applications without a migration plan',
            'Slow onboarding of new developers',
        ],
    },
    capabilities: {
        aside: 'Each capability is delivered by specialists from our in-house teams and can be engaged individually or as part of a wider programme.',
        items: [
            { title: 'Enterprise applications', text: 'Large, modular business applications.' },
            { title: 'Admin and operations portals', text: 'Complex forms, workflows and reporting.' },
            { title: 'API development', text: 'Express and Node.js services.' },
            { title: 'Angular upgrades', text: 'Migrating from AngularJS to modern Angular.' },
            { title: 'Testing', text: 'Unit and end-to-end test automation.' },
            { title: 'Support', text: 'Long-term maintenance and enhancement.' },
        ],
    },
    useCases: [
        { title: 'Enterprises', text: 'Internal platforms maintained by several teams.' },
        { title: 'Financial services', text: 'Data-intensive operational tools.' },
        { title: 'Healthcare', text: 'Structured, form-heavy applications.' },
        { title: 'Government and education', text: 'Long-lifecycle systems.' },
    ],
    phases: techPhases,
    governance: techGovernance,
    tools: {
        aside: 'Technology is selected for maintainability, security and fit with your existing estate, not vendor preference.',
        items: ['MongoDB', 'Express', 'Angular', 'Node.js', 'TypeScript', 'RxJS', 'NgRx', 'Jest', 'Cypress'],
    },
    featuredTag: '[Client] · [Industry] · MEAN',
    faqs: [
        { q: 'Should we choose MEAN or MERN?', a: 'MEAN suits larger teams that benefit from Angular’s structure. MERN offers more flexibility for fast-moving products. We advise based on your team and roadmap.' },
        { q: 'Can you upgrade our AngularJS application?', a: 'Yes, through a planned, incremental migration.' },
        { q: 'Do you provide end-to-end testing?', a: 'Yes, using Cypress or Playwright.' },
        ...commonFaqs,
    ],
    related: [
        { href: '/angular', label: 'Technology', title: 'Angular Development', text: 'We build robust, scalable front-end applications with Angular for organisations that value structure and long-term…' },
        { href: '/mern', label: 'Technology', title: 'MERN Stack Development', text: 'We deliver full-stack web applications on MongoDB, Express, React and Node.js, built by cross-functional teams for speed and…' },
        { href: '/nodejs', label: 'Technology', title: 'Node.js Development', text: 'We build high-performance, event-driven back ends and real-time applications with…' },
    ],
    reading: [
        { tag: 'MEAN · [X] min read', title: '[Article on MEAN]' },
        { tag: 'Engineering · [X] min read', title: '[Article title]' },
        { tag: 'Strategy · [X] min read', title: '[Article title]' },
    ],
};