import SecHead from '@/components/About/SecHead';

const testimonials = [
    { quote: '[Client testimonial 1.]', bg: '#EEF2FF' },
    { quote: '[Client testimonial 2.]', bg: '#EFFAF5' },
    { quote: '[Client testimonial 3.]', bg: '#FDEEE4' },
];

export default function Testimonials() {
    return (
        <section className="sec">
            <div className="wrap">
                <SecHead n="03" eyebrow="Testimonials" title="What clients say" />
                <div className="grid g3">
                    {testimonials.map((t) => (
                        <figure
                            key={t.quote}
                            style={{ margin: 0, background: t.bg, borderRadius: 20, padding: 32, display: 'flex', flexDirection: 'column', gap: 20 }}
                        >
                            <blockquote style={{ margin: 0, fontSize: 17, lineHeight: 1.6 }}>“{t.quote}”</blockquote>
                            <figcaption style={{ marginTop: 'auto', display: 'flex', gap: 12, alignItems: 'center' }}>
                                <span style={{ width: 42, height: 42, borderRadius: '50%', background: '#D6DBE4' }} />
                                <span>
                                    <strong style={{ display: 'block' }}>[Client name]</strong>
                                    <span style={{ fontSize: 13, color: '#5B6474' }}>[Title, Company · Country]</span>
                                </span>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
