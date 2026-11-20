import React from 'react';

export default function SkipStories() {
  return (
    <section style={{ padding: '0 0 96px' }}>
      <div className="wrap">
        <div
          style={{
            background: 'var(--cream)',
            borderRadius: '26px',
            padding: '48px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '32px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ maxWidth: '640px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div className="eyebrow">Skip Stories</div>
            <h3 style={{ fontSize: '30px', lineHeight: 1.2 }}>Real trips, shared by real travellers.</h3>
            <p style={{ color: '#4D5D55', lineHeight: 1.7 }}>
              Read first-hand stories from the people who went, and share your own discovery to help the next traveller skip the ordinary.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href="https://skiplore.com/skip-stories"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ac"
            >
              Read Skip Stories
            </a>
            <a
              href="https://skiplore.com/share-your-story"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Share your discovery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

