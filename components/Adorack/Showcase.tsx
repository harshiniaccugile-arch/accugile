import React from 'react';

export default function Showcase() {
  return (
    <section style={{ padding: '72px 0 0' }}>
      <div className="wrap">
        <div className="show">
          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '40px',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                flex: '1 1 320px',
                minWidth: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div className="eyebrow" style={{ color: '#A8B8FF' }}>
                Adorack in action
              </div>
              <h2 className="h2" style={{ color: '#FFFFFF' }}>
                One calm dashboard for every brand you manage.
              </h2>
              <p style={{ color: '#B6C0D2', fontSize: '16.5px', lineHeight: 1.7 }}>
                Approvals, scheduled posts, campaigns and your whole team in one view, so you always know what is going out, where and when.
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  flexWrap: 'wrap',
                  marginTop: '6px',
                }}
              >
                <a
                  href="https://app.adorack.com/registration/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ac"
                >
                  Start free trial
                </a>
                <a
                  href="https://app.adorack.com/login/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ border: '1px solid rgba(255,255,255,.3)', color: '#FFFFFF' }}
                >
                  Sign in
                </a>
              </div>
            </div>
            <div style={{ flex: '1.6 1 520px', minWidth: 0 }}>
              <div className="show-frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://adorack.com/hero-section-image.png"
                  alt="Adorack social media management dashboard"
                  loading="lazy"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

