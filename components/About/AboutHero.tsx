import L from '@/components/Home/Link';

const glance = [
    ['Founded', '2012'],
    ['Headquarters', 'Coimbatore, Tamil Nadu, India'],
    ['Team', '30+ in-house specialists'],
    ['Experience', '200+ years combined'],
    ['Clients served', '17+ countries'],
];

export default function AboutHero() {
    return (
        <section style={{ background: 'linear-gradient(180deg,#F5F7FD 0%,#FFFFFF 100%)', borderBottom: '1px solid #E5E8EF' }}>
            <div className="wrap" style={{ paddingTop: 28, paddingBottom: 72 }}>
                <nav className="crumb" aria-label="Breadcrumb">
                    <L href="/">Home</L> <span aria-hidden="true">/</span> <span>About Us</span>
                </nav>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'flex-start', marginTop: 40 }}>
                    <div style={{ flex: '1 1 560px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 22 }}>
                        <div className="eyebrow">About Accugile</div>
                        <h1 style={{ fontSize: 'clamp(38px, 4.6vw, 62px)', lineHeight: 1.06, fontWeight: 800 }}>
                            Engineering dependable digital outcomes for growing and established businesses
                        </h1>
                        <p className="lead" style={{ maxWidth: 680 }}>
                            Accugile is a full-stack development and digital agency. We design, build and operate software, commerce platforms, AI solutions and digital marketing programmes through one accountable in-house team.
                        </p>
                        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 6 }}>
                            <L href="/contact" className="btn btn-ac">Request a proposal</L>
                            <L href="/case-studies" className="btn btn-ghost">View case studies</L>
                        </div>
                    </div>

                    <div style={{ flex: '1 1 360px', minWidth: 0 }}>
                        <div style={{ background: '#fff', border: '1px solid #E5E8EF', borderRadius: 16, padding: 28, boxShadow: '0 30px 60px -40px rgba(15,23,42,0.35)' }}>
                            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5B6474', marginBottom: 18 }}>
                                Company at a glance
                            </div>
                            <dl className="kv" style={{ margin: 0 }}>
                                {glance.map(([k, v]) => (
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