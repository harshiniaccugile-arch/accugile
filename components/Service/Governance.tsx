import SecHead from '@/components/About/SecHead';
import type { Pair } from '@/lib/service-types';

export default function Governance({ deliverables, ipNote, kpis }: { deliverables: string[]; ipNote: string; kpis: Pair[] }) {
    return (
        <section className="sec">
            <div className="wrap">
                <SecHead n="06" eyebrow="Governance" title="What you receive and how success is measured" />
                <div className="grid g2" style={{ gap: 24 }}>
                    <div style={{ background: '#F7F8FB', borderRadius: 16, padding: 32 }}>
                        <h3 style={{ fontSize: 20, marginBottom: 20 }}>Documented deliverables</h3>
                        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                            {deliverables.map((d) => (
                                <li key={d} className="tick">{d}</li>
                            ))}
                        </ul>
                        <p style={{ color: '#5B6474', fontSize: 14, lineHeight: 1.6, marginTop: 22 }}>{ipNote}</p>
                    </div>
                    <div style={{ border: '1px solid #E5E8EF', borderRadius: 16, padding: 32 }}>
                        <h3 style={{ fontSize: 20, marginBottom: 4 }}>Performance indicators we report on</h3>
                        <p style={{ color: '#5B6474', fontSize: 14 }}>Agreed at discovery, baselined before delivery and reported monthly.</p>
                        {kpis.map((k) => (
                            <div key={k.title} style={{ padding: '16px 0', borderBottom: '1px solid #E5E8EF' }}>
                                <strong style={{ fontSize: 15 }}>{k.title}</strong>
                                <div style={{ color: '#5B6474', fontSize: 14, marginTop: 4 }}>{k.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
