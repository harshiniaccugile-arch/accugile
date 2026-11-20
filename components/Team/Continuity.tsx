import SecHead from '@/components/About/SecHead';

const items = [
    ['#EEF2FF', 'Named team members', 'The people introduced at proposal stage are the people who deliver your project.'],
    ['#EFFAF5', 'Knowledge retention', 'Documentation, recorded decisions and shared repositories protect continuity.'],
    ['#FDEEE4', 'Planned cover', 'Secondary team members are familiar with each project to cover leave or absence.'],
];

export default function Continuity() {
    return (
        <section className="sec">
            <div className="wrap">
                <SecHead n="05" eyebrow="Continuity" title="A stable team for the life of your project" />
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