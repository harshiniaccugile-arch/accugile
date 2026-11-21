'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface AccudemyExactPageProps {
  htmlContent: string;
}

export default function AccudemyExactPage({ htmlContent }: AccudemyExactPageProps) {
  useEffect(() => {
    // Exact IntersectionObserver script from case-study-accudemy.html
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('.cs-toc a[href^="#"]'));
    if (!links.length || !('IntersectionObserver' in window)) return;
    
    const map: Record<string, HTMLAnchorElement> = {};
    links.forEach((a) => {
      const href = a.getAttribute('href');
      if (href) {
        map[href.slice(1)] = a;
      }
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            links.forEach((x) => x.classList.remove('on'));
            const a = map[e.target.id];
            if (a) a.classList.add('on');
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    Object.keys(map).forEach((id) => {
      const s = document.getElementById(id);
      if (s) io.observe(s);
    });

    // Smooth scroll handler for TOC links
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest<HTMLAnchorElement>('.cs-toc a[href^="#"]');
      if (link) {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          const el = document.getElementById(href.slice(1));
          if (el) {
            e.preventDefault();
            const headerOffset = 90;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
            links.forEach((x) => x.classList.remove('on'));
            link.classList.add('on');
          }
        }
      }
    };

    document.addEventListener('click', handleLinkClick);

    return () => {
      io.disconnect();
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return (
    <div
      className="acc motion-on"
      style={
        {
          '--tone': '#EA580C',
          '--toneL': '#FDBA74',
          '--ac': '#304DDB',
          width: '100%',
          background: '#FFFFFF',
          overflowX: 'clip',
        } as React.CSSProperties
      }
    >
      <Header />
      <main dangerouslySetInnerHTML={{ __html: htmlContent }} />
      <Footer />
    </div>
  );
}

