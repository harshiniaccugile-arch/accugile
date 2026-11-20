import Image from 'next/image';
import { LogoMarquee } from './Marquee';

const quotes = [
    {
        bg: '#F3F5FB',
        q: `"Accugile's work was outstanding! Their attention to detail, professional execution, and thorough documentation really stood out. Working with them was a pleasure as they demonstrated deep understanding and exceptional collaboration, going ABOVE AND BEYOND."`,
        name: 'coachjoey',
        country: 'United States',
        avatar: '/testimonials/coachjoey.jpg',
    },
    {
        bg: '#FDEEE4',
        q: '"Absolutely awesome work that exceeded expectations. I provided Accugile with grand expectations and a tight delivery timeline and they were awesome. Great communication, timely delivery, good problem solving skills. Highly recommend Accugile!"',
        name: 'cubetron',      // replace with the real reviewer
        country: 'India',       // replace with the real country
        avatar: '/testimonials/client-2.jpg',
    },
];

function Avatar({ src, name }: { src?: string; name: string }) {
    const initial = name.replace(/[^a-zA-Z0-9]/g, '').charAt(0).toUpperCase() || '?';
    return (
        <span
            style={{
                width: 42,
                height: 42,
                borderRadius: '50%',
                background: '#D6DBE4',
                overflow: 'hidden',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                color: '#334155',
                flexShrink: 0,
            }}
        >
            {src ? (
                <Image
                    src={src}
                    alt={name}
                    width={42}
                    height={42}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            ) : (
                initial
            )}
        </span>
    );
}

export default function Testimonials() {
    return (
        <section style={{ padding: '120px 0', background: '#fff' }}>
            <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 48 }}>
                <div style={{ flex: '1 1 340px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <div className="eyebrow">Client stories</div>
                    <h2 style={{ fontSize: 'clamp(36px, 4vw, 52px)', lineHeight: 1.05, fontWeight: 700 }}>
                        Trusted by businesses <span className="serif" style={{ fontWeight: 400 }}>across 17+ countries.</span>
                    </h2>
                    <p style={{ color: '#5B6474', fontSize: 16, lineHeight: 1.6 }}>
                        From founders launching their first product to enterprises modernising legacy systems, clients stay with us because one team owns the result.
                    </p>
                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                        <a href="#work" className="btn btn-ac" style={{ minHeight: 44, padding: '10px 18px', fontSize: 14 }}>Read case studies</a>
                        <a href="#contact" className="btn btn-ghost" style={{ minHeight: 44, padding: '10px 18px', fontSize: 14 }}>Talk to a client partner</a>
                    </div>
                </div>
                <div style={{ flex: '999 1 560px', minWidth: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
                    {quotes.map((x) => (
                        <figure key={x.q} style={{ margin: 0, background: x.bg, borderRadius: 20, padding: 30, display: 'flex', flexDirection: 'column', gap: 20 }}>
                            <blockquote style={{ margin: 0, fontSize: 18, lineHeight: 1.55 }}>{x.q}</blockquote>
                            <figcaption style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 'auto' }}>
                                <Avatar src={x.avatar} name={x.name} />
                                <span>
                                    <strong style={{ display: 'block' }}>{x.name}</strong>
                                    <span style={{ fontSize: 13, color: '#5B6474' }}>{x.country}</span>
                                </span>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
            <LogoMarquee />
        </section>
    );
}