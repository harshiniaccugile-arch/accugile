import type { ServiceData } from '@/lib/service-types';
import { serviceGovernance, serviceOverviewCard, servicePhases, commonFaqs } from './service-common';

export const cmsSolutions: ServiceData = {
    metaTitle: 'CMS Solutions | Accugile',
    metaDescription:
        'We implement content management platforms that give marketing and editorial teams full control of content while maintaining performance, security and governance.',
    parent: { label: 'Services', href: '/services' },
    name: 'CMS Solutions',
    eyebrow: 'Services',
    title: 'CMS Solutions',
    lead: 'We implement content management platforms that give marketing and editorial teams full control of content while maintaining performance, security and governance.',
    overview: serviceOverviewCard,
    overviewParas: [
        'The right CMS removes dependency on developers for routine updates. We configure WordPress and headless platforms with structured content models, editorial workflows and permissions suited to your organisation.',
        'Implementations are built for longevity, with custom blocks, reusable components and documentation that keep the platform consistent as your content grows.',
    ],
    outcomes: [
        'Independent content publishing by marketing teams',
        'Consistent page layouts through reusable components',
        'Editorial approvals and role-based permissions',
        'Reduced maintenance and security risk',
    ],
    challenge: {
        title: 'Content operations should not depend on developers',
        intro: 'Marketing teams need to publish quickly and consistently. Poorly implemented CMS platforms force teams to request developer time for simple changes and allow layouts to drift. Our approach addresses these issues directly, with clear ownership and measurable outcomes from the outset.',
        items: [
            'Developer bottlenecks for routine content updates',
            'Inconsistent page designs across the site',
            'Security risk from outdated plugins and themes',
        ],
    },
    capabilities: {
        aside: 'Each capability is delivered by specialists from our in-house teams and can be engaged individually or as part of a wider programme.',
        items: [
            { title: 'WordPress development', text: 'Custom themes, Gutenberg blocks and plugin development.' },
            { title: 'Headless CMS', text: 'Sanity, Strapi and Contentful implementations with modern front ends.' },
            { title: 'Content modelling', text: 'Structured content types that support reuse across channels.' },
            { title: 'Editorial workflows', text: 'Draft, review and approval flows with user roles.' },
            { title: 'CMS migration', text: 'Moving content from legacy platforms with integrity checks.' },
            { title: 'Managed maintenance', text: 'Updates, security patching, backups and performance monitoring.' },
        ],
    },
    useCases: [
        { title: 'Publishers', text: 'High-volume editorial sites with scheduling and taxonomy.' },
        { title: 'Corporate marketing teams', text: 'Campaign pages built from approved components.' },
        { title: 'Multi-brand groups', text: 'Multisite networks with shared governance.' },
        { title: 'Knowledge bases', text: 'Searchable documentation and help centres.' },
    ],
    phases: servicePhases,
    governance: serviceGovernance,
    tools: {
        aside: 'Technology is selected for maintainability, security and fit with your existing estate, not vendor preference.',
        items: ['WordPress', 'Gutenberg', 'Advanced Custom Fields', 'WPML', 'Sanity', 'Strapi', 'Contentful', 'Next.js', 'PHP', 'MySQL'],
    },
    featuredTag: '[Client] · [Industry] · CMS Solutions',
    faqs: [
        { q: 'Is WordPress suitable for enterprise use?', a: 'Yes, when implemented with proper architecture, hosting and governance. Many large organisations operate WordPress at scale.' },
        { q: 'What is a headless CMS?', a: 'A headless CMS manages content separately from the website front end, delivering content via API to websites, apps and other channels.' },
        { q: 'Can multiple teams manage separate sections?', a: 'Yes. Roles and permissions can restrict editing by section, language or content type.' },
        { q: 'Do you offer ongoing maintenance?', a: 'Yes. Managed maintenance plans cover updates, security, backups and minor enhancements.' },
        ...commonFaqs,
    ],
    related: [
        { href: '/website-development', label: 'Services', title: 'Website Development', text: 'We build fast, secure and accessible websites engineered for conversion, search performance and straightforward management by your…' },
        { href: '/web-design', label: 'Services', title: 'Web Design and UI/UX', text: 'We design digital experiences grounded in user research and business objectives, producing interfaces that are clear, accessible and consistent with…' },
        { href: '/membership-management', label: 'Services', title: 'Membership Management Platforms', text: 'We build membership platforms that manage subscriptions, gated content, renewals and member communication from a single, reliable…' },
    ],
    reading: [
        { tag: 'CMS Solutions · [X] min read', title: '[Article on CMS Solutions]' },
        { tag: 'Engineering · [X] min read', title: '[Article title]' },
        { tag: 'Strategy · [X] min read', title: '[Article title]' },
    ],
};