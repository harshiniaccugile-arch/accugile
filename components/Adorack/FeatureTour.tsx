'use client';

import React, { useState } from 'react';

export default function FeatureTour() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="sec" id="features" style={{ background: '#F7F8FB' }}>
      <div className="wrap">
        <div className="sec-h">
          <div style={{ maxWidth: '760px' }}>
            <div className="eyebrow" style={{ marginBottom: '14px' }}>
              Product tour
            </div>
            <h2 className="h2">Everything your team needs, in one place.</h2>
          </div>
        </div>

        <div className="ftabs" role="tablist" aria-label="Adorack features">
          <button
            className={`ftab ${activeTab === 1 ? 'on' : ''}`}
            onClick={() => setActiveTab(1)}
            role="tab"
            aria-selected={activeTab === 1}
          >
            Composer &amp; AI
          </button>
          <button
            className={`ftab ${activeTab === 2 ? 'on' : ''}`}
            onClick={() => setActiveTab(2)}
            role="tab"
            aria-selected={activeTab === 2}
          >
            Calendar &amp; Queue
          </button>
          <button
            className={`ftab ${activeTab === 3 ? 'on' : ''}`}
            onClick={() => setActiveTab(3)}
            role="tab"
            aria-selected={activeTab === 3}
          >
            Campaigns &amp; Categories
          </button>
          <button
            className={`ftab ${activeTab === 4 ? 'on' : ''}`}
            onClick={() => setActiveTab(4)}
            role="tab"
            aria-selected={activeTab === 4}
          >
            Workspaces &amp; Approvals
          </button>
          <button
            className={`ftab ${activeTab === 5 ? 'on' : ''}`}
            onClick={() => setActiveTab(5)}
            role="tab"
            aria-selected={activeTab === 5}
          >
            Library &amp; RSS
          </button>
        </div>

        {/* Panel 1 */}
        <div className="fpanel" hidden={activeTab !== 1}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <span className="num">01 / 05</span>
            <h3>Write once, publish to every network.</h3>
            <p className="lead">
              Select the accounts, tag the campaign and category, and post or schedule from a single composer. Stuck for words? The AI assistant drafts captions and hashtags in seconds.
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li className="tick">Multi-network publishing from one post</li>
              <li className="tick">Post variations per network</li>
              <li className="tick">Draft, submit for approval or publish</li>
              <li className="tick">Bulk scheduling and recurring posts</li>
            </ul>
          </div>
          <div className="fvis">
            <div className="mini">
              <span className="pbadge fb">f</span>
              <span><strong>Facebook</strong> · Brightwave Page</span>
              <span className="r ok">Selected</span>
            </div>
            <div className="mini">
              <span className="pbadge ig">IG</span>
              <span><strong>Instagram</strong> · @brightwave</span>
              <span className="r ok">Selected</span>
            </div>
            <div className="mini">
              <span className="pbadge li">in</span>
              <span><strong>LinkedIn</strong> · Brightwave Inc.</span>
              <span className="r ok">Selected</span>
            </div>
            <div className="mini" style={{ flexDirection: 'column', alignItems: 'stretch', gap: '8px' }}>
              <span style={{ fontSize: '12px', color: '#6D28D9', fontWeight: 700 }}>✦ Adorack AI</span>
              <span className="ln">Announcing our summer collection: lighter fabrics, bolder colours.</span>
              <span className="ln ln2" style={{ color: 'var(--ac)' }}>#SummerCollection #Fashion</span>
            </div>
          </div>
        </div>

        {/* Panel 2 */}
        <div className="fpanel" hidden={activeTab !== 2}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <span className="num">02 / 05</span>
            <h3>See the whole month. Fill gaps automatically.</h3>
            <p className="lead">
              Plan visually on a drag-and-drop content calendar, or set your preferred time slots once and let the queue publish posts into the next free slot for you.
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li className="tick">Drag-and-drop content calendar</li>
              <li className="tick">Time-slot and queue scheduling</li>
              <li className="tick">Recurring schedules and post recycling</li>
              <li className="tick">Workspace time zones for global teams</li>
            </ul>
          </div>
          <div className="fvis">
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#5B6474', textTransform: 'uppercase', letterSpacing: '.08em' }}>
              Queue · Instagram
            </div>
            <div className="mini">
              <span style={{ fontWeight: 800, width: '70px' }}>Mon 10:00</span>
              <span>New blog: 5 reel ideas</span>
              <span className="r blue">Queued</span>
            </div>
            <div className="mini">
              <span style={{ fontWeight: 800, width: '70px' }}>Tue 18:30</span>
              <span>Summer sale is live</span>
              <span className="r blue">Queued</span>
            </div>
            <div className="mini drop">
              <span style={{ fontWeight: 800, width: '70px' }}>Thu 10:00</span>
              <span>20% off this weekend</span>
              <span className="r ok">Just added</span>
            </div>
            <div className="mini" style={{ borderStyle: 'dashed', color: '#5B6474' }}>
              <span style={{ fontWeight: 800, width: '70px' }}>Fri 10:00</span>
              <span>Free slot</span>
            </div>
          </div>
        </div>

        {/* Panel 3 */}
        <div className="fpanel" hidden={activeTab !== 3}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <span className="num">03 / 05</span>
            <h3>Run campaigns, not just posts.</h3>
            <p className="lead">
              Group posts into campaigns to plan, schedule and track a launch as one unit. Colour-coded categories keep your content mix balanced and easy to scan.
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li className="tick">Unlimited campaigns and categories on every plan</li>
              <li className="tick">Campaign scheduling and tracking</li>
              <li className="tick">Custom categories with colours and descriptions</li>
              <li className="tick">Cross-channel performance analytics</li>
            </ul>
          </div>
          <div className="fvis">
            <div className="mini">
              <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#E0782B' }}></span>
              <span><strong>Summer Promo</strong> · 14 posts · 6 networks</span>
              <span className="r ok">Active</span>
            </div>
            <div className="mini">
              <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#0E9F6E' }}></span>
              <span><strong>Product Launches</strong> · New feature rollouts</span>
              <span className="r blue">Category</span>
            </div>
            <div className="mini">
              <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#304DDB' }}></span>
              <span><strong>Updates</strong> · Company news</span>
              <span className="r blue">Category</span>
            </div>
            <div className="mini">
              <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#8B5CF6' }}></span>
              <span><strong>Webinar Week</strong> · 8 posts</span>
              <span className="r wait">Scheduled</span>
            </div>
          </div>
        </div>

        {/* Panel 4 */}
        <div className="fpanel" hidden={activeTab !== 4}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <span className="num">04 / 05</span>
            <h3>A separate workspace for every brand and client.</h3>
            <p className="lead">
              Each workspace keeps its own accounts, library, calendar and team. Invite people with the right role and set approval rules so nothing goes live without sign-off.
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li className="tick">Multi-brand workspaces under one login</li>
              <li className="tick">Admin, Member and Limited Access roles</li>
              <li className="tick">Custom approval methods per member</li>
              <li className="tick">Pending and rejected posts on your dashboard</li>
            </ul>
          </div>
          <div className="fvis">
            <div className="mini">
              <span className="pbadge" style={{ background: '#FF8A3D' }}>B</span>
              <span><strong>Brightwave Agency</strong></span>
              <span className="r blue">Owned by you</span>
            </div>
            <div className="mini">
              <span className="pbadge" style={{ background: '#0E9F6E' }}>N</span>
              <span><strong>Nova Foods</strong></span>
              <span className="r blue">Admin</span>
            </div>
            <div className="mini">
              <span className="pbadge" style={{ background: '#8B5CF6' }}>U</span>
              <span><strong>UrbanHive Studio</strong></span>
              <span className="r wait">Limited member</span>
            </div>
            <div className="mini">
              <span style={{ fontWeight: 600 }}>&ldquo;Summer sale is live&rdquo;</span>
              <span className="r ok">Approved</span>
            </div>
            <div className="mini">
              <span style={{ fontWeight: 600 }}>&ldquo;Flash deal teaser&rdquo;</span>
              <span className="r no">Changes requested</span>
            </div>
          </div>
        </div>

        {/* Panel 5 */}
        <div className="fpanel" hidden={activeTab !== 5}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <span className="num">05 / 05</span>
            <h3>Never run out of things to post.</h3>
            <p className="lead">
              Store media and evergreen posts in the content library and reuse them in a click. Plug in RSS feeds to turn new blog articles into scheduled posts automatically. Plan it all together in Brexel Docs.
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li className="tick">Content library with asset management and history</li>
              <li className="tick">Repurpose and recycle evergreen posts</li>
              <li className="tick">Import RSS feeds and convert them to posts</li>
              <li className="tick">Brexel Docs for collaborative content planning</li>
            </ul>
          </div>
          <div className="fvis">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '8px' }}>
              <div style={{ aspectRatio: '1', borderRadius: '10px', background: '#FDE7D6' }}></div>
              <div style={{ aspectRatio: '1', borderRadius: '10px', background: '#DCE6FF' }}></div>
              <div style={{ aspectRatio: '1', borderRadius: '10px', background: '#D9F2E6' }}></div>
              <div style={{ aspectRatio: '1', borderRadius: '10px', background: '#EDE4FF' }}></div>
              <div style={{ aspectRatio: '1', borderRadius: '10px', background: '#FFF1C9' }}></div>
              <div style={{ aspectRatio: '1', borderRadius: '10px', background: '#E2E8F0' }}></div>
            </div>
            <div className="mini">
              <span className="pbadge" style={{ background: '#F28C28' }}>RSS</span>
              <span><strong>blog.brightwave.com</strong> · 3 new articles</span>
              <span className="r ok">Converted</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

