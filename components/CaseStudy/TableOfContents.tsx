'use client';

import React, { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items?: TocItem[];
}

export default function TableOfContents({ items = [] }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || '');

  useEffect(() => {
    if (!items.length) return;

    let observer: IntersectionObserver | null = null;

    const setup = () => {
      observer?.disconnect();
      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          if (visible.length) setActiveId(visible[0].target.id);
        },
        { rootMargin: '-100px 0px -60% 0px', threshold: 0 }
      );

      let found = 0;
      items.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) {
          observer!.observe(el);
          found++;
        }
      });
      return found;
    };

    // Content may be injected after mount, so retry briefly
    let tries = 0;
    const timer = setInterval(() => {
      tries++;
      if (setup() > 0 || tries > 20) clearInterval(timer);
    }, 100);

    return () => {
      clearInterval(timer);
      observer?.disconnect();
    };
  }, [items]);

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;
    const headerOffset = 90;
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: 'smooth' });
    setActiveId(id);
  };

  if (!items.length) return null;

  return (
    <nav className="cs-toc" aria-label="On this page">
      <strong>On this page</strong>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={activeId === item.id ? 'on' : ''}
              onClick={(e) => handleClick(e, item.id)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
      <div className="tocta">
        <p>Planning a platform like this?</p>
        <a href="#cta" className="btn btn-sm btn-primary">
          Talk to Accugile
        </a>
      </div>
    </nav>
  );
}