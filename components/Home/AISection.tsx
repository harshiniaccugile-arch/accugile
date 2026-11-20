import L from './Link';
import { aiLinks } from '@/lib/data';

const flowBox = { background: '#F7F8FB', border: '1px solid #E5E8EF', borderRadius: 12, padding: '12px 14px', fontSize: 13, fontWeight: 600, flexShrink: 0 } as const;
const line = { flex: 1, height: 2, background: '#E5E8EF', position: 'relative', margin: '0 6px' } as const;

export default function AISection() {
    return (
        <section id="ai" style={{ background: 'linear-gradient(160deg, #F3EEFF 0%, #EEF2FF 45%, #EFFAF5 100%)', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
            <div className="wrap">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 64, alignItems: 'center' }}>
                    <div style={{ flex: '1 1 460px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 24 }}>
                        <div className="eyebrow">Accugile AI</div>
                        <h2 style={{ fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.05, fontWeight: 700 }}>
                            AI that answers, qualifies and acts, <span className="serif" style={{ fontWeight: 400 }}>around the clock.</span>
                        </h2>
                        <p style={{ fontSize: 17, lineHeight: 1.65, color: '#475569' }}>
                            From a WhatsApp chatbot that books appointments to an enterprise copilot trained on your own documents, our AI team builds assistants that plug into the systems you already use.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 10 }}>
                            {aiLinks.map((l) => (
                                <L key={l.href} href={l.href} style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#0F172A', background: 'rgba(255,255,255,0.8)', border: '1px solid #E2E6F3', borderRadius: 12, padding: '14px 16px', fontWeight: 500, fontSize: 15, minHeight: 48 }}>
                                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--ac)', flexShrink: 0 }} />{l.title}
                                </L>
                            ))}
                        </div>
                    </div>

                    <div style={{ flex: '1 1 460px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
                        <div className="float3" style={{ background: '#fff', color: '#0F172A', borderRadius: 20, padding: 22, display: 'flex', flexDirection: 'column', gap: 12, boxShadow: '0 40px 80px -40px rgba(48,77,219,0.45)', border: '1px solid #E5E8EF' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingBottom: 12, borderBottom: '1px solid #EEF1F5' }}>
                                <span style={{ width: 34, height: 34, borderRadius: '50%', background: '#EEF2FF', color: '#2338B0', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14 }}>AI</span>
                                <div>
                                    <div style={{ fontWeight: 600, fontSize: 15 }}>Store assistant</div>
                                    <div style={{ fontSize: 12, color: '#0E7A4B' }}>● Online · replies instantly</div>
                                </div>
                            </div>
                            <div style={{ alignSelf: 'flex-end', background: 'var(--ac)', color: '#fff', padding: '10px 14px', borderRadius: '14px 14px 4px 14px', fontSize: 14, maxWidth: '80%' }}>
                                Do you have this sofa in grey, and can it ship to Pune by Friday?
                            </div>
                            <div style={{ alignSelf: 'flex-start', background: '#F1F4F9', padding: '10px 14px', borderRadius: '14px 14px 14px 4px', fontSize: 14, maxWidth: '85%', lineHeight: 1.5 }}>
                                Yes, the Oslo 3-seater is in stock in Slate Grey. Order before 6 pm today and it arrives Thursday. Shall I add it to your cart?
                            </div>
                            <div style={{ alignSelf: 'flex-start', background: '#F1F4F9', padding: '12px 14px', borderRadius: 14, display: 'flex', gap: 5 }}>
                                <span className="dot" /><span className="dot d2" /><span className="dot d3" />
                            </div>
                        </div>

                        <div style={{ background: '#fff', border: '1px solid #E5E8EF', borderRadius: 20, padding: 24 }}>
                            <div style={{ fontSize: 12, color: '#5B6474', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 22 }}>Automated workflow</div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={flowBox}>Lead captured</div>
                                <div style={line}><span className="traveler" /><span className="traveler t2" /></div>
                                <div style={{ ...flowBox, background: 'var(--ac)', color: '#fff', border: 'none', fontWeight: 700 }}>AI qualifies</div>
                                <div style={line}><span className="traveler" /><span className="traveler t2" /></div>
                                <div style={flowBox}>CRM + WhatsApp</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}