import React from 'react';

export default function AdorackAI() {
  return (
    <section className="sec ai-sec" id="ai">
      <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '56px', alignItems: 'center' }}>
        <div style={{ flex: '1 1 440px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="eyebrow" style={{ color: '#A8B8FF' }}>
            Adorack AI
          </div>
          <h2 className="h2" style={{ color: '#FFFFFF' }}>
            Describe the post. <span className="serif" style={{ color: '#A8B8FF' }}>Get it ready to publish.</span>
          </h2>
          <p className="lead">
            Tell the assistant your goal, audience and platform in plain language. It writes platform-ready captions, suggests relevant hashtags and keeps the tone consistent with your brand.
          </p>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', color: '#DCE3F0' }}>
            <li style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: '#A8B8FF' }}>✦</span>Captions written for each network&apos;s style
            </li>
            <li style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: '#A8B8FF' }}>✦</span>Hashtag suggestions that match your topic
            </li>
            <li style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: '#A8B8FF' }}>✦</span>Rewrite, shorten or change tone in one click
            </li>
          </ul>
          <a
            href="https://app.adorack.com/registration/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ac"
            style={{ alignSelf: 'flex-start', marginTop: '8px' }}
          >
            Try Adorack AI free
          </a>
        </div>
        <div style={{ flex: '1 1 480px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div className="prompt">
            <label>Your prompt</label>
            Write a LinkedIn post announcing our new analytics dashboard for marketing managers. Professional, upbeat, under 60 words.
            <span className="caret" style={{ color: '#A8B8FF' }}>▍</span>
          </div>
          <div className="out float3">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong style={{ fontSize: '14px' }}>✦ 2 suggestions</strong>
              <span className="pbadge li" style={{ width: '26px', height: '26px', fontSize: '11px' }}>in</span>
            </div>
            <div className="variant ln">
              <b>Option A · Professional</b>Your social data, finally in one view. Our new analytics dashboard shows marketing managers what is working across every channel, so you can plan the next campaign with confidence.{' '}
              <span className="tag">#MarketingAnalytics #SocialMedia</span>
            </div>
            <div className="variant ln ln2">
              <b>Option B · Upbeat</b>Big news for marketers: the new analytics dashboard is here. One screen, every channel, clear results. Less guessing, more growing.{' '}
              <span className="tag">#ProductLaunch #Marketing</span>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', fontSize: '12px' }}>
              <span className="mini" style={{ padding: '6px 10px' }}>Use this</span>
              <span className="mini" style={{ padding: '6px 10px' }}>Shorten</span>
              <span className="mini" style={{ padding: '6px 10px' }}>Change tone</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

