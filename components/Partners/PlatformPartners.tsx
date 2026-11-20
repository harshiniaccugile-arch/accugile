import SecHead from '@/components/About/SecHead';

export default function PlatformPartners() {
    return (
        <section className="sec">
            <div className="wrap">
                <SecHead n="01" eyebrow="Technology partners" title="Platform partnerships"
                    note="Add only partner programmes in which Accugile is formally enrolled." />
                <div className="grid g4">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="box" style={{ alignItems: 'center', textAlign: 'center' }}>
                            <div className="ph" style={{ height: 96, width: '100%' }}>[Partner logo]</div>
                            <h3>[Partner programme]</h3>
                            <p>[Partnership tier and year]</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}