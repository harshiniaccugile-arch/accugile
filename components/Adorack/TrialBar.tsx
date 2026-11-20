'use client';

import React, { useEffect, useState } from 'react';

export default function TrialBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('top');
    const pricing = document.getElementById('pricing');

    if (!hero || !('IntersectionObserver' in window)) return;

    let heroOut = false;
    let pricingIn = false;

    const updateVisibility = () => {
      setVisible(heroOut && !pricingIn);
    };

    const heroObserver = new IntersectionObserver(
      (entries) => {
        heroOut = !entries[0].isIntersecting;
        updateVisibility();
      },
      { threshold: 0.05 }
    );
    heroObserver.observe(hero);

    let pricingObserver: IntersectionObserver | null = null;
    if (pricing) {
      pricingObserver = new IntersectionObserver(
        (entries) => {
          pricingIn = entries[0].isIntersecting;
          updateVisibility();
        },
        { threshold: 0.1 }
      );
      pricingObserver.observe(pricing);
    }

    return () => {
      heroObserver.disconnect();
      if (pricingObserver) pricingObserver.disconnect();
    };
  }, []);

  return (
    <div className={`trialbar ${visible ? 'show' : ''}`} aria-hidden={!visible}>
      <span>
        <strong>Adorack</strong> · 30-day free trial, no credit card
      </span>
      <a
        href="https://app.adorack.com/login/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#B6C0D2', fontSize: '14px', fontWeight: 600 }}
        tabIndex={visible ? 0 : -1}
      >
        Sign in
      </a>
      <a
        href="https://app.adorack.com/registration/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-ac"
        tabIndex={visible ? 0 : -1}
      >
        Start free trial
      </a>
    </div>
  );
}

