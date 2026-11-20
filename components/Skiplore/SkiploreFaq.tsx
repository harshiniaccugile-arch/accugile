import React from 'react';

export default function SkiploreFaq() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '48px' }}>
        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="eyebrow">FAQ</div>
          <h2 className="h2">Questions, answered.</h2>
        </div>
        <div style={{ flex: '2 1 560px', minWidth: 0, borderTop: '1px solid #E3E8E4' }}>
          <details className="faq" open>
            <summary>What can I book on Skiplore?</summary>
            <p>
              Multi-day travel packages and tours, day experiences such as treks and food trails, and local services such as salons, spas, fitness and home services.
            </p>
          </details>
          <details className="faq">
            <summary>How are hosts verified?</summary>
            <p>
              Every operator is background-checked before their listings go live, and verified providers carry the Skiplore-verified badge.
            </p>
          </details>
          <details className="faq">
            <summary>When do I pay, and is it safe?</summary>
            <p>
              You pay securely at checkout and only pay when your booking is confirmed. Instant Booking listings confirm straight away.
            </p>
          </details>
          <details className="faq">
            <summary>Can I cancel?</summary>
            <p>
              Most listings offer free cancellation up to 24 hours before the start time. The exact policy is shown on each listing before you book.
            </p>
          </details>
          <details className="faq">
            <summary>I run a camp, tour company or salon. What does it cost to list?</summary>
            <p>
              There is no upfront cost. Packages and experiences pay commission only on confirmed bookings. Services are free to list and pay commission only on new clients found through Skiplore.
            </p>
          </details>
          <details className="faq">
            <summary>Can travel agencies list packages?</summary>
            <p>Yes. Skiplore is open to agencies as well as independent hosts and operators.</p>
          </details>
        </div>
      </div>
    </section>
  );
}

