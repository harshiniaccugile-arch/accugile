import React from 'react';

export default function RecomonkCTA() {
  return (
    <section style={{ padding: '0 0 96px' }}>
      <div className="wrap">
        <div
          style={{
            background: '#0F172A',
            color: '#FFFFFF',
            borderRadius: '26px',
            padding: '64px 56px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '20px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            aria-hidden="true"
            className="ring"
            style={{
              position: 'absolute',
              right: '-180px',
              top: '-220px',
              width: '520px',
              height: '520px',
              borderRadius: '50%',
              border: '1px dashed rgba(255,255,255,.14)',
            }}
          />
          <h2 className="h2" style={{ color: '#FFFFFF', maxWidth: '760px', position: 'relative' }}>
            Stop scrolling through endless listings.{' '}
            <span className="serif" style={{ color: '#A5B4FC' }}>
              Start with the best.
            </span>
          </h2>
          <p
            style={{
              color: '#B6C0D2',
              fontSize: '17px',
              lineHeight: 1.65,
              maxWidth: '600px',
              position: 'relative',
            }}
          >
            Clear guides, honest picks and the best deals on Amazon, updated daily.
          </p>
          <a
            href="https://recomonk.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ac"
            style={{ fontSize: '16px', padding: '16px 28px', position: 'relative' }}
          >
            Visit Recomonk
          </a>
          <p style={{ fontSize: '12.5px', color: '#94A3B8', position: 'relative' }}>
            Recomonk may earn commissions from qualifying purchases.
          </p>
        </div>
      </div>
    </section>
  );
}

