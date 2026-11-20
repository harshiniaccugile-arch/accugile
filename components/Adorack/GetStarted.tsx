import React from 'react';

export default function GetStarted() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-h">
          <div style={{ maxWidth: '760px' }}>
            <div className="eyebrow" style={{ marginBottom: '14px' }}>
              Get started
            </div>
            <h2 className="h2">Up and running in five steps.</h2>
          </div>
          <p style={{ maxWidth: '420px', color: '#5B6474', fontSize: '16px', lineHeight: 1.6 }}>
            The same onboarding guide you see on your first login. Most teams finish it in a single sitting.
          </p>
        </div>
        <div className="steps5">
          <div>
            <span className="n">1</span>
            <h3>Add accounts</h3>
            <p>Connect your social profiles and pick the pages and channels to manage.</p>
          </div>
          <div>
            <span className="n">2</span>
            <h3>Add content</h3>
            <p>Write posts in the composer, or let Adorack AI draft them for you.</p>
          </div>
          <div>
            <span className="n">3</span>
            <h3>Build your library</h3>
            <p>Save media and evergreen posts to reuse across campaigns.</p>
          </div>
          <div>
            <span className="n">4</span>
            <h3>Schedule posts</h3>
            <p>Drop posts onto the calendar or into your queue&apos;s time slots.</p>
          </div>
          <div>
            <span className="n">5</span>
            <h3>Invite members</h3>
            <p>Add teammates and clients with the right role and approval rules.</p>
          </div>
        </div>
        <div style={{ marginTop: '40px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a
            href="https://app.adorack.com/registration/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ac"
          >
            Start step 1 now, free
          </a>
          <a
            href="https://adorack.com/docs/get-started"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            Read the getting-started guide
          </a>
        </div>
      </div>
    </section>
  );
}

