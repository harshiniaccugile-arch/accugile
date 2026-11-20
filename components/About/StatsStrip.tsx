const stats = [
    ['#EEF2FF', '30+', 'in-house specialists'],
    ['#EFFAF5', '200', 'years combined experience'],
    ['#FDEEE4', '500+', 'projects delivered'],
    ['#F3EEFF', '17+', 'countries served'],
];

export default function StatsStrip({ padding = '96px 0' }: { padding?: string }) {
    return (
        <section style={{ padding, background: '#fff' }}>
            <div className="wrap">
                <div className="grid g4">
                    {stats.map(([bg, n, l]) => (
                        <div key={l} style={{ padding: 28, background: bg, borderRadius: 16 }}>
                            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 38, fontWeight: 800 }}>{n}</div>
                            <div style={{ color: '#5B6474', fontSize: 14, marginTop: 4 }}>{l}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}