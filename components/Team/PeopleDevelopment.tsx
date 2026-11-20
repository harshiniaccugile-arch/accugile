import SecHead from '@/components/About/SecHead';

const items = [
    ['Structured onboarding', 'Every new team member completes a documented onboarding programme covering standards, tools and security.'],
    ['Continuous learning', 'Allocated time and budget for courses, certifications and internal knowledge sessions.'],
    ['Peer review culture', 'Code, design and content reviews that raise quality and share knowledge across the team.'],
    ['Career frameworks', 'Defined progression paths for engineering, design, QA and marketing roles.'],
];

export default function PeopleDevelopment() {
    return (
        <section className="sec" style={{ background: '#F7F8FB' }}>
            <div className="wrap">
                <SecHead n="04" eyebrow="Capability" title="How we develop our people" />
                <div className="grid g4">
                    {items.map(([h, p]) => (
                        <div key={h} className="box">
                            <h3>{h}</h3><p>{p}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}