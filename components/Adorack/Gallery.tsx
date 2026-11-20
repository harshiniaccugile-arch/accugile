import React from 'react';

export default function Gallery() {
  return (
    <section className="sec" style={{ paddingTop: 0, background: '#F7F8FB' }}>
      <div className="wrap">
        <div className="sec-h" style={{ marginBottom: '28px' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: '12px' }}>
              Inside Adorack
            </div>
            <h2 className="h2" style={{ fontSize: 'clamp(26px, 2.6vw, 34px)' }}>
              A closer look at the tools your team will use daily.
            </h2>
          </div>
        </div>
        <div className="gal">
          <figure>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://adorack.com/Carousel_cards/card1.png"
                alt="Adorack AI assistant generating social media content"
                loading="lazy"
              />
            </div>
            <figcaption>
              Get a boost from AI <span>→</span>
            </figcaption>
          </figure>
          <figure>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://adorack.com/Carousel_cards/card2.png"
                alt="Company and workspace management in Adorack"
                loading="lazy"
              />
            </div>
            <figcaption>
              Company management <span>→</span>
            </figcaption>
          </figure>
          <figure>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://adorack.com/Carousel_cards/card4.png"
                alt="Send later scheduling in Adorack"
                loading="lazy"
              />
            </div>
            <figcaption>
              Send later <span>→</span>
            </figcaption>
          </figure>
          <figure>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://adorack.com/Carousel_cards/card5.png"
                alt="Team workflows in Adorack"
                loading="lazy"
              />
            </div>
            <figcaption>
              Workflows <span>→</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

