export default function ServiceOverview({ paras, outcomes }: { paras: string[]; outcomes: string[] }) {
    return (
        <section className="sec">
            <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 56 }}>
                <div style={{ flex: '1 1 520px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
                    <div className="eyebrow">
                        <span className="num" style={{ color: 'inherit' }}>01</span> &nbsp;Overview
                    </div>
                    <h2 className="h2">Overview</h2>
                    {paras.map((p) => (
                        <p key={p} className="lead" style={{ fontSize: 17 }}>{p}</p>
                    ))}
                </div>
                <div style={{ flex: '1 1 360px', minWidth: 0, background: '#F7F8FB', borderRadius: 16, padding: 32 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5B6474', marginBottom: 18 }}>
                        Business outcomes
                    </div>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                        {outcomes.map((o) => (
                            <li key={o} className="tick">{o}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
