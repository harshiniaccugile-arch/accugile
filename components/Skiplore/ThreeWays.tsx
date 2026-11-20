import React from 'react';

export default function ThreeWays() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-h">
          <div style={{ maxWidth: '760px' }}>
            <div className="eyebrow" style={{ marginBottom: '14px' }}>
              Three ways to explore
            </div>
            <h2 className="h2">Trips, days out and everyday services, in one place.</h2>
          </div>
          <p style={{ maxWidth: '420px', color: '#4D5D55', fontSize: '16px', lineHeight: 1.6 }}>
            Most travel sites stop at the trip. Skiplore also covers what you do once you arrive, and the services you need at home.
          </p>
        </div>
        <div className="ways">
          <a className="way" href="https://skiplore.com/PackageListing" target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=70"
              alt=""
              loading="lazy"
            />
            <div>
              <span className="num" style={{ color: '#A5B4FC' }}>
                01
              </span>
              <h3>Packages &amp; tours</h3>
              <p>Multi-day trips with a fixed itinerary, from weekend getaways to two-week journeys.</p>
              <div className="chips">
                <span>1–3 days</span>
                <span>4–6 days</span>
                <span>7–9 days</span>
                <span>10–12 days</span>
                <span>13+ days</span>
              </div>
            </div>
          </a>
          <a className="way" href="https://skiplore.com/ExperienceListing" target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=70"
              alt=""
              loading="lazy"
            />
            <div>
              <span className="num" style={{ color: '#A5B4FC' }}>
                02
              </span>
              <h3>Day experiences</h3>
              <p>Food trails, treks, workshops and water activities run by people who live there.</p>
              <div className="chips">
                <span>Food &amp; coffee trails</span>
                <span>Treks</span>
                <span>Water sports</span>
              </div>
            </div>
          </a>
          <a className="way" href="https://skiplore.com/ServiceListing" target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=70"
              alt=""
              loading="lazy"
            />
            <div>
              <span className="num" style={{ color: '#A5B4FC' }}>
                03
              </span>
              <h3>Local services</h3>
              <p>Book trusted local professionals, on a trip or at home, with the same secure checkout.</p>
              <div className="chips">
                <span>Salons</span>
                <span>Spas</span>
                <span>Fitness</span>
                <span>Home services</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

