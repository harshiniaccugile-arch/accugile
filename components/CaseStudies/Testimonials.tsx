import SecHead from '@/components/About/SecHead';

const testimonials = [
    {
        quote: 'Three Accugile developers joined our in-house team and became productive within two weeks. They take part in our daily standups, follow our coding standards, and review code like colleagues. Our delivery speed has increased by about 50% since they joined. I think of them as part of our team, not as a vendor.',
        name: 'Anders Holm',
        role: 'CTO, Aarhus Cloudworks A/S',
        location: 'Aarhus, Denmark',
        bg: '#F0FDF4',
        avatarBg: '#16A34A',
    },
    {
        quote: 'Accugile took over the care of our ten WordPress and WooCommerce sites. They standardized hosting, set up automated backups and malware scanning, and fixed performance issues that had lingered for years. Support tickets are answered fast and resolved properly, and our team can focus on content rather than firefighting.',
        name: 'Kavita Rao',
        role: 'Digital Head, Malnad Coffee Collective Pvt Ltd',
        location: 'Bengaluru, India',
        bg: '#ECFEFF',
        avatarBg: '#0891B2',
    },
    {
        quote: 'Our sales team lived in HubSpot while finance used a separate ERP, and the two never agreed. Accugile built a reliable two-way sync for companies, deals, and invoices, with clear error handling and alerts. Quotes now flow straight to billing, and forecasts are accurate for the first time. They documented everything thoroughly.',
        name: 'Emma Lindgren',
        role: 'Head of Sales Operations, Nordic Fleet Solutions AB',
        location: 'Gothenburg, Sweden',
        bg: '#F5F3FF',
        avatarBg: '#7C3AED',
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
                            key={t.name}
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
                                    aria-hidden="true"
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
                                        fontSize: 18,
                                        flexShrink: 0
                                    }}
                                >
                                    {t.name.trim().charAt(0).toUpperCase()}
                                </span>
                                <span>
                                    <strong style={{ display: 'block', color: '#0F172A', fontSize: 15 }}>{t.name}</strong>
                                    <span style={{ display: 'block', fontSize: 13, color: '#5B6474', lineHeight: 1.4 }}>{t.role}</span>
                                    <span style={{ display: 'block', fontSize: 13, color: '#5B6474', lineHeight: 1.4 }}>{t.location}</span>
                                </span>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}