import type { ServiceData } from '@/lib/service-types';
import { techGovernance, techOverviewCard, techPhases, commonFaqs } from './tech-common';

export const nextjs: ServiceData = {
    metaTitle: 'Next.js Development | Accugile',
    metaDescription:
        'We build high-performance websites and web applications on Next.js, combining excellent search visibility with modern application capabilities.',
    parent: { label: 'Technology', href: '/technology' },
    name: 'NextJS',
    eyebrow: 'Technology · Website Designing',
    title: 'Next.js Development',
    lead: 'We build high-performance websites and web applications on Next.js, combining excellent search visibility with modern application capabilities.',
    overview: techOverviewCard,
    overviewParas: [
        'Next.js delivers server rendering, static generation and modern React features in one framework, making it ideal for marketing websites, headless commerce and SaaS front ends.',
        'Our team builds Next.js projects with strong Core Web Vitals, structured content integration and reliable deployment pipelines.',
    ],
    outcomes: [
        'Excellent page speed and search performance',
        'Flexible content through headless CMS integration',
        'A single framework for site and application',
        'Reliable, automated deployments',
    ],
    challenge: {
        title: 'Performance and flexibility in one framework',
        intro: 'Marketing teams want fast, search-friendly websites, while product teams want modern application capabilities. Traditional approaches often force a compromise between the two. Our approach addresses these issues directly, with clear ownership and measurable outcomes from the outset.',
        items: [
            'Poor Core Web Vitals affecting search rankings',
            'Separate stacks for website and application',
            'Content updates that require developer involvement',
        ],
    },
    capabilities: {
        aside: 'Each capability is delivered by specialists from our in-house teams and can be engaged individually or as part of a wider programme.',
        items: [
            { title: 'Marketing websites', text: 'High-performance corporate and campaign sites.' },
            { title: 'Headless commerce', text: 'Storefronts for Shopify, BigCommerce and WooCommerce.' },
            { title: 'SaaS front ends', text: 'Authenticated application interfaces.' },
            { title: 'Headless CMS integration', text: 'Sanity, Strapi and Contentful.' },
            { title: 'Internationalisation', text: 'Multi-language and multi-region sites.' },
            { title: 'Performance engineering', text: 'Core Web Vitals and caching strategy.' },
        ],
    },
    useCases: [
        { title: 'Corporate websites', text: 'Speed and SEO-critical sites.' },
        { title: 'eCommerce brands', text: 'Headless storefronts.' },
        { title: 'SaaS companies', text: 'Marketing site and app in one stack.' },
        { title: 'Publishers', text: 'Content-rich, high-traffic websites.' },
    ],
    phases: techPhases,
    governance: techGovernance,
    tools: {
        aside: 'Technology is selected for maintainability, security and fit with your existing estate, not vendor preference.',
        items: ['Next.js', 'React', 'TypeScript', 'Vercel', 'Sanity', 'Strapi', 'Tailwind CSS', 'Shopify Hydrogen', 'Cloudflare'],
    },
    featuredTag: '[Client] · [Industry] · NextJS',
    faqs: [
        { q: 'Is Next.js better than WordPress for our website?', a: 'Next.js suits performance-critical or application-like sites. WordPress remains excellent for content-led sites. A headless approach can combine both.' },
        { q: 'Where are Next.js sites hosted?', a: 'Typically on Vercel, AWS or Cloudflare, selected according to your requirements.' },
        { q: 'Can our team still edit content?', a: 'Yes, through an integrated headless CMS.' },
        ...commonFaqs,
    ],
    related: [
        { href: '/reactjs', label: 'Technology', title: 'React Development', text: 'We build fast, interactive user interfaces and web applications with React, delivered by experienced front-end…' },
        { href: '/website-development', label: 'Services', title: 'Website Development', text: 'We build fast, secure and accessible websites engineered for conversion, search performance and straightforward management by your…' },
        { href: '/cms-solutions', label: 'Services', title: 'CMS Solutions', text: 'We implement content management platforms that give marketing and editorial teams full control of content while maintaining performance, security and…' },
    ],
    reading: [
        { tag: 'NextJS · [X] min read', title: '[Article on NextJS]' },
        { tag: 'Engineering · [X] min read', title: '[Article title]' },
        { tag: 'Strategy · [X] min read', title: '[Article title]' },
    ],
};