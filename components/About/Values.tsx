import SecHead from './SecHead';

const values = [
    ['#EEF2FF', 'Accountability', 'We take ownership of outcomes, not only tasks, and report progress transparently.'],
    ['#EFFAF5', 'Engineering excellence', 'We follow documented standards, peer review and automated testing on every project.'],
    ['#FDEEE4', 'Integrity', 'We give candid advice, honour commitments and protect client confidentiality.'],
    ['#F3EEFF', 'Long-term partnership', 'We design for maintainability and remain available long after launch.'],
];

export default function Values() {
    return (
        <section className="sec" style={{ background: '#F7F8FB' }}>
            <div className="wrap">
                <SecHead n="02" eyebrow="Our values" title="The principles that guide our work" />
                <div className="grid g4">
                    {values.map(([bg, h, p]) => (
                        <div key={h} className="box" style={{ background: bg, borderColor: 'transparent' }}>
                            <h3>{h}</h3><p>{p}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}