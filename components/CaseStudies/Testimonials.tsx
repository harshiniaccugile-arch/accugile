import SecHead from '@/components/About/SecHead';

const testimonials = [
    {
        quote: 'Accugile behaved like part of our company: they rode along on our routes, listened to our drivers, and shipped improvements every week. KohlTrack has changed how we work, how we bill, and how our customers see us.',
        author: 'Managing Director',
        role: 'Kohl Recycling GmbH · Germany',
        bg: '#F0FDF4',
        avatarBg: '#16A34A',
        letter: 'K'
    },
    {
        quote: 'Three Accugile developers joined our in-house team and became productive within two weeks. They take part in our daily standups, follow our coding standards, and review code like colleagues. Our delivery speed has increased by about 50% since they joined.',
        author: 'Anders Holm',
        role: 'CTO, Aarhus Cloudworks A/S · Denmark',
        bg: '#ECFEFF',
        avatarBg: '#0891B2',
        letter: 'A'
    },
    {
        quote: 'In our field every day counts. Accugile understood the clinical pressure from the first workshop and built something our surgeons actually enjoy using. The platform removed the friction around our engineering and gave us a process we can scale and prove to any auditor.',
        author: 'Co-founder & CEO',
        role: 'SynMedix · Israel',
        bg: '#F5F3FF',
        avatarBg: '#7C3AED',
        letter: 'S'
    },
];

export default function Testimonials() {
    return (
        <section className="sec">
            <div className="wrap">
                <SecHead n="03" eyebrow="Testimonials" title="What clients say" />
                <div className="grid g3">
                    {testimonials.map((t) => (
                        <figure
                            key={t.author + t.role}
                            style={{
                                margin: 0,
                                background: t.bg,
                                borderRadius: 20,
                                padding: 32,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 20,
                                border: '1px solid rgba(0,0,0,0.05)',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
                            }}
                        >
                            <blockquote style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: '#1E293B', fontStyle: 'italic' }}>
                                “{t.quote}”
                            </blockquote>
                            <figcaption style={{ marginTop: 'auto', display: 'flex', gap: 12, alignItems: 'center' }}>
                                <span
                                    style={{
                                        width: 42,
                                        height: 42,
                                        borderRadius: '50%',
                                        background: t.avatarBg,
                                        color: '#FFFFFF',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: 700,
                                        fontSize: 18
                                    }}
                                >
                                    {t.letter}
                                </span>
                                <span>
                                    <strong style={{ display: 'block', color: '#0F172A', fontSize: 15 }}>{t.author}</strong>
                                    <span style={{ fontSize: 13, color: '#5B6474' }}>{t.role}</span>
                                </span>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
