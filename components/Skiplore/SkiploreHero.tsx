import React from 'react';
import Link from 'next/link';
import { Check, Heart, Star, Zap, MessageSquare } from 'lucide-react';

export default function SkiploreHero() {
  return (
    <section className="sk-hero" id="top">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="bg"
        src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=2000&q=75"
        alt=""
      />
      <div className="wrap" style={{ paddingTop: '28px', paddingBottom: '96px' }}>
        <nav className="crumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link> <span aria-hidden="true">/</span>{' '}
          <Link href="/products">Products</Link> <span aria-hidden="true">/</span>{' '}
          <span>Skiplore</span>
        </nav>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '48px',
            alignItems: 'center',
            marginTop: '56px',
          }}
        >
          <div
            style={{
              flex: '1.3 1 560px',
              minWidth: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '22px',
            }}
          >
            <span className="sk-pill rise" style={{ alignSelf: 'flex-start' }}>
              <b>Marketplace</b> Travel and local experiences across India · built by Accugile
            </span>
            <h1 className="sk-name rise rise2">
              Skip<i>lore</i>
            </h1>
            <p className="sk-tag rise rise2">
              Skip the ordinary.{' '}
              <span className="serif" style={{ color: 'var(--amb)', fontSize: '1.12em' }}>
                Find your next story.
              </span>
            </p>
            <p className="sk-lead rise rise3">
              Handpicked travel packages, day experiences and local services across India, booked directly with verified local providers. One app for the retreat, the trek and the spa afterwards.
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
                href="https://skiplore.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-amb"
                style={{ fontSize: '17px', padding: '18px 30px', minHeight: '58px' }}
              >
                Explore trips on Skiplore
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
              <a
                href="https://skiplore.com/vendorsignup"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#CBD5E1',
                  fontWeight: 600,
                  fontSize: '15px',
                  borderBottom: '1px solid rgba(255,255,255,.4)',
                  paddingBottom: '2px',
                }}
              >
                Run a camp, tour or spa? List it free →
              </a>
            </div>

            <div className="sk-trust rise rise4">
              <span>Verified hosts</span>
              <span>Secure payments</span>
              <span>Instant confirmation</span>
              <span>Free cancellation on most listings</span>
            </div>
          </div>

          {/* floating listing mock */}
          <div
            className="hide-sm rise rise4"
            style={{
              flex: '1 1 360px',
              minWidth: 0,
              position: 'relative',
              height: '520px',
            }}
          >
            <div className="lcard float1" style={{ position: 'absolute', right: '30px', top: '10px' }}>
              <div className="skph">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=700&q=75"
                  alt=""
                />
                <span className="badge b-ver" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Check size={12} strokeWidth={2.5} /> Verified Host
                </span>
                <span className="heart" aria-hidden="true" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Heart size={16} fill="currentColor" />
                </span>
              </div>
              <div className="bd">
                <div className="meta">
                  <span>Coorg, Karnataka</span>
                  <span>3 nights</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                    <Star size={13} fill="currentColor" color="#D97706" /> 4.9
                  </span>
                </div>
                <h4>Riverside Glamping Weekend</h4>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  <span className="badge b-inst" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <Zap size={12} fill="currentColor" /> Instant Booking
                  </span>
                  <span className="badge b-top" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <Star size={12} fill="currentColor" /> Top Rated
                  </span>
                </div>
                <div className="pr">
                  <span>
                    <small>from</small>
                    <br />
                    <strong>₹[X,XXX]</strong> <small>/ person</small>
                  </span>
                  <span className="badge b-lim">Few spots left</span>
                </div>
              </div>
            </div>
            <div className="toast float2" style={{ left: 0, top: '400px' }}>
              <span className="ico" style={{ background: 'var(--ac)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <Check size={16} strokeWidth={2.5} />
              </span>
              <span>
                <strong>Booking confirmed</strong>
                <small>Pay only when confirmed</small>
              </span>
            </div>
            <div className="toast float3" style={{ right: 0, bottom: 0 }}>
              <span className="ico" style={{ background: 'var(--amb)', color: '#13261E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MessageSquare size={16} />
              </span>
              <span>
                <strong>New message from your host</strong>
                <small>&ldquo;Pickup at 7 am from the bus stand.&rdquo;</small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

