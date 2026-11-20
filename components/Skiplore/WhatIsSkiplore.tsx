import React from 'react';
import { Check, ShieldCheck, RefreshCw, MessageSquare } from 'lucide-react';

export default function WhatIsSkiplore() {
  return (
    <section className="sec what">
      <div className="wrap">
        <div
          style={{
            textAlign: 'center',
            maxWidth: '820px',
            margin: '0 auto 48px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            alignItems: 'center',
          }}
        >
          <div className="eyebrow">What is Skiplore?</div>
          <h2 className="h2">
            India&apos;s marketplace for real local trips,{' '}
            <span className="serif" style={{ color: 'var(--ac)' }}>
              booked straight from the people who run them.
            </span>
          </h2>
          <p className="lead" style={{ fontSize: '17.5px' }}>
            Skiplore connects you with verified local hosts, camp operators, tour companies and service providers. No middlemen reselling the same trip. You see the real itinerary, chat with the host and pay securely in one place.
          </p>
        </div>
        <div className="flow">
          <div>
            <div className="fph">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=70"
                alt=""
                loading="lazy"
              />
              <span className="stepn">1</span>
            </div>
            <div className="flb">
              <h3>Discover</h3>
              <p>Browse handpicked packages, day experiences and local services by theme, destination or trip length.</p>
            </div>
          </div>
          <div>
            <div className="fph">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=70"
                alt=""
                loading="lazy"
              />
              <span className="stepn">2</span>
            </div>
            <div className="flb">
              <h3>Book with confidence</h3>
              <p>Pick a verified host, read verified reviews and pay securely. Most listings have free cancellation up to 24 hours before.</p>
            </div>
          </div>
          <div>
            <div className="fph">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=70"
                alt=""
                loading="lazy"
              />
              <span className="stepn">3</span>
            </div>
            <div className="flb">
              <h3>Live the story</h3>
              <p>Meet your host, enjoy the trip, add a spa or a food trail on the way, and share your Skip Story after.</p>
            </div>
          </div>
        </div>
        <div className="promise">
          <div>
            <i style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Check size={18} strokeWidth={2.5} />
            </i>
            <span>
              <strong>Verified hosts</strong>
              <span>Every operator is background-checked</span>
            </span>
          </div>
          <div>
            <i style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={18} />
            </i>
            <span>
              <strong>Pay only when confirmed</strong>
              <span>Secure checkout for every booking</span>
            </span>
          </div>
          <div>
            <i style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <RefreshCw size={18} />
            </i>
            <span>
              <strong>Free cancellation</strong>
              <span>Up to 24 hours before, on most listings</span>
            </span>
          </div>
          <div>
            <i style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MessageSquare size={18} />
            </i>
            <span>
              <strong>Talk to your host</strong>
              <span>In-app messages before and after booking</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

