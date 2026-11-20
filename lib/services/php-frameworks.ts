import type { ServiceData } from '@/lib/service-types';
import { techGovernance, techOverviewCard, techPhases, commonFaqs } from './tech-common';

export const phpFrameworks: ServiceData = {
    metaTitle: 'PHP Framework Development | Accugile',
    metaDescription:
        'We engineer secure, scalable web applications on Laravel and other modern PHP frameworks, backed by a dedicated in-house PHP practice.',
    parent: { label: 'Technology', href: '/technology' },
    name: 'PHP Frameworks',
    eyebrow: 'Technology · Website Development',
    title: 'PHP Framework Development',
    lead: 'We engineer secure, scalable web applications on Laravel and other modern PHP frameworks, backed by a dedicated in-house PHP practice.',
    overview: techOverviewCard,
    overviewParas: [
        'PHP powers a significant share of the web, and modern frameworks such as Laravel make it a productive choice for robust business applications. Our PHP team follows established conventions, automated testing and code review on every project.',
        'We build new applications, modernise legacy PHP code and provide long-term maintenance for business-critical systems.',
    ],
    outcomes: [
        'Rapid development of robust applications',
        'Maintainable code that follows framework conventions',
        'Secure handling of data and authentication',
        'Modernised legacy systems',
    ],
    challenge: {
        title: 'Business-critical PHP needs disciplined engineering',
        intro: 'Many organisations rely on PHP applications that have grown without consistent standards. Over time, these systems become difficult to change, secure and support. Our approach addresses these issues directly, with clear ownership and measurable outcomes from the outset.',
        items: [
            'Outdated PHP versions with security exposure',
            'Inconsistent code that slows new development',
            'Limited automated testing and documentation',
        ],
    },
    capabilities: {
        aside: 'Each capability is delivered by specialists from our in-house teams and can be engaged individually or as part of a wider programme.',
        items: [
            { title: 'Laravel development', text: 'Custom applications, APIs and admin panels.' },
            { title: 'Symfony and CodeIgniter', text: 'Development and support on established frameworks.' },
            { title: 'API development', text: 'RESTful and GraphQL APIs with authentication.' },
            { title: 'Legacy modernisation', text: 'Upgrading older PHP applications to current versions.' },
            { title: 'Testing and QA', text: 'PHPUnit and Pest test coverage.' },
            { title: 'Performance tuning', text: 'Query optimisation, queues and caching.' },
        ],
    },
    useCases: [
        { title: 'Business applications', text: 'Operations, CRM and reporting systems.' },
        { title: 'Marketplaces', text: 'Custom multi-sided platforms.' },
        { title: 'SaaS products', text: 'Subscription platforms on Laravel.' },
        { title: 'Integrations', text: 'Middleware between business systems.' },
    ],
    phases: techPhases,
    governance: techGovernance,
    tools: {
        aside: 'Technology is selected for maintainability, security and fit with your existing estate, not vendor preference.',
        items: ['PHP 8', 'Laravel', 'Symfony', 'CodeIgniter', 'Livewire', 'Filament', 'MySQL', 'PostgreSQL', 'Redis', 'Docker'],
    },
    featuredTag: '[Client] · [Industry] · PHP Frameworks',
    faqs: [
        { q: 'Why choose Laravel?', a: 'Laravel offers a mature ecosystem, strong security defaults and rapid development, making it well suited to business applications and SaaS.' },
        { q: 'Can you upgrade our old PHP application?', a: 'Yes. We assess the codebase and propose a phased upgrade plan.' },
        { q: 'Do you write automated tests?', a: 'Yes. Automated testing is standard on our PHP projects.' },
        ...commonFaqs,
    ],
    related: [
        { href: '/software-development', label: 'Services', title: 'Custom Software Development', text: 'We engineer custom business software, portals and integrations that fit your operating model precisely and scale with your…' },
        { href: '/saas-development', label: 'Services', title: 'SaaS Product Development', text: 'We take SaaS products from validated concept to scalable, multi-tenant platforms, combining product strategy, engineering and the operational…' },
        { href: '/mern', label: 'Technology', title: 'MERN Stack Development', text: 'We deliver full-stack web applications on MongoDB, Express, React and Node.js, built by cross-functional teams for speed and…' },
    ],
    reading: [
        { tag: 'PHP Frameworks · [X] min read', title: '[Article on PHP Frameworks]' },
        { tag: 'Engineering · [X] min read', title: '[Article title]' },
        { tag: 'Strategy · [X] min read', title: '[Article title]' },
    ],
};