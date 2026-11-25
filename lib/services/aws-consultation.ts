import type { ServiceData } from '@/lib/service-types';
import { serviceGovernance, serviceOverviewCard, servicePhases, commonFaqs } from './service-common';

export const awsConsultation: ServiceData = {
    metaTitle: 'AWS Cloud Consulting & Architecture Services | Accugile',
    metaDescription:
        'Certified AWS cloud consultation, serverless architecture design, seamless migrations, security hardening and FinOps cost optimisation for fast-growing businesses.',
    parent: { label: 'Services', href: '/services' },
    name: 'AWS Consultation',
    eyebrow: 'Services',
    title: 'AWS Cloud Consultation & Architecture',
    lead: 'We architect, migrate, optimise and manage high-availability infrastructure on Amazon Web Services, helping businesses achieve elasticity, security and cost efficiency.',
    overview: serviceOverviewCard,
    overviewParas: [
        'Amazon Web Services offers unmatched capabilities, but unlocking its full power requires precise architectural governance, security rigor and continuous FinOps discipline. Our AWS consulting practice helps businesses build future-proof cloud foundations.',
        'From monolithic-to-microservices refactoring and serverless implementations to multi-region disaster recovery and cloud cost reduction, our certified AWS engineers deliver measurable results with zero unplanned downtime.',
    ],
    outcomes: [
        '99.99%+ application availability with resilient multi-AZ architectures',
        '30% to 50% cloud bill savings through FinOps & right-sizing',
        'Automated zero-downtime CI/CD deployment pipelines',
        'Enterprise-grade security posture compliant with SOC 2, HIPAA and GDPR',
    ],
    challenge: {
        title: 'Cloud complexity should not translate into high bills and fragile deployments',
        intro: 'Without deliberate architecture, cloud environments quickly accumulate unmanaged resources, runaway billing, security gaps and manual deployment bottlenecks. We provide hands-on AWS expertise to streamline infrastructure.',
        items: [
            'Skyrocketing monthly AWS bills without clear attribution',
            'Fragile infrastructure with single points of failure',
            'Slow, manual releases that risk downtime or service disruption',
        ],
    },
    capabilities: {
        aside: 'Delivered by certified AWS Solutions Architects and DevOps specialists who handle architecture, infrastructure-as-code and 24/7 reliability.',
        items: [
            { title: 'AWS Well-Architected Review', text: 'Thorough evaluation across operational excellence, security, reliability, performance and cost.' },
            { title: 'Cloud Migration & Modernisation', text: 'Seamless database and application lift-and-shift, re-platforming and refactoring.' },
            { title: 'Serverless & Containers', text: 'Microservices with AWS Lambda, API Gateway, ECS (Fargate) and EKS (Kubernetes).' },
            { title: 'Infrastructure as Code (IaC)', text: 'Automated, reproducible infrastructure deployment using Terraform and AWS CloudFormation.' },
            { title: 'AWS Cost Optimisation (FinOps)', text: 'Savings Plans, Reserved Instances, Spot allocation, storage tiering and resource right-sizing.' },
            { title: 'Security & Compliance Hardening', text: 'IAM least-privilege, AWS WAF, GuardDuty, KMS encryption and automated audit logging.' },
        ],
    },
    useCases: [
        { title: 'SaaS Platforms & Scale-ups', text: 'Auto-scaling architectures that effortlessly handle sudden traffic surges.' },
        { title: 'High-Volume eCommerce', text: 'Fast, secure storefronts with CloudFront CDN, ElastiCache and RDS read replicas.' },
        { title: 'Data & AI Workloads', text: 'Scalable data pipelines with AWS Glue, Athena, S3 and SageMaker.' },
        { title: 'Legacy Modernisation', text: 'Phased transitions from on-premise data centers or costly hosting providers to AWS.' },
    ],
    phases: servicePhases,
    governance: serviceGovernance,
    tools: {
        aside: 'We design solutions leveraging the complete breadth of AWS native services combined with best-in-class DevOps tooling.',
        items: ['Amazon EC2', 'AWS Lambda', 'Amazon ECS / EKS', 'Amazon RDS / Aurora', 'Amazon S3', 'Amazon CloudFront', 'AWS WAF', 'Terraform', 'Docker', 'Amazon CloudWatch'],
    },
    featuredTag: 'Cloud Engineering · Architecture & DevOps · AWS',
    faqs: [
        { q: 'How does an AWS consultation engagement begin?', a: 'We typically start with a comprehensive AWS Well-Architected Review or workload discovery, identifying security vulnerabilities, performance bottlenecks and immediate cost savings.' },
        { q: 'Can you help us reduce our monthly AWS spend?', a: 'Yes. Our FinOps assessment frequently unlocks 30% to 50% savings through instance right-sizing, database optimisation, unused resource cleanup and strategic Savings Plans.' },
        { q: 'Will our application experience downtime during an AWS migration?', a: 'No. We design zero-downtime cutover strategies utilizing parallel environments, database replication (AWS DMS), and DNS cutovers during low-activity windows.' },
        { q: 'Do you provide continuous AWS monitoring and DevOps support?', a: 'Yes. We offer ongoing managed cloud support that includes 24/7 monitoring, incident response, automated patching, security audits and continuous CI/CD improvements.' },
        ...commonFaqs,
    ],
    related: [
        { href: '/cloud-solutions', label: 'Services', title: 'Cloud Solutions and DevOps', text: 'We design, migrate and operate cloud infrastructure that is secure, cost-efficient and resilient, supported by modern DevOps…' },
        { href: '/saas-development', label: 'Services', title: 'SaaS Product Development', text: 'We take SaaS products from validated concept to scalable, multi-tenant platforms, combining product strategy, engineering and the operational…' },
        { href: '/software-development', label: 'Services', title: 'Custom Software Development', text: 'We engineer custom business software, portals and integrations that fit your operating model precisely and scale with your…' },
    ],
    reading: [
        { tag: 'AWS · 5 min read', title: 'The 5 Most Common AWS Architecture Mistakes and How to Avoid Them' },
        { tag: 'FinOps · 4 min read', title: 'Practical Strategies to Reduce AWS Cloud Costs by Up to 40%' },
        { tag: 'DevOps · 6 min read', title: 'Setting Up Modern GitOps and Terraform Pipelines on AWS' },
    ],
};
