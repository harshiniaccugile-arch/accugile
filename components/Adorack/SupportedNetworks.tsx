import React from 'react';

export default function SupportedNetworks() {
  return (
    <section style={{ padding: '72px 0 24px' }}>
      <div className="wrap">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '20px',
            marginBottom: '28px',
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: '12px' }}>
              Supported networks
            </div>
            <h2 className="h2" style={{ fontSize: 'clamp(26px, 2.6vw, 34px)' }}>
              Connect once. Publish everywhere your audience is.
            </h2>
          </div>
          <p style={{ color: '#5B6474', maxWidth: '420px', lineHeight: 1.6 }}>
            Connect a profile in one click, choose the pages you want to manage, and your accounts stay in sync automatically.
          </p>
        </div>
        <div className="plat">
          <div>
            <span className="pbadge fb">f</span>
            <span>
              <strong>Facebook</strong>
              <span>Pages and Groups</span>
            </span>
          </div>
          <div>
            <span className="pbadge ig">IG</span>
            <span>
              <strong>Instagram</strong>
              <span>Business accounts</span>
            </span>
          </div>
          <div>
            <span className="pbadge li">in</span>
            <span>
              <strong>LinkedIn</strong>
              <span>Profiles and Company pages</span>
            </span>
          </div>
          <div>
            <span className="pbadge yt">▶</span>
            <span>
              <strong>YouTube</strong>
              <span>Channels</span>
            </span>
          </div>
          <div>
            <span className="pbadge tt">♪</span>
            <span>
              <strong>TikTok</strong>
              <span>Business accounts</span>
            </span>
          </div>
          <div>
            <span className="pbadge pi">P</span>
            <span>
              <strong>Pinterest</strong>
              <span>Boards and Pins</span>
            </span>
          </div>
          <div>
            <span className="pbadge th">@</span>
            <span>
              <strong>Threads</strong>
              <span>Meta Threads profiles</span>
            </span>
          </div>
          <div>
            <span className="pbadge bs">b</span>
            <span>
              <strong>Bluesky</strong>
              <span>Bluesky profiles</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

