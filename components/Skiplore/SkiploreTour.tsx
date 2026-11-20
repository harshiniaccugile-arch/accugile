'use client';

import React, { useState } from 'react';
import { Tent, Coffee, Waves, Check, Star, Sparkles, Heart, Bell } from 'lucide-react';

export default function SkiploreTour() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="sec" id="features">
      <div className="wrap">
        <div className="sec-h">
          <div style={{ maxWidth: '760px' }}>
            <div className="eyebrow" style={{ marginBottom: '14px' }}>
              Product tour
            </div>
            <h2 className="h2">From first search to the trip itself, all in one app.</h2>
          </div>
        </div>

        <div className="ftabs" role="tablist" aria-label="Skiplore features">
          <button
            className={`ftab ${activeTab === 1 ? 'on' : ''}`}
            onClick={() => setActiveTab(1)}
            role="tab"
            aria-selected={activeTab === 1}
          >
            Discover
          </button>
          <button
            className={`ftab ${activeTab === 2 ? 'on' : ''}`}
            onClick={() => setActiveTab(2)}
            role="tab"
            aria-selected={activeTab === 2}
          >
            Compare &amp; trust
          </button>
          <button
            className={`ftab ${activeTab === 3 ? 'on' : ''}`}
            onClick={() => setActiveTab(3)}
            role="tab"
            aria-selected={activeTab === 3}
          >
            Book &amp; pay
          </button>
          <button
            className={`ftab ${activeTab === 4 ? 'on' : ''}`}
            onClick={() => setActiveTab(4)}
            role="tab"
            aria-selected={activeTab === 4}
          >
            Chat with hosts
          </button>
          <button
            className={`ftab ${activeTab === 5 ? 'on' : ''}`}
            onClick={() => setActiveTab(5)}
            role="tab"
            aria-selected={activeTab === 5}
          >
            Your dashboard
          </button>
        </div>

        {/* Panel 1 */}
        <div className="fpanel" hidden={activeTab !== 1}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <span className="num">01 / 05</span>
            <h3>Find something worth the trip in seconds.</h3>
            <p className="lead">
              Search by destination, dates, travellers and trip length, or browse by theme. Every result is a real listing from a local provider, not a reseller.
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li className="tick">Packages, day experiences and services in one search</li>
              <li className="tick">Filter trips by length, from 1–3 days to 13+ days</li>
              <li className="tick">Nine travel themes, from honeymoon to wildlife</li>
              <li className="tick">Destination guides and travel tips on the blog</li>
            </ul>
          </div>
          <div className="fvis">
            <div className="mini">
              <strong>Coorg</strong>
              <span style={{ color: '#5F6F67' }}>· Packages &amp; tours · 2 adults</span>
              <span className="r" style={{ background: '#EEF2FF', color: 'var(--ac)' }}>Search</span>
            </div>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              <span className="badge b-ver">1–3 days</span>
              <span className="badge" style={{ background: '#FFFFFF', border: '1px solid #E3E8E4' }}>4–6 days</span>
              <span className="badge" style={{ background: '#FFFFFF', border: '1px solid #E3E8E4' }}>Camping &amp; Glamping</span>
            </div>
            <div className="mini">
              <span className="pbadge" style={{ background: '#304DDB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Tent size={16} color="#fff" />
              </span>
              <span>
                <strong>Riverside Glamping Weekend</strong><br />
                <small style={{ color: '#5F6F67' }}>Coorg · 3 nights</small>
              </span>
              <span className="r b-inst">Instant</span>
            </div>
            <div className="mini">
              <span className="pbadge" style={{ background: '#4361EE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Coffee size={16} color="#fff" />
              </span>
              <span>
                <strong>Street Food &amp; Coffee Trail</strong><br />
                <small style={{ color: '#5F6F67' }}>Coimbatore · Half day</small>
              </span>
              <span className="r b-loc">Local Favourite</span>
            </div>
            <div className="mini">
              <span className="pbadge" style={{ background: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Waves size={16} color="#fff" />
              </span>
              <span>
                <strong>Ganga Adventure Camp</strong><br />
                <small style={{ color: '#5F6F67' }}>Rishikesh · 2 nights</small>
              </span>
              <span className="r b-new">New</span>
            </div>
          </div>
        </div>

        {/* Panel 2 */}
        <div className="fpanel" hidden={activeTab !== 2}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <span className="num">02 / 05</span>
            <h3>Know exactly who you are booking with.</h3>
            <p className="lead">
              Every operator is background-checked before they can list. Reviews come only from verified bookings, and clear badges show what makes each listing stand out.
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li className="tick">Skiplore-verified badge on approved providers</li>
              <li className="tick">&ldquo;Verified booking&rdquo; tag on every review</li>
              <li className="tick">Fixed itineraries with clear pricing</li>
              <li className="tick">Real stories from travellers in Skip Stories</li>
            </ul>
          </div>
          <div className="fvis">
            <div className="mini" style={{ flexDirection: 'column', alignItems: 'stretch', gap: '8px' }}>
              <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong>Verified guest · Bengaluru</strong>
                <span style={{ color: '#E8A33D', display: 'inline-flex', gap: '2px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#E8A33D" />
                  ))}
                </span>
              </span>
              <span style={{ color: '#4D5D55' }}>&ldquo;The tents were spotless and the host knew every trail by the river.&rdquo;</span>
              <span className="badge b-ver" style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <Check size={12} strokeWidth={2.5} /> Verified booking
              </span>
            </div>
            <div className="mini">
              <span className="pbadge" style={{ background: 'var(--ac)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <Check size={16} strokeWidth={2.5} />
              </span>
              <span>
                <strong>Operator verified</strong><br />
                <small style={{ color: '#5F6F67' }}>Background-checked before listing</small>
              </span>
            </div>
            <div className="mini">
              <span className="pbadge" style={{ background: 'var(--amb)', color: '#13261E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Star size={16} fill="currentColor" />
              </span>
              <span>
                <strong>Top Rated</strong><br />
                <small style={{ color: '#5F6F67' }}>Consistently high guest ratings</small>
              </span>
            </div>
          </div>
        </div>

        {/* Panel 3 */}
        <div className="fpanel" hidden={activeTab !== 3}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <span className="num">03 / 05</span>
            <h3>Add to cart. Pay once. Get confirmed.</h3>
            <p className="lead">
              Combine a package, a day experience and a spa visit in one cart and check out with one tap. Your payment is held securely and you only pay when the booking is confirmed.
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li className="tick">One cart for packages, experiences and services</li>
              <li className="tick">One-tap checkout</li>
              <li className="tick">Instant confirmation on Instant Booking listings</li>
              <li className="tick">Free cancellation up to 24 hours before, on most listings</li>
            </ul>
          </div>
          <div className="fvis">
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#5F6F67', textTransform: 'uppercase', letterSpacing: '.08em' }}>
              Your cart · 2 items
            </div>
            <div className="mini">
              <span className="pbadge" style={{ background: '#304DDB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Tent size={16} color="#fff" />
              </span>
              <span>
                <strong>Riverside Glamping Weekend</strong><br />
                <small style={{ color: '#5F6F67' }}>Coorg · 2 adults</small>
              </span>
              <span style={{ marginLeft: 'auto', fontWeight: 700 }}>₹[X,XXX]</span>
            </div>
            <div className="mini">
              <span className="pbadge" style={{ background: '#7A4E8F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sparkles size={16} color="#fff" />
              </span>
              <span>
                <strong>Ayurvedic massage, 60 min</strong><br />
                <small style={{ color: '#5F6F67' }}>Local service · Sat 5 pm</small>
              </span>
              <span style={{ marginLeft: 'auto', fontWeight: 700 }}>₹[X,XXX]</span>
            </div>
            <div
              className="mini drop"
              style={{
                background: 'var(--ac)',
                color: '#FFFFFF',
                borderColor: 'var(--ac)',
                justifyContent: 'center',
                fontWeight: 700,
              }}
            >
              Pay securely and confirm
            </div>
          </div>
        </div>

        {/* Panel 4 */}
        <div className="fpanel" hidden={activeTab !== 4}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <span className="num">04 / 05</span>
            <h3>Ask the host anything, right inside Skiplore.</h3>
            <p className="lead">
              Pickup times, what to pack, dietary needs: message your host directly in the app before and after you book, with the whole conversation saved next to your booking.
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li className="tick">In-app messages with hosts and providers</li>
              <li className="tick">Conversation linked to each booking</li>
              <li className="tick">Booking updates in one place</li>
            </ul>
          </div>
          <div className="fvis">
            <div className="chat">
              <div className="msg me">Hi! Is the camp okay for a 6-year-old?</div>
              <div className="msg them">Absolutely. We have a family tent and the river spot is shallow and supervised.</div>
              <div className="msg me">Great. What time is pickup?</div>
              <div className="msg them ln">7 am from the Madikeri bus stand. See you there!</div>
            </div>
          </div>
        </div>

        {/* Panel 5 */}
        <div className="fpanel" hidden={activeTab !== 5}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <span className="num">05 / 05</span>
            <h3>Every trip, saved and organised.</h3>
            <p className="lead">
              Your bookings, wishlist and messages live in one dashboard. Save sold-out experiences and get notified the moment they reopen.
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li className="tick">My bookings with status and details</li>
              <li className="tick">Wishlist to save trips for later</li>
              <li className="tick">Alerts when a sold-out experience reopens</li>
              <li className="tick">Share your own discoveries as Skip Stories</li>
            </ul>
          </div>
          <div className="fvis">
            <div className="mini">
              <span className="pbadge" style={{ background: '#304DDB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Tent size={16} color="#fff" />
              </span>
              <span>
                <strong>Riverside Glamping Weekend</strong><br />
                <small style={{ color: '#5F6F67' }}>12–15 Dec</small>
              </span>
              <span className="r ok">Confirmed</span>
            </div>
            <div className="mini">
              <span className="pbadge" style={{ background: '#137A7F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Waves size={16} color="#fff" />
              </span>
              <span>
                <strong>Backwater kayak trail</strong><br />
                <small style={{ color: '#5F6F67' }}>Wishlist</small>
              </span>
              <span className="r" style={{ background: '#FFF1D6', color: '#7A4B00', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <Heart size={12} fill="currentColor" /> Saved
              </span>
            </div>
            <div className="mini drop">
              <span className="pbadge" style={{ background: 'var(--amb)', color: '#13261E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Bell size={16} />
              </span>
              <span>
                <strong>Sunrise trek is open again</strong><br />
                <small style={{ color: '#5F6F67' }}>2 spots for 20 Dec</small>
              </span>
              <span className="r b-lim">Book now</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

