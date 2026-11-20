import type { ServiceData } from '@/lib/service-types';
import { techGovernance, techOverviewCard, techPhases, commonFaqs } from './tech-common';

export const shopify: ServiceData = {
    metaTitle: 'Shopify Development | Accugile',
    metaDescription:
        'We design and build Shopify stores that are quick to launch, simple to manage and engineered for conversion.',
    parent: { label: 'Technology', href: '/technology' },
    name: 'Shopify',
    eyebrow: 'Technology · eCommerce',
    title: 'Shopify Development',
    lead: 'We design and build Shopify stores that are quick to launch, simple to manage and engineered for conversion.',
    overview: techOverviewCard,
    overviewParas: [
        'Shopify allows brands to focus on growth rather than infrastructure. Our team delivers custom themes, app integrations and store configuration that make the most of the platform.',
        'We support launches, redesigns and migrations to Shopify, followed by ongoing optimisation and support.',
    ],
    outcomes: [
        'Rapid, reliable store launches',
        'Custom design without theme limitations',
        'Streamlined operations through apps and automation',
        'Improved conversion through tested enhancements',
    ],
    challenge: {
        title: 'Launching quickly without compromising the brand',
        intro: 'Shopify makes it easy to start selling, but generic themes and excessive apps can limit brand expression, slow the store and increase monthly costs. Our approach addresses these issues directly, with clear ownership and measurable outcomes from the outset.',
        items: [
            'Stores that look similar to competitors',
            'App overload affecting speed and cost',
            'Limited customisation without development support',
        ],
    },
    capabilities: {
        aside: 'Each capability is delivered by specialists from our in-house teams and can be engaged individually or as part of a wider programme.',
        items: [
            { title: 'Custom theme development', text: 'Bespoke Online Store 2.0 themes.' },
            { title: 'Store setup and configuration', text: 'Products, payments, shipping and taxes.' },
            { title: 'App integration', text: 'Selection and configuration of Shopify apps.' },
            { title: 'Migration to Shopify', text: 'From WooCommerce, Magento and other platforms.' },
            { title: 'Conversion optimisation', text: 'Product page, cart and checkout improvements.' },
            { title: 'Ongoing support', text: 'Enhancements and seasonal campaign support.' },
        ],
    },
    useCases: [
        { title: 'D2C brands', text: 'Brand-led stores with strong visual identity.' },
        { title: 'Growing retailers', text: 'Moving from marketplaces to their own store.' },
        { title: 'Subscription businesses', text: 'Recurring orders and memberships.' },
        { title: 'Pop-up and campaign stores', text: 'Fast launches for limited ranges.' },
    ],
    phases: techPhases,
    governance: techGovernance,
    tools: {
        aside: 'Technology is selected for maintainability, security and fit with your existing estate, not vendor preference.',
        items: ['Shopify', 'Liquid', 'Online Store 2.0', 'Shopify Functions', 'JavaScript', 'Klaviyo', 'Judge.me', 'Razorpay'],
    },
    featuredTag: '[Client] · [Industry] · Shopify',
    faqs: [
        { q: 'Can you customise a Shopify theme?', a: 'Yes. We build custom themes or extend premium themes to match your brand and requirements.' },
        { q: 'Do you build custom Shopify apps?', a: 'Yes, where existing apps do not meet requirements.' },
        { q: 'When should we consider Shopify Plus?', a: 'Shopify Plus suits high-volume merchants that need checkout customisation, automation and multiple stores.' },
        ...commonFaqs,
    ],
    related: [
        { href: '/shopify-plus', label: 'Technology', title: 'Shopify Plus Development', text: 'We help high-volume merchants scale on Shopify Plus with checkout extensibility, automation, multi-store operations and enterprise…' },
        { href: '/ecommerce-solutions', label: 'Services', title: 'eCommerce Solutions', text: 'We design, build and scale online stores and marketplaces on Shopify, WooCommerce, Magento and custom platforms, with the integrations required to…' },
        { href: '/woocommerce', label: 'Technology', title: 'WooCommerce Development', text: 'We build and scale WooCommerce stores and marketplaces with full ownership, deep customisation and the content strength of…' },
    ],
    reading: [
        { tag: 'Shopify · [X] min read', title: '[Article on Shopify]' },
        { tag: 'Engineering · [X] min read', title: '[Article title]' },
        { tag: 'Strategy · [X] min read', title: '[Article title]' },
    ],
};