import SecHead from './SecHead';

const rows = [
    ['United Kingdom and Ireland', '[e.g. 09:00 to 13:30 GMT]'],
    ['Continental Europe', '[e.g. 09:00 to 14:30 CET]'],
    ['United States (East)', '[Extended-hours window]'],
    ['Australia and Singapore', '[e.g. 12:00 to 18:00 local]'],
    ['Middle East', '[e.g. 08:00 to 16:30 GST]'],
];

export default function GlobalDelivery() {
    return (
        <section className="sec">
            <div className="wrap">
                <SecHead n="07" eyebrow="Global delivery" title="Working across time zones"
                    note="Confirm the overlap windows below against your actual team schedules before publishing." />
                <div style={{ overflowX: 'auto', border: '1px solid #E5E8EF', borderRadius: 16 }}>
                    <table className="tbl" style={{ minWidth: 680 }}>
                        <thead>
                            <tr><th>Client region</th><th>Overlapping hours</th><th>Collaboration</th></tr>
                        </thead>
                        <tbody>
                            {rows.map(([region, hours]) => (
                                <tr key={region}>
                                    <td style={{ fontWeight: 600 }}>{region}</td>
                                    <td>{hours}</td>
                                    <td>Video calls, shared channel, weekly reports</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}