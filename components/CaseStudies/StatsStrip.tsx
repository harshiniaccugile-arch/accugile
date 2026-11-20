const stats = [
    { value: '30+', label: 'in-house specialists', bg: '#EEF2FF' },
    { value: '200', label: 'years combined experience', bg: '#EFFAF5' },
    { value: '500+', label: 'projects delivered', bg: '#FDEEE4' },
    { value: '17+', label: 'countries served', bg: '#F3EEFF' },
];

export default function StatsStrip() {
    return (
        <section style={{ padding: '0 0 96px', background: '#FFFFFF' }}>
            <div className="wrap">
                <div className="grid g4">
                    {stats.map((s) => (
                        <div key={s.label} style={{ padding: 28, background: s.bg, borderRadius: 16 }}>
                            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 38, fontWeight: 800 }}>{s.value}</div>
                            <div style={{ color: '#5B6474', fontSize: 14, marginTop: 4 }}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
