import SecHead from '@/components/About/SecHead';

const roles = [
    ['Project lead', 'Single point of contact accountable for delivery, reporting and stakeholder communication.'],
    ['Solution architect', 'Owns technical decisions, integrations and non-functional requirements.'],
    ['Designers', 'Translate requirements into validated journeys and interfaces.'],
    ['Engineers', 'Build, review and test the solution in two-week sprints.'],
    ['QA analyst', 'Verifies functionality, performance and accessibility before each release.'],
    ['Specialists', 'AI, DevOps, SEO or content specialists added as the engagement requires.'],
];

export default function TeamStructure() {
    return (
        <section className="sec" style={{ background: '#F7F8FB' }}>
            <div className="wrap">
                <SecHead n="02" eyebrow="Team structure" title="How a typical delivery team is formed"
                    note="Team composition is confirmed in each proposal and scaled to scope." />
                <div className="grid g3">
                    {roles.map(([h, p]) => (
                        <div key={h} className="box">
                            <h3>{h}</h3><p>{p}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}