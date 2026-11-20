import React from 'react';
import { Check, Star, Zap, Heart, Hourglass, Sparkles } from 'lucide-react';

export default function ListingBadges() {
  return (
    <section className="sec" style={{ background: 'var(--cream)' }}>
      <div className="wrap">
        <div className="sec-h">
          <div style={{ maxWidth: '760px' }}>
            <div className="eyebrow" style={{ marginBottom: '14px' }}>
              Listing badges
            </div>
            <h2 className="h2">Six badges that make choosing easy.</h2>
          </div>
          <p style={{ maxWidth: '420px', color: '#4D5D55', fontSize: '16px', lineHeight: 1.6 }}>
            Every listing card shows at a glance who runs it, how it books and how fast it is selling.
          </p>
        </div>
        <div className="bgrid">
          <div>
            <span className="badge b-ver" style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <Check size={14} strokeWidth={2.5} /> Verified Host
            </span>
            <p>The provider has passed Skiplore&apos;s background and document checks.</p>
          </div>
          <div>
            <span className="badge b-top" style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <Star size={14} fill="currentColor" /> Top Rated
            </span>
            <p>Consistently excellent reviews from verified bookings.</p>
          </div>
          <div>
            <span className="badge b-inst" style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <Zap size={14} fill="currentColor" /> Instant Booking
            </span>
            <p>Confirmed the moment you pay, with no waiting for approval.</p>
          </div>
          <div>
            <span className="badge b-loc" style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <Heart size={14} fill="currentColor" /> Local Favourite
            </span>
            <p>Loved and recommended by people who live there.</p>
          </div>
          <div>
            <span className="badge b-lim" style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <Hourglass size={14} /> Limited Availability
            </span>
            <p>Only a few spots or dates left for this listing.</p>
          </div>
          <div>
            <span className="badge b-new" style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <Sparkles size={14} /> New Listing
            </span>
            <p>Recently added. Be among the first to try it.</p>
          </div>
        </div>
      </div>
    </section>
  );
}