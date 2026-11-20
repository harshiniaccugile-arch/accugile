import type { ServiceData } from '@/lib/service-types';
import { serviceGovernance, serviceOverviewCard, servicePhases, commonFaqs } from './service-common';

export const webDesign: ServiceData = {
    metaTitle: 'Web Design and UI/UX | Accugile',
    metaDescription:
        'We design digital experiences grounded in user research and business objectives, producing interfaces that are clear, accessible and consistent with your brand.',
    parent: { label: 'Services', href: '/services' },
    name: 'Web Design',
    eyebrow: 'Services',
    title: 'Web Design and UI/UX',
    lead: 'We design digital experiences grounded in user research and business objectives, producing interfaces that are clear, accessible and consistent with your brand.',
    overview: serviceOverviewCard,
    overviewParas: [
        'Effective design reduces friction for users and directly improves commercial outcomes. Our design practice combines research, information architecture and visual design to create interfaces that are both credible and easy to use.',
        'Designs are delivered as structured Figma files and design systems that development teams can implement accurately and maintain over time.',
    ],
    outcomes: [
        'Clear user journeys that increase conversion',
        'A consistent, professional brand presence online',
        'Accessible interfaces aligned to WCAG guidance',
        'Design systems that accelerate future work',
    ],
    challenge: {
        title: 'Design is a commercial decision',
        intro: 'Interfaces that confuse users increase support costs and reduce conversion. Design that looks attractive but ignores user behaviour rarely delivers the expected business results. Our approach addresses these issues directly, with clear ownership and measurable outcomes from the outset.',
        items: [
            'Users abandoning key journeys such as sign-up or checkout',
            'Inconsistent interfaces across products and pages',
            'Designs that are difficult for developers to implement accurately',
        ],
    },
    capabilities: {
        aside: 'Each capability is delivered by specialists from our in-house teams and can be engaged individually or as part of a wider programme.',
        items: [
            { title: 'User research', text: 'Stakeholder interviews, user interviews and analytics review.' },
            { title: 'Information architecture', text: 'Sitemaps, navigation and content hierarchy.' },
            { title: 'Wireframing and prototyping', text: 'Low and high fidelity prototypes for validation.' },
            { title: 'Visual design', text: 'Interface design aligned to brand guidelines.' },
            { title: 'Design systems', text: 'Reusable components, tokens and documentation.' },
            { title: 'Usability testing', text: 'Testing with representative users before development.' },
        ],
    },
    useCases: [
        { title: 'Website redesigns', text: 'Modernising outdated websites without losing what works.' },
        { title: 'SaaS products', text: 'Dashboards and complex application interfaces.' },
        { title: 'eCommerce', text: 'Product discovery and checkout optimisation.' },
        { title: 'Mobile applications', text: 'Native and responsive app interface design.' },
    ],
    phases: servicePhases,
    governance: serviceGovernance,
    tools: {
        aside: 'Technology is selected for maintainability, security and fit with your existing estate, not vendor preference.',
        items: ['Figma', 'FigJam', 'Adobe Creative Cloud', 'Maze', 'Hotjar', 'Microsoft Clarity', 'Storybook', 'Tailwind CSS'],
    },
    featuredTag: '[Client] · [Industry] · Web Design',
    faqs: [
        { q: 'Do you design and develop, or design only?', a: 'Both options are available. Most clients engage us for design and development to ensure the final product matches the approved design.' },
        { q: 'How many design revisions are included?', a: 'Revision rounds are defined in the proposal. Our process includes structured review points to minimise late changes.' },
        { q: 'Will we receive the source design files?', a: 'Yes. All Figma files and assets are transferred to your organisation.' },
        { q: 'Do you follow accessibility standards?', a: 'Yes. Designs are produced with WCAG 2.1 AA guidance in mind, including colour contrast and keyboard navigation.' },
        ...commonFaqs,
    ],
    related: [
        { href: '/ui-ux', label: 'Technology', title: 'UI/UX Design', text: 'Our UI/UX team designs intuitive, accessible digital products grounded in research and aligned with business…' },
        { href: '/website-development', label: 'Services', title: 'Website Development', text: 'We build fast, secure and accessible websites engineered for conversion, search performance and straightforward management by your…' },
        { href: '/graphics', label: 'Technology', title: 'Graphic Design', text: 'We produce professional graphic design for digital and print, ensuring every asset reflects your brand with consistency and…' },
    ],
    reading: [
        { tag: 'Web Design · [X] min read', title: '[Article on Web Design]' },
        { tag: 'Engineering · [X] min read', title: '[Article title]' },
        { tag: 'Strategy · [X] min read', title: '[Article title]' },
    ],
};