import SecHead from '@/components/About/SecHead';

const items = [
    ['#EEF2FF', 'Early product knowledge', 'Partnership programmes give our teams access to roadmaps and new features ahead of general release.'],
    ['#EFFAF5', 'Escalation routes', 'Direct partner support channels help resolve platform issues faster.'],
    ['#FDEEE4', 'Verified expertise', 'Partner tiers and certifications provide independent validation of capability.'],
];

export default function ClientValue() {
    return (
        <section className="sec">
            <div className="wrap">
                <SecHead n="04" eyebrow="Client value" title="Why our partnerships matter to you" />
                <div className="grid g3">
                    {items.map(([bg, h, p]) => (
                        <div key={h} className="box" style={{ background: bg, borderColor: 'transparent' }}>
                            <h3>{h}</h3><p>{p}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}