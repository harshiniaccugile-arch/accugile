'use client';

import React, { useEffect, useState } from 'react';

export default function RecomonkTrialBar() {
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
        <strong>Recomonk</strong> · The best of Amazon, picked for you
      </span>
      <a
        href="https://recomonk.com"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-ac"
        tabIndex={visible ? 0 : -1}
      >
        Visit Recomonk
      </a>
    </div>
  );
}

