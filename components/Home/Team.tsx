import { team } from '@/lib/data';

export default function Team() {
    return (
        <section id="team" style={{ padding: '120px 0', background: '#fff' }}>
            <div className="wrap">
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, marginBottom: 56 }}>
                    <div style={{ maxWidth: 760 }}>
                        <div className="eyebrow" style={{ marginBottom: 16 }}>Our team</div>
                        <h2 style={{ fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.05, fontWeight: 700 }}>
                            Every discipline you need, <span className="serif" style={{ fontWeight: 400 }}>under one roof.</span>
                        </h2>
                    </div>
                    <p style={{ maxWidth: 400, color: '#5B6474', fontSize: 16, lineHeight: 1.6 }}>
                        Each project gets a dedicated squad drawn from our in-house departments, led by one project manager who answers for the outcome.
                    </p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
                    {team.map((t) => (
                        <div key={t.h} className="card" style={{ background: t.bg, borderRadius: 20, padding: 28, display: 'flex', flexDirection: 'column', gap: 14 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ width: 44, height: 44, borderRadius: 12, background: '#fff', color: t.fg, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 15 }}>{t.code}</span>

                            </div>
                            <h3 style={{ fontSize: 22, fontWeight: 700 }}>{t.h}</h3>
                            <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.6 }}>{t.p}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}