import React from 'react';

export default function WhatIsRecomonk() {
  return (
    <section className="sec">
      <div className="wrap">
        <div
          style={{
            textAlign: 'center',
            maxWidth: '820px',
            margin: '0 auto 48px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            alignItems: 'center',
          }}
        >
          <div className="eyebrow">What is Recomonk?</div>
          <h2 className="h2">
            A shortcut through Amazon&apos;s millions of listings,{' '}
            <span className="serif" style={{ color: 'var(--ac)' }}>
              to the few worth buying.
            </span>
          </h2>
          <p className="lead" style={{ fontSize: '17.5px' }}>
            Searching Amazon for &ldquo;best air fryer&rdquo; returns pages of near-identical products. Recomonk does the sorting: we compare features, reviews and prices, then publish clear guides that tell you which one to buy and why.
          </p>
        </div>
        <div className="rflow">
          <div>
            <span className="n">1</span>
            <h3>We research</h3>
            <p>We look at specs, customer reviews and prices across each category, so you do not have to open fifty tabs.</p>
          </div>
          <div>
            <span className="n">2</span>
            <h3>We pick and compare</h3>
            <p>Guides highlight the standout picks for different needs and budgets, with the trade-offs explained in plain language.</p>
          </div>
          <div>
            <span className="n">3</span>
            <h3>You buy on Amazon</h3>
            <p>Tap &ldquo;From Amazon&rdquo; to check today&apos;s price and buy with Amazon&apos;s own delivery and returns.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

