import React from 'react';

export default function ForBrands() {
  return (
    <section style={{ padding: '0 0 96px' }}>
      <div className="wrap">
        <div
          style={{
            background: 'var(--cream)',
            border: '1px solid #FDE3C8',
            borderRadius: '26px',
            padding: '48px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '32px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ maxWidth: '660px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div className="eyebrow">For brands and sellers</div>
            <h3 style={{ fontSize: '30px', lineHeight: 1.2 }}>
              Put your product in front of shoppers who are ready to buy.
            </h3>
            <p style={{ color: '#57534E', lineHeight: 1.7 }}>
              Submit your product for editorial consideration, advertise with us or reach out to our press team. Every listing follows our contributor editorial standards.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ac"
            >
              Submit your product
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

