import React from 'react';
import { Sparkles, Gem, Home } from 'lucide-react';

export default function LatestArticles() {
  return (
    <section className="sec" style={{ background: 'var(--cream)' }}>
      <div className="wrap">
        <div className="sec-h">
          <div style={{ maxWidth: '760px' }}>
            <div className="eyebrow" style={{ marginBottom: '14px' }}>
              Fresh on Recomonk
            </div>
            <h2 className="h2">Guides readers are opening right now.</h2>
          </div>
          <a
            href="https://recomonk.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: 700, color: 'var(--ac)' }}
          >
            Read the latest →
          </a>
        </div>
        <div className="arts">
          <a
            className="acard"
            href="https://recomonk.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="im"
              style={{
                background: '#E0F2FE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(28,25,23,.35)',
              }}
              aria-hidden="true"
            >
              <Sparkles size={56} strokeWidth={1.5} />
            </div>
            <div className="bd">
              <span className="k">Wellness · Comparison</span>
              <h3>Water Flossers vs. String Floss: Which Should You Buy?</h3>
              <span className="rd">Read the comparison →</span>
            </div>
          </a>
          <a
            className="acard"
            href="https://recomonk.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="im"
              style={{
                background: '#FCE7F3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(28,25,23,.35)',
              }}
              aria-hidden="true"
            >
              <Gem size={56} strokeWidth={1.5} />
            </div>
            <div className="bd">
              <span className="k">Fashion · Style guide</span>
              <h3>Comfortable High Heels in 2026: Pick Pairs That Won&apos;t Hurt</h3>
              <span className="rd">See the picks →</span>
            </div>
          </a>
          <a
            className="acard"
            href="https://recomonk.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="im"
              style={{
                background: '#FEF3C7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(28,25,23,.35)',
              }}
              aria-hidden="true"
            >
              <Home size={56} strokeWidth={1.5} />
            </div>
            <div className="bd">
              <span className="k">Home · Roundup</span>
              <h3>Cozy on a Budget: 10 Amazon Decor Pieces That Make Any Room Feel Styled</h3>
              <span className="rd">Shop the list →</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

