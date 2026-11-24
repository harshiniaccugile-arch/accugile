import React from 'react';

export default function AdorackCTA() {
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
          <h2 className="h2" style={{ color: '#FFFFFF', maxWidth: '760px' }}>
            Your next month of posts, planned this afternoon.
          </h2>
          <p style={{ color: '#B6C0D2', fontSize: '17px', lineHeight: 1.65, maxWidth: '600px' }}>
            Connect your accounts, let the AI draft your first week and invite your team. Free for 30 days.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href="https://app.adorack.com/registration/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ac"
              style={{ fontSize: '16px', padding: '16px 26px' }}
            >
              Start your free trial
            </a>
            {/* <a
              href="https://app.adorack.com/login/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                border: '1px solid rgba(255,255,255,.3)',
                color: '#FFFFFF',
                fontSize: '16px',
                padding: '16px 26px',
              }}
            >
              Sign in
            </a> */}
          </div>
          <div className="trialnote" style={{ justifyContent: 'center', color: '#B6C0D2' }}>
            <span>No credit card</span>
            <span>Upgrade when ready</span>
            <span>Set up in minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
}

