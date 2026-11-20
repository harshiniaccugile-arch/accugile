import React from 'react';

export default function ReaderFeatures() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-h">
          <div style={{ maxWidth: '760px' }}>
            <div className="eyebrow" style={{ marginBottom: '14px' }}>
              Made for shoppers
            </div>
            <h2 className="h2">Small touches that make shopping easier.</h2>
          </div>
        </div>
        <div className="grid g4">
          <div className="box" style={{ background: '#FFF7ED', borderColor: 'transparent' }}>
            <h3>Save to wishlist</h3>
            <p>Heart any pick to build a shortlist and come back when you are ready to buy.</p>
          </div>
          <div className="box" style={{ background: '#EFF6FF', borderColor: 'transparent' }}>
            <h3>One-click sign-in</h3>
            <p>Log in with Google in a tap to keep your wishlist across devices.</p>
          </div>
          <div className="box" style={{ background: '#F0FDF4', borderColor: 'transparent' }}>
            <h3>Deals at a glance</h3>
            <p>Struck-through prices and &ldquo;% off&rdquo; labels show exactly how much you save.</p>
          </div>
          <div className="box" style={{ background: '#FDF2F8', borderColor: 'transparent' }}>
            <h3>Newsletter</h3>
            <p>The latest trends and exclusive offers, straight to your inbox.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

