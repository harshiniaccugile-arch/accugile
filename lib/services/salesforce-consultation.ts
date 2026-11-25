import type { ServiceData } from '@/lib/service-types';
import { serviceGovernance, serviceOverviewCard, servicePhases, commonFaqs } from './service-common';

export const salesforceConsultation: ServiceData = {
    metaTitle: 'Salesforce Consultation & Implementation Services | Accugile',
    metaDescription:
        'Transform your customer relationships, sales pipelines and business processes with strategic Salesforce consulting, customisation, integration and managed support.',
    parent: { label: 'Services', href: '/services' },
    name: 'Salesforce Consultation',
    eyebrow: 'Services',
    title: 'Salesforce Consultation & CRM Engineering',
    lead: 'We help growing businesses and enterprises design, customise and scale Salesforce to drive revenue, automate workflows and create seamless customer experiences.',
    overview: serviceOverviewCard,
    overviewParas: [
        'A CRM is only as powerful as the business workflows it powers. Our Salesforce practice bridges technical architecture and commercial objectives to deliver implementations tailored to your exact sales, service and marketing processes.',
        'Whether you are implementing Salesforce for the first time, rescuing an underperforming org, integrating with legacy ERP systems, or building custom Lightning apps, our in-house consultants ensure maximum ROI and high user adoption.',
    ],
    outcomes: [
        'Higher pipeline visibility and sales team productivity',
        'Automated lead management and service ticket resolution',
        'Flawless bi-directional integration with ERP, billing and custom apps',
        'Clean, deduplicated data with executive analytics dashboards',
    ],
    challenge: {
        title: 'Salesforce should accelerate your team, not slow them down',
        intro: 'Many organisations invest heavily in Salesforce licenses only to encounter low team adoption, disjointed data silos, bloated configurations, and manual administrative work. Our consulting methodology cuts through technical debt to deliver high-impact CRM systems.',
        items: [
            'Low user adoption due to complex, unintuitive workflows',
            'Fragmented customer data across disparate tools and spreadsheets',
            'Lack of automated handoffs between marketing, sales and support',
        ],
    },
    capabilities: {
        aside: 'Every Salesforce engagement is staffed by certified architects and developers who configure, code and support your CRM directly.',
        items: [
            { title: 'Salesforce CRM Strategy', text: 'Discovery, license optimisation, roadmapping and architecture design for Sales & Service Cloud.' },
            { title: 'Custom Implementation', text: 'Tailored setup of custom objects, Flows, validation rules and Lightning page layouts.' },
            { title: 'Apex & Lightning Development', text: 'Custom Apex triggers, classes, batch jobs and Lightning Web Components (LWC).' },
            { title: 'ERP & App Integrations', text: 'Seamless API integration with SAP, NetSuite, HubSpot, Stripe and custom web applications.' },
            { title: 'Data Migration & Cleansing', text: 'Secure extraction, transformation, deduplication and loading of legacy customer records.' },
            { title: 'Managed Support & Training', text: 'Continuous enhancement, user training, release updates and dedicated administrator support.' },
        ],
    },
    useCases: [
        { title: 'B2B Sales Organisations', text: 'Streamlining deal stages, quoting, CPQ and forecasting.' },
        { title: 'Multi-Channel Customer Service', text: 'Automating omnichannel ticketing, case routing and SLAs.' },
        { title: 'eCommerce & D2C Brands', text: 'Unifying online shopper history with customer success and loyalty.' },
        { title: 'Financial & Professional Services', text: 'Managing client relationships, compliance tracking and advisory lifecycles.' },
    ],
    phases: servicePhases,
    governance: serviceGovernance,
    tools: {
        aside: 'We build on the Salesforce ecosystem with native tools, robust APIs and modern developer tooling.',
        items: ['Salesforce Sales Cloud', 'Service Cloud', 'Marketing Cloud', 'Lightning Web Components', 'Apex', 'Salesforce Flow', 'MuleSoft', 'Salesforce DX', 'Tableau CRM', 'REST / SOAP APIs'],
    },
    featuredTag: 'Enterprise Tech · CRM & Automation · Salesforce',
    faqs: [
        { q: 'Which Salesforce editions and clouds do you support?', a: 'We work across Sales Cloud, Service Cloud, Experience Cloud (Community), Marketing Cloud Account Engagement (Pardot), and Salesforce Platform on Enterprise, Unlimited and Developer editions.' },
        { q: 'Can you integrate Salesforce with our existing ERP or custom web app?', a: 'Yes. We specialize in building secure, bi-directional REST and SOAP API integrations between Salesforce and custom backends (Laravel, Node.js, Python), ERPs (SAP, NetSuite), and payment gateways.' },
        { q: 'Do you offer ongoing Salesforce administrator and developer support?', a: 'Yes. We provide flexible monthly managed service arrangements where our certified developers handle enhancements, new Flows, bug fixes, user onboarding and seasonal releases.' },
        { q: 'Can you help clean up and migrate data from an older CRM?', a: 'Yes. We handle end-to-end data cleansing, mapping, deduplication and migration from HubSpot, Zoho, Excel, or custom databases into Salesforce with zero downtime.' },
        ...commonFaqs,
    ],
    related: [
        { href: '/cloud-solutions', label: 'Services', title: 'Cloud Solutions and DevOps', text: 'We design, migrate and operate cloud infrastructure that is secure, cost-efficient and resilient, supported by modern DevOps…' },
        { href: '/software-development', label: 'Services', title: 'Custom Software Development', text: 'We engineer custom business software, portals and integrations that fit your operating model precisely and scale with your…' },
        { href: '/automated-workflows', label: 'AI Solutions', title: 'AI-Powered Workflow Automation', text: 'We automate repetitive, rules-based and judgement-assisted processes across your applications, reducing manual effort and error while improving…' },
    ],
    reading: [
        { tag: 'Salesforce · 5 min read', title: 'How to Maximise ROI from Salesforce Sales Cloud in 2026' },
        { tag: 'CRM Strategy · 4 min read', title: 'Key Considerations When Integrating Salesforce with Custom ERP Systems' },
        { tag: 'Engineering · 6 min read', title: 'Migrating from Legacy CRMs: Data Hygiene and Architecture Checklist' },
    ],
};
