import SecHeadAside from '@/components/CaseStudies/SecHeadAside';

const phases = [
    {
        num: '01',
        title: 'Discovery',
        text: 'Stakeholder workshops to establish objectives, users, requirements and constraints.',
        output: 'Discovery report and success measures',
    },
    {
        num: '02',
        title: 'Planning and architecture',
        text: 'Define scope, solution architecture, integrations and delivery plan.',
        output: 'Scope document and project plan',
    },
    {
        num: '03',
        title: 'Design',
        text: 'Information architecture, wireframes and high-fidelity designs for approval.',
        output: 'Approved designs and prototype',
    },
    {
        num: '04',
        title: 'Development',
        text: 'Two-week sprints with code review, staging access and sprint demonstrations.',
        output: 'Working software each sprint',
    },
    {
        num: '05',
        title: 'Quality assurance and UAT',
        text: 'Functional, performance, security and accessibility testing, followed by client acceptance.',
        output: 'Test reports and UAT sign-off',
    },
    {
        num: '06',
        title: 'Launch and hypercare',
        text: 'Controlled go-live, monitoring and priority support through the stabilisation period.',
        output: 'Launch checklist and handover pack',
    },
];

export default function ServicesDelivery() {
    return (
        <section className="sec" style={{ background: '#FFFFFF' }}>
            <div className="wrap">
                <SecHeadAside
                    n="03"
                    eyebrow="Delivery approach"
                    title="How we deliver"
                    aside="A structured six-phase methodology with a defined output at every stage, so progress is visible and decisions are documented."
                />
                <div className="grid g3">
                    {phases.map((p, i) => (
                        <div key={p.num} className="box">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 28, color: 'var(--ac)' }}>
                                    {p.num}
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

