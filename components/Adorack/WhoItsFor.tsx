import React from 'react';

export default function WhoItsFor() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-h">
          <div style={{ maxWidth: '760px' }}>
            <div className="eyebrow" style={{ marginBottom: '14px' }}>
              Who it is for
            </div>
            <h2 className="h2">Made for teams that post for more than one brand.</h2>
          </div>
        </div>
        <div className="grid g4">
          <div className="box" style={{ background: '#EEF2FF', borderColor: 'transparent' }}>
            <h3>Social media agencies</h3>
            <p>One workspace per client, client approvals built in, and every account in a single login.</p>
          </div>
          <div className="box" style={{ background: '#EFFAF5', borderColor: 'transparent' }}>
            <h3>In-house marketing teams</h3>
            <p>Shared calendar, campaign planning and sign-off from managers before anything goes live.</p>
          </div>
          <div className="box" style={{ background: '#FDEEE4', borderColor: 'transparent' }}>
            <h3>Small businesses</h3>
            <p>Fill the queue once a week and stay consistent without a full-time social media hire.</p>
          </div>
          <div className="box" style={{ background: '#F3EEFF', borderColor: 'transparent' }}>
            <h3>Creators and consultants</h3>
            <p>AI-written captions and recurring posts keep your personal brand active while you work.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

