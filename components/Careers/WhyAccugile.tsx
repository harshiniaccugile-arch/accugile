import SecHead from '@/components/About/SecHead';

const perks = [
    { title: 'Structured growth', text: 'Defined career paths, regular reviews and mentoring from senior practitioners.', bg: '#EEF2FF' },
    { title: 'Learning investment', text: 'Time and budget for courses, certifications and conferences.', bg: '#EFFAF5' },
    { title: 'Varied work', text: 'International client projects alongside our own SaaS and marketplace products.', bg: '#FDEEE4' },
    { title: 'Professional standards', text: 'Code review, documented processes and modern tooling.', bg: '#F3EEFF' },
    { title: 'Collaborative culture', text: 'Cross-functional teams where design, engineering and marketing work together.', bg: '#FEF6DA' },
    { title: 'Recognition', text: 'Performance-linked rewards and recognition programmes.', bg: '#E8F4FD' },
];

export default function WhyAccugile() {
    return (
        <section className="sec">
            <div className="wrap">
                <SecHead n="01" eyebrow="Why Accugile" title="Why professionals choose Accugile" />
                <div className="grid g3">
                    {perks.map((p) => (
                        <div key={p.title} className="box" style={{ background: p.bg, borderColor: 'transparent' }}>
                            <h3>{p.title}</h3>
                            <p>{p.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
