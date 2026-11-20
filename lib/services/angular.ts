import type { ServiceData } from '@/lib/service-types';
import { techGovernance, techOverviewCard, techPhases, commonFaqs } from './tech-common';

export const angular: ServiceData = {
    metaTitle: 'Angular Development | Accugile',
    metaDescription:
        'We build robust, scalable front-end applications with Angular for organisations that value structure and long-term maintainability.',
    parent: { label: 'Technology', href: '/technology' },
    name: 'Angular',
    eyebrow: 'Technology · Website Designing',
    title: 'Angular Development',
    lead: 'We build robust, scalable front-end applications with Angular for organisations that value structure and long-term maintainability.',
    overview: techOverviewCard,
    overviewParas: [
        'Angular provides a complete framework for complex applications, including routing, forms, testing and dependency injection. Our Angular developers build modular applications that teams can extend confidently.',
        'We deliver new applications, upgrades from older Angular versions and performance improvements for existing products.',
    ],
    outcomes: [
        'Consistent architecture for complex interfaces',
        'Reliable forms and validation',
        'Maintainable code across large teams',
        'Improved application performance',
    ],
    challenge: {
        title: 'Complex interfaces demand a reliable framework',
        intro: 'Data-heavy applications with complex forms and workflows require a structured approach. Without it, performance and maintainability suffer as features are added. Our approach addresses these issues directly, with clear ownership and measurable outcomes from the outset.',
        items: [
            'Performance issues in large single-page applications',
            'Outdated Angular versions and dependencies',
            'Duplicated components and inconsistent behaviour',
        ],
    },
    capabilities: {
        aside: 'Each capability is delivered by specialists from our in-house teams and can be engaged individually or as part of a wider programme.',
        items: [
            { title: 'Application development', text: 'Single-page applications and portals.' },
            { title: 'Component libraries', text: 'Reusable, documented UI components.' },
            { title: 'Version upgrades', text: 'Upgrading to current Angular releases.' },
            { title: 'Performance optimisation', text: 'Lazy loading, change detection and bundle tuning.' },
            { title: 'State management', text: 'NgRx and signal-based architectures.' },
            { title: 'Testing', text: 'Unit, integration and end-to-end testing.' },
        ],
    },
    useCases: [
        { title: 'Enterprise portals', text: 'Data-heavy internal applications.' },
        { title: 'Customer self-service', text: 'Account and service management.' },
        { title: 'Financial dashboards', text: 'Real-time reporting interfaces.' },
        { title: 'Booking systems', text: 'Multi-step forms and workflows.' },
    ],
    phases: techPhases,
    governance: techGovernance,
    tools: {
        aside: 'Technology is selected for maintainability, security and fit with your existing estate, not vendor preference.',
        items: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Angular Material', 'Tailwind CSS', 'Jest', 'Cypress'],
    },
    featuredTag: '[Client] · [Industry] · Angular',
    faqs: [
        { q: 'Can you maintain our existing Angular application?', a: 'Yes. We begin with a code review and agree a maintenance and improvement plan.' },
        { q: 'Do you upgrade AngularJS applications?', a: 'Yes, through a structured migration approach.' },
        { q: 'Do you design the interface as well?', a: 'Yes, through our UI/UX design team.' },
        ...commonFaqs,
    ],
    related: [
        { href: '/mean', label: 'Technology', title: 'MEAN Stack Development', text: 'We build structured, enterprise-ready applications on MongoDB, Express, Angular and…' },
        { href: '/ui-ux', label: 'Technology', title: 'UI/UX Design', text: 'Our UI/UX team designs intuitive, accessible digital products grounded in research and aligned with business…' },
        { href: '/reactjs', label: 'Technology', title: 'React Development', text: 'We build fast, interactive user interfaces and web applications with React, delivered by experienced front-end…' },
    ],
    reading: [
        { tag: 'Angular · [X] min read', title: '[Article on Angular]' },
        { tag: 'Engineering · [X] min read', title: '[Article title]' },
        { tag: 'Strategy · [X] min read', title: '[Article title]' },
    ],
};