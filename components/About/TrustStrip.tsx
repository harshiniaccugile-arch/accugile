const items = [
    ['100% in-house delivery', 'No subcontracting. Every specialist is an Accugile employee.'],
    ['Single point of accountability', 'A dedicated project lead owns scope, schedule and quality.'],
    ['NDA and full IP assignment', 'Confidentiality from the first call. You own all deliverables.'],
    ['Global working hours', 'Overlapping hours with US, UK, EU and APAC teams.'],
];

export default function TrustStrip() {
    return (
        <section style={{ padding: '40px 0 0' }}>
            <div className="wrap">
                <div className="trust">
                    {items.map(([t, d]) => (
                        <div key={t}><strong>{t}</strong><span>{d}</span></div>
                    ))}
                </div>
            </div>
        </section>
    );
}