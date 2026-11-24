import React from 'react';
import Link from 'next/link';

export default function BuiltByAccugileWeb() {
  return (
    <section style={{ padding: '0 0 40px' }}>
      <div className="wrap">
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #EDE6DD',
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
              Want an affiliate content site like Recomonk? We build those too.
            </h3>
            <p style={{ color: '#57534E', lineHeight: 1.65 }}>
              Fast WordPress builds, deep category structures, Amazon product blocks with deal badges, wishlists, social login and SEO-ready buying guides.
            </p>
          </div>
          <Link href="/website-development" className="btn btn-ghost">
            Explore website development →
          </Link>
        </div>
      </div>
    </section>
  );
}

