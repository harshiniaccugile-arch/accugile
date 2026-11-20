import React from 'react';

export default function GiftFinder() {
  return (
    <section className="sec gift">
      <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '56px', alignItems: 'flex-start' }}>
        <div style={{ flex: '1 1 380px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div className="eyebrow" style={{ color: '#A5B4FC' }}>
            Gift finder
          </div>
          <h2 className="h2" style={{ color: '#FFFFFF' }}>
            Never stare at a blank gift list again.
          </h2>
          <p style={{ color: '#E2E8F0', fontSize: '17px', lineHeight: 1.7 }}>
            Pick the occasion, the person or the budget. Recomonk shows you gift ideas that people actually love, ready to order on Amazon.
          </p>
          <a
            href="https://recomonk.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ac"
            style={{ alignSelf: 'flex-start' }}
          >
            Find a gift →
          </a>
        </div>
        <div
          style={{
            flex: '1.3 1 480px',
            minWidth: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '28px',
          }}
        >
          <div className="gcol">
            <h3>By occasion</h3>
            <div className="gchips">
              <a href="https://recomonk.com" target="_blank" rel="noopener noreferrer">Birthday</a>
              <a href="https://recomonk.com" target="_blank" rel="noopener noreferrer">Valentine&apos;s Day</a>
              <a href="https://recomonk.com" target="_blank" rel="noopener noreferrer">Christmas</a>
            </div>
          </div>
          <div className="gcol">
            <h3>By recipient</h3>
            <div className="gchips">
              <a href="https://recomonk.com" target="_blank" rel="noopener noreferrer">For her</a>
              <a href="https://recomonk.com" target="_blank" rel="noopener noreferrer">For him</a>
              <a href="https://recomonk.com" target="_blank" rel="noopener noreferrer">Family &amp; friends</a>
              <a href="https://recomonk.com" target="_blank" rel="noopener noreferrer">Kids</a>
            </div>
          </div>
          <div className="gcol">
            <h3>By budget</h3>
            <div className="gchips">
              <a href="https://recomonk.com" target="_blank" rel="noopener noreferrer">Under $25</a>
              <a href="https://recomonk.com" target="_blank" rel="noopener noreferrer">Under $50</a>
              <a href="https://recomonk.com" target="_blank" rel="noopener noreferrer">Under $100</a>
            </div>
          </div>
          <div className="gcol">
            <h3>By interest</h3>
            <div className="gchips">
              <a href="https://recomonk.com" target="_blank" rel="noopener noreferrer">Tech lovers</a>
              <a href="https://recomonk.com" target="_blank" rel="noopener noreferrer">Home cooks</a>
              <a href="https://recomonk.com" target="_blank" rel="noopener noreferrer">Travellers</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

