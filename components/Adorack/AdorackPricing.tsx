'use client';

import React, { useState } from 'react';

export default function AdorackPricing() {
  const [currency, setCurrency] = useState<'usd' | 'inr'>('usd');

  return (
    <section className="sec" id="pricing" style={{ background: '#F7F8FB' }}>
      <div className="wrap">
        <div
          style={{
            textAlign: 'center',
            maxWidth: '720px',
            margin: '0 auto 40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            alignItems: 'center',
          }}
        >
          <div className="eyebrow">Pricing</div>
          <h2 className="h2">Start free for 30 days. Upgrade when you are ready.</h2>
          <p className="lead" style={{ fontSize: '17px' }}>
            Every plan includes unlimited campaigns and unlimited categories.
          </p>
          <div className="cur" role="group" aria-label="Currency">
            <button
              className={currency === 'usd' ? 'on' : ''}
              onClick={() => setCurrency('usd')}
              aria-pressed={currency === 'usd'}
            >
              USD $
            </button>
            <button
              className={currency === 'inr' ? 'on' : ''}
              onClick={() => setCurrency('inr')}
              aria-pressed={currency === 'inr'}
            >
              INR ₹
            </button>
          </div>
        </div>
        <div className="grid g3" style={{ alignItems: 'stretch', gap: '20px' }}>
          {/* Trial */}
          <div className="plan">
            <h3>Trial</h3>
            <p style={{ color: '#475569', fontSize: '15px' }}>Try every core feature with your real accounts.</p>
            <div className="price">
              <span>{currency === 'usd' ? '$0' : '₹0'}</span> <small>for 30 days</small>
            </div>
            <div className="lim">
              <div><strong>5</strong><span>users</span></div>
              <div><strong>3</strong><span>workspaces</span></div>
              <div><strong>5</strong><span>social accounts</span></div>
              <div><strong>50</strong><span>scheduled posts</span></div>
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li className="tick">No credit card required</li>
              <li className="tick">Adorack AI assistant</li>
            </ul>
            <a
              href="https://app.adorack.com/registration/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ink"
              style={{ marginTop: 'auto', justifyContent: 'center' }}
            >
              Start free trial
            </a>
          </div>

          {/* Professional */}
          <div className="plan hot">
            <span className="tagx">Best for growing teams</span>
            <h3>Professional</h3>
            <p style={{ color: '#475569', fontSize: '15px' }}>For agencies and teams managing several brands.</p>
            <div className="price">
              <span>{currency === 'usd' ? '$49' : '₹3,900'}</span> <small>/ month</small>
            </div>
            <div className="lim">
              <div><strong>15</strong><span>users</span></div>
              <div><strong>20</strong><span>workspaces</span></div>
              <div><strong>25</strong><span>social accounts</span></div>
              <div><strong>Unlimited</strong><span>posts</span></div>
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li className="tick">Approval workflows and roles</li>
              <li className="tick">Queue, calendar and RSS feeds</li>
            </ul>
            <a
              href="https://app.adorack.com/registration/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ac"
              style={{ marginTop: 'auto', justifyContent: 'center' }}
            >
              Try Professional free
            </a>
          </div>

          {/* Advanced */}
          <div className="plan">
            <h3>Advanced</h3>
            <p style={{ color: '#475569', fontSize: '15px' }}>For larger agencies with many clients and channels.</p>
            <div className="price">
              <span>{currency === 'usd' ? '$99' : '₹7,900'}</span> <small>/ month</small>
            </div>
            <div className="lim">
              <div><strong>30</strong><span>users</span></div>
              <div><strong>Unlimited</strong><span>workspaces</span></div>
              <div><strong>100</strong><span>social accounts</span></div>
              <div><strong>Unlimited</strong><span>posts</span></div>
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li className="tick">Everything in Professional</li>
              <li className="tick">Room for your whole client roster</li>
            </ul>
            <a
              href="https://app.adorack.com/registration/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ink"
              style={{ marginTop: 'auto', justifyContent: 'center' }}
            >
              Try Advanced free
            </a>
          </div>
        </div>
        <p style={{ textAlign: 'center', color: '#5B6474', fontSize: '14px', marginTop: '24px' }}>
          Already have an account?{' '}
          <a href="https://app.adorack.com/login/" target="_blank" rel="noopener noreferrer">
            Sign in to Adorack →
          </a>{' '}
          ·{' '}
          <a href="https://adorack.com/pricing" target="_blank" rel="noopener noreferrer">
            Full plan comparison
          </a>
        </p>
      </div>
    </section>
  );
}

