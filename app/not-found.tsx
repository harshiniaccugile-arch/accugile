import Link from 'next/link';
import NotFoundClient from './NotFoundClient';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './404.css';

export const metadata = {
  title: 'Page not found (404) | Accugile',
  description: 'The page you are looking for could not be found.',
  robots: 'noindex, follow',
};

export default function NotFound() {
  return (
    <div className="acc motion-on" style={{ ['--ac' as string]: '#304DDB', width: '100%', background: '#FFFFFF', overflowX: 'clip' }}>
      <Header />
      <main>
        <NotFoundClient />

        <section className="e4-links">
          <div className="wrap">
            <div className="sec-h" style={{ marginBottom: 28 }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: 12 }}>Where to next</div>
                <h2 className="h2" style={{ fontSize: 'clamp(26px, 2.6vw, 36px)' }}>Pick up where you meant to go.</h2>
              </div>
            </div>
            <div className="dest">
              <Link className="dst" href="/services">
                <i>
                  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3" y="3" width="7" height="7" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                    <rect x="14" y="3" width="7" height="7" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                    <rect x="3" y="14" width="7" height="7" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                    <rect x="14" y="14" width="7" height="7" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </i>
                <div>
                  <strong>Services <span>&rarr;</span></strong>
                  <em>Software, websites, eCommerce, SaaS, cloud and digital marketing.</em>
                </div>
              </Link>

              <Link className="dst" href="/ai">
                <i>
                  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  </svg>
                </i>
                <div>
                  <strong>AI solutions <span>&rarr;</span></strong>
                  <em>Chatbots, voicebots, generative AI and workflow automation.</em>
                </div>
              </Link>

              <Link className="dst" href="/case-studies">
                <i>
                  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 19V5M4 19h16M8 15l4-4 3 3 5-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </i>
                <div>
                  <strong>Case studies <span>&rarr;</span></strong>
                  <em>Platforms we&apos;ve built for clients in energy, healthcare and more.</em>
                </div>
              </Link>

              <Link className="dst" href="/technology">
                <i>
                  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </i>
                <div>
                  <strong>Technology <span>&rarr;</span></strong>
                  <em>Laravel, React, Next.js, Shopify, WooCommerce and more.</em>
                </div>
              </Link>

              <Link className="dst" href="/products">
                <i>
                  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z M4 7.5l8 4.5 8-4.5 M12 12v9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  </svg>
                </i>
                <div>
                  <strong>Our products <span>&rarr;</span></strong>
                  <em>Adorack, Skiplore and Recomonk, built and run by us.</em>
                </div>
              </Link>

              <Link className="dst" href="/about">
                <i>
                  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="9" cy="8" r="3.5" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5M16 4.5a3.5 3.5 0 0 1 0 7M18 14.8c1.9.7 3.1 2.5 3.5 5.2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </i>
                <div>
                  <strong>About Accugile <span>&rarr;</span></strong>
                  <em>Who we are and how our in-house team works.</em>
                </div>
              </Link>
            </div>

            <div className="help">
              <p><strong>Followed a link from our site and landed here?</strong> Tell us and we&apos;ll fix it.</p>
              <a
                href="mailto:hello@accugile.com?subject=Broken%20link%20on%20accugile.com"
                className="btn"
                style={{ background: '#FFFFFF', color: '#0F172A' }}
              >
                Report broken link
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
