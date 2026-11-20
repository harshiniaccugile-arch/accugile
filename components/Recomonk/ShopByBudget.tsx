import React from 'react';

export default function ShopByBudget() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-h" style={{ marginBottom: '28px' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: '12px' }}>
              Shop by budget
            </div>
            <h2 className="h2" style={{ fontSize: 'clamp(26px, 2.6vw, 34px)' }}>
              Great picks at every price.
            </h2>
          </div>
        </div>
        <div className="budget">
          <a
            className="bud"
            href="https://recomonk.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: '#304DDB' }}
          >
            <span>Gifts</span>
            <strong>Under $25</strong>
          </a>
          <a
            className="bud"
            href="https://recomonk.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: '#253DB8' }}
          >
            <span>Best products</span>
            <strong>Under $50</strong>
          </a>
          <a
            className="bud"
            href="https://recomonk.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: '#1D3094' }}
          >
            <span>Best products</span>
            <strong>Under $100</strong>
          </a>
          <a
            className="bud"
            href="https://recomonk.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: '#0F172A' }}
          >
            <span>When only the best will do</span>
            <strong>Premium picks</strong>
          </a>
        </div>
      </div>
    </section>
  );
}

