import type { ServiceData } from '@/lib/service-types';
import { serviceGovernance, serviceOverviewCard, servicePhases, commonFaqs } from './service-common';

export const saasDevelopment: ServiceData = {
    metaTitle: 'SaaS Product Development | Accugile',
    metaDescription:
        'We take SaaS products from validated concept to scalable, multi-tenant platforms, combining product strategy, engineering and the operational experience of running our own products.',
    parent: { label: 'Services', href: '/services' },
    name: 'SaaS Development',
    eyebrow: 'Services',
    title: 'SaaS Product Development',
    lead: 'We take SaaS products from validated concept to scalable, multi-tenant platforms, combining product strategy, engineering and the operational experience of running our own products.',
    overview: serviceOverviewCard,
    overviewParas: [
        'Building SaaS requires decisions on architecture, billing, security and onboarding that are difficult to reverse. Because we operate our own SaaS products, our team brings practical experience of the trade-offs involved at every stage.',
        'We work as an extension of your product team, from MVP definition through to scaling, with a roadmap, sprint cadence and metrics agreed at the outset.',
    ],
    outcomes: [
        'Faster time to a market-ready MVP',
        'Multi-tenant architecture designed for scale',
        'Integrated billing, onboarding and analytics',
        'A product team you can scale up or down',
    ],
    challenge: {
        title: 'Early decisions shape a SaaS business for years',
        intro: 'Architecture, billing and onboarding choices made at MVP stage are difficult and expensive to reverse. Many products stall because they were built quickly without a plan to scale. Our approach addresses these issues directly, with clear ownership and measurable outcomes from the outset.',
        items: [
            'MVPs that cannot support multi-tenant growth',
            'Billing and subscription logic built as an afterthought',
            'Limited visibility of activation and retention metrics',
        ],
    },
    capabilities: {
        aside: 'Each capability is delivered by specialists from our in-house teams and can be engaged individually or as part of a wider programme.',
        items: [
            { title: 'Product discovery', text: 'Market validation, feature prioritisation and MVP definition.' },
            { title: 'Multi-tenant architecture', text: 'Secure tenant isolation, roles and workspace management.' },
            { title: 'Subscription billing', text: 'Plans, trials, metering and invoicing via Stripe and Razorpay.' },
            { title: 'Integrations and APIs', text: 'Public APIs, webhooks and third-party integrations.' },
            { title: 'DevOps and scaling', text: 'CI/CD, infrastructure as code and performance engineering.' },
            { title: 'Product analytics', text: 'Activation, retention and revenue metrics instrumentation.' },
        ],
    },
    useCases: [
        { title: 'Startups', text: 'MVP development and post-funding scale-up.' },
        { title: 'Established businesses', text: 'Productising internal tools for external customers.' },
        { title: 'Agencies', text: 'White-label platforms for client delivery.' },
        { title: 'Vertical SaaS', text: 'Industry-specific products with compliance needs.' },
    ],
    phases: servicePhases,
    governance: serviceGovernance,
    tools: {
        aside: 'Technology is selected for maintainability, security and fit with your existing estate, not vendor preference.',
        items: ['Laravel', 'Ruby on Rails', 'Node.js', 'React', 'Next.js', 'PostgreSQL', 'Redis', 'Stripe', 'AWS', 'Kubernetes'],
    },
    featuredTag: '[Client] · [Industry] · SaaS Development',
    faqs: [
        { q: 'Have you built SaaS products of your own?', a: 'Yes. We operate our own products, including Adorack, a social media management platform. That experience informs every client engagement.' },
        { q: 'How long does an MVP take?', a: 'Timelines depend on scope. We define a focused MVP during discovery and confirm the delivery schedule in the proposal.' },
        { q: 'Can you work alongside our in-house developers?', a: 'Yes. We regularly integrate with client teams, sharing repositories, ceremonies and tooling.' },
        { q: 'How do you handle security?', a: 'Secure coding practices, encryption, access controls and regular dependency audits are standard, with additional controls added for regulated markets.' },
        ...commonFaqs,
    ],
    related: [
        { href: '/software-development', label: 'Services', title: 'Custom Software Development', text: 'We engineer custom business software, portals and integrations that fit your operating model precisely and scale with your…' },
        { href: '/cloud-solutions', label: 'Services', title: 'Cloud Solutions and DevOps', text: 'We design, migrate and operate cloud infrastructure that is secure, cost-efficient and resilient, supported by modern DevOps…' },
        { href: '/adorack', label: 'Products', title: 'Adorack', text: 'Adorack is a social media scheduling and management platform with AI content tools, built and operated by Accugile for teams and…' },
    ],
    reading: [
        { tag: 'SaaS Development · [X] min read', title: '[Article on SaaS Development]' },
        { tag: 'Engineering · [X] min read', title: '[Article title]' },
        { tag: 'Strategy · [X] min read', title: '[Article title]' },
    ],
};