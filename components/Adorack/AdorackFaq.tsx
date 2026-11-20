import React from 'react';

export default function AdorackFaq() {
  return (
    <section className="sec">
      <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '48px' }}>
        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="eyebrow">FAQ</div>
          <h2 className="h2">Questions, answered.</h2>
          <p style={{ color: '#5B6474', lineHeight: 1.6 }}>
            Still unsure? Email <a href="mailto:sales@adorack.com">sales@adorack.com</a> or call{' '}
            <a href="tel:+919943798451">+91 99437 98451</a>.
          </p>
        </div>
        <div style={{ flex: '2 1 560px', minWidth: 0, borderTop: '1px solid #E5E8EF' }}>
          <details className="faq" open>
            <summary>How does the free trial work?</summary>
            <p>
              Sign up at app.adorack.com and you get 30 days free with no credit card. The trial includes 5 users, 3 workspaces, 5 social accounts and 50 scheduled posts.
            </p>
          </details>
          <details className="faq">
            <summary>Which social networks does Adorack support?</summary>
            <p>
              Facebook Pages and Groups, Instagram Business accounts, LinkedIn profiles and Company pages, YouTube channels, TikTok, Pinterest, Threads and Bluesky.
            </p>
          </details>
          <details className="faq">
            <summary>Can I manage several brands or clients?</summary>
            <p>
              Yes. Each brand or client gets its own workspace with separate accounts, library, calendar and team. Professional includes 20 workspaces and Advanced has no limit.
            </p>
          </details>
          <details className="faq">
            <summary>Can clients approve posts before they go live?</summary>
            <p>
              Yes. Invite clients as Limited Access members and set an approval method. Their posts, or yours, wait for sign-off before publishing.
            </p>
          </details>
          <details className="faq">
            <summary>What does the AI assistant do?</summary>
            <p>
              It writes captions, social copy and hashtag suggestions from a plain-language prompt that describes your goal, audience and platform.
            </p>
          </details>
          <details className="faq">
            <summary>Is there a downloadable or on-premise version?</summary>
            <p>
              No. Adorack is a fully managed web service, so there is nothing to install. You can export your data in common formats.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}

