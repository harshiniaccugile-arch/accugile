import type { ServiceData } from '@/lib/service-types';
import { techGovernance, techOverviewCard, techPhases, commonFaqs } from './tech-common';

export const mern: ServiceData = {
    metaTitle: 'MERN Stack Development | Accugile',
    metaDescription:
        'We deliver full-stack web applications on MongoDB, Express, React and Node.js, built by cross-functional teams for speed and maintainability.',
    parent: { label: 'Technology', href: '/technology' },
    name: 'MERN',
    eyebrow: 'Technology · Website Development',
    title: 'MERN Stack Development',
    lead: 'We deliver full-stack web applications on MongoDB, Express, React and Node.js, built by cross-functional teams for speed and maintainability.',
    overview: techOverviewCard,
    overviewParas: [
        'The MERN stack allows a single JavaScript skill set across the entire application, which accelerates development and simplifies maintenance. Our MERN teams combine front-end, back-end and QA specialists on every project.',
        'We apply consistent architecture, typed code and automated testing so that MERN applications remain reliable as they grow.',
    ],
    outcomes: [
        'Faster delivery with a unified language',
        'Responsive, interactive user interfaces',
        'Flexible data models for evolving products',
        'Scalable cloud deployment',
    ],
    challenge: {
        title: 'Delivering full-stack products quickly and reliably',
        intro: 'Startups and product teams need to move fast without accumulating technical debt. Inconsistent architecture across front end and back end slows delivery as products grow. Our approach addresses these issues directly, with clear ownership and measurable outcomes from the outset.',
        items: [
            'Rapid prototypes that are difficult to scale',
            'Front-end and back-end teams working out of step',
            'Insufficient testing for frequent releases',
        ],
    },
    capabilities: {
        aside: 'Each capability is delivered by specialists from our in-house teams and can be engaged individually or as part of a wider programme.',
        items: [
            { title: 'Full-stack applications', text: 'End-to-end MERN product development.' },
            { title: 'MVP development', text: 'Rapid builds to validate new products.' },
            { title: 'Dashboards and portals', text: 'Data-rich interfaces with role-based access.' },
            { title: 'API and integrations', text: 'Express APIs and third-party connections.' },
            { title: 'Migration to MERN', text: 'Modernising legacy applications.' },
            { title: 'Maintenance', text: 'Ongoing support and feature development.' },
        ],
    },
    useCases: [
        { title: 'Startups', text: 'MVPs and early-stage products.' },
        { title: 'SaaS platforms', text: 'Interactive web applications.' },
        { title: 'Internal tools', text: 'Operational dashboards and portals.' },
        { title: 'Marketplaces', text: 'Real-time buyer and seller experiences.' },
    ],
    phases: techPhases,
    governance: techGovernance,
    tools: {
        aside: 'Technology is selected for maintainability, security and fit with your existing estate, not vendor preference.',
        items: ['MongoDB', 'Express', 'React', 'Node.js', 'TypeScript', 'Redux', 'Next.js', 'AWS', 'Docker'],
    },
    featuredTag: '[Client] · [Industry] · MERN',
    faqs: [
        { q: 'When is MERN the right choice?', a: 'MERN suits interactive applications with evolving data models. For highly relational data, we may recommend PostgreSQL alongside React and Node.js.' },
        { q: 'Can you provide a dedicated MERN team?', a: 'Yes, under our dedicated team engagement model.' },
        { q: 'Do you also handle hosting?', a: 'Yes, through our cloud and DevOps practice.' },
        ...commonFaqs,
    ],
    related: [
        { href: '/mean', label: 'Technology', title: 'MEAN Stack Development', text: 'We build structured, enterprise-ready applications on MongoDB, Express, Angular and…' },
        { href: '/reactjs', label: 'Technology', title: 'React Development', text: 'We build fast, interactive user interfaces and web applications with React, delivered by experienced front-end…' },
        { href: '/nodejs', label: 'Technology', title: 'Node.js Development', text: 'We build high-performance, event-driven back ends and real-time applications with…' },
    ],
    reading: [
        { tag: 'MERN · [X] min read', title: '[Article on MERN]' },
        { tag: 'Engineering · [X] min read', title: '[Article title]' },
        { tag: 'Strategy · [X] min read', title: '[Article title]' },
    ],
};