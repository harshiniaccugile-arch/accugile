import { marqueeItems } from '@/lib/data';

const clientLogos = [
    'download (1).jpg',
    'download (2).jpg',
    'download.jpg',
    'images (1).jpg',
    'images (2).jpg',
    'images (3).jpg',
    'images (4).jpg',
    'images (5).jpg',
    'images (6).png',
    'images (7).png',
    'images (8).jpg',
    'images (9).png',
    'images (10).jpg',
    'images (11).jpg',
    'images (12).jpg',
    'images (13).png',
    'images (14).jpg',
    'images (15).png',
    'images (16).jpg',
    'images (18).jpg',
    'images (19).jpg',
    'images (20).png',
    'images (21).jpg',
    'images.jpg',
];

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
    const repeatedLogos = [...clientLogos, ...clientLogos];

    return (
        <div style={{ overflow: 'hidden', marginTop: 80, borderTop: '1px solid #E5E8EF', borderBottom: '1px solid #E5E8EF', padding: '42px 0', background: '#F8FAFC' }}>
            <div className="marquee slow" style={{ alignItems: 'center' }}>
                {repeatedLogos.map((filename, i) => (
                    <div key={i} className="client-logo-item">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={`/logo/${encodeURIComponent(filename)}`}
                            alt={`Client logo ${i + 1}`}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                display: 'block',
                            }}
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
