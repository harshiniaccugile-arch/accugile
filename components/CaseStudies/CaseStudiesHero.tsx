import { Fragment } from 'react';
import Link from 'next/link';

const overview = [
    ['Industries', 'Retail, travel, education, B2B, SaaS'],
    ['Engagement types', 'Builds, migrations, marketplaces, AI'],
    ['Detailed reports', 'Available on request under NDA'],
];

export default function CaseStudiesHero() {
    return (
        <section style={{ background: 'linear-gradient(180deg,#F5F7FD 0%,#FFFFFF 100%)', borderBottom: '1px solid #E5E8EF' }}>
            <div className="wrap" style={{ paddingTop: 28, paddingBottom: 72 }}>
                <nav className="crumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link> <span aria-hidden="true">/</span> <span>Case Studies</span>
                </nav>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'flex-start', marginTop: 40 }}>
                    <div style={{ flex: '1 1 560px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 22 }}>
                        <div className="eyebrow">Case Studies</div>
                        <h1 style={{ fontSize: 'clamp(38px, 4.6vw, 62px)', lineHeight: 1.06, fontWeight: 800 }}>
                            Selected client engagements and measurable outcomes
                        </h1>
                        <p className="lead" style={{ maxWidth: 680 }}>
                            Each case study summarises the client challenge, our approach and the results achieved. Detailed references are available on request.
                        </p>
                        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 6 }}>
                            <Link href="/contact" className="btn btn-ac">Request references</Link>
                            <Link href="/services" className="btn btn-ghost">View our services</Link>
                        </div>
                    </div>
                    <div style={{ flex: '1 1 360px', minWidth: 0 }}>
                        <div style={{ background: '#FFFFFF', border: '1px solid #E5E8EF', borderRadius: 16, padding: 28, boxShadow: '0 30px 60px -40px rgba(15,23,42,0.35)' }}>
                            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5B6474', marginBottom: 18 }}>
                                Portfolio overview
                            </div>
                            <dl className="kv" style={{ margin: 0 }}>
                                {overview.map(([label, value]) => (
                                    <Fragment key={label}>
                                        <dt>{label}</dt>
                                        <dd>{value}</dd>
                                    </Fragment>
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
