import type { ServiceData } from '@/lib/service-types';
import { serviceGovernance, serviceOverviewCard, servicePhases, commonFaqs } from './service-common';

export const membershipManagement: ServiceData = {
    metaTitle: 'Membership Management Platforms | Accugile',
    metaDescription:
        'We build membership platforms that manage subscriptions, gated content, renewals and member communication from a single, reliable system.',
    parent: { label: 'Services', href: '/services' },
    name: 'Membership Management',
    eyebrow: 'Services',
    title: 'Membership Management Platforms',
    lead: 'We build membership platforms that manage subscriptions, gated content, renewals and member communication from a single, reliable system.',
    overview: serviceOverviewCard,
    overviewParas: [
        'Associations, communities and subscription businesses depend on recurring revenue and member engagement. We implement platforms that automate joining, payment, access control and renewal, reducing administrative effort and churn.',
        'Platforms integrate with payment gateways, CRM and email tools, with reporting that gives leadership clear visibility of membership health.',
    ],
    outcomes: [
        'Automated sign-up, billing and renewals',
        'Secure access to members-only content and resources',
        'Reduced churn through timely engagement',
        'Clear reporting on membership revenue',
    ],
    challenge: {
        title: 'Recurring revenue depends on retention',
        intro: 'Membership organisations lose members and revenue through manual renewals, failed payments and poor engagement. Administrative effort rises with every new member. Our approach addresses these issues directly, with clear ownership and measurable outcomes from the outset.',
        items: [
            'Manual renewals and payment follow-up',
            'Content and benefits not properly restricted to members',
            'Limited insight into member engagement and churn',
        ],
    },
    capabilities: {
        aside: 'Each capability is delivered by specialists from our in-house teams and can be engaged individually or as part of a wider programme.',
        items: [
            { title: 'Membership tiers', text: 'Flexible plans, pricing and benefits by member level.' },
            { title: 'Recurring payments', text: 'Subscription billing via Razorpay, Stripe and PayPal.' },
            { title: 'Content restriction', text: 'Gated pages, downloads, courses and community areas.' },
            { title: 'Member directories', text: 'Searchable profiles and networking features.' },
            { title: 'Events and communication', text: 'Event registration, newsletters and automated reminders.' },
            { title: 'Reporting', text: 'Member growth, retention and revenue dashboards.' },
        ],
    },
    useCases: [
        { title: 'Professional associations', text: 'Member registration, CPD tracking and renewals.' },
        { title: 'Online communities', text: 'Paid communities with forums and resources.' },
        { title: 'Publishers', text: 'Subscription access to premium content.' },
        { title: 'Clubs and networks', text: 'Membership cards, events and member benefits.' },
    ],
    phases: servicePhases,
    governance: serviceGovernance,
    tools: {
        aside: 'Technology is selected for maintainability, security and fit with your existing estate, not vendor preference.',
        items: ['WordPress', 'MemberPress', 'Paid Memberships Pro', 'WooCommerce Subscriptions', 'Laravel', 'Stripe', 'Razorpay', 'Mailchimp', 'HubSpot'],
    },
    featuredTag: '[Client] · [Industry] · Membership Management',
    faqs: [
        { q: 'Can members manage their own accounts?', a: 'Yes. Members can update details, change plans, download invoices and renew from a self-service account area.' },
        { q: 'Which payment gateways do you support?', a: 'Razorpay, Stripe, PayPal and other major gateways, including support for recurring payments in India.' },
        { q: 'Can you migrate our existing members?', a: 'Yes. Member records and, where supported by the gateway, active subscriptions can be migrated.' },
        { q: 'Is a custom platform or plugin better?', a: 'Plugins suit standard requirements and faster launches. Custom builds suit complex rules or large member bases. We advise after discovery.' },
        ...commonFaqs,
    ],
    related: [
        { href: '/learning-management', label: 'Services', title: 'Learning Management Systems', text: 'We build learning platforms for training providers, institutions and enterprises, covering course delivery, assessment, certification and…' },
        { href: '/ecommerce-solutions', label: 'Services', title: 'eCommerce Solutions', text: 'We design, build and scale online stores and marketplaces on Shopify, WooCommerce, Magento and custom platforms, with the integrations required to…' },
        { href: '/cms-solutions', label: 'Services', title: 'CMS Solutions', text: 'We implement content management platforms that give marketing and editorial teams full control of content while maintaining performance, security and…' },
    ],
    reading: [
        { tag: 'Membership Management · [X] min read', title: '[Article on Membership Management]' },
        { tag: 'Engineering · [X] min read', title: '[Article title]' },
        { tag: 'Strategy · [X] min read', title: '[Article title]' },
    ],
};