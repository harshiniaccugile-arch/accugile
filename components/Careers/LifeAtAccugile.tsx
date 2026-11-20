import SecHead from '@/components/About/SecHead';

// Swap each placeholder for an <Image /> once team photos are ready.
const photos = [1, 2, 3, 4];

export default function LifeAtAccugile() {
    return (
        <section className="sec">
            <div className="wrap">
                <SecHead n="05" eyebrow="Culture" title="Life at Accugile" />
                <div className="grid g4">
                    {photos.map((n) => (
                        <div key={n} className="ph" style={{ height: 220 }}>
                            [Team photograph {n}]
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
