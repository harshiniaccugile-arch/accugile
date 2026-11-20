import SecHeadAside from '@/components/CaseStudies/SecHeadAside';

// Columns: Independent freelancers, Large consultancies, Accugile
const rows: [string, string, string, string][] = [
    ['Single point of accountability', 'Limited', 'Yes, often at senior cost', 'Yes, a named project lead'],
    ['Team continuity', 'Depends on availability', 'Staff often rotate', 'Stable in-house team'],
    ['Breadth of disciplines', 'One individual skill set', 'Broad', 'Strategy, design, engineering, QA, AI and marketing'],
    ['Documented process and QA', 'Varies', 'Extensive', 'Structured, proportionate to project size'],
    ['Cost efficiency', 'Low hourly rate, higher management effort', 'Premium pricing', 'Competitive pricing with senior oversight'],
    ['Working hours', 'Varies', 'Typically local only', 'Overlap with US, UK, EU and APAC'],
];

export default function CompareTable() {
    return (
        <section className="sec" style={{ background: '#F7F8FB' }}>
            <div className="wrap">
                <SecHeadAside
                    n="09"
                    eyebrow="Why Accugile"
                    title="How we compare"
                    aside="The structure of a consultancy with the responsiveness of a specialist team."
                />
                <div style={{ overflowX: 'auto', border: '1px solid #E5E8EF', borderRadius: 16 }}>
                    <table className="tbl" style={{ minWidth: 760 }}>
                        <thead>
                            <tr>
                                <th style={{ width: '28%' }}>Consideration</th>
                                <th>Independent freelancers</th>
                                <th>Large consultancies</th>
                                <th style={{ color: 'var(--ac)' }}>Accugile</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map(([label, a, b, c]) => (
                                <tr key={label}>
                                    <td style={{ fontWeight: 600 }}>{label}</td>
                                    <td style={{ color: '#5B6474' }}>{a}</td>
                                    <td style={{ color: '#5B6474' }}>{b}</td>
                                    <td style={{ background: '#F5F7FF', fontWeight: 600 }}>{c}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
