import { Fragment } from 'react';
import SecHead from '@/components/About/SecHead';

// Replace the bracketed placeholders with approved client details and results.
const cases = [
    { tag: '[Client] · eCommerce · WooCommerce', title: '[Shopify to WooCommerce migration for a D2C brand]', bg: '#EEF2FF' },
    { tag: '[Client] · Marketplace · Laravel + React', title: '[Multivendor marketplace built from scratch]', bg: '#EFFAF5' },
    { tag: '[Client] · Education · LMS', title: '[Course platform with memberships]', bg: '#FDEEE4' },
    { tag: '[Client] · Corporate · WordPress', title: '[Corporate website for an industrial services company]', bg: '#F3EEFF' },
    { tag: '[Client] · AI · Generative AI', title: '[Customer support assistant for an online retailer]', bg: '#FEF6DA' },
    { tag: '[Client] · Integration · Odoo ERP', title: '[ERP integration for a flooring distributor]', bg: '#E8F4FD' },
];

export default function FeaturedEngagements() {
    return (
        <section className="sec">
            <div className="wrap">
                <SecHead n="01" eyebrow="Portfolio" title="Featured engagements" />
                <div className="grid g3">
                    {cases.map((c) => (
                        <article key={c.title} className="box" style={{ padding: 0, overflow: 'hidden' }}>
                            <div className="ph" style={{ height: 200, borderRadius: 0, border: 0, background: c.bg }}>
                                [Project screenshot]
                            </div>
                            <div style={{ padding: 26, display: 'flex', flexDirection: 'column', gap: 12 }}>
                                <span className="num">{c.tag}</span>
                                <h3>{c.title}</h3>
                                <dl className="kv" style={{ gridTemplateColumns: '90px 1fr', fontSize: 14 }}>
                                    <Fragment>
                                        <dt>Challenge</dt>
                                        <dd>[One sentence describing the business problem.]</dd>
                                        <dt>Solution</dt>
                                        <dd>[One sentence describing what was delivered.]</dd>
                                        <dt>Result</dt>
                                        <dd><strong style={{ color: 'var(--ac)' }}>[+XX%]</strong> [primary metric]</dd>
                                    </Fragment>
                                </dl>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
