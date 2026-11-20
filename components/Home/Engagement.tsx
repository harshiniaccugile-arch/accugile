const plans = [
    {
        title: 'Fixed-scope project', desc: 'For a clearly defined website, store or MVP.', price: 'From $2500++', lead: null,
        items: ['✓ Fixed price and timeline', '✓ Dedicated project manager', '✓ 30 days of post-launch support'], cta: 'Get an estimate', btn: 'btn-ink', popular: false
    },
    {
        title: 'Dedicated developer', desc: 'A senior engineer, backed by our wider team, working as part of yours.', price: 'From $5000/mo', lead: 'Everything in Fixed-scope, plus',
        items: ['✓ Full-time, in-house engineer', '✓ Daily standups in your time zone', '✓ Scale up or down monthly'], cta: 'Hire a developer', btn: 'btn-ac', popular: true
    },
    {
        title: 'Dedicated team', desc: 'A cross-functional squad for SaaS and long-running products.', price: 'Custom', lead: 'Everything in Dedicated developer, plus',
        items: ['✓ PM, designers, developers and QA', '✓ Product roadmap ownership', '✓ Monthly performance reporting'], cta: 'Build my team', btn: 'btn-ink', popular: false
    },
];

export default function Engagement() {
    return (
        <section style={{ padding: '120px 0', background: '#F7F8FB' }}>
            <div className="wrap">
                <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 56px' }}>
                    <div className="eyebrow" style={{ marginBottom: 16 }}>Engagement models</div>
                    <h2 style={{ fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.05, fontWeight: 700 }}>Hire us the way that suits you.</h2>
                </div>
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
            </div>
        </section>
    );
}