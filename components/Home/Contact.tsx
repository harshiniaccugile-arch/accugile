const points = [
    'Free consultation and NDA on request',
    'A project lead, designer and senior engineer on the first call',
    'Working hours that overlap with US, UK and EU teams',
];

export default function Contact() {
    return (
        <section id="contact" style={{ background: 'linear-gradient(150deg, #FDEEE4 0%, #F3EEFF 55%, #EEF2FF 100%)', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
            <div className="wrap" style={{ position: 'relative', display: 'flex', flexWrap: 'wrap', gap: 64, alignItems: 'flex-start' }}>
                <div style={{ flex: '1 1 420px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 24 }}>
                    <div className="eyebrow">Let&apos;s talk</div>
                    <h2 style={{ fontSize: 'clamp(40px, 4.6vw, 64px)', lineHeight: 1.04, fontWeight: 700 }}>
                        Have a project in mind? <span className="serif" style={{ fontWeight: 400 }}>Meet the team that will build it.</span>
                    </h2>
                    <p style={{ fontSize: 17, lineHeight: 1.65, color: '#475569', maxWidth: 520 }}>
                        Share a few details and a project lead will reply within one business day with questions, a rough estimate and the team we would put on it.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 12, fontSize: 15, color: '#0F172A' }}>
                        {points.map((t) => (
                            <span key={t} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                                <span style={{ width: 24, height: 24, borderRadius: '50%', background: '#fff', color: 'var(--ac)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700 }}>✓</span>{t}
                            </span>
                        ))}
                    </div>
                </div>

                <form style={{ flex: '1 1 480px', minWidth: 0, background: '#fff', color: '#0F172A', borderRadius: 24, padding: 36, boxShadow: '0 40px 80px -40px rgba(48,77,219,0.4)', display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 18 }}>
                    <label className="field">Full name<input type="text" placeholder="Jane Smith" /></label>
                    <label className="field">Work email<input type="email" placeholder="jane@company.com" /></label>
                    <label className="field">Service
                        <select>
                            <option>Website Development</option><option>eCommerce Solutions</option><option>SaaS Development</option>
                            <option>AI Chatbot / Voicebot</option><option>Digital Marketing &amp; Branding</option><option>Something else</option>
                        </select>
                    </label>
                    <label className="field">Budget
                        <select><option>[Under $5k]</option><option>[$5k to $20k]</option><option>[$20k to $50k]</option><option>[$50k+]</option></select>
                    </label>
                    <label className="field" style={{ gridColumn: '1 / -1' }}>Tell us about your project
                        <textarea rows={4} placeholder="What are you building, and by when?" />
                    </label>
                    <button type="button" className="btn btn-ac" style={{ gridColumn: '1 / -1', justifyContent: 'center', fontSize: 16, minHeight: 54 }}>Send my enquiry</button>
                    <p style={{ gridColumn: '1 / -1', fontSize: 13, color: '#5B6474', textAlign: 'center' }}>We reply within one business day. Your details stay private.</p>
                </form>
            </div>
        </section>
    );
}