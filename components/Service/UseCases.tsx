import SecHead from '@/components/About/SecHead';
import type { Pair } from '@/lib/service-types';

const tints = ['#EEF2FF', '#EFFAF5', '#FDEEE4', '#F3EEFF', '#FEF6DA', '#E8F4FD'];

export default function UseCases({ items }: { items: Pair[] }) {
    return (
        <section className="sec">
            <div className="wrap">
                <SecHead n="04" eyebrow="Applications" title="Industries and use cases" />
                <div className="grid g4">
                    {items.map((u, i) => (
                        <div key={u.title} className="box" style={{ background: tints[i % tints.length], borderColor: 'transparent' }}>
                            <h3>{u.title}</h3>
                            <p>{u.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
