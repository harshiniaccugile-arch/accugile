import Image from 'next/image';
import { Arrow } from './Link';

const bars = [
    { label: 'Checkout and payments', v: 92, color: '#1DBF73', delay: '0s' },
    { label: 'AI product search', v: 68, color: 'var(--ac)', delay: '.4s' },
    { label: 'Vendor dashboard', v: 45, color: '#A78BFA', delay: '.8s' },
];

const crew = [
    ['PM', 'Project lead', '#EEF2FF', '#2338B0'],
    ['UX', 'UI/UX designer', '#FDEEE4', '#9A3412'],
    ['BE', 'Laravel engineers', '#EFFAF5', '#0E7A4B'],
    ['FE', 'React engineers', '#F3EEFF', '#5B3CC4'],
    ['QA', 'QA analyst', '#FEF6DA', '#8A5A00'],
    ['DO', 'DevOps', '#E8F4FD', '#0B5C8F'],
];

const words = ['AI products', 'SaaS platforms', 'eCommerce stores', 'brand websites'];

const stats = [
    ['#F3F5FB', '30+', 'in-house specialists '],
    ['#EFFAF5', '200+', 'years of combined team experience'],
    ['#FDEEE4', '500+', 'projects delivered '],
    ['#F3EEFF', '17+', 'countries served '],
];

export default function Hero() {
    return (
        <section style={{ background: '#fff', position: 'relative', overflow: 'hidden' }}>
            <div aria-hidden style={{ position: 'absolute', right: -120, top: -160, width: 760, height: 760, borderRadius: '50%', background: 'radial-gradient(circle, rgba(167,139,250,0.28) 0%, rgba(251,191,160,0.22) 45%, rgba(255,255,255,0) 72%)' }} />
            <div aria-hidden style={{ position: 'absolute', left: -200, bottom: -260, width: 620, height: 620, borderRadius: '50%', background: 'radial-gradient(circle, rgba(125,220,180,0.22) 0%, rgba(255,255,255,0) 70%)' }} />

            <div className="wrap" style={{ position: 'relative', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 56, paddingTop: 88, paddingBottom: 64 }}>
                {/* left */}
                <div style={{ flex: '1 1 520px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 26 }}>
                    <div className="rise" style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: 10, background: '#fff', border: '1px solid #E5E8EF', borderRadius: 999, padding: '6px 14px 6px 6px', fontSize: 13, color: '#334155', boxShadow: '0 6px 20px -12px rgba(15,23,42,0.25)' }}>
                        <span style={{ background: '#EEF2FF', color: '#2338B0', fontWeight: 700, borderRadius: 999, padding: '3px 10px', fontSize: 12 }}>New</span>
                        AI chatbots and voicebots now in our service line
                    </div>
                    <h1 className="rise rise2" style={{ fontSize: 'clamp(42px, 5.2vw, 67px)', lineHeight: 1.04, fontWeight: 700 }}>
                        <span className="serif" style={{ display: 'block', fontSize: '1.08em', color: '#334155' }}>One team that engineers</span>
                        <span style={{ display: 'block', height: '1.1em', overflow: 'hidden', color: 'var(--ac)', position: 'relative' }}>
                            <span className="words" style={{ display: 'block', lineHeight: 1.1 }}>
                                {words.map((w) => <span key={w} style={{ height: '1.1em', lineHeight: 1.1, display: 'block', whiteSpace: 'nowrap' }}>{w}</span>)}
                            </span>
                        </span>
                        that grow your business.
                    </h1>
                    <p className="rise rise3" style={{ fontSize: 19, lineHeight: 1.6, color: '#475569', maxWidth: 560 }}>
                        Accugile is a full-stack development and digital agency. Strategists, designers, engineers, QA and marketers work as one accountable team, from the first wireframe to the millionth visitor.
                    </p>
                    <div className="rise rise4" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                        <a href="#contact" className="btn btn-ac">Book a free consultation <Arrow /></a>
                        <a href="#work" className="btn btn-ghost">See our work</a>
                    </div>
                </div>

                {/* console */}
                <div className="rise rise3" style={{ flex: '1 1 460px', minWidth: 0, position: 'relative' }}>
                    <div style={{ background: '#fff', border: '1px solid #E5E8EF', borderRadius: 18, boxShadow: '0 40px 80px -36px rgba(48,77,219,0.35)', overflow: 'hidden' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 18px', borderBottom: '1px solid #EEF1F5', background: '#FAFBFD' }}>
                            {['#F87171', '#FBBF24', '#34D399'].map((c) => <span key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />)}
                            <span style={{ marginLeft: 12, fontSize: 13, color: '#5B6474', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                                <Image src="/assets/favicon.ico" alt="" width={16} height={16} />Accugile project console
                            </span>
                            <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#0E7A4B', fontWeight: 600 }}>
                                <span className="live" style={{ width: 8, height: 8, borderRadius: '50%', background: '#1DBF73' }} />Live
                            </span>
                        </div>
                        <div style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 20 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
                                <div>
                                    <div style={{ fontSize: 12, color: '#5B6474', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Sprint 07</div>
                                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 22, fontWeight: 700, marginTop: 4 }}>Marketplace v2 launch</div>
                                </div>
                                <div style={{ fontSize: 13, color: '#5B6474' }}>Laravel · React</div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                                {bars.map((b) => (
                                    <div key={b.label}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#334155', marginBottom: 7 }}><span>{b.label}</span><span>{b.v}%</span></div>
                                        <div style={{ height: 6, background: '#EEF1F5', borderRadius: 99 }}>
                                            <div className="bar" style={{ ['--w' as string]: `${b.v}%`, width: `${b.v}%`, background: b.color, animationDelay: b.delay }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div style={{ borderTop: '1px solid #EEF1F5', paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
                                <div style={{ fontSize: 12, color: '#5B6474', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Your delivery team</div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                    {crew.map(([code, label, bg, fg]) => (
                                        <span key={code} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#F7F8FB', border: '1px solid #EEF1F5', borderRadius: 999, padding: '4px 12px 4px 4px', fontSize: 13, color: '#334155' }}>
                                            <span style={{ width: 26, height: 26, borderRadius: '50%', background: bg, color: fg, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700 }}>{code}</span>{label}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="float1 hide-sm" style={{ position: 'absolute', left: -36, bottom: -26, background: '#fff', color: '#0F172A', border: '1px solid #E5E8EF', borderRadius: 14, padding: '12px 16px', boxShadow: '0 20px 40px -18px rgba(15,23,42,0.3)', display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, fontWeight: 600 }}>
                        <span style={{ width: 30, height: 30, borderRadius: 8, background: '#EFFAF5', color: '#0E7A4B', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden><path d="M3 8.5 L6.5 12 L13 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        412 tests passed · deploying
                    </div>
                    <div className="float2 hide-sm" style={{ position: 'absolute', right: -16, top: -20, background: '#FDEEE4', color: '#9A3412', borderRadius: 999, padding: '10px 16px', fontSize: 13, fontWeight: 700, boxShadow: '0 12px 24px -16px rgba(154,52,18,0.4)' }}>
                        In-house · No outsourcing
                    </div>
                </div>
            </div>

            {/* stats */}
            <div className="wrap" style={{ position: 'relative', paddingBottom: 72 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                    {stats.map(([bg, n, l]) => (
                        <div key={l} style={{ background: bg, borderRadius: 16, padding: 24 }}>
                            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 40, fontWeight: 800, color: '#0F172A' }}>{n}</div>
                            <div style={{ color: '#5B6474', fontSize: 14, marginTop: 4 }}>{l}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}