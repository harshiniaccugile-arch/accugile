import SecHead from '@/components/About/SecHead';

const departments = [
    ['#EEF2FF', '[X] people', 'Strategy and project management', 'Business analysis, solution architecture, project and programme management.'],
    ['#EFFAF5', '[X] people', 'UI/UX and brand design', 'Research, interaction design, visual design, brand identity and design systems.'],
    ['#FDEEE4', '[XX] people', 'Engineering', 'Laravel, Ruby on Rails, Node.js, React, Angular, WordPress and eCommerce platform specialists.'],
    ['#F3EEFF', '[X] people', 'Quality assurance', 'Manual testing, test automation, performance and accessibility testing.'],
    ['#FEF6DA', '[X] people', 'AI and data', 'Machine learning, LLM applications, data engineering and automation.'],
    ['#E8F4FD', '[X] people', 'Digital marketing and SEO', 'SEO, content, paid media, social media and analytics.'],
];

export default function Departments() {
    return (
        <section className="sec">
            <div className="wrap">
                <SecHead n="01" eyebrow="Departments" title="Every discipline, under one roof" />
                <div className="grid g3">
                    {departments.map(([bg, count, h, p]) => (
                        <div key={h} className="box" style={{ background: bg, borderColor: 'transparent' }}>
                            <span style={{ alignSelf: 'flex-start', fontSize: 13, fontWeight: 600, background: 'rgba(255,255,255,.8)', borderRadius: 999, padding: '4px 10px' }}>
                                {count}
                            </span>
                            <h3>{h}</h3>
                            <p>{p}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}