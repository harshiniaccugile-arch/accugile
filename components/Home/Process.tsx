import { process } from '@/lib/data';

export default function Process() {
    return (
        <section style={{ padding: '120px 0', background: '#EFFAF5' }}>
            <div className="wrap">
                <div style={{ maxWidth: 760, marginBottom: 56 }}>
                    <div className="eyebrow" style={{ marginBottom: 16, color: '#0E7A4B' }}>How we work</div>
                    <h2 style={{ fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.05, fontWeight: 700 }}>
                        A clear process. <span className="serif" style={{ fontWeight: 400 }}>No surprises.</span>
                    </h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
                    {process.map(([n, h, p, who]) => (
                        <div key={n} style={{ background: '#fff', borderRadius: 20, padding: 28, display: 'flex', flexDirection: 'column', gap: 14, border: '1px solid #D7F0E3' }}>
                            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 44, fontWeight: 800, color: '#1DBF73', lineHeight: 1 }}>{n}</span>
                            <h3 style={{ fontSize: 22, fontWeight: 700 }}>{h}</h3>
                            <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.65 }}>{p}</p>
                            <span style={{ marginTop: 'auto', fontSize: 13, color: '#0E7A4B', fontWeight: 600 }}>{who}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}