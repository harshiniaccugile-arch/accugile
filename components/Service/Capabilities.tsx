import SecHeadAside from '@/components/CaseStudies/SecHeadAside';
import type { Pair } from '@/lib/service-types';

export default function Capabilities({ aside, items }: { aside: string; items: Pair[] }) {
    return (
        <section className="sec" style={{ background: '#F7F8FB' }}>
            <div className="wrap">
                <SecHeadAside n="03" eyebrow="Capabilities" title="What we deliver" aside={aside} />
                <div className="grid g3">
                    {items.map((c, i) => (
                        <div key={c.title} className="box">
                            <span className="num">{String(i + 1).padStart(2, '0')}</span>
                            <h3>{c.title}</h3>
                            <p>{c.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
