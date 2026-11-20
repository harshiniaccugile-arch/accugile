import Link from 'next/link';
import SecHead from '@/components/About/SecHead';

export default function ServiceFaq({ faqs }: { faqs: { q: string; a: string }[] }) {
    return (
        <section className="sec" style={{ background: '#FFFFFF' }}>
            <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 48 }}>
                <div style={{ flex: '1 1 300px' }}>
                    <SecHead n="12" eyebrow="FAQ" title="Frequently asked questions" />
                    <p style={{ color: '#5B6474', lineHeight: 1.6 }}>
                        Further questions? <Link href="/contact">Contact our team</Link> and a consultant will respond within one business day.
                    </p>
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
