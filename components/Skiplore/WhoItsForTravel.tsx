import React from 'react';

export default function WhoItsForTravel() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-h">
          <div style={{ maxWidth: '760px' }}>
            <div className="eyebrow" style={{ marginBottom: '14px' }}>
              Made for every kind of traveller
            </div>
            <h2 className="h2">Whoever you travel with, there is a story waiting.</h2>
          </div>
        </div>
        <div className="grid g4">
          <div className="box" style={{ background: '#F8FAFC', borderColor: '#E2E8F0' }}>
            <h3>Couples</h3>
            <p>Honeymoon escapes, glamping weekends and spa days, booked together in one cart.</p>
          </div>
          <div className="box" style={{ background: '#EEF2FF', borderColor: '#E0E7FF' }}>
            <h3>Families</h3>
            <p>Family packages with kid-friendly hosts you can message before you book.</p>
          </div>
          <div className="box" style={{ background: '#F8FAFC', borderColor: '#E2E8F0' }}>
            <h3>Friends and groups</h3>
            <p>Treks, water activities and camps sized for the whole gang.</p>
          </div>
          <div className="box" style={{ background: '#EEF2FF', borderColor: '#E0E7FF' }}>
            <h3>Solo explorers</h3>
            <p>Verified hosts and real reviews make it easy to go alone with confidence.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

