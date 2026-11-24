import React from 'react';
import Link from 'next/link';
import { TrendingDown, Heart } from 'lucide-react';

export default function RecomonkHero() {
  return (
    <section className="rm-hero" id="top">
      <div className="wrap" style={{ paddingTop: '28px', paddingBottom: '96px' }}>
        <nav className="crumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link> <span aria-hidden="true">/</span>{' '}
          <Link href="/products">Products</Link> <span aria-hidden="true">/</span>{' '}
          <span>Recomonk</span>
        </nav>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '56px',
            alignItems: 'center',
            marginTop: '56px',
          }}
        >
          <div
            style={{
              flex: '1.2 1 520px',
              minWidth: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '22px',
            }}
          >
            <span className="rm-pill rise" style={{ alignSelf: 'flex-start' }}>
              <b>Content platform</b> Product recommendations and buying guides · built by Accugile
            </span>
            <h1 className="rm-name rise rise2">
              Reco<i>monk</i>
            </h1>
            <p className="rm-tag rise rise2">
              The best products on Amazon,{' '}
              <span className="serif" style={{ color: 'var(--ac)', fontSize: '1.1em' }}>
                picked so you don&apos;t have to.
              </span>
            </p>
            <p className="rm-lead rise rise3">
              Recomonk turns Amazon&apos;s endless listings into clear buying guides, head-to-head comparisons and best-of lists. Read the short version, see the top picks and buy straight from Amazon with confidence.
            </p>
            <div
              className="rise rise3"
              style={{
                display: 'flex',
                gap: '14px',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              <a
                href="https://recomonk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ac"
                style={{ fontSize: '17px', padding: '18px 30px', minHeight: '58px' }}
              >
                Find the best picks on Recomonk
                <svg width="16" height="16" viewBox="0 0 14 14" aria-hidden="true">
                  <path
                    d="M2 7 H12 M8 3 L12 7 L8 11"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              {/* <a
                href="https://recomonk.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#1C1917',
                  fontWeight: 600,
                  fontSize: '15px',
                  borderBottom: '1px solid #D6CFC6',
                  paddingBottom: '2px',
                }}
              >
                Have a product to feature? Work with us →
              </a> */}
            </div>
            <div className="rm-trust rise rise4">
              <span>Free to read</span>
              <span>Updated daily</span>
              <span>Buy directly on Amazon</span>
              <span>Deals and price drops highlighted</span>
            </div>
          </div>

          <div
            className="rise rise4"
            style={{
              flex: '1 1 400px',
              minWidth: 0,
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div className="art float3" aria-hidden="true">
              <div className="art-h">
                <div className="cat">Tech · Buying guide</div>
                <h4>Best Headphones for Every Budget</h4>
                <div className="by">Updated this week · 6 min read</div>
              </div>
              <div className="pick">
                <div className="pimg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=240&q=70"
                    alt=""
                  />
                </div>
                <div>
                  <span className="lbl">Best overall</span>
                  <strong>Wireless noise-cancelling headphones</strong>
                  <div className="row">
                    <span className="now">From $9</span>
                    <span className="was">$12</span>
                    <span className="off">-25%</span>
                    <span className="amz">FROM AMAZON</span>
                  </div>
                </div>
              </div>
              <div className="pick">
                <div className="pimg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=240&q=70"
                    alt=""
                  />
                </div>
                <div>
                  <span className="lbl" style={{ background: '#FFEDD5', color: '#9A3412' }}>
                    Best value
                  </span>
                  <strong>Everyday smartwatch</strong>
                  <div className="row">
                    <span className="now">From $44</span>
                    <span className="deal">A VERY GOOD DEAL!</span>
                    <span className="amz">FROM AMAZON</span>
                  </div>
                </div>
              </div>
              <div className="pick">
                <div className="pimg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=240&q=70"
                    alt=""
                  />
                </div>
                <div>
                  <span className="lbl" style={{ background: '#EDE9FE', color: '#5B21B6' }}>
                    Premium pick
                  </span>
                  <strong>Instant camera</strong>
                  <div className="row">
                    <span className="now">From $125</span>
                    <span className="amz">FROM AMAZON</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="sticker float1" style={{ left: '-30px', top: '-28px' }} aria-hidden="true">
              <span className="ico" style={{ background: '#DCFCE7', color: '#166534', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <TrendingDown size={18} strokeWidth={2.5} />
              </span>
              <span>
                <strong>Price dropped</strong>
                <small>Now 20% off on Amazon</small>
              </span>
            </div>
            <div className="sticker float2" style={{ right: '-16px', bottom: '30px' }} aria-hidden="true">
              <span className="ico" style={{ background: '#FFEDD5', color: 'var(--ac)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Heart size={18} fill="currentColor" />
              </span>
              <span>
                <strong>Saved to wishlist</strong>
                <small>3 picks for Mom&apos;s birthday</small>
              </span>
            </div>
          </div>
        </div>
        <p className="disc" style={{ marginTop: '40px' }}>
          Recomonk may earn commissions from qualifying purchases. Prices and availability may change.
        </p>
      </div>
    </section>
  );
}

