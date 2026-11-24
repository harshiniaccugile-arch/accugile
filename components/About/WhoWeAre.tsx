const paras = [
    'Organisations increasingly rely on several vendors to design, build, host and market their digital products. Responsibility becomes fragmented, and outcomes suffer. Accugile was established to provide a single, dependable partner across that entire lifecycle.',
    'Our strategists, designers, engineers, quality analysts and marketers are all employed in-house. Every engagement is led by a named project lead who is accountable for scope, schedule and quality, supported by documented processes and transparent reporting.',
    'We also build and operate our own products, including Adorack, Skiplore and Recomonk. Running live platforms keeps our team grounded in the commercial realities our clients face every day.',
];

const stats = [
    ['#EEF2FF', '30+', 'in-house specialists'],
    ['#EFFAF5', '200+', 'years combined experience'],
    ['#FDEEE4', '500+', 'projects delivered'],
    ['#F3EEFF', '3', 'products operated'],
];

export default function WhoWeAre() {
    return (
        <section className="sec">
            <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 56 }}>
                <div style={{ flex: '1 1 520px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
                    <div className="eyebrow"><span className="num" style={{ color: 'inherit' }}>01</span> &nbsp;Who we are</div>
                    <h2 className="h2">One team, accountable for the result</h2>
                    {paras.map((p) => <p key={p} className="lead" style={{ fontSize: 17 }}>{p}</p>)}
                </div>
                <div style={{ flex: '1 1 360px', minWidth: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, alignContent: 'start' }}>
                    {stats.map(([bg, n, l]) => (
                        <div key={l} style={{ background: bg, borderRadius: 16, padding: 24 }}>
                            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 36, fontWeight: 800 }}>{n}</div>
                            <div style={{ color: '#5B6474', fontSize: 14 }}>{l}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}