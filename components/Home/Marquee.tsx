import { marqueeItems } from '@/lib/data';

export function TechMarquee() {
    const items = [...marqueeItems, ...marqueeItems];
    return (
        <section aria-label="Platforms we work with" style={{ borderBottom: '1px solid #E5E8EF', padding: '34px 0', overflow: 'hidden', background: '#fff' }}>
            <div className="marquee">
                {items.map((t, i) => (
                    <span key={i} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 30, fontWeight: 600, color: '#0F172A', padding: '0 34px', whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: 34 }}>
                        {t}<span aria-hidden style={{ color: 'var(--ac)', fontSize: 20 }}>✦</span>
                    </span>
                ))}
            </div>
        </section>
    );
}

export function LogoMarquee() {
    return (
        <div style={{ overflow: 'hidden', marginTop: 80, borderTop: '1px solid #E5E8EF', borderBottom: '1px solid #E5E8EF', padding: '26px 0' }}>
            <div className="marquee slow">
                {Array.from({ length: 16 }).map((_, i) => (
                    <span key={i} style={{ margin: '0 18px', width: 160, height: 48, border: '1px dashed #CBD2DD', borderRadius: 10, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: '#5B6474', flexShrink: 0 }}>
                        [Client logo]
                    </span>
                ))}
            </div>
        </div>
    );
}