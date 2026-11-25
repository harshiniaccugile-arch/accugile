'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NotFoundClient() {
  const [isFixed, setIsFixed] = useState(false);
  const [displayPath, setDisplayPath] = useState('/page-not-found');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const raw = (window.location.pathname || '/') + (window.location.search || '');
      const path = (raw === '/' || /404(\.html)?$/.test(raw)) ? '/page-not-found' : raw;
      setDisplayPath(path.length > 40 ? path.slice(0, 37) + '…' : path);
    }
  }, []);

  return (
    <section className={`e4 ${isFixed ? 'fixed' : 'broken'}`} aria-labelledby="e4-title">
      <div className="wrap">
        <div className="e4-grid">
          <div className="e4-copy">
            <span className="e4-pill"><b>Error 404</b> Page not found</span>
            <div className="e4-num" aria-hidden="true">
              <span>4</span>
              <span className="z">0</span>
              <span>4</span>
            </div>
            <h1 id="e4-title">This page fell apart. Or it never existed.</h1>
            <p className="lead">
              The link may be out of date, mistyped, or the page has moved during our redesign. Everything else on Accugile is up and running.
            </p>
            <span className="e4-path" title="Address you tried">
              accugile.com<em>{displayPath}</em>
            </span>
            <div className="e4-actions">
              <Link href="/" className="btn btn-ac">
                Back to homepage
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                  <path d="M2 7 H12 M8 3 L12 7 L8 11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Talk to our team
              </Link>
            </div>
          </div>

          <div className="e4-stage">
            <div className="bw">
              <div className="bw-top" aria-hidden="true">
                <i></i><i></i><i></i>
                <span className="bw-url">accugile.com<b>{displayPath}</b></span>
              </div>
              <div className="canvas" aria-hidden="true">
                <div className="blk b-nav" style={{ ['--x' as string]: '-6%', ['--y' as string]: '40%', ['--r' as string]: '-9deg', ['--d' as string]: '0s', ['--a' as string]: '-1s' }}>
                  <i></i><i></i><i></i><i></i><i></i>
                </div>
                <div className="blk b-h1" style={{ ['--x' as string]: '24%', ['--y' as string]: '150%', ['--r' as string]: '14deg', ['--d' as string]: '.08s', ['--a' as string]: '-2s' }} />
                <div className="blk b-h2" style={{ ['--x' as string]: '70%', ['--y' as string]: '-60%', ['--r' as string]: '-18deg', ['--d' as string]: '.14s', ['--a' as string]: '-3s' }} />
                <div className="blk b-p" style={{ ['--x' as string]: '40%', ['--y' as string]: '520%', ['--r' as string]: '8deg', ['--d' as string]: '.2s', ['--a' as string]: '-.5s' }} />
                <div className="blk b-p2" style={{ ['--x' as string]: '120%', ['--y' as string]: '300%', ['--r' as string]: '-22deg', ['--d' as string]: '.24s', ['--a' as string]: '-4s' }} />
                <div className="blk b-btn" style={{ ['--x' as string]: '220%', ['--y' as string]: '120%', ['--r' as string]: '28deg', ['--d' as string]: '.3s', ['--a' as string]: '-1.5s' }} />
                <div className="blk b-img" style={{ ['--x' as string]: '-48%', ['--y' as string]: '34%', ['--r' as string]: '-12deg', ['--d' as string]: '.1s', ['--a' as string]: '-2.5s' }} />
                <div className="blk b-c1" style={{ ['--x' as string]: '30%', ['--y' as string]: '-120%', ['--r' as string]: '16deg', ['--d' as string]: '.36s', ['--a' as string]: '-3.5s' }} />
                <div className="blk b-c2" style={{ ['--x' as string]: '-60%', ['--y' as string]: '-230%', ['--r' as string]: '-10deg', ['--d' as string]: '.42s', ['--a' as string]: '-.8s' }} />
                <div className="blk b-c3" style={{ ['--x' as string]: '-10%', ['--y' as string]: '-40%', ['--r' as string]: '21deg', ['--d' as string]: '.48s', ['--a' as string]: '-2.2s' }} />
                <div className="missing">
                  <b>?</b>
                  <span>
                    <strong>Layout fixed. Page still missing.</strong>
                    <small>Try one of the links below.</small>
                  </span>
                </div>
              </div>
            </div>
            <div className="tag float1" aria-hidden="true" style={{ left: -34, top: 74 }}>
              <i style={{ background: '#E11D48' }} />layout.css not found
            </div>
            <div className="tag float2" aria-hidden="true" style={{ right: -26, top: '46%' }}>
              <i style={{ background: '#F59E0B' }} />10 blocks out of place
            </div>
            <button
              type="button"
              className="fixbtn"
              onClick={() => setIsFixed((prev) => !prev)}
              aria-pressed={isFixed}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{isFixed ? 'Break it again' : 'Fix this page'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
