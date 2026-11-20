import React from 'react';

export default function SkiploreCTA() {
  return (
    <section style={{ padding: '0 0 96px' }}>
      <div className="wrap">
        <div
          style={{
            background: '#13261E',
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=60"
            alt=""
            loading="lazy"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.28,
            }}
          />
          <h2 className="h2" style={{ color: '#FFFFFF', maxWidth: '760px', position: 'relative' }}>
            Your next story starts with one search.
          </h2>
          <p
            style={{
              color: '#D2DDD6',
              fontSize: '17px',
              lineHeight: 1.65,
              maxWidth: '600px',
              position: 'relative',
            }}
          >
            Explore verified packages, experiences and local services across India, or list your own and start taking bookings.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <a
              href="https://skiplore.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ac"
              style={{ fontSize: '16px', padding: '16px 26px' }}
            >
              Explore Skiplore
            </a>
            <a
              href="https://skiplore.com/vendorsignup"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-glass"
              style={{ fontSize: '16px', padding: '16px 26px' }}
            >
              Become a host
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

