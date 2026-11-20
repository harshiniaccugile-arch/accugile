import React from 'react';
import {
  Star,
  Home,
  Coffee,
  Sparkles,
  Shirt,
  Zap,
  Heart,
  Smile,
  Gift,
  Plane,
} from 'lucide-react';

export default function RecomonkCategories() {
  return (
    <section className="sec" style={{ background: 'var(--cream)' }}>
      <div className="wrap">
        <div className="sec-h">
          <div style={{ maxWidth: '760px' }}>
            <div className="eyebrow" style={{ marginBottom: '14px' }}>
              Browse by category
            </div>
            <h2 className="h2">Ten categories. Every corner of your life.</h2>
          </div>
          <a
            href="https://recomonk.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ac"
          >
            Explore all categories →
          </a>
        </div>
        <div className="cats">
          <a className="cat" href="https://recomonk.com" target="_blank" rel="noopener noreferrer">
            <i style={{ background: '#EEF2FF', color: 'var(--ac)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Star size={20} fill="currentColor" />
            </i>
            <h3>Best Picks</h3>
            <p>Premium picks, under $50, under $100 and the best overall right now.</p>
          </a>
          <a className="cat" href="https://recomonk.com" target="_blank" rel="noopener noreferrer">
            <i style={{ background: '#E0F2FE', color: '#0369A1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Home size={20} />
            </i>
            <h3>Home</h3>
            <p>Cleaning, sleep, decor, furniture, storage, air quality and security.</p>
          </a>
          <a className="cat" href="https://recomonk.com" target="_blank" rel="noopener noreferrer">
            <i style={{ background: '#EEF2FF', color: 'var(--ac)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Coffee size={20} />
            </i>
            <h3>Kitchen</h3>
            <p>Coffee and tea, cookware, grilling, small and large appliances.</p>
          </a>
          <a className="cat" href="https://recomonk.com" target="_blank" rel="noopener noreferrer">
            <i style={{ background: '#F1F5F9', color: '#475569', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Sparkles size={20} />
            </i>
            <h3>Beauty</h3>
            <p>Skin-care, makeup, hair, grooming, bath and body.</p>
          </a>
          <a className="cat" href="https://recomonk.com" target="_blank" rel="noopener noreferrer">
            <i style={{ background: '#EDE9FE', color: '#6D28D9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Shirt size={20} />
            </i>
            <h3>Fashion</h3>
            <p>Women&apos;s, men&apos;s, kids&apos; and unisex style picks and trend guides.</p>
          </a>
          <a className="cat" href="https://recomonk.com" target="_blank" rel="noopener noreferrer">
            <i style={{ background: '#E0E7FF', color: '#4338CA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={20} />
            </i>
            <h3>Tech</h3>
            <p>Phones, computers, audio, gaming, smart home and cameras.</p>
          </a>
          <a className="cat" href="https://recomonk.com" target="_blank" rel="noopener noreferrer">
            <i style={{ background: '#DCFCE7', color: '#15803D', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Heart size={20} fill="currentColor" />
            </i>
            <h3>Wellness &amp; Recovery</h3>
            <p>Fitness gear, wearables, massagers, sleep and recovery.</p>
          </a>
          <a className="cat" href="https://recomonk.com" target="_blank" rel="noopener noreferrer">
            <i style={{ background: '#EEF2FF', color: 'var(--ac)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Smile size={20} />
            </i>
            <h3>Kids &amp; Baby</h3>
            <p>Baby gear, feeding, sleep, toys, school bags and kids&apos; furniture.</p>
          </a>
          <a className="cat" href="https://recomonk.com" target="_blank" rel="noopener noreferrer">
            <i style={{ background: '#E0F2FE', color: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Gift size={20} />
            </i>
            <h3>Gifts</h3>
            <p>By occasion, by recipient, by interest and by budget.</p>
          </a>
          <a className="cat" href="https://recomonk.com" target="_blank" rel="noopener noreferrer">
            <i style={{ background: '#CCFBF1', color: '#0F766E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Plane size={20} />
            </i>
            <h3>Travel &amp; Office</h3>
            <p>Luggage, packing gear and the tools for a better workday.</p>
          </a>
        </div>
      </div>
    </section>
  );
}

