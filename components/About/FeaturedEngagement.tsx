import L from '@/components/Home/Link';
import SecHead from './SecHead';

export default function FeaturedEngagement() {
    return (
        <section className="sec" style={{ background: '#F7F8FB' }}>
            <div className="wrap">
                <SecHead n="10" eyebrow="Client results" title="Featured engagement" />
                <div className="grid g2" style={{ gap: 20, alignItems: 'stretch' }}>
                    <div style={{ border: '1px solid #E5E8EF', borderRadius: 20, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        <div className="ph" style={{ height: 220, border: 0, borderRadius: 0, background: '#EEF2FF' }}>[Project screenshot]</div>
                        <div style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 14 }}>
                            <span className="num">[Client] · [Industry] · Featured client</span>
                            <h3 style={{ fontSize: 22 }}>[Case study headline describing the outcome]</h3>
                            <dl className="kv" style={{ gridTemplateColumns: '100px 1fr' }}>
                                <dt>Challenge</dt><dd>[Business problem in one sentence.]</dd>
                                <dt>Solution</dt><dd>[What Accugile delivered.]</dd>
                                <dt>Result</dt><dd><strong style={{ color: 'var(--ac)' }}>[+XX%]</strong> [primary metric]</dd>
                            </dl>
                            <L href="/case-studies" style={{ fontWeight: 600, fontSize: 14 }}>View all case studies →</L>
                        </div>
                    </div>

                    <figure style={{ margin: 0, background: 'linear-gradient(150deg, #F3EEFF, #EEF2FF)', borderRadius: 20, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 28 }}>
                        <svg width="40" height="32" viewBox="0 0 40 32" aria-hidden="true">
                            <path d="M0 32 V18 C0 8 6 2 16 0 L17 5 C11 7 9 11 9 15 H16 V32 Z M23 32 V18 C23 8 29 2 39 0 L40 5 C34 7 32 11 32 15 H39 V32 Z" fill="#304DDB" opacity=".25" />
                        </svg>
                        <blockquote style={{ margin: 0, fontSize: 21, lineHeight: 1.55, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}>
                            [Client testimonial. Ideally one or two sentences describing the result and the experience of working with the Accugile team.]
                        </blockquote>
                        <figcaption style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                            <span style={{ width: 48, height: 48, borderRadius: '50%', background: '#D6DBE4' }} />
                            <span>
                                <strong style={{ display: 'block' }}>[Client name]</strong>
                                <span style={{ fontSize: 14, color: '#5B6474' }}>[Title, Company · Country]</span>
                            </span>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
}