import SecHead from '@/components/About/SecHead';

export default function Awards() {
    return (
        <section className="sec" style={{ background: '#F7F8FB' }}>
            <div className="wrap">
                <SecHead n="02" eyebrow="Recognition" title="Awards and accolades" />
                <table className="tbl">
                    <thead>
                        <tr><th>Year</th><th>Award</th><th>Awarding body</th><th>Category</th></tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 4 }).map((_, i) => (
                            <tr key={i}>
                                <td>[Year]</td><td>[Award name]</td><td>[Organisation]</td><td>[Category]</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}