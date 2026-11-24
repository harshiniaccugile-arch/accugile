import React from 'react';
import { Waves, Tent, Edit3 } from 'lucide-react';

export default function ForProviders() {
  return (
    <section className="sec prov" id="providers">
      <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '56px', alignItems: 'center' }}>
        <div style={{ flex: '1 1 460px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '22px' }}>
          <div className="eyebrow" style={{ color: 'var(--amb)' }}>
            For local businesses
          </div>
          <h2 className="h2" style={{ color: '#FFFFFF' }}>
            Reach travellers looking for exactly what you offer.{' '}
            <span className="serif" style={{ color: 'var(--amb)' }}>
              Pay only when you earn.
            </span>
          </h2>
          <p style={{ color: '#C8D6CE', fontSize: '17px', lineHeight: 1.7 }}>
            Camp operators, tour companies, travel agencies, homestays, salons and spas list on Skiplore to fill dates and find new clients without paying for ads.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
            <div className="kpi">
              <strong>₹0 upfront</strong>
              <span>Packages and experiences pay commission only on confirmed bookings.</span>
            </div>
            <div className="kpi">
              <strong>Free to list</strong>
              <span>Services pay commission only on new clients found through Skiplore.</span>
            </div>
            <div className="kpi">
              <strong>Agencies welcome</strong>
              <span>Travel agencies can list packages alongside independent hosts.</span>
            </div>
            <div className="kpi">
              <strong>One dashboard</strong>
              <span>Manage listings, bookings and guest messages in one place.</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="https://skiplore.com/vendorsignup" target="_blank" rel="noopener noreferrer" className="btn btn-ac">
              List your business free
            </a>
            <a href="https://skiplore.com/vendorlogin" target="_blank" rel="noopener noreferrer" className="btn btn-glass">
              Partner login
            </a>
          </div>
        </div>
        <div style={{ flex: '1 1 420px', minWidth: 0 }}>
          <div className="dash float3" aria-hidden="true">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '17px' }}>
                Partner dashboard
              </strong>
              <span style={{ fontSize: '12px', color: '#5F6F67' }}>Ganga Adventure Camps</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '8px' }}>
              <div style={{ background: '#EEF2FF', borderRadius: '12px', padding: '12px' }}>
                <div style={{ fontSize: '11px', color: '#1E293B', fontWeight: 700 }}>NEW BOOKINGS</div>
                <div style={{ fontSize: '22px', fontWeight: 800 }}>1800</div>
              </div>
              <div style={{ background: '#F1F5F9', borderRadius: '12px', padding: '12px' }}>
                <div style={{ fontSize: '11px', color: '#1E293B', fontWeight: 700 }}>MESSAGES</div>
                <div style={{ fontSize: '22px', fontWeight: 800 }}>500</div>
              </div>
              <div style={{ background: '#E2E8F0', borderRadius: '12px', padding: '12px' }}>
                <div style={{ fontSize: '11px', color: '#1E293B', fontWeight: 700 }}>RATING</div>
                <div style={{ fontSize: '22px', fontWeight: 800 }}>4.8 / 5</div>
              </div>
            </div>
            <div className="drow">
              <span className="pbadge" style={{ background: '#137A7F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Waves size={16} color="#fff" />
              </span>
              <span>
                <strong>River rafting + camp</strong><br />
                <small style={{ color: '#5F6F67' }}>4 guests · 14 Dec</small>
              </span>
              <span className="r ok">Confirmed</span>
            </div>
            <div className="drow drop">
              <span className="pbadge" style={{ background: '#304DDB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Tent size={16} color="#fff" />
              </span>
              <span>
                <strong>Weekend camp, 2 nights</strong><br />
                <small style={{ color: '#5F6F67' }}>2 guests · 21 Dec</small>
              </span>
              <span className="r wait">New request</span>
            </div>
            <div className="drow">
              <span className="pbadge" style={{ background: 'var(--amb)', color: '#13261E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Edit3 size={16} />
              </span>
              <span>
                <strong>Listing: Sunrise trek</strong><br />
                <small style={{ color: '#5F6F67' }}>Availability updated</small>
              </span>
              <span className="r blue">Live</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

