import React from 'react';

export default function ContentTypes() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-h">
          <div style={{ maxWidth: '760px' }}>
            <div className="eyebrow" style={{ marginBottom: '14px' }}>
              How we help you choose
            </div>
            <h2 className="h2">The right format for every buying decision.</h2>
          </div>
        </div>
        <div className="ctypes">
          <div className="ctype" style={{ background: '#FFF7ED' }}>
            <h3>Buying guides</h3>
            <p>Everything to know before you buy, with our top picks for different needs and budgets.</p>
            <span className="ex">
              &ldquo;Best Acne Treatments in 2026: Dermatologist-Recommended Solutions for Every Acne Type&rdquo;
            </span>
          </div>
          <div className="ctype" style={{ background: '#EFF6FF' }}>
            <h3>Head-to-head comparisons</h3>
            <p>Torn between two options? We put them side by side and tell you which one fits you.</p>
            <span className="ex">&ldquo;Water Flossers vs. String Floss: Which Should You Buy?&rdquo;</span>
          </div>
          <div className="ctype" style={{ background: '#F0FDF4' }}>
            <h3>Best-of roundups</h3>
            <p>Curated lists of standout products in one category, ready to shop.</p>
            <span className="ex">
              &ldquo;Cozy on a Budget: 10 Amazon Decor Pieces That Make Any Room Feel Styled&rdquo;
            </span>
          </div>
          <div className="ctype" style={{ background: '#FDF2F8' }}>
            <h3>Style and trend guides</h3>
            <p>What to wear and buy this season, with pieces you can order today.</p>
            <span className="ex">&ldquo;Comfortable High Heels in 2026: Pick Pairs That Won&apos;t Hurt&rdquo;</span>
          </div>
          <div className="ctype" style={{ background: '#FEFCE8' }}>
            <h3>Deals and top clicked</h3>
            <p>Today&apos;s most-clicked products and price drops, flagged with &ldquo;A very good deal!&rdquo;</p>
            <span className="ex">Today&apos;s Top Clicked, refreshed daily</span>
          </div>
          <div className="ctype" style={{ background: '#F5F3FF' }}>
            <h3>Gift guides</h3>
            <p>Ideas sorted by occasion, recipient, interest and budget, for when you are stuck.</p>
            <span className="ex">Gifts for her, for him, for kids, under $25</span>
          </div>
        </div>
      </div>
    </section>
  );
}

