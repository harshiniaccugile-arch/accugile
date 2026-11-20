import type { ServiceData } from '@/lib/service-types';

export const aiMl: ServiceData = {
    metaTitle: 'AI and Machine Learning Development | Accugile',
    metaDescription:
        'We design, train and operationalise machine learning models that convert enterprise data into reliable forecasts, classifications and decisions, governed to the standards your organisation already holds.',
    parent: { label: 'AI Solutions', href: '/ai' },
    name: 'AI/ML',
    eyebrow: 'AI Solutions',
    title: 'AI and Machine Learning Development',
    lead: 'We design, train and operationalise machine learning models that convert enterprise data into reliable forecasts, classifications and decisions, governed to the standards your organisation already holds.',
    overview: [
        ['Delivery team', 'Solution architect, ML and data engineers, QA analyst, project lead'],
        ['Engagement models', 'Fixed-scope project, dedicated developer or dedicated team'],
        ['Governance', 'Weekly status reporting, sprint demonstrations, named project lead'],
        ['Contractual', 'NDA before discovery, full IP assignment on payment'],
    ],
    overviewParas: [
        'Most organisations hold more data than they can act on. Our AI and machine learning practice closes that gap by identifying the decisions that carry the greatest commercial weight and building models that improve them measurably.',
        'Every engagement is delivered by an in-house team of data engineers, machine learning engineers and solution architects under a single accountable project lead. Models are documented, version-controlled and deployed with monitoring, so they remain dependable long after go-live.',
    ],
    outcomes: [
        'More accurate demand, revenue and inventory forecasts',
        'Reduced manual review through automated classification',
        'Earlier detection of churn, fraud and operational risk',
        'Decision support that is explainable to stakeholders',
    ],
    challenge: {
        title: 'Why most analytics never changes a decision',
        intro: 'Organisations invest heavily in data warehouses and dashboards, yet critical decisions are still made on instinct. Models built in isolation rarely reach production, and those that do often degrade without anyone noticing. Our approach addresses these issues directly, with clear ownership and measurable outcomes from the outset.',
        items: [
            'Data spread across systems with inconsistent definitions',
            'Promising prototypes that never progress to production',
            'No monitoring once a model is live, so accuracy quietly declines',
        ],
    },
    capabilities: {
        aside: 'Each capability is delivered by specialists from our in-house teams and can be engaged individually or as part of a wider programme.',
        items: [
            { title: 'Data readiness assessment', text: 'A structured review of data sources, quality and governance, with a prioritised remediation plan.' },
            { title: 'Predictive modelling', text: 'Forecasting, scoring and propensity models built on regression, gradient boosting and deep learning techniques.' },
            { title: 'Classification and NLP', text: 'Document, ticket and text classification, entity extraction and sentiment analysis at scale.' },
            { title: 'Computer vision', text: 'Image and video models for inspection, recognition and catalogue enrichment.' },
            { title: 'Data pipelines', text: 'Reliable ingestion, transformation and feature pipelines that keep models supplied with current data.' },
            { title: 'MLOps and monitoring', text: 'Automated retraining, drift detection, model versioning and performance dashboards.' },
        ],
    },
    useCases: [
        { title: 'Retail and eCommerce', text: 'Demand forecasting, product recommendations and dynamic merchandising.' },
        { title: 'Financial services', text: 'Credit scoring, transaction anomaly detection and collections prioritisation.' },
        { title: 'Logistics', text: 'Route optimisation, delivery time prediction and capacity planning.' },
        { title: 'Healthcare and education', text: 'Appointment no-show prediction, learner risk scoring and content tagging.' },
    ],
    phases: [
        { title: 'Discovery workshop', text: 'Define the business problem, users, constraints and measurable success criteria.', output: 'Use-case brief and success metrics' },
        { title: 'Data and feasibility assessment', text: 'Review data sources, quality, access and risk to confirm the approach is viable.', output: 'Data readiness report' },
        { title: 'Proof of value', text: 'Build a time-boxed pilot on real data and measure it against the agreed baseline.', output: 'Pilot results and evaluation report' },
        { title: 'Production engineering', text: 'Harden the solution with security, integrations, testing and documentation.', output: 'Production release and model documentation' },
        { title: 'Deployment and adoption', text: 'Roll out to users with training, communication and support.', output: 'Training materials and adoption plan' },
        { title: 'Monitoring and optimisation', text: 'Track accuracy, cost and usage, and improve the solution over time.', output: 'Monthly performance report' },
    ],
    governance: {
        deliverables: [
            'Use-case assessment and prioritisation',
            'Data readiness and risk report',
            'Model and prompt documentation',
            'Evaluation and accuracy report',
            'Integration and API documentation',
            'Operations runbook and monitoring dashboards',
        ],
        ipNote: 'All deliverables, source code and intellectual property are assigned to your organisation.',
        kpis: [
            { title: 'Accuracy against baseline', text: 'How much better the solution performs than the current process.' },
            { title: 'Automation rate', text: 'Share of requests or tasks completed without manual work.' },
            { title: 'Time saved', text: 'Hours returned to teams each month.' },
            { title: 'Cost per transaction', text: 'Including model usage and infrastructure.' },
            { title: 'Adoption', text: 'Active users and usage frequency.' },
            { title: 'Response time', text: 'Latency experienced by users.' },
        ],
    },
    tools: {
        aside: 'Technology is selected for maintainability, security and fit with your existing estate, not vendor preference.',
        items: ['Python', 'scikit-learn', 'TensorFlow', 'PyTorch', 'XGBoost', 'Pandas', 'Apache Airflow', 'PostgreSQL', 'AWS SageMaker', 'Docker'],
    },
    featuredTag: '[Client] · [Industry] · AI/ML',
    faqs: [
        { q: 'How much data do we need to begin?', a: 'Requirements vary by use case. Our data readiness assessment establishes whether existing data is sufficient and, where it is not, defines how to close the gap before model development begins.' },
        { q: 'Who owns the models and the code?', a: 'You do. All models, training code, documentation and intellectual property are assigned to your organisation under our standard agreement.' },
        { q: 'Can models run inside our own cloud environment?', a: 'Yes. We deploy to your AWS, Azure or Google Cloud tenancy, or to on-premise infrastructure where data residency requires it.' },
        { q: 'How do you measure success?', a: 'Each engagement begins with agreed business metrics and a baseline. Model performance is reported against those metrics throughout delivery and after launch.' },
        { q: 'How is an engagement priced?', a: 'Fixed-scope projects are priced on an agreed scope and timeline. Dedicated developers and teams are billed monthly. Every proposal sets out the team, deliverables, schedule and investment in writing before work begins.' },
        { q: 'How will we communicate with the team?', a: 'You will have a named project lead, a shared project channel, weekly status reports and sprint demonstrations. Meetings are scheduled within agreed overlapping working hours.' },
        { q: 'Will you sign our NDA and master services agreement?', a: 'Yes. We sign mutual NDAs before discovery and work under your MSA or our standard agreement, whichever you prefer.' },
        { q: 'What support is available after launch?', a: 'Every launch includes a hypercare period, followed by optional maintenance plans with defined response times, monitoring and a monthly allocation of enhancement hours.' },
        { q: 'Where is the team located?', a: 'Our delivery team works from Coimbatore, Tamil Nadu, India, with working hours arranged to overlap with clients in the US, UK, Europe and Asia-Pacific.' },
    ],
    related: [
        { href: '/generative-ai', label: 'AI Solutions', title: 'Generative AI Solutions', text: 'We build secure, production-grade applications on large language models, from internal copilots and knowledge assistants to content engines that…' },
        { href: '/enterprise-ai', label: 'AI Solutions', title: 'Enterprise AI Integration', text: 'We integrate artificial intelligence into core enterprise systems with the security, governance and change management that large organisations…' },
        { href: '/automated-workflows', label: 'AI Solutions', title: 'AI-Powered Workflow Automation', text: 'We automate repetitive, rules-based and judgement-assisted processes across your applications, reducing manual effort and error while improving…' },
    ],
    reading: [
        { tag: 'AI/ML · [X] min read', title: '[Article on AI/ML]' },
        { tag: 'Engineering · [X] min read', title: '[Article title]' },
        { tag: 'Strategy · [X] min read', title: '[Article title]' },
    ],
};
