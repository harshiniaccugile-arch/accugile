'use client';

import React, { useEffect, useState } from 'react';

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2 7 H12 M8 3 L12 7 L8 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function RecomonkTrialBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setVisible(scrollPos > 250);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
  };

  return (
    <div className={`trialbar ${visible ? 'show' : ''}`} aria-hidden={!visible}>
      <span>
        <strong>Recomonk</strong> · The best of Amazon, picked for you
      </span>
      <a
        href="https://recomonk.com"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-ac"
        tabIndex={visible ? 0 : -1}
        onClick={handleClick}
      >
        <span>Visit Recomonk</span>
        <Arrow />
      </a>
    </div>
  );
}



