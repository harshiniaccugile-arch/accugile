import SecHeadAside from './SecHeadAside';

const phases = [
    { title: 'Discovery', text: 'Stakeholder workshops to establish objectives, users, requirements and constraints.', output: 'Discovery report and success measures' },
    { title: 'Planning and architecture', text: 'Define scope, solution architecture, integrations and delivery plan.', output: 'Scope document and project plan' },
    { title: 'Design', text: 'Information architecture, wireframes and high-fidelity designs for approval.', output: 'Approved designs and prototype' },
    { title: 'Development', text: 'Two-week sprints with code review, staging access and sprint demonstrations.', output: 'Working software each sprint' },
    { title: 'Quality assurance and UAT', text: 'Functional, performance, security and accessibility testing, followed by client acceptance.', output: 'Test reports and UAT sign-off' },
    { title: 'Launch and hypercare', text: 'Controlled go-live, monitoring and priority support through the stabilisation period.', output: 'Launch checklist and handover pack' },
];

export default function DeliveryApproach() {
    return (
        <section className="sec" style={{ background: '#F7F8FB' }}>
            <div className="wrap">
                <SecHeadAside
                    n="04"
                    eyebrow="Delivery approach"
                    title="How we deliver"
                    aside="A structured six-phase methodology with a defined output at every stage, so progress is visible and decisions are documented."
                />
                <div className="grid g3">
                    {phases.map((p, i) => (
                        <div key={p.title} className="box">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 28, color: 'var(--ac)' }}>
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <span className="num">Phase {i + 1} of {phases.length}</span>
                            </div>
                            <h3>{p.title}</h3>
                            <p>{p.text}</p>
                            <div style={{ marginTop: 'auto', paddingTop: 12, borderTop: '1px solid #EEF1F5', fontSize: 13, color: '#334155' }}>
                                <strong>Output:</strong> {p.output}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
