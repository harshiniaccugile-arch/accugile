import L from './Link';

const posts = [
    { bg: '#EEF1FF', tag: 'eCommerce', min: 6, h: '[Shopify Plus vs WooCommerce: which scales better for D2C brands?]' },
    { bg: '#F3EEFF', tag: 'AI', min: 5, h: '[Where an AI chatbot pays for itself in the first 90 days]' },
    { bg: '#EAF4EE', tag: 'SaaS', min: 8, h: '[From MVP to multi-tenant: lessons from running our own SaaS]' },
];

export default function Insights() {
    return (
        <section style={{ padding: '0 0 120px', background: '#fff' }}>
            <div className="wrap">
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, marginBottom: 40 }}>
                    <h2 style={{ fontSize: 'clamp(32px, 3.4vw, 44px)', lineHeight: 1.1, fontWeight: 600 }}>Insights</h2>
                    <L href="/insights" style={{ fontWeight: 600, color: '#0F172A', borderBottom: '2px solid #0F172A', paddingBottom: 4 }}>All articles →</L>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
                    {posts.map((p) => (
                        <L key={p.h} href="/insights" className="card" style={{ color: '#0F172A', display: 'flex', flexDirection: 'column', gap: 16, borderRadius: 18 }}>
                            <div style={{ height: 200, borderRadius: 18, background: p.bg, display: 'flex', alignItems: 'flex-end', padding: 20 }}>
                                <span style={{ background: '#fff', fontSize: 12, fontWeight: 600, padding: '5px 10px', borderRadius: 999 }}>{p.tag}</span>
                            </div>
                            <span style={{ fontSize: 13, color: '#5B6474' }}>[Date] · {p.min} min read</span>
                            <h3 style={{ fontSize: 21, lineHeight: 1.3, fontWeight: 600 }}>{p.h}</h3>
                        </L>
                    ))}
                </div>
            </div>
        </section>
    );
}