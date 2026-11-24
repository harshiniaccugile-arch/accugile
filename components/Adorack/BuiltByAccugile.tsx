import React from 'react';
import Link from 'next/link';

export default function BuiltByAccugile() {
  return (
    <section style={{ padding: '0 0 40px' }}>
      <div className="wrap">
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #E5E8EF',
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
              Want a SaaS product like Adorack? The same team can build yours.
            </h3>
            <p style={{ color: '#475569', lineHeight: 1.65 }}>
              Multi-tenant workspaces, eight platform API integrations, queue-based publishing and subscription billing: we run all of it in production every day.
            </p>
          </div>
          <Link href="/saas-development" className="btn btn-ghost">
            Explore SaaS development →
          </Link>
        </div>
      </div>
    </section>
  );
}

