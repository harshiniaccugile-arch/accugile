import Link from 'next/link';

const details = [
    ['Location', 'Coimbatore, Tamil Nadu, India'],
    ['Work model', '[On-site / hybrid]'],
    ['Departments hiring', 'Engineering, Design, QA, Marketing'],
    ['Apply', '[careers@accugile.com]'],
];

export default function CareersHero() {
    return (
        <section style={{ background: 'linear-gradient(180deg,#F5F7FD 0%,#FFFFFF 100%)', borderBottom: '1px solid #E5E8EF' }}>
            <div className="wrap" style={{ paddingTop: 28, paddingBottom: 72 }}>
                <nav className="crumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link> <span aria-hidden="true">/</span> <Link href="/about">Company</Link> <span aria-hidden="true">/</span> <span>Careers</span>
                </nav>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'flex-start', marginTop: 40 }}>
                    <div style={{ flex: '1 1 560px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 22 }}>
                        <div className="eyebrow">Careers</div>
                        <h1 style={{ fontSize: 'clamp(38px, 4.6vw, 62px)', lineHeight: 1.06, fontWeight: 800 }}>
                            Build a career on meaningful, well-engineered work
                        </h1>
                        <p className="lead" style={{ maxWidth: 680 }}>
                            Join a growing in-house team that delivers software, commerce, AI and marketing programmes for clients worldwide, and helps operate our own products.
                        </p>
                        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 6 }}>
                            <a href="#roles" className="btn btn-ac">View open positions</a>
                            <Link href="/team" className="btn btn-ghost">Meet the team</Link>
                        </div>
                    </div>
                    <div style={{ flex: '1 1 360px', minWidth: 0 }}>
                        <div style={{ background: '#FFFFFF', border: '1px solid #E5E8EF', borderRadius: 16, padding: 28, boxShadow: '0 30px 60px -40px rgba(15,23,42,0.35)' }}>
                            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5B6474', marginBottom: 18 }}>
                                Careers at Accugile
                            </div>
                            <dl className="kv" style={{ margin: 0 }}>
                                {details.map(([label, value]) => (
                                    <div key={label} style={{ display: 'contents' }}>
                                        <dt>{label}</dt>
                                        <dd>{value}</dd>
                                    </div>
                                ))}
                            </dl>
                            <Link href="/contact" className="btn btn-ink" style={{ marginTop: 24, width: '100%', justifyContent: 'center', minHeight: 46, fontSize: 14 }}>
                                Speak with a solution consultant
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
