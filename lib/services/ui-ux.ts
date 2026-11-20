import type { ServiceData } from '@/lib/service-types';
import { techGovernance, techOverviewCard, techPhases, commonFaqs } from './tech-common';

export const uiUx: ServiceData = {
    metaTitle: 'UI/UX Design | Accugile',
    metaDescription:
        'Our UI/UX team designs intuitive, accessible digital products grounded in research and aligned with business objectives.',
    parent: { label: 'Technology', href: '/technology' },
    name: 'UI/UX',
    eyebrow: 'Technology · Website Designing',
    title: 'UI/UX Design',
    lead: 'Our UI/UX team designs intuitive, accessible digital products grounded in research and aligned with business objectives.',
    overview: techOverviewCard,
    overviewParas: [
        'Good user experience reduces support costs, increases conversion and strengthens brand perception. Our designers combine research, interaction design and visual craft to deliver interfaces that users understand immediately.',
        'We work closely with engineering throughout delivery, ensuring that the product shipped reflects the product designed.',
    ],
    outcomes: [
        'Higher task completion and conversion',
        'Reduced support and training needs',
        'Consistent experiences across products',
        'Accessible interfaces for all users',
    ],
    challenge: {
        title: 'Good experience is designed, not assumed',
        intro: 'Products built without research often solve the wrong problems or bury important features. The result is lower adoption, higher support costs and expensive redesigns later. Our approach addresses these issues directly, with clear ownership and measurable outcomes from the outset.',
        items: [
            'Features that users do not discover or understand',
            'Inconsistent interfaces across product areas',
            'Design decisions made without evidence',
        ],
    },
    capabilities: {
        aside: 'Each capability is delivered by specialists from our in-house teams and can be engaged individually or as part of a wider programme.',
        items: [
            { title: 'UX research', text: 'Interviews, surveys and analytics review.' },
            { title: 'User journeys', text: 'Journey maps and service blueprints.' },
            { title: 'Interaction design', text: 'Wireframes and interactive prototypes.' },
            { title: 'UI design', text: 'High-fidelity interface design.' },
            { title: 'Design systems', text: 'Component libraries and design tokens.' },
            { title: 'Usability testing', text: 'Moderated and unmoderated testing.' },
        ],
    },
    useCases: [
        { title: 'SaaS products', text: 'Complex dashboards and workflows.' },
        { title: 'Mobile apps', text: 'iOS and Android interfaces.' },
        { title: 'eCommerce', text: 'Discovery and checkout journeys.' },
        { title: 'Enterprise tools', text: 'Simplifying internal systems.' },
    ],
    phases: techPhases,
    governance: techGovernance,
    tools: {
        aside: 'Technology is selected for maintainability, security and fit with your existing estate, not vendor preference.',
        items: ['Figma', 'FigJam', 'Maze', 'Hotjar', 'Microsoft Clarity', 'Storybook', 'Lottie'],
    },
    featuredTag: '[Client] · [Industry] · UI/UX',
    faqs: [
        { q: 'Do you conduct user research?', a: 'Yes. Research scope is defined with you and scaled to the project.' },
        { q: 'Will designs be developer-ready?', a: 'Yes. We deliver annotated Figma files and design system documentation.' },
        { q: 'Can you audit our existing product?', a: 'Yes. A UX audit identifies prioritised improvements.' },
        ...commonFaqs,
    ],
    related: [
        { href: '/web-design', label: 'Services', title: 'Web Design and UI/UX', text: 'We design digital experiences grounded in user research and business objectives, producing interfaces that are clear, accessible and consistent with…' },
        { href: '/graphics', label: 'Technology', title: 'Graphic Design', text: 'We produce professional graphic design for digital and print, ensuring every asset reflects your brand with consistency and…' },
        { href: '/reactjs', label: 'Technology', title: 'React Development', text: 'We build fast, interactive user interfaces and web applications with React, delivered by experienced front-end…' },
    ],
    reading: [
        { tag: 'UI/UX · [X] min read', title: '[Article on UI/UX]' },
        { tag: 'Engineering · [X] min read', title: '[Article title]' },
        { tag: 'Strategy · [X] min read', title: '[Article title]' },
    ],
};