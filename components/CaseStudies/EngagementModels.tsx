import Link from 'next/link';
import SecHeadAside from './SecHeadAside';

// Columns: Fixed-scope project, Dedicated developer, Dedicated team
const rows: [string, string, string, string][] = [
    ['Best suited to', 'Clearly defined websites, stores, integrations or MVPs', 'Extending your in-house capacity with a specialist', 'Long-running products and multi-discipline programmes'],
    ['Commercial basis', 'Fixed price against agreed scope', 'Monthly fee per developer', 'Monthly fee per team'],
    ['Team', 'Project lead with assigned specialists', 'One senior engineer, supported by our wider practice', 'Project lead, designers, engineers and QA'],
    ['Governance', 'Milestones, sprint demos, change control', 'Daily stand-ups within your processes', 'Roadmap ownership, monthly business reviews'],
    ['Flexibility', 'Changes managed through change requests', 'Scale up or down with notice', 'Composition adjusted as priorities change'],
];

export default function EngagementModels() {
    return (
        <section className="sec" style={{ background: '#FFFFFF' }}>
            <div className="wrap">
                <SecHeadAside
                    n="05"
                    eyebrow="Engagement models"
                    title="Choose how you work with us"
                    aside="Every model includes a named project lead, NDA and full IP assignment."
                />
                <div style={{ overflowX: 'auto', background: '#FFFFFF', border: '1px solid #E5E8EF', borderRadius: 16 }}>
                    <table className="tbl" style={{ minWidth: 760 }}>
                        <thead>
                            <tr>
                                <th style={{ width: '22%' }}></th>
                                <th>Fixed-scope project</th>
                                <th style={{ color: 'var(--ac)' }}>Dedicated developer</th>
                                <th>Dedicated team</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map(([label, a, b, c]) => (
                                <tr key={label}>
                                    <td style={{ fontWeight: 600, color: '#5B6474' }}>{label}</td>
                                    <td>{a}</td>
                                    <td>{b}</td>
                                    <td>{c}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div style={{ marginTop: 20 }}>
                    <Link href="/contact" className="btn btn-ac">Discuss the right model</Link>
                </div>
            </div>
        </section>
    );
}
