'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface CaseStudyExactPageProps {
  htmlContent: string;
  tone?: string;
  toneL?: string;
}

export default function CaseStudyExactPage({
  htmlContent,
  tone = '#EA580C',
  toneL = '#FDBA74',
}: CaseStudyExactPageProps) {
  useEffect(() => {
    // 1. DYNAMIC SINGLE-ROW ROTATOR FOR .cs-glance
    const glanceAside = document.querySelector('.cs-glance');
    let intervalId: NodeJS.Timeout | null = null;

    if (glanceAside) {
      const rows = Array.from(glanceAside.querySelectorAll<HTMLElement>('dl > div'));
      if (rows.length > 0) {
        // Show first row initially
        rows.forEach((row, i) => {
          if (i === 0) {
            row.classList.add('row-active');
          } else {
            row.classList.remove('row-active');
          }
        });

        // Add dots/indicators to header if not already present
        const monoHeader = glanceAside.querySelector('.mono');
        let dotsContainer = glanceAside.querySelector<HTMLElement>('.glance-nav');
        if (monoHeader && !dotsContainer) {
          dotsContainer = document.createElement('div');
          dotsContainer.className = 'glance-nav';
          rows.forEach((_, idx) => {
            const dot = document.createElement('button');
            dot.className = `glance-dot ${idx === 0 ? 'active' : ''}`;
            dot.setAttribute('aria-label', `View spec ${idx + 1}`);
            dot.addEventListener('click', (e) => {
              e.preventDefault();
              showRow(idx);
            });
            dotsContainer?.appendChild(dot);
          });
          monoHeader.appendChild(dotsContainer);
        }

        let currentIndex = 0;
        const showRow = (index: number) => {
          currentIndex = index;
          rows.forEach((r, idx) => {
            if (idx === index) {
              r.classList.add('row-active');
            } else {
              r.classList.remove('row-active');
            }
          });

          const dots = glanceAside.querySelectorAll('.glance-dot');
          dots.forEach((dot, idx) => {
            if (idx === index) {
              dot.classList.add('active');
            } else {
              dot.classList.remove('active');
            }
          });
        };

        // Auto rotate every 3 seconds
        intervalId = setInterval(() => {
          const nextIndex = (currentIndex + 1) % rows.length;
          showRow(nextIndex);
        }, 3000);

        // Pause on hover
        glanceAside.addEventListener('mouseenter', () => {
          if (intervalId) clearInterval(intervalId);
        });

        glanceAside.addEventListener('mouseleave', () => {
          if (intervalId) clearInterval(intervalId);
          intervalId = setInterval(() => {
            const nextIndex = (currentIndex + 1) % rows.length;
            showRow(nextIndex);
          }, 3000);
        });
      }
    }

    // 2. TOC INTERSECTION OBSERVER
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('.cs-toc a[href^="#"]'));
    let io: IntersectionObserver | null = null;

    if (links.length && 'IntersectionObserver' in window) {
      const map: Record<string, HTMLAnchorElement> = {};
      links.forEach((a) => {
        const href = a.getAttribute('href');
        if (href) {
          map[href.slice(1)] = a;
        }
      });

      io = new IntersectionObserver(
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
        if (s) io?.observe(s);
      });
    }

    // 3. SMOOTH SCROLL HANDLER
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
      if (intervalId) clearInterval(intervalId);
      if (io) io.disconnect();
      document.removeEventListener('click', handleLinkClick);
    };
  }, [htmlContent]);

  return (
    <div
      className="acc motion-on"
      style={
        {
          '--tone': tone,
          '--toneL': toneL,
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
