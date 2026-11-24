'use client';

import { useState } from 'react';
import { ShieldCheck, FileText, Cookie } from 'lucide-react';
import PrivacyContent from './PrivacyContent';
import TermsContent from './TermsContent';
import CookiesContent from './CookiesContent';

type TabId = 'privacy' | 'terms' | 'cookies';

const tabs: { id: TabId; label: string; desc: string; icon: React.ReactNode }[] = [
  {
    id: 'privacy',
    label: 'Privacy Policy',
    desc: 'How we collect and use your data',
    icon: <ShieldCheck size={20} />,
  },
  {
    id: 'terms',
    label: 'Terms & Conditions',
    desc: 'Rules for using our website and services',
    icon: <FileText size={20} />,
  },
  {
    id: 'cookies',
    label: 'Cookie Policy',
    desc: 'Cookies we use and how to control them',
    icon: <Cookie size={20} />,
  },
];

const heroMeta: Record<TabId, { title: string; subtitle: string; breadcrumb: string }> = {
  privacy: {
    title: 'Privacy Policy',
    subtitle:
      'How Accugile collects, uses, shares and protects personal data when you visit accugile.com, contact us, apply for a job or work with us.',
    breadcrumb: 'Privacy Policy',
  },
  terms: {
    title: 'Terms & Conditions',
    subtitle:
      'The rules for using accugile.com, and the general terms that apply when you engage Accugile for a project, unless a signed agreement says otherwise.',
    breadcrumb: 'Terms & Conditions',
  },
  cookies: {
    title: 'Cookie Policy',
    subtitle:
      'Which cookies and similar technologies accugile.com uses, why we use them, and how you can control them.',
    breadcrumb: 'Cookie Policy',
  },
};

export default function LegalTabs() {
  const [active, setActive] = useState<TabId>('privacy');
  const meta = heroMeta[active];

  return (
    <>
      {/* Hero */}
      <section className="lg-hero">
        <div className="wrap" style={{ paddingTop: 28, paddingBottom: 56 }}>
          <nav className="crumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <span>Legal</span>
            <span aria-hidden="true">/</span>
            <span>{meta.breadcrumb}</span>
          </nav>
          <div style={{ maxWidth: 820, marginTop: 40, display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div className="eyebrow">Legal</div>
            <h1 style={{ fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.05, fontWeight: 800 }}>
              {meta.title}
            </h1>
            <p className="lead" style={{ fontSize: 18 }}>
              {meta.subtitle}
            </p>
            <div className="lg-meta">
              <span>Effective date: <b className="ph-i">28-02-2012</b></span>
              <span>Last updated: <b className="ph-i">24-11-2026</b></span>

            </div>
          </div>
        </div>
      </section>

      {/* Body: Sidebar Tabs + Content */}
      <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'flex-start', paddingTop: 64, paddingBottom: 96 }}>

        {/* Sidebar */}
        <aside className="legal-sidebar">
          <strong style={{ display: 'block', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5B6474', marginBottom: 10 }}>
            Legal Documents
          </strong>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`legal-tab${active === tab.id ? ' active' : ''}`}
                aria-current={active === tab.id ? 'page' : undefined}
              >
                <span className="legal-tab-icon">{tab.icon}</span>
                <span className="legal-tab-text">
                  <span className="legal-tab-label">{tab.label}</span>
                  <span className="legal-tab-desc">{tab.desc}</span>
                </span>
              </button>
            ))}
          </nav>

          {/* Quick links section */}
          <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid #E5E8EF' }}>
            <strong style={{ display: 'block', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5B6474', marginBottom: 10 }}>
              Questions?
            </strong>
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.6, marginBottom: 12 }}>
              For privacy requests or legal enquiries, contact:
            </p>
            <a href="mailto:privacy@accugile.com" style={{ fontSize: 13, color: '#304DDB', display: 'block', marginBottom: 6 }}>
              privacy@accugile.com
            </a>
            <a href="/contact" className="btn btn-ac" style={{ fontSize: 13, padding: '10px 16px', minHeight: 40, marginTop: 8, display: 'inline-flex' }}>
              Contact us
            </a>
          </div>
        </aside>

        {/* Content Panel */}
        <article className="doc" key={active} style={{ animation: 'legalFadeIn .22s ease-out both' }}>
          {active === 'privacy' && <PrivacyContent />}
          {active === 'terms' && <TermsContent />}
          {active === 'cookies' && <CookiesContent />}
        </article>
      </div>
    </>
  );
}

