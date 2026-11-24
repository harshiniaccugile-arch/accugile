import L from '@/components/Home/Link';

export default function PartnerCTA() {
    return (
        <section style={{ padding: '0 0 96px' }}>
            <div className="wrap">
                <div style={{ background: 'linear-gradient(135deg, #EEF2FF 0%, #F3EEFF 55%, #FDEEE4 100%)', borderRadius: 24, padding: 56, display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ maxWidth: 680, display: 'flex', flexDirection: 'column', gap: 14 }}>
                        <h2 className="h2">Partner with Accugile</h2>
                        <p className="lead" style={{ fontSize: 17 }}>Speak with our leadership team about your objectives and how we can support them.</p>
                    </div>
                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                        <L href="/contact" className="btn btn-ac">Request a proposal</L>

                    </div>
                </div>
            </div>
        </section>
    );
}