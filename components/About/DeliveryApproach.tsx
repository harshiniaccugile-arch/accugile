import SecHead from './SecHead';

const phases = [
    ['Discovery', 'Stakeholder workshops to establish objectives, users, requirements and constraints.', 'Discovery report and success measures'],
    ['Planning and architecture', 'Define scope, solution architecture, integrations and delivery plan.', 'Scope document and project plan'],
    ['Design', 'Information architecture, wireframes and high-fidelity designs for approval.', 'Approved designs and prototype'],
    ['Development', 'Two-week sprints with code review, staging access and sprint demonstrations.', 'Working software each sprint'],
    ['Quality assurance and UAT', 'Functional, performance, security and accessibility testing, followed by client acceptance.', 'Test reports and UAT sign-off'],
    ['Launch and hypercare', 'Controlled go-live, monitoring and priority support through the stabilisation period.', 'Launch checklist and handover pack'],
];

export default function DeliveryApproach() {
    return (
        <section className="sec" style={{ background: '#F7F8FB' }}>
            <div className="wrap">
                <SecHead n="06" eyebrow="Delivery approach" title="How we deliver"
                    note="A structured six-phase methodology with a defined output at every stage, so progress is visible and decisions are documented." />
                <div className="grid g3">
                    {phases.map(([h, p, out], i) => (
                        <div key={h} className="box">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 28, color: 'var(--ac)' }}>{String(i + 1).padStart(2, '0')}</span>
                                <span className="num">Phase {i + 1} of 6</span>
                            </div>
                            <h3>{h}</h3>
                            <p>{p}</p>
                            <div style={{ marginTop: 'auto', paddingTop: 12, borderTop: '1px solid #EEF1F5', fontSize: 13, color: '#334155' }}>
                                <strong>Output:</strong> {out}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}