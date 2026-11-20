import React from 'react';

export default function AllFeatures() {
  return (
    <section className="sec" style={{ background: '#F7F8FB' }}>
      <div className="wrap">
        <div className="sec-h">
          <div style={{ maxWidth: '760px' }}>
            <div className="eyebrow" style={{ marginBottom: '14px' }}>
              All features
            </div>
            <h2 className="h2">Built for how social teams actually work.</h2>
          </div>
          <a
            href="https://adorack.com/features"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: 600 }}
          >
            See every feature on adorack.com →
          </a>
        </div>
        <div className="grid g3">
          <div className="fg">
            <h3><i>✎</i>Publishing</h3>
            <ul>
              <li>Unlimited post scheduling</li>
              <li>Multi-network publishing</li>
              <li>Bulk scheduling</li>
              <li>Recurring posts and post recycling</li>
              <li>Draft-and-publish workflow</li>
            </ul>
          </div>
          <div className="fg">
            <h3><i>▦</i>Calendar</h3>
            <ul>
              <li>Content calendar</li>
              <li>Drag-and-drop scheduling</li>
              <li>Campaign scheduling</li>
              <li>Time-slot scheduling</li>
            </ul>
          </div>
          <div className="fg">
            <h3><i>⚙</i>Automation</h3>
            <ul>
              <li>Automated publishing</li>
              <li>Queue and smart scheduling</li>
              <li>Workflow automation</li>
              <li>RSS feeds to scheduled posts</li>
            </ul>
          </div>
          <div className="fg">
            <h3><i>◧</i>Content</h3>
            <ul>
              <li>Content library and asset management</li>
              <li>Post variations</li>
              <li>Categories</li>
              <li>Content reuse and history</li>
            </ul>
          </div>
          <div className="fg">
            <h3><i>◎</i>Campaigns</h3>
            <ul>
              <li>Campaign management</li>
              <li>Campaign tracking</li>
              <li>Lead generation campaigns</li>
              <li>Cross-channel performance analytics</li>
            </ul>
          </div>
          <div className="fg">
            <h3><i>☺</i>Collaboration</h3>
            <ul>
              <li>Team access and role-based permissions</li>
              <li>Approval workflow</li>
              <li>Client management</li>
              <li>Multi-brand workspaces</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

