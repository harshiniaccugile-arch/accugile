'use client';
import { useState } from 'react';
import L from './Link';
import { serviceTabs } from '@/lib/data';

export default function Services() {
    const [active, setActive] = useState('01');
    const t = serviceTabs.find((x) => x.n === active)!;

    return (
        <section id="services" style={{ background: '#F7F8FB', padding: '120px 0' }}>
            <div className="wrap">
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, marginBottom: 56 }}>
                    <div style={{ maxWidth: 720 }}>
                        <div className="eyebrow" style={{ marginBottom: 16 }}>What we do</div>
                        <h2 style={{ fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.05, fontWeight: 700 }}>Four ways we move your business forward.</h2>
                    </div>
                    <L href="/services" style={{ fontWeight: 600, color: '#0F172A', borderBottom: '2px solid #0F172A', paddingBottom: 4 }}>All services →</L>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
                    <div role="tablist" aria-label="Service categories" style={{ flex: '1 1 340px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                        {serviceTabs.map((s) => (
                            <button key={s.n} role="tab" aria-selected={active === s.n} className={`tab ${active === s.n ? 'on' : ''}`} onClick={() => setActive(s.n)}>
                                <span className="tnum" style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 14, color: '#5B6474' }}>{s.n}</span>
                                <span style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 24, fontWeight: 600 }}>{s.tab}</span>
                                    <span style={{ fontSize: 14, opacity: 0.75 }}>{s.sub}</span>
                                </span>
                            </button>
                        ))}
                    </div>

                    <div style={{ flex: '999 1 560px', minWidth: 0, background: '#fff', borderRadius: 22, border: '1px solid #E5E8EF', padding: 40, display: 'flex', flexDirection: 'column', gap: 28 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                            <span style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 13, color: '#5B6474' }}>{t.n} / 04</span>
                            <span style={{ fontSize: 13, background: '#F3F5FF', color: '#2338B0', padding: '6px 12px', borderRadius: 999, fontWeight: 600 }}>{t.badge}</span>
                        </div>
                        <h3 style={{ fontSize: 34, lineHeight: 1.15, fontWeight: 600, maxWidth: 620 }}>{t.h}</h3>
                        <p style={{ fontSize: 17, lineHeight: 1.65, color: '#5B6474', maxWidth: 620 }}>{t.p}</p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 12 }}>
                            {t.cards.map(([href, title, desc]) => (
                                <L key={title} href={href} className="card" style={{ border: '1px solid #E5E8EF', borderRadius: 14, padding: 20, color: '#0F172A', display: 'flex', flexDirection: 'column', gap: 8, background: '#fff' }}>
                                    <strong style={{ fontSize: 16, display: 'flex', justifyContent: 'space-between', gap: 8 }}>{title}<span style={{ color: 'var(--ac)' }}>↗</span></strong>
                                    <span style={{ fontSize: 14, color: '#5B6474', lineHeight: 1.5 }}>{desc}</span>
                                </L>
                            ))}
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, paddingTop: 8, borderTop: '1px solid #EEF1F5' }}>
                            <span style={{ fontSize: 13, color: '#5B6474', padding: '6px 0', marginRight: 6 }}>Built with</span>
                            {t.stack.map((s) => <span key={s} style={{ fontSize: 13, border: '1px solid #3370ad91', backgroundColor: '#50a5f933', borderRadius: 999, padding: '6px 12px', color: '#3370ad91' }}>{s}</span>)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}