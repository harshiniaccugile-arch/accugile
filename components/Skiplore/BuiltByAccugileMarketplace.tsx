import React from 'react';
import Link from 'next/link';

export default function BuiltByAccugileMarketplace() {
  return (
    <section style={{ padding: '0 0 40px' }}>
      <div className="wrap">
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #E3E8E4',
            borderRadius: '22px',
            padding: '40px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '32px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ maxWidth: '680px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div className="eyebrow">Built and run by Accugile</div>
            <h3 style={{ fontSize: '26px', lineHeight: 1.2 }}>
              Planning a marketplace like Skiplore? The same team can build yours.
            </h3>
            <p style={{ color: '#4D5D55', lineHeight: 1.65 }}>
              Two-sided onboarding, vendor dashboards, multi-listing carts, secure payments and in-app messaging: we run all of it in production.
            </p>
          </div>
          <Link href="/saas-development" className="btn btn-ghost">
            Explore marketplace development →
          </Link>
        </div>
      </div>
    </section>
  );
}

