import SecHead from '@/components/About/SecHead';

const benefits = [
    ['Compensation', 'Competitive salary benchmarked to role and experience'],
    ['Health cover', '[Medical insurance details]'],
    ['Leave', '[Annual, sick and festival leave policy]'],
    ['Learning budget', '[Annual learning allowance]'],
    ['Equipment', 'Modern hardware and licensed tools'],
    ['Recognition', 'Performance-linked rewards and annual recognition'],
];

export default function Benefits() {
    return (
        <section className="sec" style={{ background: '#F7F8FB' }}>
            <div className="wrap">
                <SecHead n="04" eyebrow="Benefits" title="Rewards and benefits" />
                <div style={{ background: '#FFFFFF', border: '1px solid #E5E8EF', borderRadius: 16, overflow: 'hidden' }}>
                    <table className="tbl">
                        <tbody>
                            {benefits.map(([label, value]) => (
                                <tr key={label}>
                                    <td style={{ fontWeight: 600, width: '30%' }}>{label}</td>
                                    <td>{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
