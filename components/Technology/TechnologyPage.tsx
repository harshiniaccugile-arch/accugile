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
import { techPhases, techGovernance } from '@/lib/services/tech-common';
import type { CSSProperties } from 'react';

const shell = { '--ac': '#304DDB', width: '100%', background: '#FFFFFF', overflowX: 'clip' } as CSSProperties;

/* ─── Hero overview card ─── */
const heroOverview: [string, string][] = [
    ['Practice areas', '15'],
    ['Delivery', '100% in-house teams'],
    ['Engagement models', 'Fixed-scope, dedicated developer, dedicated team'],
    ['Contractual', 'NDA before discovery, full IP assignment'],
];

/* ─── eCommerce technologies ─── */
const ecommerce = [
    { href: '/magento', title: 'Magento', text: 'We build, upgrade and optimise Magento and Adobe Commerce stores for retailers that require extensive catalogues, complex pricing and enterprise integrations.' },
    { href: '/shopify', title: 'Shopify', text: 'We design and build Shopify stores that are quick to launch, simple to manage and engineered for conversion.' },
    { href: '/shopify-plus', title: 'Shopify Plus', text: 'We help high-volume merchants scale on Shopify Plus with checkout extensibility, automation, multi-store operations and enterprise integrations.' },
    { href: '/woocommerce', title: 'WooCommerce', text: 'We build and scale WooCommerce stores and marketplaces with full ownership, deep customisation and the content strength of WordPress.' },
    { href: '/wix', title: 'Wix', text: 'We design and build professional Wix websites and stores for businesses that value simplicity, speed to launch and easy self-management.' },
    { href: '/bigcommerce', title: 'BigCommerce', text: 'We build BigCommerce stores for growing and enterprise merchants that need native B2B features, multi-storefront capability and open APIs.' },
];

/* ─── Website Development technologies ─── */
const webDev = [
    { href: '/php-frameworks', title: 'PHP Frameworks', text: 'We engineer secure, scalable web applications on Laravel and other modern PHP frameworks, backed by a dedicated in-house PHP practice.' },
    { href: '/nodejs', title: 'NodeJS', text: 'We build high-performance, event-driven back ends and real-time applications with Node.js.' },
    { href: '/mern', title: 'MERN', text: 'We deliver full-stack web applications on MongoDB, Express, React and Node.js, built by cross-functional teams for speed and maintainability.' },
    { href: '/mean', title: 'MEAN', text: 'We build structured, enterprise-ready applications on MongoDB, Express, Angular and Node.js.' },
];

/* ─── Website Designing technologies ─── */
const webDesign = [
    { href: '/angular', title: 'Angular', text: 'We build robust, scalable front-end applications with Angular for organisations that value structure and long-term maintainability.' },
    { href: '/ui-ux', title: 'UI/UX', text: 'Our UI/UX team designs intuitive, accessible digital products grounded in research and aligned with business objectives.' },
    { href: '/graphics', title: 'Graphics', text: 'We produce professional graphic design for digital and print, ensuring every asset reflects your brand with consistency and quality.' },
    { href: '/reactjs', title: 'ReactJS', text: 'We build fast, interactive user interfaces and web applications with React, delivered by experienced front-end engineers.' },
    { href: '/nextjs', title: 'NextJS', text: 'We build high-performance websites and web applications on Next.js, combining excellent search visibility with modern application capabilities.' },
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

/* ─── FAQs ─── */
const faqs = [
    { q: 'How is an engagement priced?', a: 'Fixed-scope projects are priced on an agreed scope and timeline. Dedicated developers and teams are billed monthly. Every proposal sets out the team, deliverables, schedule and investment in writing before work begins.' },
    { q: 'How will we communicate with the team?', a: 'You will have a named project lead, a shared project channel, weekly status reports and sprint demonstrations. Meetings are scheduled within agreed overlapping working hours.' },
    { q: 'Will you sign our NDA and master services agreement?', a: 'Yes. We sign mutual NDAs before discovery and work under your MSA or our standard agreement, whichever you prefer.' },
    { q: 'What support is available after launch?', a: 'Every launch includes a hypercare period, followed by optional maintenance plans with defined response times, monitoring and a monthly allocation of enhancement hours.' },
    { q: 'Where is the team located?', a: 'Our delivery team works from Coimbatore, Tamil Nadu, India, with working hours arranged to overlap with clients in the US, UK, Europe and Asia-Pacific.' },
];

/* ─── TechGroup component ─── */
function TechGroup({ n, eyebrow, title, items, id }: {
    n: string;
    eyebrow: string;
    title: string;
    items: { href: string; title: string; text: string }[];
    id: string;
}) {
    return (
        <section className="sec" id={id} style={{ paddingBottom: 0 }}>
            <div className="wrap">
                <div className="sec-h">
                    <div style={{ maxWidth: 760 }}>
                        <div className="eyebrow" style={{ marginBottom: 14 }}>
                            <span className="num" style={{ color: 'inherit' }}>{n}</span>&nbsp;&nbsp;{eyebrow}
                        </div>
                        <h2 className="h2">{title}</h2>
                    </div>
                </div>
                <div className="grid g3">
                    {items.map((item) => (
                        <Link key={item.href} href={item.href} className="box">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                            <span style={{ color: 'var(--ac)', fontWeight: 600, fontSize: 14, marginTop: 'auto' }}>Learn more →</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function TechnologyPage() {
    return (
        <div className="acc motion-on" style={shell}>
            <Header />
            <main>

                {/* ── Hero ── */}
                <section style={{ background: 'linear-gradient(180deg,#F5F7FD 0%,#FFFFFF 100%)', borderBottom: '1px solid #E5E8EF' }}>
                    <div className="wrap" style={{ paddingTop: 28, paddingBottom: 72 }}>
                        <nav className="crumb" aria-label="Breadcrumb">
                            <Link href="/">Home</Link> <span aria-hidden="true">/</span> <span>Technology</span>
                        </nav>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'flex-start', marginTop: 40 }}>
                            {/* Left copy */}
                            <div style={{ flex: '1 1 560px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 22 }}>
                                <div className="eyebrow">Technology</div>
                                <h1 style={{ fontSize: 'clamp(38px, 4.6vw, 62px)', lineHeight: 1.06, fontWeight: 800 }}>Technology Expertise</h1>
                                <p className="lead" style={{ maxWidth: 680 }}>
                                    Specialist engineering capability across leading eCommerce platforms, back-end frameworks and front-end technologies, organised into dedicated in-house practices.
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
                                            <>
                                                <dt key={`dt-${label}`}>{label}</dt>
                                                <dd key={`dd-${label}`}>{value}</dd>
                                            </>
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

                {/* ── 01 eCommerce ── */}
                <TechGroup n="01" eyebrow="Technology group" title="eCommerce" id="ecommerce" items={ecommerce} />

                {/* ── 02 Website Development ── */}
                <TechGroup n="02" eyebrow="Technology group" title="Website Development" id="website-development" items={webDev} />

                {/* ── 03 Website Designing ── */}
                <TechGroup n="03" eyebrow="Technology group" title="Website Designing" id="website-designing" items={webDesign} />

                <div style={{ height: 96 }} />

                {/* ── 04 Sectors ── */}
                <section className="sec" style={{ background: '#F7F8FB' }}>
                    <div className="wrap">
                        <div className="sec-h">
                            <div style={{ maxWidth: 760 }}>
                                <div className="eyebrow" style={{ marginBottom: 14 }}>
                                    <span className="num" style={{ color: 'inherit' }}>04</span>&nbsp;&nbsp;Industries
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

                {/* ── 05 Delivery phases ── */}
                <DeliveryPhases phases={techPhases} />

                {/* ── 06 Governance ── */}
                <Governance {...techGovernance} />

                {/* ── 07 Engagement models ── */}
                <EngagementModels />

                {/* ── 08 Compare ── */}
                <CompareTable />

                {/* ── 09 Quality & security ── */}
                <QualitySecurity />

                {/* ── 10 FAQ ── */}
                <section className="sec" style={{ background: '#F7F8FB' }}>
                    <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 48 }}>
                        <div style={{ flex: '1 1 300px' }}>
                            <div className="sec-h" style={{ marginBottom: 16 }}>
                                <div style={{ maxWidth: 760 }}>
                                    <div className="eyebrow" style={{ marginBottom: 14 }}>
                                        <span className="num" style={{ color: 'inherit' }}>10</span>&nbsp;&nbsp;FAQ
                                    </div>
                                    <h2 className="h2">Frequently asked questions</h2>
                                </div>
                            </div>
                        </div>
                        <div style={{ flex: '2 1 560px', minWidth: 0, borderTop: '1px solid #E5E8EF' }}>
                            {faqs.map((f) => (
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
