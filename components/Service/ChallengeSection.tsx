import SecHead from '@/components/About/SecHead';

const tints = ['#FDEEE4', '#F3EEFF', '#FEF6DA'];

export default function ChallengeSection({ title, intro, items }: { title: string; intro: string; items: string[] }) {
    return (
        <section className="sec" style={{ paddingTop: 0 }}>
            <div className="wrap">
                <SecHead n="02" eyebrow="The challenge" title={title} />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'stretch' }}>
                    <p className="lead" style={{ flex: '1 1 380px', fontSize: 17 }}>{intro}</p>
                    <div className="grid" style={{ flex: '2 1 560px', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                        {items.map((t, i) => (
                            <div key={t} className="box" style={{ background: tints[i % tints.length], borderColor: 'transparent' }}>
                                <span className="num">Challenge {String(i + 1).padStart(2, '0')}</span>
                                <h3>{t}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
