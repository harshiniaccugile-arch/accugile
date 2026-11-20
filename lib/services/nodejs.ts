import type { ServiceData } from '@/lib/service-types';
import { techGovernance, techOverviewCard, techPhases, commonFaqs } from './tech-common';

export const nodejs: ServiceData = {
    metaTitle: 'Node.js Development | Accugile',
    metaDescription:
        'We build high-performance, event-driven back ends and real-time applications with Node.js.',
    parent: { label: 'Technology', href: '/technology' },
    name: 'NodeJS',
    eyebrow: 'Technology · Website Development',
    title: 'Node.js Development',
    lead: 'We build high-performance, event-driven back ends and real-time applications with Node.js.',
    overview: techOverviewCard,
    overviewParas: [
        'Node.js is well suited to APIs, real-time features and integration-heavy systems. Our Node.js engineers build services that are efficient, typed and observable.',
        'We use TypeScript, established frameworks and automated testing to deliver back ends that remain maintainable as teams and traffic grow.',
    ],
    outcomes: [
        'Fast, scalable APIs',
        'Real-time features such as chat and notifications',
        'Shared JavaScript skills across front and back end',
        'Efficient integration services',
    ],
    challenge: {
        title: 'Responsive back ends for modern applications',
        intro: 'Users expect real-time updates and fast responses, while businesses need systems that integrate easily with other services. Poorly structured Node.js code can become difficult to maintain. Our approach addresses these issues directly, with clear ownership and measurable outcomes from the outset.',
        items: [
            'APIs that slow down under increasing load',
            'Untyped code that is difficult to refactor safely',
            'Limited observability when issues arise in production',
        ],
    },
    capabilities: {
        aside: 'Each capability is delivered by specialists from our in-house teams and can be engaged individually or as part of a wider programme.',
        items: [
            { title: 'API development', text: 'REST and GraphQL APIs in TypeScript.' },
            { title: 'Real-time applications', text: 'WebSockets, live updates and messaging.' },
            { title: 'Microservices', text: 'Service-oriented architectures with clear boundaries.' },
            { title: 'Integration services', text: 'Connectors and middleware for third-party systems.' },
            { title: 'Serverless functions', text: 'Event-driven functions on AWS and Vercel.' },
            { title: 'Testing and observability', text: 'Automated tests, logging and tracing.' },
        ],
    },
    useCases: [
        { title: 'SaaS back ends', text: 'Multi-tenant APIs and services.' },
        { title: 'Real-time platforms', text: 'Chat, collaboration and live dashboards.' },
        { title: 'Integration hubs', text: 'Synchronising data between applications.' },
        { title: 'AI applications', text: 'Orchestration services for LLM features.' },
    ],
    phases: techPhases,
    governance: techGovernance,
    tools: {
        aside: 'Technology is selected for maintainability, security and fit with your existing estate, not vendor preference.',
        items: ['Node.js', 'TypeScript', 'NestJS', 'Express', 'Fastify', 'GraphQL', 'Socket.IO', 'PostgreSQL', 'MongoDB', 'AWS Lambda'],
    },
    featuredTag: '[Client] · [Industry] · NodeJS',
    faqs: [
        { q: 'Is Node.js suitable for enterprise systems?', a: 'Yes. With TypeScript, testing and sound architecture, Node.js supports large-scale enterprise applications.' },
        { q: 'Do you use TypeScript?', a: 'Yes, as standard on new Node.js projects.' },
        { q: 'Can Node.js integrate with our existing systems?', a: 'Yes. Node.js is particularly effective for API integration and middleware.' },
        ...commonFaqs,
    ],
    related: [
        { href: '/mern', label: 'Technology', title: 'MERN Stack Development', text: 'We deliver full-stack web applications on MongoDB, Express, React and Node.js, built by cross-functional teams for speed and…' },
        { href: '/mean', label: 'Technology', title: 'MEAN Stack Development', text: 'We build structured, enterprise-ready applications on MongoDB, Express, Angular and…' },
        { href: '/software-development', label: 'Services', title: 'Custom Software Development', text: 'We engineer custom business software, portals and integrations that fit your operating model precisely and scale with your…' },
    ],
    reading: [
        { tag: 'NodeJS · [X] min read', title: '[Article on NodeJS]' },
        { tag: 'Engineering · [X] min read', title: '[Article title]' },
        { tag: 'Strategy · [X] min read', title: '[Article title]' },
    ],
};