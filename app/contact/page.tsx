import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/Contact/ContactForm';
import { commonFaqs } from '@/lib/services/tech-common';

const shell = { '--ac': '#304DDB', width: '100%', background: '#FFFFFF', overflowX: 'clip' } as CSSProperties;

export const metadata: Metadata = {
    title: 'Contact Us | Accugile',
    description: 'Contact Accugile to discuss your software, eCommerce, AI or digital marketing requirements.',
};

const nextSteps = [
    'Acknowledgement and NDA, if requested, within one business day',
    'Discovery call with a project lead and senior specialist',
    'Written proposal covering scope, team, timeline and investment',
    'Agreement and mobilisation of your delivery team',
];

const otherEnquiries = [
    { title: 'Careers', text: 'Explore open roles and apply to join the team.', cta: 'View careers →', href: '/careers', internal: true },
    { title: 'Partnerships', text: 'Technology, referral and agency partnership enquiries.', cta: 'Email partnerships →', href: 'mailto:[partners@accugile.com]' },
    { title: 'Existing clients', text: 'Support requests for live projects and maintenance plans.', cta: 'Email support →', href: 'mailto:[support@accugile.com]' },
    { title: 'Media', text: 'Press and speaking enquiries.', cta: 'Email media →', href: 'mailto:[media@accugile.com]' },
];

const engagementRows = [
    { label: 'Best suited to', cells: ['Clearly defined websites, stores, integrations or MVPs', 'Extending your in-house capacity with a specialist', 'Long-running products and multi-discipline programmes'] },
    { label: 'Commercial basis', cells: ['Fixed price against agreed scope', 'Monthly fee per developer', 'Monthly fee per team'] },
    { label: 'Team', cells: ['Project lead with assigned specialists', 'One senior engineer, supported by our wider practice', 'Project lead, designers, engineers and QA'] },
    { label: 'Governance', cells: ['Milestones, sprint demos, change control', 'Daily stand-ups within your processes', 'Roadmap ownership, monthly business reviews'] },
    { label: 'Flexibility', cells: ['Changes managed through change requests', 'Scale up or down with notice', 'Composition adjusted as priorities change'] },
];

const stats = [
    { value: '[XX+]', label: 'in-house specialists', bg: '#EEF2FF' },
    { value: '20+', label: 'years combined experience', bg: '#EFFAF5' },
    { value: '[XXX+]', label: 'projects delivered', bg: '#FDEEE4' },
    { value: '[XX]', label: 'countries served', bg: '#F3EEFF' },
];

export default function ContactPage() {
    return (
        <div className="acc motion-on" style={shell}>
            <Header />
            <main>
            <section style={{ background: 'linear-gradient(180deg,#F5F7FD 0%,#FFFFFF 100%)', borderBottom: '1px solid #E5E8EF' }}>
                <div className="wrap" style={{ paddingTop: 28, paddingBottom: 72 }}>
                    <nav className="crumb" aria-label="Breadcrumb">
                        <Link href="/">Home</Link> <span aria-hidden="true">/</span> <span>Contact Us</span>
                    </nav>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'flex-start', marginTop: 40 }}>
                        <div style={{ flex: '1 1 560px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 22 }}>
                            <div className="eyebrow">Contact Us</div>
                            <h1 style={{ fontSize: 'clamp(38px, 4.6vw, 62px)', lineHeight: 1.06, fontWeight: 800 }}>
                                Speak with a solution consultant
                            </h1>
                            <p className="lead" style={{ maxWidth: 680 }}>
                                Share a brief overview of your requirements. A consultant will respond within one business day with
                                initial recommendations, questions and proposed next steps.
                            </p>
                            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 6 }}>
                                <a href="#enquiry" className="btn btn-ac">Submit an enquiry</a>
                            </div>
                        </div>
                        <div style={{ flex: '1 1 360px', minWidth: 0 }}>
                            <div
                                style={{
                                    background: '#FFFFFF',
                                    border: '1px solid #E5E8EF',
                                    borderRadius: 16,
                                    padding: 28,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 18,
                                    boxShadow: '0 30px 60px -40px rgba(15,23,42,0.35)',
                                }}
                            >
                                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5B6474' }}>
                                    Contact details
                                </div>
                                <dl className="kv" style={{ margin: 0 }}>
                                    <dt>Email</dt>
                                    <dd><a href="mailto:[hello@accugile.com]">[hello@accugile.com]</a></dd>
                                    <dt>Telephone</dt>
                                    <dd><a href="tel:[+91 00000 00000]">[+91 00000 00000]</a></dd>
                                    <dt>Office</dt>
                                    <dd>[Street address]<br />Coimbatore, Tamil Nadu, India</dd>
                                    <dt>Hours</dt>
                                    <dd>[Monday to Friday, 9:00 to 18:00 IST]</dd>
                                    <dt>Response time</dt>
                                    <dd>Within one business day</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sec" id="enquiry">
                <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 56, alignItems: 'flex-start' }}>
                    <div style={{ flex: '1 1 340px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
                        <div className="eyebrow">What happens next</div>
                        <h2 className="h2">A clear, structured response</h2>
                        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                            {nextSteps.map((s) => (
                                <li key={s} className="tick">{s}</li>
                            ))}
                        </ul>
                    </div>
                    <ContactForm />
                </div>
            </section>

            <section className="sec" style={{ background: '#F7F8FB' }}>
                <div className="wrap">
                    <div className="sec-h">
                        <div style={{ maxWidth: 760 }}>
                            <div className="eyebrow" style={{ marginBottom: 14 }}>
                                <span className="num" style={{ color: 'inherit' }}>02</span> &nbsp;Other enquiries
                            </div>
                            <h2 className="h2">Reach the right team</h2>
                        </div>
                    </div>
                    <div className="grid g4">
                        {otherEnquiries.map((e) => {
                            const inner = (
                                <>
                                    <h3>{e.title}</h3>
                                    <p>{e.text}</p>
                                    <span style={{ color: 'var(--ac)', fontWeight: 600, fontSize: 14, marginTop: 'auto' }}>{e.cta}</span>
                                </>
                            );
                            return e.internal ? (
                                <Link key={e.title} href={e.href} className="box">{inner}</Link>
                            ) : (
                                <a key={e.title} href={e.href} className="box">{inner}</a>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="sec">
                <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
                    <div style={{ flex: '1 1 340px', display: 'flex', flexDirection: 'column', gap: 14 }}>
                        <div className="sec-h">
                            <div style={{ maxWidth: 760 }}>
                                <div className="eyebrow" style={{ marginBottom: 14 }}>
                                    <span className="num" style={{ color: 'inherit' }}>03</span> &nbsp;Our office
                                </div>
                                <h2 className="h2">Visit us in Coimbatore</h2>
                            </div>
                        </div>
                        <p className="lead" style={{ fontSize: 16 }}>
                            [Street address]<br />Coimbatore, Tamil Nadu [PIN]<br />India
                        </p>
                        <p style={{ color: '#5B6474' }}>Visits by appointment. Please contact us in advance.</p>
                    </div>
                    <div className="ph" style={{ flex: '2 1 560px', minHeight: 320 }}>[Embed map]</div>
                </div>
            </section>

            <section className="sec" style={{ background: '#F7F8FB' }}>
                <div className="wrap">
                    <div className="sec-h">
                        <div style={{ maxWidth: 760 }}>
                            <div className="eyebrow" style={{ marginBottom: 14 }}>
                                <span className="num" style={{ color: 'inherit' }}>04</span> &nbsp;Engagement models
                            </div>
                            <h2 className="h2">Choose how you work with us</h2>
                        </div>
                        <p style={{ maxWidth: 420, color: '#5B6474', fontSize: 16, lineHeight: 1.6 }}>
                            Every model includes a named project lead, NDA and full IP assignment.
                        </p>
                    </div>
                    <div style={{ overflowX: 'auto', background: '#FFFFFF', border: '1px solid #E5E8EF', borderRadius: 16 }}>
                        <table className="tbl" style={{ minWidth: 760 }}>
                            <thead>
                                <tr>
                                    <th style={{ width: '22%' }}></th>
                                    <th>Fixed-scope project</th>
                                    <th style={{ color: 'var(--ac)' }}>Dedicated developer</th>
                                    <th>Dedicated team</th>
                                </tr>
                            </thead>
                            <tbody>
                                {engagementRows.map((row) => (
                                    <tr key={row.label}>
                                        <td style={{ fontWeight: 600, color: '#5B6474' }}>{row.label}</td>
                                        {row.cells.map((c) => (
                                            <td key={c}>{c}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <Link href="/contact" className="btn btn-ac">Discuss the right model</Link>
                    </div>
                </div>
            </section>

            <section className="sec" style={{ background: '#FFFFFF' }}>
                <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 48 }}>
                    <div style={{ flex: '1 1 300px' }}>
                        <div className="sec-h">
                            <div style={{ maxWidth: 760 }}>
                                <div className="eyebrow" style={{ marginBottom: 14 }}>
                                    <span className="num" style={{ color: 'inherit' }}>05</span> &nbsp;FAQ
                                </div>
                                <h2 className="h2">Frequently asked questions</h2>
                            </div>
                        </div>
                    </div>
                    <div style={{ flex: '2 1 560px', minWidth: 0, borderTop: '1px solid #E5E8EF' }}>
                        {commonFaqs.map((f) => (
                            <details key={f.q} className="faq">
                                <summary>{f.q}</summary>
                                <p>{f.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: '0 0 96px', background: '#FFFFFF' }}>
                <div className="wrap">
                    <div className="grid g4">
                        {stats.map((s) => (
                            <div key={s.label} style={{ padding: 28, background: s.bg, borderRadius: 16 }}>
                                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 38, fontWeight: 800 }}>{s.value}</div>
                                <div style={{ color: '#5B6474', fontSize: 14, marginTop: 4 }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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
                            <h2 className="h2">Discuss your requirements with our team</h2>
                            <p className="lead" style={{ fontSize: 17 }}>
                                Share your objectives and a solution consultant will respond within one business day with initial
                                recommendations, a delivery approach and next steps.
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                            <Link href="/contact" className="btn btn-ac">Request a proposal</Link>
                            <Link href="/about" className="btn btn-ghost">About Accugile</Link>
                        </div>
                    </div>
                </div>
            </section>
            </main>
            <Footer />
        </div>
    );
}