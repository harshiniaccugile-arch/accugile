import SecHeadAside from '@/components/CaseStudies/SecHeadAside';
import type { Pair } from '@/lib/service-types';

export default function DeliveryPhases({ phases }: { phases: (Pair & { output: string })[] }) {
    return (
        <section className="sec" style={{ background: '#F7F8FB' }}>
            <div className="wrap">
                <SecHeadAside
                    n="05"
                    eyebrow="Delivery approach"
                    title="How we deliver"
                    aside="A structured six-phase methodology with a defined output at every stage, so progress is visible and decisions are documented."
                />
                <div className="grid g3">
                    {phases.map((p, i) => (
                        <div key={p.title} className="box">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 28, color: 'var(--ac)' }}>
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <span className="num">Phase {i + 1} of {phases.length}</span>
                            </div>
                            <h3>{p.title}</h3>
                            <p>{p.text}</p>
                            <div style={{ marginTop: 'auto', paddingTop: 12, borderTop: '1px solid #EEF1F5', fontSize: 13, color: '#334155' }}>
                                <strong>Output:</strong> {p.output}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
