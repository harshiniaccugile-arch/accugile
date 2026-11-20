import L from '@/components/Home/Link';

const overview = [
    ['Team size', '30+ specialists'],
    ['Departments', '6 practice areas'],
    ['Location', 'Coimbatore, India'],
    ['Working hours', 'Overlap with US, UK, EU and APAC'],
];

export default function TeamHero() {
    return (
        <section style={{ background: 'linear-gradient(180deg,#F5F7FD 0%,#FFFFFF 100%)', borderBottom: '1px solid #E5E8EF' }}>
            <div className="wrap" style={{ paddingTop: 28, paddingBottom: 72 }}>
                <nav className="crumb" aria-label="Breadcrumb">
                    <L href="/">Home</L> <span aria-hidden="true">/</span> <L href="/about">Company</L> <span aria-hidden="true">/</span> <span>Our Team</span>
                </nav>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'flex-start', marginTop: 40 }}>
                    <div style={{ flex: '1 1 560px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 22 }}>
                        <div className="eyebrow">Our Team</div>
                        <h1 style={{ fontSize: 'clamp(38px, 4.6vw, 62px)', lineHeight: 1.06, fontWeight: 800 }}>
                            The people behind every Accugile engagement
                        </h1>
                        <p className="lead" style={{ maxWidth: 680 }}>
                            Every project is staffed from our in-house departments and led by a named project lead. Clients work with a stable, cross-functional team rather than a rotating pool of contractors.
                        </p>
                        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 6 }}>
                            <L href="/contact" className="btn btn-ac">Request a proposal</L>
                            <L href="/case-studies" className="btn btn-ghost">View case studies</L>
                        </div>
                    </div>

                    <div style={{ flex: '1 1 360px', minWidth: 0 }}>
                        <div style={{ background: '#fff', border: '1px solid #E5E8EF', borderRadius: 16, padding: 28, boxShadow: '0 30px 60px -40px rgba(15,23,42,0.35)' }}>
                            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5B6474', marginBottom: 18 }}>
                                Team overview
                            </div>
                            <dl className="kv" style={{ margin: 0 }}>
                                {overview.map(([k, v]) => (
                                    <div key={k} style={{ display: 'contents' }}><dt>{k}</dt><dd>{v}</dd></div>
                                ))}
                            </dl>
                            <L href="/contact" className="btn btn-ink" style={{ marginTop: 24, width: '100%', justifyContent: 'center', minHeight: 46, fontSize: 14 }}>
                                Speak with a solution consultant
                            </L>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}