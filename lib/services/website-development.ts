import type { ServiceData } from '@/lib/service-types';
import { serviceGovernance, serviceOverviewCard, servicePhases, commonFaqs } from './service-common';

export const websiteDevelopment: ServiceData = {
    metaTitle: 'Website Development | Accugile',
    metaDescription:
        'We build fast, secure and accessible websites engineered for conversion, search performance and straightforward management by your team.',
    parent: { label: 'Services', href: '/services' },
    name: 'Website Development',
    eyebrow: 'Services',
    title: 'Website Development',
    lead: 'We build fast, secure and accessible websites engineered for conversion, search performance and straightforward management by your team.',
    overview: serviceOverviewCard,
    overviewParas: [
        'A corporate website is often the first substantive interaction a prospect has with your organisation. We build websites that load quickly, rank well and guide visitors towards enquiry, with an editing experience your marketing team can use independently.',
        'Every build follows a documented process covering architecture, design approval, development, quality assurance and launch, with performance and accessibility verified before go-live.',
    ],
    outcomes: [
        'Faster page loads and stronger Core Web Vitals',
        'Higher enquiry and conversion rates',
        'Content your team can update without developers',
        'A secure, maintainable platform',
    ],
    challenge: {
        title: 'Your website is judged in seconds',
        intro: 'Prospects form an opinion of your organisation almost immediately. Slow, outdated or confusing websites undermine credibility and quietly reduce enquiries, regardless of the quality of your services. Our approach addresses these issues directly, with clear ownership and measurable outcomes from the outset.',
        items: [
            'Slow page loads and poor mobile experience',
            'Content that marketing teams cannot update independently',
            'Low conversion from traffic to enquiries',
        ],
    },
    capabilities: {
        aside: 'Each capability is delivered by specialists from our in-house teams and can be engaged individually or as part of a wider programme.',
        items: [
            { title: 'Corporate websites', text: 'Multi-page websites for established businesses and enterprises.' },
            { title: 'Landing pages', text: 'Campaign pages optimised for a single conversion goal.' },
            { title: 'Headless builds', text: 'Modern front ends powered by a headless CMS for performance and flexibility.' },
            { title: 'Multilingual websites', text: 'Localisation workflows and regional site structures.' },
            { title: 'Performance optimisation', text: 'Speed audits, caching, image optimisation and Core Web Vitals remediation.' },
            { title: 'Security and hosting', text: 'Hardened hosting, SSL, backups and uptime monitoring.' },
        ],
    },
    useCases: [
        { title: 'Corporate and B2B', text: 'Credibility-led websites with clear service architecture.' },
        { title: 'Professional services', text: 'Practice area pages, team profiles and lead capture.' },
        { title: 'Healthcare', text: 'Accessible, appointment-focused websites.' },
        { title: 'Non-profit and education', text: 'Content-rich websites with donation and enrolment flows.' },
    ],
    phases: servicePhases,
    governance: serviceGovernance,
    tools: {
        aside: 'Technology is selected for maintainability, security and fit with your existing estate, not vendor preference.',
        items: ['WordPress', 'Next.js', 'React', 'Laravel', 'Tailwind CSS', 'Sanity', 'Strapi', 'Cloudflare', 'Vercel', 'AWS'],
    },
    featuredTag: '[Client] · [Industry] · Website Development',
    faqs: [
        { q: 'Which platform should our website use?', a: 'WordPress suits most content-led websites. Headless or framework builds suit high-traffic or highly interactive sites. We recommend a platform after understanding your requirements.' },
        { q: 'Will the website be optimised for search engines?', a: 'Yes. Technical SEO, structured data, metadata and performance optimisation are included in every build.' },
        { q: 'Can you migrate our existing content?', a: 'Yes. Content migration and URL redirect mapping are planned to protect existing search rankings.' },
        { q: 'Do you provide training?', a: 'Every launch includes CMS training and documentation for your team.' },
        ...commonFaqs,
    ],
    related: [
        { href: '/web-design', label: 'Services', title: 'Web Design and UI/UX', text: 'We design digital experiences grounded in user research and business objectives, producing interfaces that are clear, accessible and consistent with…' },
        { href: '/cms-solutions', label: 'Services', title: 'CMS Solutions', text: 'We implement content management platforms that give marketing and editorial teams full control of content while maintaining performance, security and…' },
        { href: '/nextjs', label: 'Technology', title: 'Next.js Development', text: 'We build high-performance websites and web applications on Next.js, combining excellent search visibility with modern application…' },
    ],
    reading: [
        { tag: 'Website Development · [X] min read', title: '[Article on Website Development]' },
        { tag: 'Engineering · [X] min read', title: '[Article title]' },
        { tag: 'Strategy · [X] min read', title: '[Article title]' },
    ],
};