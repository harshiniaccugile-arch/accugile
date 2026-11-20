import type { ServiceData } from '@/lib/service-types';
import { serviceGovernance, serviceOverviewCard, servicePhases, commonFaqs } from './service-common';

export const ecommerceSolutions: ServiceData = {
    metaTitle: 'eCommerce Solutions | Accugile',
    metaDescription:
        'We design, build and scale online stores and marketplaces on Shopify, WooCommerce, Magento and custom platforms, with the integrations required to operate efficiently.',
    parent: { label: 'Services', href: '/services' },
    name: 'eCommerce Solutions',
    eyebrow: 'Services',
    title: 'eCommerce Solutions',
    lead: 'We design, build and scale online stores and marketplaces on Shopify, WooCommerce, Magento and custom platforms, with the integrations required to operate efficiently.',
    overview: serviceOverviewCard,
    overviewParas: [
        'Successful eCommerce depends on more than an attractive storefront. Catalogue management, payments, fulfilment, marketing and analytics must work together reliably. We deliver the complete commerce stack and the operational integrations behind it.',
        'From new store launches to platform migrations and multivendor marketplaces, our eCommerce team brings proven processes for data migration, performance optimisation and conversion improvement.',
    ],
    outcomes: [
        'Higher conversion and average order value',
        'Reliable operations integrated with ERP and logistics',
        'Platform migrations without loss of data or rankings',
        'A storefront that scales with peak demand',
    ],
    challenge: {
        title: 'Commerce complexity grows with every order',
        intro: 'As order volumes increase, the gaps between storefront, payments, inventory and fulfilment become costly. Platform limitations and slow sites directly reduce revenue. Our approach addresses these issues directly, with clear ownership and measurable outcomes from the outset.',
        items: [
            'Slow storefronts that lose customers at checkout',
            'Inventory and orders out of sync with ERP and warehouses',
            'Platforms that no longer support business requirements',
        ],
    },
    capabilities: {
        aside: 'Each capability is delivered by specialists from our in-house teams and can be engaged individually or as part of a wider programme.',
        items: [
            { title: 'Store design and build', text: 'Conversion-focused storefronts on leading platforms.' },
            { title: 'Platform migration', text: 'Shopify, WooCommerce and Magento migrations with data integrity.' },
            { title: 'Multivendor marketplaces', text: 'Vendor onboarding, commissions and payouts.' },
            { title: 'Payments and checkout', text: 'Gateway integration, checkout optimisation and fraud controls.' },
            { title: 'ERP and logistics integration', text: 'Inventory, order and shipping synchronisation.' },
            { title: 'Conversion optimisation', text: 'Analytics, testing and continuous improvement.' },
        ],
    },
    useCases: [
        { title: 'D2C brands', text: 'Brand-led stores with subscriptions and loyalty.' },
        { title: 'B2B commerce', text: 'Customer-specific pricing, quotes and bulk ordering.' },
        { title: 'Marketplaces', text: 'Multi-seller platforms with vendor dashboards.' },
        { title: 'Retail chains', text: 'Omnichannel inventory and click-and-collect.' },
    ],
    phases: servicePhases,
    governance: serviceGovernance,
    tools: {
        aside: 'Technology is selected for maintainability, security and fit with your existing estate, not vendor preference.',
        items: ['Shopify Plus', 'WooCommerce', 'Magento', 'BigCommerce', 'Dokan', 'WCFM', 'Razorpay', 'Stripe', 'Shiprocket', 'Odoo'],
    },
    featuredTag: '[Client] · [Industry] · eCommerce Solutions',
    faqs: [
        { q: 'Which eCommerce platform is right for us?', a: 'The decision depends on catalogue size, customisation needs, budget and internal capability. We provide an objective platform recommendation during discovery.' },
        { q: 'Can you migrate from Shopify to WooCommerce, or the reverse?', a: 'Yes. We migrate products, customers, orders and content, and map URLs to preserve search rankings.' },
        { q: 'Do you build multivendor marketplaces?', a: 'Yes. We build marketplaces on WooCommerce with Dokan or WCFM, and on custom Laravel platforms for complex requirements.' },
        { q: 'Do you provide post-launch support?', a: 'Every launch includes a support period, followed by optional maintenance and growth retainers.' },
        ...commonFaqs,
    ],
    related: [
        { href: '/shopify-plus', label: 'Technology', title: 'Shopify Plus Development', text: 'We help high-volume merchants scale on Shopify Plus with checkout extensibility, automation, multi-store operations and enterprise…' },
        { href: '/woocommerce', label: 'Technology', title: 'WooCommerce Development', text: 'We build and scale WooCommerce stores and marketplaces with full ownership, deep customisation and the content strength of…' },
        { href: '/magento', label: 'Technology', title: 'Magento (Adobe Commerce) Development', text: 'We build, upgrade and optimise Magento and Adobe Commerce stores for retailers that require extensive catalogues, complex pricing and enterprise…' },
    ],
    reading: [
        { tag: 'eCommerce Solutions · [X] min read', title: '[Article on eCommerce Solutions]' },
        { tag: 'Engineering · [X] min read', title: '[Article title]' },
        { tag: 'Strategy · [X] min read', title: '[Article title]' },
    ],
};