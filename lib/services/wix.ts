import type { ServiceData } from '@/lib/service-types';
import { techGovernance, techOverviewCard, techPhases, commonFaqs } from './tech-common';

export const wix: ServiceData = {
    metaTitle: 'Wix Website Development | Accugile',
    metaDescription:
        'We design and build professional Wix websites and stores for businesses that value simplicity, speed to launch and easy self-management.',
    parent: { label: 'Technology', href: '/technology' },
    name: 'Wix',
    eyebrow: 'Technology · eCommerce',
    title: 'Wix Website Development',
    lead: 'We design and build professional Wix websites and stores for businesses that value simplicity, speed to launch and easy self-management.',
    overview: techOverviewCard,
    overviewParas: [
        'Wix enables small and mid-sized businesses to manage their own websites without technical support. We deliver custom Wix designs, configure Wix Stores and extend functionality with Velo where required.',
        'For businesses that outgrow Wix, we also plan and execute migrations to WordPress or Shopify.',
    ],
    outcomes: [
        'A professional website launched quickly',
        'Simple self-service content management',
        'Integrated booking and store features',
        'A clear path to scale when required',
    ],
    challenge: {
        title: 'A professional website without the overhead',
        intro: 'Small and mid-sized businesses need a credible website they can manage themselves. Template-based sites often look generic and miss essential SEO and conversion elements. Our approach addresses these issues directly, with clear ownership and measurable outcomes from the outset.',
        items: [
            'Generic templates that do not reflect the brand',
            'Missing SEO and analytics configuration',
            'Uncertainty about when to move to a larger platform',
        ],
    },
    capabilities: {
        aside: 'Each capability is delivered by specialists from our in-house teams and can be engaged individually or as part of a wider programme.',
        items: [
            { title: 'Custom Wix design', text: 'Bespoke layouts aligned to your brand.' },
            { title: 'Wix Stores', text: 'Product catalogue, payments and shipping setup.' },
            { title: 'Wix Bookings', text: 'Appointment and service booking configuration.' },
            { title: 'Velo development', text: 'Custom functionality and data integration.' },
            { title: 'SEO setup', text: 'Technical SEO and metadata configuration.' },
            { title: 'Migration from Wix', text: 'Moving to WordPress or Shopify as you grow.' },
        ],
    },
    useCases: [
        { title: 'Small businesses', text: 'Professional presence with minimal maintenance.' },
        { title: 'Service providers', text: 'Bookings and enquiries online.' },
        { title: 'Boutique retailers', text: 'Small catalogues with integrated payments.' },
        { title: 'Consultants', text: 'Personal brand websites.' },
    ],
    phases: techPhases,
    governance: techGovernance,
    tools: {
        aside: 'Technology is selected for maintainability, security and fit with your existing estate, not vendor preference.',
        items: ['Wix', 'Wix Studio', 'Velo', 'Wix Stores', 'Wix Bookings', 'JavaScript'],
    },
    featuredTag: '[Client] · [Industry] · Wix',
    faqs: [
        { q: 'Is Wix suitable for SEO?', a: 'Wix provides solid SEO foundations when configured correctly, which we include in every build.' },
        { q: 'Can you migrate us away from Wix later?', a: 'Yes. We plan and execute migrations to WordPress or Shopify when requirements change.' },
        { q: 'Can we edit the site ourselves?', a: 'Yes. Wix is designed for self-management, and we provide training at handover.' },
        ...commonFaqs,
    ],
    related: [
        { href: '/website-development', label: 'Services', title: 'Website Development', text: 'We build fast, secure and accessible websites engineered for conversion, search performance and straightforward management by your…' },
        { href: '/web-design', label: 'Services', title: 'Web Design and UI/UX', text: 'We design digital experiences grounded in user research and business objectives, producing interfaces that are clear, accessible and consistent with…' },
        { href: '/shopify', label: 'Technology', title: 'Shopify Development', text: 'We design and build Shopify stores that are quick to launch, simple to manage and engineered for…' },
    ],
    reading: [
        { tag: 'Wix · [X] min read', title: '[Article on Wix]' },
        { tag: 'Engineering · [X] min read', title: '[Article title]' },
        { tag: 'Strategy · [X] min read', title: '[Article title]' },
    ],
};