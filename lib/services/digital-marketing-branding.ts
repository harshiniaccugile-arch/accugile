import type { ServiceData } from '@/lib/service-types';
import { serviceGovernance, serviceOverviewCard, servicePhases, commonFaqs } from './service-common';

export const digitalMarketingBranding: ServiceData = {
    metaTitle: 'Digital Marketing and Branding | Accugile',
    metaDescription:
        'We build brands that earn recognition and marketing programmes that generate measurable pipeline, managed by a single team accountable for both.',
    parent: { label: 'Services', href: '/services' },
    name: 'Digital Marketing & Branding',
    eyebrow: 'Services',
    title: 'Digital Marketing and Branding',
    lead: 'We build brands that earn recognition and marketing programmes that generate measurable pipeline, managed by a single team accountable for both.',
    overview: serviceOverviewCard,
    overviewParas: [
        'Brand and performance are frequently managed by separate agencies with competing priorities. Our integrated practice aligns brand strategy, creative execution and demand generation under one plan and one set of commercial metrics.',
        'Strategists, designers, content specialists and performance marketers work together from a shared roadmap, with transparent monthly reporting against revenue-linked objectives.',
    ],
    outcomes: [
        'A coherent brand identity across every touchpoint',
        'Sustained growth in qualified organic traffic',
        'Lower customer acquisition cost from paid media',
        'Reporting tied to pipeline and revenue',
    ],
    challenge: {
        title: 'Growth requires both recognition and demand',
        intro: 'Many businesses invest in campaigns without a clear brand position, or in branding without a plan to generate pipeline. Disconnected agencies and vanity metrics make it difficult to see what is working. Our approach addresses these issues directly, with clear ownership and measurable outcomes from the outset.',
        items: [
            'Inconsistent brand presentation across channels',
            'Rising acquisition costs with unclear attribution',
            'Organic visibility lost to better-optimised competitors',
        ],
    },
    capabilities: {
        aside: 'Each capability is delivered by specialists from our in-house teams and can be engaged individually or as part of a wider programme.',
        items: [
            { title: 'Brand strategy', text: 'Positioning, messaging architecture and competitive differentiation.' },
            { title: 'Visual identity', text: 'Logo systems, typography, colour and comprehensive brand guidelines.' },
            { title: 'Search engine optimisation', text: 'Technical SEO, content strategy and authority building.' },
            { title: 'Performance marketing', text: 'Google, Meta and LinkedIn campaigns managed against acquisition targets.' },
            { title: 'Content and social', text: 'Editorial calendars, thought leadership and social media management.' },
            { title: 'Analytics and attribution', text: 'GA4, conversion tracking and executive dashboards.' },
        ],
    },
    useCases: [
        { title: 'Product launches', text: 'Go-to-market messaging, creative and launch campaigns.' },
        { title: 'Rebrands', text: 'Repositioning established businesses for new markets or audiences.' },
        { title: 'B2B demand generation', text: 'Account-focused campaigns and lead nurturing programmes.' },
        { title: 'eCommerce growth', text: 'Acquisition and retention campaigns for online retailers.' },
    ],
    phases: servicePhases,
    governance: serviceGovernance,
    tools: {
        aside: 'Technology is selected for maintainability, security and fit with your existing estate, not vendor preference.',
        items: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'GA4', 'Google Search Console', 'Semrush', 'HubSpot', 'Figma', 'Adobe Creative Cloud', 'Looker Studio'],
    },
    featuredTag: '[Client] · [Industry] · Digital Marketing & Branding',
    faqs: [
        { q: 'Do you offer branding and marketing separately?', a: 'Yes. Each can be engaged independently, although clients typically see stronger results when both are delivered by the same team.' },
        { q: 'How do you report performance?', a: 'Monthly reports cover agreed KPIs such as qualified leads, cost per acquisition and revenue influenced, supported by live dashboards.' },
        { q: 'What is the minimum engagement period?', a: 'Brand projects are fixed-scope. Ongoing marketing retainers typically begin with a defined initial term, confirmed in the proposal.' },
        { q: 'Do you manage ad spend on our behalf?', a: 'Campaigns run in accounts owned by your organisation. Media budgets are billed directly by the platforms, separate from our fees.' },
        ...commonFaqs,
    ],
    related: [
        { href: '/web-design', label: 'Services', title: 'Web Design and UI/UX', text: 'We design digital experiences grounded in user research and business objectives, producing interfaces that are clear, accessible and consistent with…' },
        { href: '/website-development', label: 'Services', title: 'Website Development', text: 'We build fast, secure and accessible websites engineered for conversion, search performance and straightforward management by your…' },
        { href: '/cms-solutions', label: 'Services', title: 'CMS Solutions', text: 'We implement content management platforms that give marketing and editorial teams full control of content while maintaining performance, security and…' },
    ],
    reading: [
        { tag: 'Digital Marketing and Branding · [X] min read', title: '[Article on Digital Marketing and Branding]' },
        { tag: 'Engineering · [X] min read', title: '[Article title]' },
        { tag: 'Strategy · [X] min read', title: '[Article title]' },
    ],
};