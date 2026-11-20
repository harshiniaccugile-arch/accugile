import type { ServiceData } from '@/lib/service-types';
import { techGovernance, techOverviewCard, techPhases, commonFaqs } from './tech-common';

export const shopifyPlus: ServiceData = {
    metaTitle: 'Shopify Plus Development | Accugile',
    metaDescription:
        'We help high-volume merchants scale on Shopify Plus with checkout extensibility, automation, multi-store operations and enterprise integrations.',
    parent: { label: 'Technology', href: '/technology' },
    name: 'Shopify Plus',
    eyebrow: 'Technology · eCommerce',
    title: 'Shopify Plus Development',
    lead: 'We help high-volume merchants scale on Shopify Plus with checkout extensibility, automation, multi-store operations and enterprise integrations.',
    overview: techOverviewCard,
    overviewParas: [
        'Shopify Plus offers enterprise capabilities on a managed platform. Our team implements the features that distinguish Plus, including checkout extensibility, Shopify Functions, Flow automation and expansion stores.',
        'We connect Shopify Plus to ERP, warehouse and marketing systems so that operations scale without additional manual effort.',
    ],
    outcomes: [
        'Checkout tailored to your business rules',
        'Automated operational workflows',
        'International expansion stores',
        'Enterprise-grade integrations',
    ],
    challenge: {
        title: 'Scaling operations, not just traffic',
        intro: 'High-volume merchants face complex promotions, international expansion and integration requirements. Without the right Plus capabilities and integrations, growth adds manual workload. Our approach addresses these issues directly, with clear ownership and measurable outcomes from the outset.',
        items: [
            'Checkout rules that standard Shopify cannot support',
            'Manual processes during flash sales and peaks',
            'Disconnected ERP, warehouse and marketing systems',
        ],
    },
    capabilities: {
        aside: 'Each capability is delivered by specialists from our in-house teams and can be engaged individually or as part of a wider programme.',
        items: [
            { title: 'Plus implementation', text: 'Store builds and replatforming to Shopify Plus.' },
            { title: 'Checkout extensibility', text: 'Custom checkout UI extensions and validations.' },
            { title: 'Shopify Functions', text: 'Custom discounts, payment and delivery logic.' },
            { title: 'Shopify Flow', text: 'Automated order, inventory and customer workflows.' },
            { title: 'B2B on Shopify', text: 'Wholesale catalogues and company accounts.' },
            { title: 'ERP integration', text: 'Order, inventory and finance synchronisation.' },
        ],
    },
    useCases: [
        { title: 'High-volume D2C', text: 'Brands with large order volumes and flash sales.' },
        { title: 'International brands', text: 'Expansion stores for multiple markets.' },
        { title: 'Wholesale', text: 'Combined B2B and D2C operations.' },
        { title: 'Replatforming', text: 'Moving from Magento or custom platforms.' },
    ],
    phases: techPhases,
    governance: techGovernance,
    tools: {
        aside: 'Technology is selected for maintainability, security and fit with your existing estate, not vendor preference.',
        items: ['Shopify Plus', 'Checkout Extensibility', 'Shopify Functions', 'Shopify Flow', 'Hydrogen', 'GraphQL Admin API', 'NetSuite', 'Klaviyo'],
    },
    featuredTag: '[Client] · [Industry] · Shopify Plus',
    faqs: [
        { q: 'How long does a Plus migration take?', a: 'Timelines depend on catalogue size, integrations and design scope, and are confirmed after discovery.' },
        { q: 'Can you build a headless Shopify storefront?', a: 'Yes, using Hydrogen or Next.js where performance or experience requirements justify it.' },
        { q: 'Do you integrate Shopify Plus with ERP systems?', a: 'Yes, through supported APIs and middleware.' },
        ...commonFaqs,
    ],
    related: [
        { href: '/shopify', label: 'Technology', title: 'Shopify Development', text: 'We design and build Shopify stores that are quick to launch, simple to manage and engineered for…' },
        { href: '/ecommerce-solutions', label: 'Services', title: 'eCommerce Solutions', text: 'We design, build and scale online stores and marketplaces on Shopify, WooCommerce, Magento and custom platforms, with the integrations required to…' },
        { href: '/magento', label: 'Technology', title: 'Magento (Adobe Commerce) Development', text: 'We build, upgrade and optimise Magento and Adobe Commerce stores for retailers that require extensive catalogues, complex pricing and enterprise…' },
    ],
    reading: [
        { tag: 'Shopify Plus · [X] min read', title: '[Article on Shopify Plus]' },
        { tag: 'Engineering · [X] min read', title: '[Article title]' },
        { tag: 'Strategy · [X] min read', title: '[Article title]' },
    ],
};