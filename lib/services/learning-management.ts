import type { ServiceData } from '@/lib/service-types';
import { serviceGovernance, serviceOverviewCard, servicePhases, commonFaqs } from './service-common';

export const learningManagement: ServiceData = {
    metaTitle: 'Learning Management Systems | Accugile',
    metaDescription:
        'We build learning platforms for training providers, institutions and enterprises, covering course delivery, assessment, certification and commerce.',
    parent: { label: 'Services', href: '/services' },
    name: 'Learning Management',
    eyebrow: 'Services',
    title: 'Learning Management Systems',
    lead: 'We build learning platforms for training providers, institutions and enterprises, covering course delivery, assessment, certification and commerce.',
    overview: serviceOverviewCard,
    overviewParas: [
        'Whether you sell courses to the public or train employees and partners, your learning platform must be reliable, engaging and easy to administer. We implement LMS solutions configured precisely to your delivery model.',
        'We integrate the LMS with payments, CRM and HR systems, and provide reporting that demonstrates learner progress and programme impact.',
    ],
    outcomes: [
        'Scalable course delivery to any number of learners',
        'Automated enrolment, assessment and certification',
        'New revenue from online course sales',
        'Clear reporting on completion and outcomes',
    ],
    challenge: {
        title: 'Learning delivery must scale without losing quality',
        intro: 'Training providers and organisations struggle to deliver consistent learning to growing audiences. Manual enrolment, assessment and certification consume time and introduce errors. Our approach addresses these issues directly, with clear ownership and measurable outcomes from the outset.',
        items: [
            'Manual enrolment and certificate issuance',
            'Disconnected payment, course and CRM systems',
            'Limited reporting on learner progress and outcomes',
        ],
    },
    capabilities: {
        aside: 'Each capability is delivered by specialists from our in-house teams and can be engaged individually or as part of a wider programme.',
        items: [
            { title: 'Course authoring', text: 'Structured courses with video, documents, quizzes and assignments.' },
            { title: 'Assessment and certification', text: 'Graded assessments and automatically issued certificates.' },
            { title: 'Course commerce', text: 'Single courses, bundles and subscriptions with secure checkout.' },
            { title: 'Corporate training', text: 'Cohorts, compliance tracking and manager reporting.' },
            { title: 'Live sessions', text: 'Integration with Zoom and Google Meet for live classes.' },
            { title: 'Learner analytics', text: 'Progress, engagement and completion reporting.' },
        ],
    },
    useCases: [
        { title: 'Training providers', text: 'Selling professional courses online.' },
        { title: 'Educational institutions', text: 'Blended learning and student portals.' },
        { title: 'Enterprises', text: 'Employee onboarding and compliance training.' },
        { title: 'Coaches and experts', text: 'Branded academies and membership courses.' },
    ],
    phases: servicePhases,
    governance: serviceGovernance,
    tools: {
        aside: 'Technology is selected for maintainability, security and fit with your existing estate, not vendor preference.',
        items: ['LearnDash', 'Tutor LMS', 'LifterLMS', 'Moodle', 'WordPress', 'WooCommerce', 'Laravel', 'Zoom API', 'Vimeo', 'Razorpay'],
    },
    featuredTag: '[Client] · [Industry] · Learning Management',
    faqs: [
        { q: 'Do you work with Moodle or WordPress-based LMS platforms?', a: 'Both. We recommend a platform based on your scale, content type and administrative needs.' },
        { q: 'Can courses be protected from unauthorised sharing?', a: 'Yes. Access controls, secure video hosting and device limits can be configured.' },
        { q: 'Can we sell courses in multiple currencies?', a: 'Yes. Multi-currency pricing and regional payment gateways can be supported.' },
        { q: 'Will it work on mobile devices?', a: 'All platforms are fully responsive, and mobile app options are available where required.' },
        ...commonFaqs,
    ],
    related: [
        { href: '/membership-management', label: 'Services', title: 'Membership Management Platforms', text: 'We build membership platforms that manage subscriptions, gated content, renewals and member communication from a single, reliable…' },
        { href: '/ecommerce-solutions', label: 'Services', title: 'eCommerce Solutions', text: 'We design, build and scale online stores and marketplaces on Shopify, WooCommerce, Magento and custom platforms, with the integrations required to…' },
        { href: '/woocommerce', label: 'Technology', title: 'WooCommerce Development', text: 'We build and scale WooCommerce stores and marketplaces with full ownership, deep customisation and the content strength of…' },
    ],
    reading: [
        { tag: 'Learning Management · [X] min read', title: '[Article on Learning Management]' },
        { tag: 'Engineering · [X] min read', title: '[Article title]' },
        { tag: 'Strategy · [X] min read', title: '[Article title]' },
    ],
};