import Image from 'next/image';
import L from './Link';
import { ALL_CASE_STUDIES } from '@/lib/all-case-studies';

export default function CaseStudies() {
    // Pick 3 premier client stories representing key domains: Custom Web App, E-commerce, SaaS
    const featured = [
        ALL_CASE_STUDIES.find(c => c.slug === 'accudemy') || ALL_CASE_STUDIES[0],
        ALL_CASE_STUDIES.find(c => c.slug === 'medsoft') || ALL_CASE_STUDIES[1],
        ALL_CASE_STUDIES.find(c => c.slug === 'klibb') || ALL_CASE_STUDIES[2],
    ];

    return (
        <section id="work" style={{ padding: '120px 0', background: '#fff' }}>
            <div className="wrap">
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, marginBottom: 56 }}>
                    <div style={{ maxWidth: 720 }}>
                        <div className="eyebrow" style={{ marginBottom: 16 }}>Case studies</div>
                        <h2 style={{ fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.05, fontWeight: 700 }}>Work that shipped, and what it changed.</h2>
                    </div>
                    <L href="/case-studies" style={{ fontWeight: 600, color: '#0F172A', borderBottom: '2px solid #0F172A', paddingBottom: 4 }}>See all case studies →</L>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
                    {featured.map((c) => (
                        <L
                            key={c.slug}
                            href={`/case-studies/${c.slug}`}
                            className="card group"
                            style={{
                                borderRadius: 22,
                                overflow: 'hidden',
                                color: '#0F172A',
                                display: 'flex',
                                flexDirection: 'column',
                                border: '1px solid #E5E8EF',
                                background: '#FFFFFF',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                textDecoration: 'none',
                            }}
                        >
                            <div style={{ height: 260, background: '#0B1020', position: 'relative', overflow: 'hidden', borderBottom: '1px solid #E5E8EF' }}>
                                <Image
                                    src={c.image}
                                    alt={c.title}
                                    fill
                                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="transition-transform duration-500 group-hover:scale-105"
                                />
                                <div
                                    style={{
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
                                    }}
                                >
                                    {c.client}
                                </div>
                            </div>
                            <div style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 12, flexGrow: 1 }}>
                                <span style={{ fontSize: 13, color: '#5B6474', fontWeight: 600 }}>{c.tag}</span>
                                <h3 style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.3 }}>{c.title}</h3>
                                {c.subtitle && (
                                    <p style={{
                                        fontSize: 14,
                                        color: '#64748B',
                                        lineHeight: 1.5,
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden'
                                    }}>
                                        {c.subtitle}
                                    </p>
                                )}
                                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, paddingTop: 14, marginTop: 'auto', borderTop: '1px solid #EEF1F5' }}>
                                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 32, fontWeight: 800, color: c.tone || 'var(--ac)' }}>
                                        {c.metric}
                                    </span>
                                    <span style={{ fontSize: 13, color: '#5B6474', fontWeight: 500 }}>
                                        {c.metricLabel}
                                    </span>
                                </div>
                            </div>
                        </L>
                    ))}
                </div>
            </div>
        </section>
    );
}
