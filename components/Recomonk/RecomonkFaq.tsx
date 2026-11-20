import React from 'react';

export default function RecomonkFaq() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '48px' }}>
        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="eyebrow">FAQ</div>
          <h2 className="h2">Questions, answered.</h2>
        </div>
        <div style={{ flex: '2 1 560px', minWidth: 0, borderTop: '1px solid #EDE6DD' }}>
          <details className="faq" open>
            <summary>What is Recomonk?</summary>
            <p>
              Recomonk is a product recommendation site. We publish buying guides, comparisons and best-of lists for products sold on Amazon, across ten categories from home and kitchen to tech and gifts.
            </p>
          </details>
          <details className="faq">
            <summary>Do I buy products on Recomonk?</summary>
            <p>
              No. Each pick links to Amazon, where you see the live price and buy with Amazon&apos;s own checkout, delivery and returns.
            </p>
          </details>
          <details className="faq">
            <summary>Is Recomonk free?</summary>
            <p>Yes. Reading guides, saving a wishlist and joining the newsletter are all free.</p>
          </details>
          <details className="faq">
            <summary>How does Recomonk make money?</summary>
            <p>
              Recomonk may earn a commission from qualifying purchases made through our links. This does not change the price you pay.
            </p>
          </details>
          <details className="faq">
            <summary>How current are the prices?</summary>
            <p>
              Guides are updated regularly, but prices and availability on Amazon can change at any time. Always check the final price on Amazon before you buy.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}

