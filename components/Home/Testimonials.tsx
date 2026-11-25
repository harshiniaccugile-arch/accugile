import { LogoMarquee } from './Marquee';

const quotes = [
    {
        bg: '#F3F5FB',
        q: '“We wanted a fast, modern analytics front end and chose Next.js on Accugile\'s advice. They built a server-rendered app with a reusable component library, and the performance scores are excellent. What I liked most was their discipline: pull requests, automated tests, and demos every two weeks. We always knew where we stood.”',
        name: 'Tomás Alvarado',
        country: 'Founder, Andes Data Labs SpA, Santiago, Chile',
    },
    {
        bg: '#FDEEE4',
        q: '“We asked for a social content scheduling platform with multi-account publishing, a post queue, and team approvals. Accugile delivered a polished web app with a calendar view, analytics dashboards, and a clean onboarding flow. Beta users kept telling us how intuitive it felt. They treated our product as their own.”',
        name: 'Aisha Rahman', // replace with the real reviewer
        country: 'Product Lead, Tidewater Social Pte Ltd, Singapore', // replace with the real country
    },
    {
        bg: '#e7f1ff',
        q: '“We wanted a peer-to-peer fashion resale marketplace with the feel of the best social shopping apps. Accugile built seller profiles, easy listing with photos, offers, in-app chat, and split payments with automatic payouts. They also thought about trust and safety, with reporting tools and review systems. We launched with a few thousand sellers and the platform held up beautifully.”',
        name: 'Chloé Dubois', // replace with the real reviewer
        country: 'Co-founder, Seconde Vie Mode SAS, Lyon, France', // replace with the real country
    },
    {
        bg: '#F3EEFF',
        q: '“We needed a bilingual Arabic and English store with right-to-left layouts, local payment gateways, and cash on delivery. Accugile handled all of it and made the mobile experience excellent. Our conversion rate rose by 28% after launch, and the store coped well during our biggest sale of the year.”',
        name: 'Fatima Al-Zahrani', // replace with the real reviewer
        country: 'Co-founder, Najd Home Living Co., Riyadh, Saudi Arabia', // replace with the real country
    },
    {
        bg: '#FCEFF5',
        q: '“We run technical courses for working professionals and needed selling, learning, and certificates on one WordPress site. Accugile set up a learning management system integrated with WooCommerce, with course bundles, drip content, quizzes, and automatic certificates. Enrollment is now fully automated, and our admin workload has dropped dramatically.”',
        name: 'Priyanka Deshmukh', // replace with the real reviewer
        country: 'Director, Sahyadri Skill Academy Pvt Ltd, Pune, India', // replace with the real country
    },
];

function Avatar({ name }: { name: string }) {
    const initial = name.trim().charAt(0).toUpperCase() || '?';
    return (
        <span
            aria-hidden="true"
            style={{
                width: 42,
                height: 42,
                borderRadius: '50%',
                background: '#D6DBE4',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                color: '#334155',
                flexShrink: 0,
            }}
        >
            {initial}
        </span>
    );
}

export default function Testimonials() {
    return (
        <section style={{ padding: '120px 0', background: '#fff' }}>
            <div
                className="wrap"
                style={{
                    display: 'grid',
                    // 3 columns on wide screens, collapses to 2 / 1 on smaller screens
                    gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, calc((100% - 32px) / 3), 100%), 1fr))',
                    gap: 16,
                }}
            >
                {/* Row 1, column 1: intro text */}
                <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: 20, paddingRight: 16 }}>
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

                {/* Row 1 (columns 2-3) + Row 2 (columns 1-3): testimonial cards */}
                {quotes.map((x) => (
                    <figure key={x.name} style={{ margin: 0, background: x.bg, borderRadius: 20, padding: 30, display: 'flex', flexDirection: 'column', gap: 20, minWidth: 0 }}>
                        <blockquote style={{ margin: 0, fontSize: 16, lineHeight: 1.55, fontStyle: 'italic' }}>{x.q}</blockquote>
                        <figcaption style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 'auto' }}>
                            <Avatar name={x.name} />
                            <span>
                                <strong style={{ display: 'block' }}>{x.name}</strong>
                                <span style={{ fontSize: 13, color: '#5B6474' }}>{x.country}</span>
                            </span>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section >
    );
}