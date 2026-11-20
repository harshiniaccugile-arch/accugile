import SecHeadAside from '@/components/CaseStudies/SecHeadAside';

export default function TechStack({ aside, items }: { aside: string; items: string[] }) {
    return (
        <section className="sec" style={{ background: '#F7F8FB' }}>
            <div className="wrap">
                <SecHeadAside n="07" eyebrow="Technology" title="Platforms and tools" aside={aside} />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                    {items.map((t) => (
                        <span key={t} className="chip">{t}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}
