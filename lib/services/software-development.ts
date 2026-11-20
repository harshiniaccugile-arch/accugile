import type { ServiceData } from '@/lib/service-types';
import { serviceGovernance, serviceOverviewCard, servicePhases, commonFaqs } from './service-common';

export const softwareDevelopment: ServiceData = {
    metaTitle: 'Custom Software Development | Accugile',
    metaDescription:
        'We engineer custom business software, portals and integrations that fit your operating model precisely and scale with your organisation.',
    parent: { label: 'Services', href: '/services' },
    name: 'Software Development',
    eyebrow: 'Services',
    title: 'Custom Software Development',
    lead: 'We engineer custom business software, portals and integrations that fit your operating model precisely and scale with your organisation.',
    overview: serviceOverviewCard,
    overviewParas: [
        'Off-the-shelf software rarely reflects the processes that differentiate a business. We design and build custom applications that automate those processes, integrate with your existing systems and remain maintainable for years.',
        'Engagements are led by a solution architect and project manager, delivered in two-week sprints with staging access from the first sprint, and supported by documented code and automated testing.',
    ],
    outcomes: [
        'Software aligned to your exact business processes',
        'Reduced dependency on manual workarounds and spreadsheets',
        'A maintainable codebase with full IP ownership',
        'Predictable delivery with sprint-level visibility',
    ],
    challenge: {
        title: 'When off-the-shelf software no longer fits',
        intro: 'Growing organisations often operate on a patchwork of generic tools and spreadsheets. Each workaround adds cost and risk, and the processes that differentiate the business remain unsupported. Our approach addresses these issues directly, with clear ownership and measurable outcomes from the outset.',
        items: [
            'Critical processes managed in spreadsheets',
            'Legacy applications that are difficult to change',
            'Vendors who deliver code but not accountability',
        ],
    },
    capabilities: {
        aside: 'Each capability is delivered by specialists from our in-house teams and can be engaged individually or as part of a wider programme.',
        items: [
            { title: 'Business application development', text: 'Internal tools, operational systems and management dashboards.' },
            { title: 'Customer and partner portals', text: 'Secure self-service portals with role-based access.' },
            { title: 'API development and integration', text: 'Robust APIs and integrations with ERP, CRM, payment and logistics platforms.' },
            { title: 'Legacy modernisation', text: 'Re-platforming ageing applications onto modern, supported technology.' },
            { title: 'Quality assurance', text: 'Manual and automated testing, performance and security testing.' },
            { title: 'Maintenance and support', text: 'Service level based support, enhancements and monitoring.' },
        ],
    },
    useCases: [
        { title: 'Manufacturing and distribution', text: 'Order management, inventory and dealer portals.' },
        { title: 'Professional services', text: 'Client portals, workflow and document management.' },
        { title: 'Education', text: 'Administration systems and student information portals.' },
        { title: 'Logistics', text: 'Shipment tracking, dispatch and fleet management tools.' },
    ],
    phases: servicePhases,
    governance: serviceGovernance,
    tools: {
        aside: 'Technology is selected for maintainability, security and fit with your existing estate, not vendor preference.',
        items: ['Laravel', 'Ruby on Rails', 'Node.js', 'React', 'Vue.js', 'PostgreSQL', 'MySQL', 'Redis', 'Docker', 'AWS'],
    },
    featuredTag: '[Client] · [Industry] · Software Development',
    faqs: [
        { q: 'Do you work on fixed-price or time-and-materials terms?', a: 'Both. Well-defined scopes suit fixed-price delivery, while evolving products are better served by a dedicated team on a monthly basis.' },
        { q: 'Who owns the source code?', a: 'Your organisation owns all source code and intellectual property upon payment, as set out in our standard agreement.' },
        { q: 'Can you take over an existing application?', a: 'Yes. We begin with a code and architecture audit, then agree a stabilisation and improvement plan.' },
        { q: 'How do you ensure quality?', a: 'Code review, automated testing, staging environments and client acceptance testing are standard on every project.' },
        ...commonFaqs,
    ],
    related: [
        { href: '/saas-development', label: 'Services', title: 'SaaS Product Development', text: 'We take SaaS products from validated concept to scalable, multi-tenant platforms, combining product strategy, engineering and the operational…' },
        { href: '/cloud-solutions', label: 'Services', title: 'Cloud Solutions and DevOps', text: 'We design, migrate and operate cloud infrastructure that is secure, cost-efficient and resilient, supported by modern DevOps…' },
        { href: '/php-frameworks', label: 'Technology', title: 'PHP Framework Development', text: 'We engineer secure, scalable web applications on Laravel and other modern PHP frameworks, backed by a dedicated in-house PHP…' },
    ],
    reading: [
        { tag: 'Software Development · [X] min read', title: '[Article on Software Development]' },
        { tag: 'Engineering · [X] min read', title: '[Article title]' },
        { tag: 'Strategy · [X] min read', title: '[Article title]' },
    ],
};