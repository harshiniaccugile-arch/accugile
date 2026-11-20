import SecHead from '@/components/About/SecHead';

const faqs = [
    { q: 'Do you hire freshers?', a: '[State your policy on graduate and internship hiring.]' },
    { q: 'Is remote work available?', a: '[State your work location policy.]' },
    { q: 'How long does the hiring process take?', a: 'Most candidates complete the process within [two to three weeks], depending on the role.' },
    { q: 'Will I work on client projects or products?', a: 'Team members may work on client engagements, our own products or both, depending on the role and current priorities.' },
];

export default function CareersFaq() {
    return (
        <section className="sec" style={{ background: '#F7F8FB' }}>
            <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 48 }}>
                <div style={{ flex: '1 1 300px' }}>
                    <SecHead n="06" eyebrow="FAQ" title="Careers questions" />
                </div>
                <div style={{ flex: '2 1 560px', minWidth: 0, borderTop: '1px solid #E5E8EF' }}>
                    {faqs.map((f) => (
                        <details key={f.q} className="faq">
                            <summary>{f.q}</summary>
                            <p>{f.a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
