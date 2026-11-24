import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TrustStrip from '@/components/Service/TrustStrip';
import CompareTable from '@/components/Service/CompareTable';
import EngagementModels from '@/components/Service/EngagementModels';
import StatsStrip from '@/components/Service/StatsStrip';
import ServiceCTA from '@/components/Service/ServiceCTA';
import { commonFaqs } from '@/lib/services/ai-common';
import type { CSSProperties } from 'react';

const shell = { '--ac': '#304DDB', width: '100%', background: '#FFFFFF', overflowX: 'clip' } as CSSProperties;

/* ─── Hero overview card ─── */
const heroOverview: [string, string][] = [
    ['Practice areas', '3'],
    ['Delivery', '100% in-house teams'],
    ['Engagement models', 'Fixed-scope, dedicated developer, dedicated team'],
    ['Contractual', 'NDA before discovery, full IP assignment'],
];

/* ─── Product portfolio items ─── */
const products = [
    {
        num: '01',
        href: '/adorack',
        title: 'Adorack',
        text: 'Adorack is a social media scheduling and management platform with AI content tools, built and operated by Accugile for teams and agencies.',
    },
    {
        num: '02',
        href: '/skiplore',
        title: 'Skiplore',
        text: 'Skiplore is a travel and local experiences marketplace for India, connecting travellers with tour packages, experiences and local service providers.',
    },
    {
        num: '03',
        href: '/recomonk',
        title: 'Recomonk',
        text: 'Recomonk is a product recommendation and buying guide publication, built on WordPress and operated by Accugile.',
    },
];

export default function ProductsPage() {
    return (
        <div className="acc motion-on" style={shell}>
            <Header />
            <main>
                {/* ── Hero ── */}
                <section style={{ background: 'linear-gradient(180deg,#F5F7FD 0%,#FFFFFF 100%)', borderBottom: '1px solid #E5E8EF' }}>
                    <div className="wrap" style={{ paddingTop: 28, paddingBottom: 72 }}>
                        <nav className="crumb" aria-label="Breadcrumb">
                            <Link href="/">Home</Link> <span aria-hidden="true">/</span> <span>Products</span>
                        </nav>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'flex-start', marginTop: 40 }}>
                            {/* Left copy */}
                            <div style={{ flex: '1 1 560px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 22 }}>
                                <div className="eyebrow">Products</div>
                                <h1 style={{ fontSize: 'clamp(38px, 4.6vw, 62px)', lineHeight: 1.06, fontWeight: 800 }}>Products We Build and Operate</h1>
                                <p className="lead" style={{ maxWidth: 680 }}>
                                    Accugile designs, engineers and operates its own digital products. The experience of running live SaaS, marketplace and content platforms informs every client engagement.
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
                                <h2 className="h2">Explore products</h2>
                            </div>
                        </div>
                        <div className="grid g3">
                            {products.map((item) => (
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

                {/* ── 02 Why Accugile ── */}
                <CompareTable />

                {/* ── 03 Engagement models ── */}
                <EngagementModels />

                {/* ── 04 FAQ ── */}
                <section className="sec" style={{ background: '#F7F8FB' }}>
                    <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 48 }}>
                        <div style={{ flex: '1 1 300px' }}>
                            <div className="sec-h" style={{ marginBottom: 16 }}>
                                <div style={{ maxWidth: 760 }}>
                                    <div className="eyebrow" style={{ marginBottom: 14 }}>
                                        <span className="num" style={{ color: 'inherit' }}>04</span>&nbsp;&nbsp;FAQ
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
