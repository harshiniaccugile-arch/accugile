import type { ServiceData } from '@/lib/service-types';
import { techGovernance, techOverviewCard, techPhases, commonFaqs } from './tech-common';

export const magento: ServiceData = {
    metaTitle: 'Magento (Adobe Commerce) Development | Accugile',
    metaDescription:
        'We build, upgrade and optimise Magento and Adobe Commerce stores for retailers that require extensive catalogues, complex pricing and enterprise integrations.',
    parent: { label: 'Technology', href: '/technology' },
    name: 'Magento',
    eyebrow: 'Technology · eCommerce',
    title: 'Magento (Adobe Commerce) Development',
    lead: 'We build, upgrade and optimise Magento and Adobe Commerce stores for retailers that require extensive catalogues, complex pricing and enterprise integrations.',
    overview: techOverviewCard,
    overviewParas: [
        'Magento offers unmatched flexibility for large and complex catalogues, but it rewards disciplined engineering. Our Magento team delivers performant, upgrade-safe implementations built on platform best practice.',
        'We support the full lifecycle, from new builds and Magento 2 upgrades to performance remediation, extension development and long-term maintenance.',
    ],
    outcomes: [
        'Stable performance with large product catalogues',
        'Upgrade-safe customisations',
        'Multi-store and multi-currency operations',
        'Reliable ERP and PIM integration',
    ],
    challenge: {
        title: 'Magento delivers when it is engineered properly',
        intro: 'Magento’s flexibility is also its challenge. Poorly built extensions, outdated versions and inadequate hosting often leave stores slow, insecure and expensive to maintain. Our approach addresses these issues directly, with clear ownership and measurable outcomes from the outset.',
        items: [
            'Slow page loads on large catalogues',
            'Upgrades blocked by incompatible customisations',
            'Security patches applied late or not at all',
        ],
    },
    capabilities: {
        aside: 'Each capability is delivered by specialists from our in-house teams and can be engaged individually or as part of a wider programme.',
        items: [
            { title: 'Store development', text: 'Custom Magento 2 and Adobe Commerce storefronts.' },
            { title: 'Upgrades and migrations', text: 'Magento 1 to 2 migrations and version upgrades.' },
            { title: 'Extension development', text: 'Custom modules built to Magento coding standards.' },
            { title: 'Performance optimisation', text: 'Caching, indexing and infrastructure tuning.' },
            { title: 'B2B commerce', text: 'Company accounts, quotes and negotiated pricing.' },
            { title: 'Support and maintenance', text: 'Security patches, monitoring and enhancements.' },
        ],
    },
    useCases: [
        { title: 'Large retailers', text: 'Catalogues with tens of thousands of SKUs.' },
        { title: 'B2B distributors', text: 'Customer-specific pricing and bulk ordering.' },
        { title: 'Multi-brand groups', text: 'Several storefronts from one installation.' },
        { title: 'International sellers', text: 'Multi-language, multi-currency stores.' },
    ],
    phases: techPhases,
    governance: techGovernance,
    tools: {
        aside: 'Technology is selected for maintainability, security and fit with your existing estate, not vendor preference.',
        items: ['Magento 2', 'Adobe Commerce', 'PHP', 'MySQL', 'Elasticsearch', 'Varnish', 'Redis', 'Hyvä', 'AWS'],
    },
    featuredTag: '[Client] · [Industry] · Magento',
    faqs: [
        { q: 'Is Magento suitable for a mid-sized business?', a: 'Magento suits businesses with complex catalogue, pricing or integration requirements. For simpler needs, Shopify or WooCommerce may be more cost-effective, and we will advise accordingly.' },
        { q: 'Can you improve the speed of our existing store?', a: 'Yes. We begin with a performance audit and implement prioritised improvements, including Hyvä theme adoption where appropriate.' },
        { q: 'Do you provide Magento security patching?', a: 'Yes, as part of our maintenance plans.' },
        ...commonFaqs,
    ],
    related: [
        { href: '/ecommerce-solutions', label: 'Services', title: 'eCommerce Solutions', text: 'We design, build and scale online stores and marketplaces on Shopify, WooCommerce, Magento and custom platforms, with the integrations required to…' },
        { href: '/shopify-plus', label: 'Technology', title: 'Shopify Plus Development', text: 'We help high-volume merchants scale on Shopify Plus with checkout extensibility, automation, multi-store operations and enterprise…' },
        { href: '/bigcommerce', label: 'Technology', title: 'BigCommerce Development', text: 'We build BigCommerce stores for growing and enterprise merchants that need native B2B features, multi-storefront capability and open…' },
    ],
    reading: [
        { tag: 'Magento · [X] min read', title: '[Article on Magento]' },
        { tag: 'Engineering · [X] min read', title: '[Article title]' },
        { tag: 'Strategy · [X] min read', title: '[Article title]' },
    ],
};