import Link from 'next/link';

export default function CareersCTA() {
    return (
        <section style={{ padding: '0 0 96px' }}>
            <div className="wrap">
                <div
                    style={{
                        background: 'linear-gradient(135deg, #EEF2FF 0%, #F3EEFF 55%, #FDEEE4 100%)',
                        borderRadius: 24,
                        padding: 56,
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 32,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <div style={{ maxWidth: 680, display: 'flex', flexDirection: 'column', gap: 14 }}>
                        <h2 className="h2">Do not see a suitable role?</h2>
                        <p className="lead" style={{ fontSize: 17 }}>
                            We welcome speculative applications from talented professionals. Send your CV to [careers@accugile.com].
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                        <Link href="/contact" className="btn btn-ac">Request a proposal</Link>
                        <Link href="/about" className="btn btn-ghost">About Accugile</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
