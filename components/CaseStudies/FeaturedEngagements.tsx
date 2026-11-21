import { Fragment } from 'react';
import Link from 'next/link';
import SecHead from '@/components/About/SecHead';

interface CaseItem {
    slug: string;
    tag: string;
    title: string;
    challenge: string;
    solution: string;
    metric: string;
    metricLabel: string;
    bg: string;
}

const cases: CaseItem[] = [
    {
        slug: 'accudemy',
        tag: 'Accudemy · EdTech · Canvas LMS',
        title: 'Custom LMS That Scales Teaching and Revenue for Accudemy',
        challenge: 'A content-led course business was blocked by manual enrollment, separated checkout flows, and non-scalable course infrastructure.',
        solution: 'Built a branded, automated learning platform with live/self-paced courses, instant certificate generation, and unified Stripe/PayPal checkout.',
        metric: '3.1x',
        metricLabel: 'revenue growth post-launch',
        bg: '#EEF2FF'
    },
    {
        slug: 'medsoft',
        tag: 'Medsoft · Healthcare · Cloud Modernization',
        title: 'Engineering Partner for Medsoft’s Healthcare Workflow Platform',
        challenge: 'A fragile legacy monolith slowed down patient check-in queues, produced heavy 4-minute reporting lockups, and slowed releases to quarterly.',
        solution: 'Strangler Fig modernization with a dedicated 9-specialist pod, modular microservices on AWS, and zero clinical downtime.',
        metric: '1.7 s',
        metricLabel: 'avg load time (from 4.8 s)',
        bg: '#EFFAF5'
    },
    {
        slug: 'kohl-recycling',
        tag: 'Kohl Recycling GmbH · Waste Management & IoT · Germany',
        title: 'Smart Waste Tracking Platform & Driver App for Kohl Recycling',
        challenge: 'Paper slips, weighbridge printouts, and manual spreadsheets created billing disputes and 15-minute driver administrative delays per stop.',
        solution: 'Offline-first React Native mobile app with Bluetooth scale integration, operations web console, and self-service client ESG portal.',
        metric: '€312K',
        metricLabel: 'verified annual savings',
        bg: '#F3EEFF'
    },
    {
        slug: 'klibb',
        tag: 'Klibb · Smart Energy / IoT · Norway',
        title: 'Data-Driven Smart Energy App for Klibb Households',
        challenge: 'Norwegian households were burdened by volatile electricity spot prices and fragmented grid vs. supplier billing.',
        solution: 'Mobile-first React Native app with live Nord Pool prices, automated EV charging, smart heating controls, and combined billing.',
        metric: '185K+',
        metricLabel: 'active app downloads',
        bg: '#FEF6DA'
    },
    {
        slug: 'synmedix',
        tag: 'SynMedix · MedTech & 3D Printing · Israel',
        title: 'Collaboration Platform for Custom 3D Surgical Models',
        challenge: 'Order turnaround from patient CT/MRI scan to 3D sterilized guide delivery was 21 days due to fragmented email reviews and desktop CAD barriers.',
        solution: 'Responsive web platform with custom browser-based WebGL 3D viewer, 21 CFR Part 11 e-signatures, and cleanroom manufacturing queues.',
        metric: '-57%',
        metricLabel: 'order-to-delivery turnaround',
        bg: '#E8F4FD'
    }
];

export default function FeaturedEngagements() {
    return (
        <section className="sec">
            <div className="wrap">
                <SecHead n="01" eyebrow="Portfolio" title="Featured engagements" />
                <div className="grid g3">
                    {cases.map((c) => (
                        <article
                            key={c.slug}
                            className="box transition-transform hover:-translate-y-1 hover:shadow-lg"
                            style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                        >
                            <Link href={`/case-studies/${c.slug}`} className="block group">
                                <div
                                    className="ph"
                                    style={{
                                        height: 180,
                                        borderRadius: 0,
                                        border: 0,
                                        background: c.bg,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: 20,
                                        position: 'relative'
                                    }}
                                >
                                    <span style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#1E293B', opacity: 0.85 }}>
                                        {c.tag.split('·')[0]}
                                    </span>
                                    <span style={{ fontSize: 32, fontWeight: 800, color: '#304DDB', marginTop: 4 }}>
                                        {c.metric}
                                    </span>
                                    <span style={{ fontSize: 13, color: '#64748B', fontWeight: 500 }}>
                                        {c.metricLabel}
                                    </span>
                                </div>
                            </Link>
                            <div style={{ padding: 26, display: 'flex', flexDirection: 'column', gap: 12, flexGrow: 1 }}>
                                <span className="num" style={{ fontSize: 13, color: '#5B6474' }}>{c.tag}</span>
                                <h3 style={{ fontSize: 20, lineHeight: 1.3 }}>
                                    <Link href={`/case-studies/${c.slug}`} className="hover:text-[#304DDB] transition-colors">
                                        {c.title}
                                    </Link>
                                </h3>
                                <dl className="kv" style={{ gridTemplateColumns: '80px 1fr', fontSize: 14, margin: '8px 0 16px' }}>
                                    <Fragment>
                                        <dt>Challenge</dt>
                                        <dd>{c.challenge}</dd>
                                        <dt>Solution</dt>
                                        <dd>{c.solution}</dd>
                                        <dt>Result</dt>
                                        <dd>
                                            <strong style={{ color: 'var(--ac)' }}>{c.metric}</strong> {c.metricLabel}
                                        </dd>
                                    </Fragment>
                                </dl>
                                <div style={{ marginTop: 'auto', paddingTop: 14, borderTop: '1px solid #EEF2F6' }}>
                                    <Link
                                        href={`/case-studies/${c.slug}`}
                                        className="inline-flex items-center text-sm font-semibold text-[#304DDB] hover:underline"
                                    >
                                        Read Full Case Study →
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
