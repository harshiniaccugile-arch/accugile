import type { ServiceData } from '@/lib/service-types';
import { techGovernance, techOverviewCard, techPhases, commonFaqs } from './tech-common';

export const woocommerce: ServiceData = {
    metaTitle: 'WooCommerce Development | Accugile',
    metaDescription:
        'We build and scale WooCommerce stores and marketplaces with full ownership, deep customisation and the content strength of WordPress.',
    parent: { label: 'Technology', href: '/technology' },
    name: 'WooCommerce',
    eyebrow: 'Technology · eCommerce',
    title: 'WooCommerce Development',
    lead: 'We build and scale WooCommerce stores and marketplaces with full ownership, deep customisation and the content strength of WordPress.',
    overview: techOverviewCard,
    overviewParas: [
        'WooCommerce combines eCommerce with the world’s most widely used CMS, giving businesses complete control of their store and data. Our WooCommerce team has extensive experience with custom stores, migrations and multivendor marketplaces.',
        'We engineer WooCommerce for performance and reliability, with hosting, caching and code practices suited to growing order volumes.',
    ],
    outcomes: [
        'Complete ownership of store, data and code',
        'Flexible customisation of every workflow',
        'Strong content and SEO capability',
        'Lower ongoing platform costs',
    ],
    challenge: {
        title: 'Ownership and flexibility, done properly',
        intro: 'WooCommerce offers complete control, but performance and reliability depend entirely on implementation. Many stores suffer from plugin conflicts, slow hosting and fragile customisations. Our approach addresses these issues directly, with clear ownership and measurable outcomes from the outset.',
        items: [
            'Slow performance as catalogues and orders grow',
            'Plugin conflicts causing errors after updates',
            'Complex requirements such as marketplaces poorly implemented',
        ],
    },
    capabilities: {
        aside: 'Each capability is delivered by specialists from our in-house teams and can be engaged individually or as part of a wider programme.',
        items: [
            { title: 'Custom store development', text: 'Bespoke WooCommerce themes and functionality.' },
            { title: 'Shopify to WooCommerce migration', text: 'Products, customers, orders and URLs.' },
            { title: 'Multivendor marketplaces', text: 'Dokan and WCFM marketplace builds.' },
            { title: 'Subscriptions and memberships', text: 'Recurring products and gated content.' },
            { title: 'Payment and shipping integration', text: 'Indian and international gateways and carriers.' },
            { title: 'Performance optimisation', text: 'Hosting, caching and database tuning.' },
        ],
    },
    useCases: [
        { title: 'Content-led brands', text: 'Stores that rely on editorial and SEO.' },
        { title: 'Marketplaces', text: 'Multi-seller platforms with commissions.' },
        { title: 'Course sellers', text: 'Combined LMS and commerce.' },
        { title: 'B2B suppliers', text: 'Wholesale pricing and quote requests.' },
    ],
    phases: techPhases,
    governance: techGovernance,
    tools: {
        aside: 'Technology is selected for maintainability, security and fit with your existing estate, not vendor preference.',
        items: ['WooCommerce', 'WordPress', 'PHP', 'MySQL', 'Dokan', 'WCFM', 'WooCommerce Subscriptions', 'Razorpay', 'Stripe', 'Shiprocket'],
    },
    featuredTag: '[Client] · [Industry] · WooCommerce',
    faqs: [
        { q: 'Can WooCommerce handle large catalogues?', a: 'Yes, with appropriate hosting, caching and database optimisation.' },
        { q: 'Do you migrate from Shopify to WooCommerce?', a: 'Yes. We migrate all core data and preserve search rankings through redirect mapping.' },
        { q: 'Can you build a marketplace on WooCommerce?', a: 'Yes. We build multivendor marketplaces using Dokan, WCFM or custom extensions.' },
        ...commonFaqs,
    ],
    related: [
        { href: '/ecommerce-solutions', label: 'Services', title: 'eCommerce Solutions', text: 'We design, build and scale online stores and marketplaces on Shopify, WooCommerce, Magento and custom platforms, with the integrations required to…' },
        { href: '/learning-management', label: 'Services', title: 'Learning Management Systems', text: 'We build learning platforms for training providers, institutions and enterprises, covering course delivery, assessment, certification and…' },
        { href: '/membership-management', label: 'Services', title: 'Membership Management Platforms', text: 'We build membership platforms that manage subscriptions, gated content, renewals and member communication from a single, reliable…' },
    ],
    reading: [
        { tag: 'WooCommerce · [X] min read', title: '[Article on WooCommerce]' },
        { tag: 'Engineering · [X] min read', title: '[Article title]' },
        { tag: 'Strategy · [X] min read', title: '[Article title]' },
    ],
};