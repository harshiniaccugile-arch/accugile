'use client';

import React, { useEffect, useState } from 'react';

export default function SkiploreTrialBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('top');
    if (!hero || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setVisible(!entries[0].isIntersecting);
      },
      { threshold: 0.05 }
    );
    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`trialbar ${visible ? 'show' : ''}`} aria-hidden={!visible}>
      <span>
        <strong>Skiplore</strong> · Verified local trips across India
      </span>
      <a
        href="https://skiplore.com/vendorsignup"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#CBD5E1', fontSize: '14px', fontWeight: 600 }}
        tabIndex={visible ? 0 : -1}
      >
        Become a host
      </a>
      <a
        href="https://skiplore.com"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-ac"
        tabIndex={visible ? 0 : -1}
      >
        Explore Skiplore
      </a>
    </div>
  );
}

