import React from 'react';
import {
  Heart,
  Home,
  Mountain,
  Tent,
  Users,
  Compass,
  Sun,
  Waves,
  Trees,
} from 'lucide-react';

export default function SkiploreThemes() {
  return (
    <section className="sec" style={{ background: 'var(--cream)', paddingTop: '88px', paddingBottom: '88px' }}>
      <div className="wrap">
        <div className="sec-h" style={{ marginBottom: '32px' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: '12px' }}>
              Travel by theme
            </div>
            <h2 className="h2">Start with the kind of trip you want.</h2>
          </div>
          <a
            href="https://skiplore.com/PackageListing"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: 600, color: 'var(--ac)' }}
          >
            Browse all packages →
          </a>
        </div>
        <div className="themes">
          <a className="theme" href="https://skiplore.com/PackageListing" target="_blank" rel="noopener noreferrer">
            <i style={{ background: '#FDE8EC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Heart size={18} fill="#E11D48" color="#E11D48" />
            </i>
            Honeymoon &amp; Romantic
          </a>
          <a className="theme" href="https://skiplore.com/PackageListing" target="_blank" rel="noopener noreferrer">
            <i style={{ background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Home size={18} color="var(--ac)" />
            </i>
            Family Packages
          </a>
          <a className="theme" href="https://skiplore.com/PackageListing" target="_blank" rel="noopener noreferrer">
            <i style={{ background: '#FFF1D6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Mountain size={18} color="#D97706" />
            </i>
            Adventure &amp; Trekking
          </a>
          <a className="theme" href="https://skiplore.com/PackageListing" target="_blank" rel="noopener noreferrer">
            <i style={{ background: '#E0F2F3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Tent size={18} color="#0D9488" />
            </i>
            Camping &amp; Glamping
          </a>
          <a className="theme" href="https://skiplore.com/PackageListing" target="_blank" rel="noopener noreferrer">
            <i style={{ background: '#EEF0FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Users size={18} color="var(--ac)" />
            </i>
            Friends &amp; Groups
          </a>
          <a className="theme" href="https://skiplore.com/PackageListing" target="_blank" rel="noopener noreferrer">
            <i style={{ background: '#FDEBE3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Compass size={18} color="#EA580C" />
            </i>
            Solo
          </a>
          <a className="theme" href="https://skiplore.com/PackageListing" target="_blank" rel="noopener noreferrer">
            <i style={{ background: '#F3EEFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Sun size={18} color="#7C3AED" />
            </i>
            Religious
          </a>
          <a className="theme" href="https://skiplore.com/PackageListing" target="_blank" rel="noopener noreferrer">
            <i style={{ background: '#E0F0FB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Waves size={18} color="#0284C7" />
            </i>
            Water Activities
          </a>
          <a className="theme" href="https://skiplore.com/PackageListing" target="_blank" rel="noopener noreferrer">
            <i style={{ background: '#EDF3DF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Trees size={18} color="#15803D" />
            </i>
            Wildlife Safaris
          </a>
        </div>
      </div>
    </section>
  );
}

