import SecHead from '@/components/About/SecHead';

const deliverables = [
    'Requirements and scope specification',
    'Sitemap, architecture and user journeys',
    'Editable design files and assets',
    'Source code in your own repository',
    'Test and acceptance reports',
    'Training, documentation and handover pack',
];

const kpis = [
    { title: 'Conversion rate', text: 'Visitors who become leads or customers.' },
    { title: 'Page performance', text: 'Core Web Vitals and load times.' },
    { title: 'Time to market', text: 'Elapsed time from approval to launch.' },
    { title: 'Defect rate', text: 'Issues found after release.' },
    { title: 'Availability', text: 'Uptime of production systems.' },
    { title: 'Commercial return', text: 'Revenue or savings attributed to the work.' },
];

export default function ServicesGovernance() {
    return (
        <section className="sec">
            <div className="wrap">
                <SecHead n="04" eyebrow="Governance" title="What you receive and how success is measured" />
                <div className="grid g2" style={{ gap: 24 }}>
                    <div style={{ background: '#F7F8FB', borderRadius: 16, padding: 32 }}>
                        <h3 style={{ fontSize: 20, marginBottom: 20 }}>Documented deliverables</h3>
                        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                            {deliverables.map((d) => (
                                <li key={d} className="tick">{d}</li>
                            ))}
                        </ul>
                        <p style={{ color: '#5B6474', fontSize: 14, lineHeight: 1.6, marginTop: 22 }}>
                            All deliverables, source code and intellectual property are assigned to your organisation.
                        </p>
                    </div>

                    <div style={{ border: '1px solid #E5E8EF', borderRadius: 16, padding: 32 }}>
                        <h3 style={{ fontSize: 20, marginBottom: 4 }}>Performance indicators we report on</h3>
                        <p style={{ color: '#5B6474', fontSize: 14, marginBottom: 8 }}>
                            Agreed at discovery, baselined before delivery and reported monthly.
                        </p>
                        {kpis.map((k, idx) => (
                            <div
                                key={k.title}
                                style={{
                                    padding: '16px 0',
                                    borderBottom: idx === kpis.length - 1 ? 'none' : '1px solid #E5E8EF',
                                }}
                            >
                                <strong style={{ fontSize: 15 }}>{k.title}</strong>
                                <div style={{ color: '#5B6474', fontSize: 14, marginTop: 4 }}>{k.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

