import Image from 'next/image';
import L from './Link';

const cases = [
    { bg: '#EEF1FF', img: '/case_studies/kb.png', meta: 'K-Beauty · Luxury · eCommerce · Shopify', h: '[Shopify to WooCommerce migration for a D2C brand]', l: '[conversion rate after launch]' },
    { bg: '#EAF4EE', img: '/case_studies/Seiquerce.png', meta: '[Client] · Marketplace · Laravel + React', h: '[Multivendor marketplace built from scratch]', l: '[vendors onboarded in 90 days]' },
    { bg: '#EAF4EE', img: '/case_studies/Vinchase.png', meta: '[Client] · Marketplace · Laravel + React', h: '[Multivendor marketplace built from scratch]', l: '[vendors onboarded in 90 days]' },
];

export default function CaseStudies() {
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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
                    {cases.map((c) => (
                        <L key={c.h} href="/case-studies" className="card" style={{ borderRadius: 22, overflow: 'hidden', color: '#0F172A', display: 'flex', flexDirection: 'column', border: '1px solid #E5E8EF' }}>
                            <div style={{ height: 260, background: c.bg, position: 'relative', overflow: 'hidden', borderBottom: '1px solid #E5E8EF' }}>
                                <Image
                                    src={c.img}
                                    alt={c.h}
                                    fill
                                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
                                <span style={{ fontSize: 13, color: '#5B6474' }}>{c.meta}</span>
                                <h3 style={{ fontSize: 24, fontWeight: 600, lineHeight: 1.2 }}>{c.h}</h3>
                                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, paddingTop: 12, borderTop: '1px solid #EEF1F5' }}>
                                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 34, fontWeight: 600, color: 'var(--ac)' }}>[+XX%]</span>
                                    <span style={{ fontSize: 14, color: '#5B6474' }}>{c.l}</span>
                                </div>
                            </div>
                        </L>
                    ))}
                </div>
            </div>
        </section>
    );
}