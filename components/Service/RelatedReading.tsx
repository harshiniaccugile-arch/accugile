import Link from 'next/link';

const tints = ['#EEF2FF', '#EFFAF5', '#FDEEE4'];

export default function RelatedReading({ items }: { items: { tag: string; title: string }[] }) {
    return (
        <section className="sec" style={{ background: '#FFFFFF' }}>
            <div className="wrap">
                <div className="sec-h">
                    <div style={{ maxWidth: 760 }}>
                        <div className="eyebrow" style={{ marginBottom: 14 }}>
                            <span className="num" style={{ color: 'inherit' }}>14</span> &nbsp;Insights
                        </div>
                        <h2 className="h2">Related reading</h2>
                    </div>
                    <p style={{ maxWidth: 420, color: '#5B6474', fontSize: 16, lineHeight: 1.6 }}>
                        <Link href="/insights">View all insights →</Link>
                    </p>
                </div>
                <div className="grid g3">
                    {items.map((a, i) => (
                        <Link key={a.tag} href="/insights" className="box" style={{ padding: 0, overflow: 'hidden' }}>
                            <div className="ph" style={{ height: 150, border: 0, borderRadius: 0, background: tints[i % tints.length] }}>[Cover image]</div>
                            <div style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 8 }}>
                                <span className="num">{a.tag}</span>
                                <h3>{a.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
