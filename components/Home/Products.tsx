import Image from 'next/image';
import L from './Link';
import { products } from '@/lib/data';

const productImages: Record<string, string> = {
    Adorack: '/home/adorack.png',
    Skiplore: '/home/skiplore.png',
    Recomonk: '/home/recomonk.png',
};

export default function Products() {
    return (
        <section id="products" style={{ padding: '120px 0', background: '#fff' }}>
            <div className="wrap">
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, marginBottom: 56 }}>
                    <div style={{ maxWidth: 760 }}>
                        <div className="eyebrow" style={{ marginBottom: 16 }}>Our products</div>
                        <h2 style={{ fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.05, fontWeight: 700 }}>We do not just build for clients. We run our own products.</h2>
                    </div>
                    <p style={{ maxWidth: 380, color: '#5B6474', fontSize: 16, lineHeight: 1.6 }}>
                        Every lesson from operating live SaaS and marketplace products goes straight back into the work we do for you.
                    </p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
                    {products.map((p) => (
                        <L key={p.name} href={p.href} className="card" style={{ border: '1px solid #E5E8EF', borderRadius: 22, overflow: 'hidden', color: '#0F172A', display: 'flex', flexDirection: 'column', background: '#fff' }}>
                            <div style={{ height: 220, background: p.color, position: 'relative', padding: '24px 24px 0' }}>
                                <span style={{ position: 'relative', zIndex: 1, display: 'inline-block', background: 'rgba(255,255,255,0.9)', color: '#0F172A', fontSize: 12, fontWeight: 600, padding: '5px 10px', borderRadius: 999, marginBottom: 12 }}>{p.tag}</span>
                                {productImages[p.name] && (
                                    <div style={{ position: 'relative', height: 160, borderRadius: '12px 12px 0 0', overflow: 'hidden', boxShadow: '0 -10px 30px -10px rgba(0,0,0,0.25)' }}>
                                        <Image
                                            src={productImages[p.name]}
                                            alt={p.name}
                                            fill
                                            style={{ objectFit: 'cover', objectPosition: 'top' }}
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                )}
                            </div>
                            <div style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
                                <h3 style={{ fontSize: 26, fontWeight: 600, display: 'flex', justifyContent: 'space-between' }}>{p.name}<span style={{ color: 'var(--ac)', fontSize: 22 }}>↗</span></h3>
                                <p style={{ color: '#5B6474', lineHeight: 1.6, fontSize: 15 }}>{p.desc}</p>
                                <span style={{ fontSize: 13, color: '#5B6474', marginTop: 6 }}>{p.domain}</span>
                            </div>
                        </L>
                    ))}
                </div>
            </div>
        </section>
    );
}