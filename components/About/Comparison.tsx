import SecHead from './SecHead';

const rows = [
    ['Single point of accountability', 'Limited', 'Yes, often at senior cost', 'Yes, a named project lead'],
    ['Team continuity', 'Depends on availability', 'Staff often rotate', 'Stable in-house team'],
    ['Breadth of disciplines', 'One individual skill set', 'Broad', 'Strategy, design, engineering, QA, AI and marketing'],
    ['Documented process and QA', 'Varies', 'Extensive', 'Structured, proportionate to project size'],
    ['Cost efficiency', 'Low hourly rate, higher management effort', 'Premium pricing', 'Competitive pricing with senior oversight'],
    ['Working hours', 'Varies', 'Typically local only', 'Overlap with US, UK, EU and APAC'],
];

export default function Comparison({ n = '08', bg = '#F7F8FB' }: { n?: string; bg?: string }) {
    return (
        <section className="sec" style={{ background: bg }}>
            <div className="wrap">
                <SecHead n={n} eyebrow="Why Accugile" title="How we compare"
                    note="The structure of a consultancy with the responsiveness of a specialist team." />
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
                            {rows.map(([c, a, b, d]) => (
                                <tr key={c}>
                                    <td style={{ fontWeight: 600 }}>{c}</td>
                                    <td style={{ color: '#5B6474' }}>{a}</td>
                                    <td style={{ color: '#5B6474' }}>{b}</td>
                                    <td style={{ background: '#F5F7FF', fontWeight: 600 }}>{d}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}