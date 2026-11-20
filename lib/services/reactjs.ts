import type { ServiceData } from '@/lib/service-types';
import { techGovernance, techOverviewCard, techPhases, commonFaqs } from './tech-common';

export const reactjs: ServiceData = {
    metaTitle: 'React Development | Accugile',
    metaDescription:
        'We build fast, interactive user interfaces and web applications with React, delivered by experienced front-end engineers.',
    parent: { label: 'Technology', href: '/technology' },
    name: 'ReactJS',
    eyebrow: 'Technology · Website Designing',
    title: 'React Development',
    lead: 'We build fast, interactive user interfaces and web applications with React, delivered by experienced front-end engineers.',
    overview: techOverviewCard,
    overviewParas: [
        'React is the leading library for modern user interfaces. Our React developers build component-driven applications with clear state management, accessibility and performance built in.',
        'We deliver new applications, extend existing products and establish component libraries that keep large interfaces consistent.',
    ],
    outcomes: [
        'Responsive, interactive user experiences',
        'Reusable components that speed up development',
        'Strong performance on all devices',
        'Maintainable front-end architecture',
    ],
    challenge: {
        title: 'Interfaces that remain fast as products grow',
        intro: 'React applications can become slow and difficult to maintain without sound architecture. Inconsistent components and state management increase defects and slow delivery. Our approach addresses these issues directly, with clear ownership and measurable outcomes from the outset.',
        items: [
            'Slow rendering and large JavaScript bundles',
            'Inconsistent components and duplicated logic',
            'Difficulty scaling front-end teams',
        ],
    },
    capabilities: {
        aside: 'Each capability is delivered by specialists from our in-house teams and can be engaged individually or as part of a wider programme.',
        items: [
            { title: 'Web application development', text: 'Single-page and multi-page React applications.' },
            { title: 'Component libraries', text: 'Design system implementation in React.' },
            { title: 'Dashboards', text: 'Data visualisation and reporting interfaces.' },
            { title: 'React Native', text: 'Cross-platform mobile applications.' },
            { title: 'Performance optimisation', text: 'Rendering, bundle and loading improvements.' },
            { title: 'Testing', text: 'Component and end-to-end testing.' },
        ],
    },
    useCases: [
        { title: 'SaaS products', text: 'Feature-rich application interfaces.' },
        { title: 'Dashboards', text: 'Analytics and operations tools.' },
        { title: 'eCommerce front ends', text: 'Headless storefronts.' },
        { title: 'Mobile apps', text: 'React Native applications.' },
    ],
    phases: techPhases,
    governance: techGovernance,
    tools: {
        aside: 'Technology is selected for maintainability, security and fit with your existing estate, not vendor preference.',
        items: ['React', 'TypeScript', 'Redux Toolkit', 'TanStack Query', 'Tailwind CSS', 'Storybook', 'Vite', 'Jest', 'Playwright', 'React Native'],
    },
    featuredTag: '[Client] · [Industry] · ReactJS',
    faqs: [
        { q: 'Do you use TypeScript with React?', a: 'Yes, as standard for new projects.' },
        { q: 'Can you build mobile apps with React?', a: 'Yes, using React Native for iOS and Android.' },
        { q: 'Can you join our existing React project?', a: 'Yes. Our developers can integrate with your team and workflows.' },
        ...commonFaqs,
    ],
    related: [
        { href: '/nextjs', label: 'Technology', title: 'Next.js Development', text: 'We build high-performance websites and web applications on Next.js, combining excellent search visibility with modern application…' },
        { href: '/mern', label: 'Technology', title: 'MERN Stack Development', text: 'We deliver full-stack web applications on MongoDB, Express, React and Node.js, built by cross-functional teams for speed and…' },
        { href: '/ui-ux', label: 'Technology', title: 'UI/UX Design', text: 'Our UI/UX team designs intuitive, accessible digital products grounded in research and aligned with business…' },
    ],
    reading: [
        { tag: 'ReactJS · [X] min read', title: '[Article on ReactJS]' },
        { tag: 'Engineering · [X] min read', title: '[Article title]' },
        { tag: 'Strategy · [X] min read', title: '[Article title]' },
    ],
};