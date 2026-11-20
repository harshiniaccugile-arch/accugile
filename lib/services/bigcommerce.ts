import type { ServiceData } from '@/lib/service-types';
import { techGovernance, techOverviewCard, techPhases, commonFaqs } from './tech-common';

export const bigcommerce: ServiceData = {
    metaTitle: 'BigCommerce Development | Accugile',
    metaDescription:
        'We build BigCommerce stores for growing and enterprise merchants that need native B2B features, multi-storefront capability and open APIs.',
    parent: { label: 'Technology', href: '/technology' },
    name: 'BigCommerce',
    eyebrow: 'Technology · eCommerce',
    title: 'BigCommerce Development',
    lead: 'We build BigCommerce stores for growing and enterprise merchants that need native B2B features, multi-storefront capability and open APIs.',
    overview: techOverviewCard,
    overviewParas: [
        'BigCommerce combines SaaS reliability with open architecture. Our team builds custom Stencil themes, headless storefronts and integrations that take advantage of the platform’s flexibility.',
        'We support new builds and migrations, with particular strength in B2B configurations and ERP connectivity.',
    ],
    outcomes: [
        'Native B2B capabilities without heavy customisation',
        'Multiple storefronts from one account',
        'Flexible headless options',
        'Reduced infrastructure overhead',
    ],
    challenge: {
        title: 'Enterprise capability without enterprise overhead',
        intro: 'Growing merchants, particularly in B2B, need flexible pricing, multiple storefronts and robust integrations without the cost of maintaining their own infrastructure. Our approach addresses these issues directly, with clear ownership and measurable outcomes from the outset.',
        items: [
            'B2B requirements stretched across disconnected tools',
            'Multiple brands managed on separate platforms',
            'Limited front-end flexibility on standard themes',
        ],
    },
    capabilities: {
        aside: 'Each capability is delivered by specialists from our in-house teams and can be engaged individually or as part of a wider programme.',
        items: [
            { title: 'Stencil theme development', text: 'Custom themes built on BigCommerce standards.' },
            { title: 'Headless commerce', text: 'Next.js storefronts powered by BigCommerce.' },
            { title: 'B2B Edition setup', text: 'Company accounts, price lists and quotes.' },
            { title: 'Multi-storefront', text: 'Separate brands or regions from one back office.' },
            { title: 'Migration', text: 'From Magento, WooCommerce or Shopify.' },
            { title: 'Integrations', text: 'ERP, PIM and marketing platform connections.' },
        ],
    },
    useCases: [
        { title: 'B2B manufacturers', text: 'Dealer and distributor ordering.' },
        { title: 'Multi-brand retailers', text: 'Separate storefronts with shared operations.' },
        { title: 'Growing D2C brands', text: 'Scaling beyond entry-level platforms.' },
        { title: 'Headless projects', text: 'Custom front ends with SaaS commerce.' },
    ],
    phases: techPhases,
    governance: techGovernance,
    tools: {
        aside: 'Technology is selected for maintainability, security and fit with your existing estate, not vendor preference.',
        items: ['BigCommerce', 'Stencil', 'B2B Edition', 'Catalyst', 'Next.js', 'GraphQL Storefront API', 'Akeneo'],
    },
    featuredTag: '[Client] · [Industry] · BigCommerce',
    faqs: [
        { q: 'How does BigCommerce compare with Shopify Plus?', a: 'Both are strong platforms. BigCommerce offers more native B2B features and fewer transaction fees, while Shopify has a larger app ecosystem. We advise based on your priorities.' },
        { q: 'Do you build headless BigCommerce stores?', a: 'Yes, using Catalyst and Next.js.' },
        { q: 'Can you migrate our existing store?', a: 'Yes, including products, customers, orders and URL redirects.' },
        ...commonFaqs,
    ],
    related: [
        { href: '/ecommerce-solutions', label: 'Services', title: 'eCommerce Solutions', text: 'We design, build and scale online stores and marketplaces on Shopify, WooCommerce, Magento and custom platforms, with the integrations required to…' },
        { href: '/shopify-plus', label: 'Technology', title: 'Shopify Plus Development', text: 'We help high-volume merchants scale on Shopify Plus with checkout extensibility, automation, multi-store operations and enterprise…' },
        { href: '/nextjs', label: 'Technology', title: 'Next.js Development', text: 'We build high-performance websites and web applications on Next.js, combining excellent search visibility with modern application…' },
    ],
    reading: [
        { tag: 'BigCommerce · [X] min read', title: '[Article on BigCommerce]' },
        { tag: 'Engineering · [X] min read', title: '[Article title]' },
        { tag: 'Strategy · [X] min read', title: '[Article title]' },
    ],
};