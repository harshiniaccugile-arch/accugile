import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TrustStrip from '@/components/Service/TrustStrip';
import DeliveryPhases from '@/components/Service/DeliveryPhases';
import Governance from '@/components/Service/Governance';
import EngagementModels from '@/components/Service/EngagementModels';
import CompareTable from '@/components/Service/CompareTable';
import QualitySecurity from '@/components/Service/QualitySecurity';
import StatsStrip from '@/components/Service/StatsStrip';
import ServiceCTA from '@/components/Service/ServiceCTA';
import { aiPhases, aiGovernance, commonFaqs } from '@/lib/services/ai-common';
import type { CSSProperties } from 'react';

const shell = { '--ac': '#304DDB', width: '100%', background: '#FFFFFF', overflowX: 'clip' } as CSSProperties;

/* ─── Hero overview card ─── */
const heroOverview: [string, string][] = [
    ['Practice areas', '6'],
    ['Delivery', '100% in-house teams'],
    ['Engagement models', 'Fixed-scope, dedicated developer, dedicated team'],
    ['Contractual', 'NDA before discovery, full IP assignment'],
];

/* ─── AI Portfolio items ─── */
const aiSolutions = [
    {
        num: '01',
        href: '/ai-ml',
        title: 'AI and Machine Learning Development',
        text: 'We design, train and operationalise machine learning models that convert enterprise data into reliable forecasts, classifications and decisions, governed to the standards your organisation already holds.',
    },
    {
        num: '02',
        href: '/generative-ai',
        title: 'Generative AI Solutions',
        text: 'We build secure, production-grade applications on large language models, from internal copilots and knowledge assistants to content engines that operate within your brand and compliance requirements.',
    },
    {
        num: '03',
        href: '/enterprise-ai',
        title: 'Enterprise AI Integration',
        text: 'We integrate artificial intelligence into core enterprise systems with the security, governance and change management that large organisations require.',
    },
    {
        num: '04',
        href: '/ai-chatbot',
        title: 'AI Chatbot Development',
        text: 'We build intelligent chatbots for websites, WhatsApp and messaging platforms that answer enquiries, qualify leads and complete transactions around the clock.',
    },
    {
        num: '05',
        href: '/ai-voicebot',
        title: 'AI Voicebot and Voice Agent Development',
        text: 'We deploy natural-sounding voice agents that handle inbound and outbound calls, bookings and IVR journeys with consistent quality at any volume.',
    },
    {
        num: '06',
        href: '/automated-workflows',
        title: 'AI-Powered Workflow Automation',
        text: 'We automate repetitive, rules-based and judgement-assisted processes across your applications, reducing manual effort and error while improving turnaround times.',
    },
];

/* ─── Sectors ─── */
const sectors = [
    { title: 'Retail and eCommerce', text: 'D2C brands, retailers and marketplaces.', bg: '#EEF2FF' },
    { title: 'Travel and hospitality', text: 'Tour operators, hotels and experience providers.', bg: '#EFFAF5' },
    { title: 'Education and eLearning', text: 'Institutions, training providers and edtech.', bg: '#FDEEE4' },
    { title: 'Healthcare', text: 'Clinics, practitioners and health services.', bg: '#F3EEFF' },
    { title: 'Financial services', text: 'Lenders, fintechs and advisory firms.', bg: '#FEF6DA' },
    { title: 'Manufacturing and distribution', text: 'Manufacturers, distributors and B2B suppliers.', bg: '#E8F4FD' },
    { title: 'Professional services', text: 'Consultancies, legal and accounting firms.', bg: '#F1F4F9' },
    { title: 'Media and publishing', text: 'Publishers, creators and content platforms.', bg: '#FCEFF5' },
];

export default function AIPage() {
    return (
        <div className="acc motion-on" style={shell}>
            <Header />
            <main>
                {/* ── Hero ── */}
                <section style={{ background: 'linear-gradient(180deg,#F5F7FD 0%,#FFFFFF 100%)', borderBottom: '1px solid #E5E8EF' }}>
                    <div className="wrap" style={{ paddingTop: 28, paddingBottom: 72 }}>
                        <nav className="crumb" aria-label="Breadcrumb">
                            <Link href="/">Home</Link> <span aria-hidden="true">/</span> <span>AI Solutions</span>
                        </nav>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'flex-start', marginTop: 40 }}>
                            {/* Left copy */}
                            <div style={{ flex: '1 1 560px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 22 }}>
                                <div className="eyebrow">AI Solutions</div>
                                <h1 style={{ fontSize: 'clamp(38px, 4.6vw, 62px)', lineHeight: 1.06, fontWeight: 800 }}>Artificial Intelligence Solutions</h1>
                                <p className="lead" style={{ maxWidth: 680 }}>
                                    Enterprise-grade AI, from machine learning and generative AI to conversational agents and intelligent automation, designed, built and governed by our in-house AI practice.
                                </p>
                                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 6 }}>
                                    <Link href="/contact" className="btn btn-ac">Request a proposal</Link>
                                    <Link href="/case-studies" className="btn btn-ghost">View case studies</Link>
                                </div>
                            </div>

                            {/* Practice overview card */}
                            <div style={{ flex: '1 1 360px', minWidth: 0 }}>
                                <div style={{ background: '#FFFFFF', border: '1px solid #E5E8EF', borderRadius: 16, padding: 28, boxShadow: '0 30px 60px -40px rgba(15,23,42,0.35)' }}>
                                    <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5B6474', marginBottom: 18 }}>
                                        Practice overview
                                    </div>
                                    <dl className="kv" style={{ margin: 0 }}>
                                        {heroOverview.map(([label, value]) => (
                                            <div key={label} style={{ display: 'contents' }}>
                                                <dt>{label}</dt>
                                                <dd>{value}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                    <Link href="/contact" className="btn btn-ink" style={{ marginTop: 24, width: '100%', justifyContent: 'center', minHeight: 46, fontSize: 14 }}>
                                        Speak with a solution consultant
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Trust strip ── */}
                <TrustStrip />

                {/* ── 01 Portfolio ── */}
                <section className="sec">
                    <div className="wrap">
                        <div className="sec-h">
                            <div style={{ maxWidth: 760 }}>
                                <div className="eyebrow" style={{ marginBottom: 14 }}>
                                    <span className="num" style={{ color: 'inherit' }}>01</span>&nbsp;&nbsp;Portfolio
                                </div>
                                <h2 className="h2">Explore ai solutions</h2>
                            </div>
                        </div>
                        <div className="grid g3">
                            {aiSolutions.map((item) => (
                                <Link key={item.href} href={item.href} className="box">
                                    <span className="num">{item.num}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                    <span style={{ color: 'var(--ac)', fontWeight: 600, fontSize: 14, marginTop: 'auto' }}>Learn more →</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 02 Sectors ── */}
                <section className="sec" style={{ background: '#F7F8FB' }}>
                    <div className="wrap">
                        <div className="sec-h">
                            <div style={{ maxWidth: 760 }}>
                                <div className="eyebrow" style={{ marginBottom: 14 }}>
                                    <span className="num" style={{ color: 'inherit' }}>02</span>&nbsp;&nbsp;Industries
                                </div>
                                <h2 className="h2">Sectors we serve</h2>
                            </div>
                        </div>
                        <div className="grid g4">
                            {sectors.map((s) => (
                                <div key={s.title} className="box" style={{ background: s.bg, borderColor: 'transparent' }}>
                                    <h3>{s.title}</h3>
                                    <p>{s.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 03 Delivery phases ── */}
                <DeliveryPhases phases={aiPhases} />

                {/* ── 04 Governance ── */}
                <Governance {...aiGovernance} />

                {/* ── 05 Engagement models ── */}
                <EngagementModels />

                {/* ── 06 Compare ── */}
                <CompareTable />

                {/* ── 07 Quality & security ── */}
                <QualitySecurity />

                {/* ── 08 FAQ ── */}
                <section className="sec" style={{ background: '#F7F8FB' }}>
                    <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 48 }}>
                        <div style={{ flex: '1 1 300px' }}>
                            <div className="sec-h" style={{ marginBottom: 16 }}>
                                <div style={{ maxWidth: 760 }}>
                                    <div className="eyebrow" style={{ marginBottom: 14 }}>
                                        <span className="num" style={{ color: 'inherit' }}>08</span>&nbsp;&nbsp;FAQ
                                    </div>
                                    <h2 className="h2">Frequently asked questions</h2>
                                </div>
                            </div>
                        </div>
                        <div style={{ flex: '2 1 560px', minWidth: 0, borderTop: '1px solid #E5E8EF' }}>
                            {commonFaqs.map((f) => (
                                <details key={f.q} className="faq">
                                    <summary>{f.q}</summary>
                                    <p>{f.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Stats strip ── */}
                <StatsStrip />

                {/* ── CTA ── */}
                <ServiceCTA />
            </main>
            <Footer />
        </div>
    );
}
