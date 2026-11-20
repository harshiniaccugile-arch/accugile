import type { ServiceData } from '@/lib/service-types';
import { serviceGovernance, serviceOverviewCard, servicePhases, commonFaqs } from './service-common';

export const cloudSolutions: ServiceData = {
    metaTitle: 'Cloud Solutions and DevOps | Accugile',
    metaDescription:
        'We design, migrate and operate cloud infrastructure that is secure, cost-efficient and resilient, supported by modern DevOps practices.',
    parent: { label: 'Services', href: '/services' },
    name: 'Cloud Solutions',
    eyebrow: 'Services',
    title: 'Cloud Solutions and DevOps',
    lead: 'We design, migrate and operate cloud infrastructure that is secure, cost-efficient and resilient, supported by modern DevOps practices.',
    overview: serviceOverviewCard,
    overviewParas: [
        'Infrastructure decisions directly affect application reliability, security and cost. Our cloud practice assesses your current environment, designs a target architecture and executes migrations with minimal disruption.',
        'After migration, we provide managed operations including monitoring, incident response, cost optimisation and continuous delivery pipelines.',
    ],
    outcomes: [
        'Improved uptime and application performance',
        'Lower and more predictable infrastructure costs',
        'Automated, repeatable deployments',
        'Stronger security posture and backup coverage',
    ],
    challenge: {
        title: 'Infrastructure should be an asset, not a risk',
        intro: 'Unplanned growth leaves many organisations with fragile, over-provisioned or poorly secured infrastructure. Manual deployments increase the risk of outages and slow down delivery. Our approach addresses these issues directly, with clear ownership and measurable outcomes from the outset.',
        items: [
            'Rising cloud costs without clear visibility',
            'Manual, error-prone deployment processes',
            'Gaps in monitoring, backups and recovery',
        ],
    },
    capabilities: {
        aside: 'Each capability is delivered by specialists from our in-house teams and can be engaged individually or as part of a wider programme.',
        items: [
            { title: 'Cloud assessment', text: 'Architecture, cost and security review of existing infrastructure.' },
            { title: 'Cloud migration', text: 'Planned migration of applications and data to AWS, Azure or Google Cloud.' },
            { title: 'DevOps and CI/CD', text: 'Automated build, test and deployment pipelines.' },
            { title: 'Infrastructure as code', text: 'Terraform-managed environments that are reproducible and auditable.' },
            { title: 'Monitoring and response', text: 'Observability, alerting and incident management.' },
            { title: 'Cost optimisation', text: 'Right-sizing, reserved capacity and usage governance.' },
        ],
    },
    useCases: [
        { title: 'Growing SaaS platforms', text: 'Scaling infrastructure with user growth.' },
        { title: 'eCommerce', text: 'Handling seasonal traffic peaks reliably.' },
        { title: 'Enterprises', text: 'Hybrid cloud and data residency requirements.' },
        { title: 'Agencies', text: 'Managed hosting for client portfolios.' },
    ],
    phases: servicePhases,
    governance: serviceGovernance,
    tools: {
        aside: 'Technology is selected for maintainability, security and fit with your existing estate, not vendor preference.',
        items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'DigitalOcean', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Cloudflare', 'Grafana'],
    },
    featuredTag: '[Client] · [Industry] · Cloud Solutions',
    faqs: [
        { q: 'Which cloud provider do you recommend?', a: 'We are provider-neutral and recommend based on your workloads, existing agreements, compliance needs and budget.' },
        { q: 'Will the migration cause downtime?', a: 'Migrations are planned to minimise downtime, typically scheduled during low-traffic windows with tested rollback procedures.' },
        { q: 'Do you offer managed hosting?', a: 'Yes. Managed operations plans include monitoring, patching, backups and incident response under agreed service levels.' },
        { q: 'Can you reduce our current cloud bill?', a: 'A cost review frequently identifies savings through right-sizing and purchasing options. Savings are quantified before any changes are made.' },
        ...commonFaqs,
    ],
    related: [
        { href: '/saas-development', label: 'Services', title: 'SaaS Product Development', text: 'We take SaaS products from validated concept to scalable, multi-tenant platforms, combining product strategy, engineering and the operational…' },
        { href: '/software-development', label: 'Services', title: 'Custom Software Development', text: 'We engineer custom business software, portals and integrations that fit your operating model precisely and scale with your…' },
        { href: '/automated-workflows', label: 'AI Solutions', title: 'AI-Powered Workflow Automation', text: 'We automate repetitive, rules-based and judgement-assisted processes across your applications, reducing manual effort and error while improving…' },
    ],
    reading: [
        { tag: 'Cloud Solutions · [X] min read', title: '[Article on Cloud Solutions]' },
        { tag: 'Engineering · [X] min read', title: '[Article title]' },
        { tag: 'Strategy · [X] min read', title: '[Article title]' },
    ],
};