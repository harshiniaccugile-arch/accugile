import Link from 'next/link';
import Image from 'next/image';
import { ALL_CASE_STUDIES } from '@/lib/all-case-studies';

// Plans configuration
const plans = [
    {
        title: 'Fixed-scope project',
        desc: 'For a clearly defined website, store or MVP.',
        price: 'From $2500++',
        lead: null,
        items: ['✓ Fixed price and timeline', '✓ Dedicated project manager', '✓ 30 days of post-launch support'],
        cta: 'Get an estimate',
        btn: 'btn-ink',
        popular: false
    },
    {
        title: 'Dedicated developer',
        desc: 'A senior engineer, backed by our wider team, working as part of yours.',
        price: 'From $5000/mo',
        lead: 'Everything in Fixed-scope, plus',
        items: ['✓ Full-time, in-house engineer', '✓ Daily standups in your time zone', '✓ Scale up or down monthly'],
        cta: 'Hire a developer',
        btn: 'btn-ac',
        popular: true
    },
    {
        title: 'Dedicated team',
        desc: 'A cross-functional squad for SaaS and long-running products.',
        price: 'Custom',
        lead: 'Everything in Dedicated developer, plus',
        items: ['✓ PM, designers, developers and QA', '✓ Product roadmap ownership', '✓ Monthly performance reporting'],
        cta: 'Build my team',
        btn: 'btn-ink',
        popular: false
    },
];

export default function Engagement() {
    // Pick latest 3 case studies from the slug case studies list
    const latestCases = [
        ALL_CASE_STUDIES.find(c => c.slug === 'mile-high-makers-studio') || ALL_CASE_STUDIES[0],
        ALL_CASE_STUDIES.find(c => c.slug === 'lakeshore-advisory') || ALL_CASE_STUDIES[1],
        ALL_CASE_STUDIES.find(c => c.slug === 'hanseatisch-handwerk') || ALL_CASE_STUDIES[2],
    ];

    return (
        <section style={{ padding: '120px 0', background: '#F7F8FB' }}>
            <div className="wrap">
                {/* Engagement Models Header */}
                <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 56px' }}>
                    <div className="eyebrow" style={{ marginBottom: 16 }}>Engagement models</div>
                    <h2 style={{ fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.05, fontWeight: 700 }}>Hire us the way that suits you.</h2>
                </div>

                {/* Plans Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20, alignItems: 'stretch' }}>
                    {plans.map((p) => (
                        <div key={p.title} style={{
                            background: '#fff', borderRadius: 22, padding: 36, display: 'flex', flexDirection: 'column', gap: 20, position: 'relative',
                            border: p.popular ? '2px solid var(--ac)' : '1px solid #E5E8EF',
                            boxShadow: p.popular ? '0 30px 60px -36px rgba(48,77,219,0.5)' : undefined,
                        }}>
                            {p.popular && <span style={{ position: 'absolute', top: 20, right: 20, background: '#EEF2FF', color: '#2338B0', fontSize: 12, fontWeight: 700, padding: '5px 10px', borderRadius: 999 }}>Most popular</span>}
                            <h3 style={{ fontSize: 26, fontWeight: p.popular ? 700 : 600 }}>{p.title}</h3>
                            <p style={{ color: '#5B6474', fontSize: 15, lineHeight: 1.6 }}>{p.desc}</p>
                            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 30, fontWeight: 600 }}>{p.price}</div>
                            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, fontSize: 15 }}>
                                {p.lead && <li style={{ color: '#5B6474' }}>{p.lead}</li>}
                                {p.items.map((i) => <li key={i}>{i}</li>)}
                            </ul>
                            <a href="#contact" className={`btn ${p.btn}`} style={{ marginTop: 'auto', justifyContent: 'center' }}>{p.cta}</a>
                        </div>
                    ))}
                </div>

                {/* Recent Case Studies Showcase */}
                <div style={{ marginTop: 80, paddingTop: 60, borderTop: '1px solid #E2E8F0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 36 }}>
                        <div>
                            <div className="eyebrow" style={{ marginBottom: 12 }}>Proven Delivery</div>
                            <h3 style={{ fontSize: 'clamp(28px, 3vw, 38px)', fontWeight: 700, lineHeight: 1.15 }}>Recent client outcomes</h3>
                        </div>
                        <Link href="/case-studies" style={{ fontWeight: 600, color: 'var(--ac)', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 15 }}>
                            Explore all 50 case studies <span>→</span>
                        </Link>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
                        {latestCases.map((cs) => (
                            <Link
                                key={cs.slug}
                                href={`/case-studies/${cs.slug}`}
                                className="group transition-transform hover:-translate-y-1 hover:shadow-lg"
                                style={{
                                    background: '#FFFFFF',
                                    borderRadius: 18,
                                    border: '1px solid #E2E8F0',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    color: 'inherit',
                                    textDecoration: 'none'
                                }}
                            >
                                <div style={{
                                    height: 200,
                                    width: '100%',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    background: '#0B1020',
                                    borderBottom: '1px solid #E2E8F0',
                                }}>
                                    <Image
                                        src={cs.image}
                                        alt={cs.title}
                                        fill
                                        style={{ objectFit: 'cover', objectPosition: 'top center' }}
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        top: 14,
                                        left: 14,
                                        background: 'rgba(15, 23, 42, 0.82)',
                                        backdropFilter: 'blur(6px)',
                                        color: '#FFFFFF',
                                        fontSize: 11,
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.06em',
                                        padding: '4px 10px',
                                        borderRadius: 999,
                                    }}>
                                        {cs.client}
                                    </div>
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 12,
                                        right: 12,
                                        background: '#FFFFFF',
                                        padding: '6px 14px',
                                        borderRadius: 10,
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-end',
                                    }}>
                                        <span style={{ fontSize: 18, fontWeight: 800, color: cs.tone || '#304DDB', lineHeight: 1.1 }}>
                                            {cs.metric}
                                        </span>
                                        <span style={{ fontSize: 11, color: '#64748B', fontWeight: 600 }}>
                                            {cs.metricLabel}
                                        </span>
                                    </div>
                                </div>
                                <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 10, flexGrow: 1 }}>
                                    <span style={{ fontSize: 12, color: '#64748B', fontWeight: 600 }}>{cs.tag}</span>
                                    <h4 style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.35, color: '#0F172A' }}>
                                        {cs.title}
                                    </h4>
                                    {cs.subtitle && (
                                        <p style={{
                                            fontSize: 14,
                                            color: '#64748B',
                                            lineHeight: 1.5,
                                            display: '-webkit-box',
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden'
                                        }}>
                                            {cs.subtitle}
                                        </p>
                                    )}
                                    <span style={{ marginTop: 'auto', paddingTop: 14, fontSize: 14, fontWeight: 600, color: 'var(--ac)' }}>
                                        Read case study →
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
