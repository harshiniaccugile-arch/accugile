import L from './Link';
import { techGroups } from '@/lib/data';

export default function TechStack() {
    return (
        <section id="stack" style={{ padding: '30px 0', background: '#F7F8FB' }}>
            <div className="wrap">
                <div style={{ maxWidth: 760, marginBottom: 56 }}>
                    <div className="eyebrow" style={{ marginBottom: 16 }}>Technology</div>
                    <h2 style={{ fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.05, fontWeight: 700 }}>The right stack for the job, sorted.</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
                    {techGroups.map((g) => (
                        <div key={g.title} style={{ background: '#fff', border: '1px solid #E5E8EF', borderRadius: 22, padding: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                                <h3 style={{ fontSize: 24, fontWeight: 600 }}>{g.title}</h3>
                                <span style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 13, color: '#5B6474' }}>{String(g.items.length).padStart(2, '0')}</span>
                            </div>
                            <p style={{ color: '#5B6474', fontSize: 15, lineHeight: 1.6 }}>{g.desc}</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                {g.items.map(([href, label]) => (
                                    <L key={href} href={href} style={{ fontSize: 14, fontWeight: 500, color: '#243397ff', border: '1px solid #243397ff', background: '#DCEDFE', borderRadius: 30, padding: '0px 14px', minHeight: 40, display: 'inline-flex', alignItems: 'center' }}>{label}</L>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}