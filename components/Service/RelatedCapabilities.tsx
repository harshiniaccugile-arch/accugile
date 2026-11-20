import Link from 'next/link';
import SecHead from '@/components/About/SecHead';

type Item = { href: string; label: string; title: string; text: string };

export default function RelatedCapabilities({ items }: { items: Item[] }) {
    return (
        <section className="sec" style={{ background: '#F7F8FB' }}>
            <div className="wrap">
                <SecHead n="13" eyebrow="Related" title="Related capabilities" />
                <div className="grid g3">
                    {items.map((r) => (
                        <Link key={r.href} href={r.href} className="box">
                            <span className="num">{r.label}</span>
                            <h3>{r.title}</h3>
                            <p>{r.text}</p>
                            <span style={{ color: 'var(--ac)', fontWeight: 600, fontSize: 14, marginTop: 'auto' }}>Learn more →</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
