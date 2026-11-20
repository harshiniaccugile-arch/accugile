import React from 'react';

export default function HowItWorks() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-h">
          <div style={{ maxWidth: '760px' }}>
            <div className="eyebrow" style={{ marginBottom: '14px' }}>
              How it works
            </div>
            <h2 className="h2">Simple for travellers. Fair for local businesses.</h2>
          </div>
        </div>
        <div className="duo">
          <div style={{ background: '#EEF2FF' }}>
            <h3 style={{ fontSize: '24px' }}>For travellers</h3>
            <div className="stp">
              <b style={{ background: 'var(--ac)', color: '#FFFFFF' }}>1</b>
              <span>
                <strong>Choose a theme or destination</strong>
                <p style={{ color: '#475569' }}>Search or browse packages, experiences and services.</p>
              </span>
            </div>
            <div className="stp">
              <b style={{ background: 'var(--ac)', color: '#FFFFFF' }}>2</b>
              <span>
                <strong>Pick a verified operator</strong>
                <p style={{ color: '#475569' }}>Compare badges, itineraries and verified reviews.</p>
              </span>
            </div>
            <div className="stp">
              <b style={{ background: 'var(--ac)', color: '#FFFFFF' }}>3</b>
              <span>
                <strong>Book and pay securely</strong>
                <p style={{ color: '#475569' }}>Instant confirmation, and you only pay when confirmed.</p>
              </span>
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: 'auto' }}>
              <a href="https://skiplore.com/signup" target="_blank" rel="noopener noreferrer" className="btn btn-ac">
                Create a free account
              </a>
              <a href="https://skiplore.com" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                Explore Skiplore
              </a>
            </div>
          </div>
          <div style={{ background: '#F8FAFC' }}>
            <h3 style={{ fontSize: '24px' }}>For hosts and providers</h3>
            <div className="stp">
              <b style={{ background: '#4361EE', color: '#FFFFFF' }}>1</b>
              <span>
                <strong>Sign up as a partner</strong>
                <p style={{ color: '#475569' }}>Create your provider account and get verified.</p>
              </span>
            </div>
            <div className="stp">
              <b style={{ background: '#4361EE', color: '#FFFFFF' }}>2</b>
              <span>
                <strong>List your package, experience or service</strong>
                <p style={{ color: '#475569' }}>Add itineraries, photos, prices and availability.</p>
              </span>
            </div>
            <div className="stp">
              <b style={{ background: '#4361EE', color: '#FFFFFF' }}>3</b>
              <span>
                <strong>Get bookings, pay commission only on sales</strong>
                <p style={{ color: '#475569' }}>No upfront cost. Manage everything from your partner dashboard.</p>
              </span>
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: 'auto' }}>
              <a href="https://skiplore.com/vendorsignup" target="_blank" rel="noopener noreferrer" className="btn btn-ac">
                Become a host
              </a>
              <a href="https://skiplore.com/vendorlogin" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                Partner login
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

