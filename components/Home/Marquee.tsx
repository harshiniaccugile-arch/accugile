import { marqueeItems } from '@/lib/data';

const clientLogos = [
    'aosmith-com-brandmark.svg',
    'circle-com-brandmark.png',
    'comptia-org-brandmark.webp',
    'debenhams-com-brandmark.png',
    'dnv-com-brandmark.svg',
    'dxc-com-brandmark.png',
    'equinix-com-brandmark.svg',
    // 'fiserv-com-brandmark.svg',
    'giant-bicycles-com-brandmark.svg',
    'grab-com-brandmark.svg',
    'idc-com-brandmark.svg',
    'inmarsat-com-brandmark.svg',
    'ionos-com-brandmark.png',
    'iq-com-brandmark.svg',
    'morningstar-com-brandmark.svg',
    'msi-com-brandmark.png',
    'netcraft-com-brandmark.svg',
    'polar-com-brandmark.svg',
    'qnap-com-brandmark.svg',
    'qualtrics-com-brandmark.svg',
    'rossstores-com-brandmark.svg',
    'unisys-com-brandmark.svg',
    'vinci-com-brandmark.svg',
];

export function TechMarquee() {
    const items = [...marqueeItems, ...marqueeItems];
    return (
        <section aria-label="Platforms we work with" style={{ borderBottom: '1px solid #E5E8EF', padding: '34px 0', overflow: 'hidden', background: '#fff' }}>
            <div className="marquee">
                {items.map((t, i) => (
                    <span key={i} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 30, fontWeight: 600, color: '#0F172A', padding: '0 34px', whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: 50 }}>
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
        <div style={{ overflow: 'hidden', marginTop: 80, borderTop: '1px solid #E5E8EF', borderBottom: '1px solid #E5E8EF', padding: '42px 0' }}>
            <div className="marquee slow" style={{ alignItems: 'center', gap: 30 }}>
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
