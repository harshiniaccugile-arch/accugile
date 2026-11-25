'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import Image from 'next/image';
import L, { Arrow } from './Home/Link';
import UtilityBar from './Home/UtilityBar';
import { aiLinks, serviceLinks, techGroups, products, type Item } from '@/lib/data';
import { usePathname, useRouter } from 'next/navigation';

const navItems = [
    { key: 'ai', label: 'AI', menu: true },
    { key: 'services', label: 'Services', menu: true },
    { key: 'tech', label: 'Technology', menu: true },
    { key: 'products', label: 'Products', menu: true },
    { key: 'cases', label: 'Case Studies', menu: false },
    { key: 'company', label: 'Company', menu: true },
];

const mobileLinks = [
    ['/ai', 'AI'], ['/services', 'Services'], ['/technology', 'Technology'],
    ['/products', 'Products'], ['/case-studies', 'Case Studies'], ['/about', 'Company'],
];

const labelStyle = { fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5B6474' } as const;

function Mega({ children }: { children: ReactNode }) {
    return (
        <div className="mega" style={{ position: 'absolute', left: 0, right: 0, top: '100%', background: '#fff', borderTop: '1px solid #E5E8EF', boxShadow: '0 30px 60px -30px rgba(11,13,12,0.3)' }}>
            {children}
        </div>
    );
}

function LinkGrid({ title, links, promo, onNavigate }: { title: string; links: Item[]; promo: ReactNode; onNavigate?: () => void }) {
    return (
        <Mega>
            <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,2fr) minmax(0,1fr)', gap: 32, paddingTop: 28, paddingBottom: 32 }}>
                <div>
                    <div style={{ ...labelStyle, marginBottom: 12, paddingLeft: 12 }}>{title}</div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: 4 }}>
                        {links.map((l) => (
                            <L key={l.title} className="mlink" href={l.href} onClick={onNavigate}><strong>{l.title}</strong><span>{l.desc}</span></L>
                        ))}
                    </div>
                </div>
                {promo}
            </div>
        </Mega>
    );
}

type Child = { label: string; href: string };
const mobileSections: { key: string; label: string; href: string; children: Child[] }[] = [
    { key: 'ai', label: 'AI', href: '/ai', children: aiLinks.map((l) => ({ label: l.title, href: l.href })) },
    { key: 'services', label: 'Services', href: '/services', children: serviceLinks.map((l) => ({ label: l.title, href: l.href })) },
    { key: 'tech', label: 'Technology', href: '/technology', children: techGroups.flatMap((g) => g.items.map(([href, label]) => ({ label, href }))) },
    { key: 'products', label: 'Products', href: '/products', children: products.map((p) => ({ label: p.name, href: p.href })) },
    { key: 'cases', label: 'Case Studies', href: '/case-studies', children: [] },
    {
        key: 'company', label: 'Company', href: '/about', children: [
            { label: 'About Us', href: '/about' },
            { label: 'Our Team', href: '/#team' },
            { label: 'Partners & Awards', href: '/partners-awards' },
            { label: 'Careers', href: '/careers' },
        ],
    },
];

export default function Header() {
    const pathname = usePathname();
    const router = useRouter();
    const isHome = pathname === '/';
    const contactHref = isHome ? '#contact' : '/contact';
    const teamHref = isHome ? '#team' : '/team';
    const stackHref = isHome ? '#stack' : '/technology';
    const [open, setOpen] = useState<string | null>(null);
    const [mobile, setMobile] = useState(false);
    const [mobileOpen, setMobileOpen] = useState<string | null>(null);
    const ref = useRef<HTMLElement>(null);
    const canHover = () => typeof window !== 'undefined' && window.matchMedia('(hover:hover)').matches;

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(null); setMobile(false); } };
        const onClick = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(null); };
        document.addEventListener('keydown', onKey);
        document.addEventListener('click', onClick);
        return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('click', onClick); };
    }, []);

    const onNavClick = (key: string, hasMenu: boolean) => {
        if (!hasMenu) {
            const target = document.getElementById(key === 'cases' ? 'work' : key);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
            else router.push(key === 'cases' ? '/case-studies' : `/${key}`);
            setOpen(null);
            return;
        }
        setOpen(canHover() ? key : open === key ? null : key);
    };

    return (
        <header ref={ref} onMouseLeave={() => setOpen(null)}
            style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #E5E8EF' }}>
            <UtilityBar />
            <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, height: 76 }}>
                <L href="/" aria-label="Accugile home" style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#0F172A' }}>
                    <Image src="/assets/Accugile-Logo-Primary.png" alt="Accugile" width={300} height={60} priority style={{ display: 'block', height: 80, width: 'auto' }} />
                </L>

                <nav className="nav-desk" aria-label="Main" style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    {navItems.map((n) => (
                        <button key={n.key} className={`navbtn ${open === n.key ? 'on' : ''}`}
                            aria-expanded={n.menu ? open === n.key : undefined}
                            onMouseEnter={() => canHover() && setOpen(n.menu ? n.key : null)}
                            onClick={() => onNavClick(n.key, n.menu)}>
                            {n.label}
                            {n.menu && (
                                <svg className="chev" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                                    <path d="M3 4.5 L6 7.5 L9 4.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                                </svg>
                            )}
                        </button>
                    ))}
                </nav>

                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    {/* <button className="navbtn top-hide" aria-label="Search" style={{ padding: 10, width: 44, justifyContent: 'center' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                            <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
                            <path d="M20 20 L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button> */}
                    <a href="#contact" className="btn btn-ac hide-sm" style={{ padding: '12px 20px', minHeight: 44, fontSize: 14 }}>
                        Contact Us <Arrow />
                    </a>
                    <button className="navbtn burger" aria-expanded={mobile} aria-label="Open menu"
                        onClick={() => { setMobile((m) => !m); setOpen(null); setMobileOpen(null); }}
                        style={{ width: 44, justifyContent: 'center', padding: 10 }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M4 7 H20 M4 12 H20 M4 17 H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* AI */}
            {open === 'ai' && (
                <LinkGrid title="AI Solutions" links={aiLinks} onNavigate={() => setOpen(null)} promo={
                    <div style={{ background: '#EEF2FF', borderRadius: 16, padding: 24, display: 'flex', flexDirection: 'column', gap: 12, justifyContent: 'space-between' }}>
                        <div className="eyebrow" style={{ fontSize: 12 }}>Start here</div>
                        <h4 style={{ fontSize: 22, lineHeight: 1.2 }}>Not sure where AI fits in your business?</h4>
                        <p style={{ color: '#475569', fontSize: 14, lineHeight: 1.5 }}>Book a discovery call and our AI team will map the three highest-value use cases for your business.</p>
                        <a href="#contact" onClick={() => setOpen(null)} className="btn btn-ac" style={{ alignSelf: 'flex-start', minHeight: 44, padding: '10px 18px', fontSize: 14 }}>Book an AI discovery call</a>
                    </div>
                } />
            )}

            {/* Services */}
            {open === 'services' && (
                <LinkGrid title="Services" links={serviceLinks} onNavigate={() => setOpen(null)} promo={
                    <div style={{ background: '#F7F8FB', borderRadius: 16, padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
                        <div style={labelStyle}>Free estimate</div>
                        <h4 style={{ fontSize: 22, lineHeight: 1.2 }}>Tell us what you are building. Get a scoped estimate in 48 hours.</h4>
                        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, color: '#334155' }}>
                            <li>✓ Fixed-scope or dedicated team</li><li>✓ Senior in-house engineers only</li><li>✓ NDA before the first call</li>
                        </ul>
                        <a href="#contact" onClick={() => setOpen(null)} className="btn btn-ink" style={{ alignSelf: 'flex-start', minHeight: 44, padding: '10px 18px', fontSize: 14, marginTop: 'auto' }}>Get a free quote</a>
                    </div>
                } />
            )}

            {/* Technology */}
            {open === 'tech' && (
                <Mega>
                    <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,minmax(0,1fr))', gap: 28, paddingTop: 28, paddingBottom: 32 }}>
                        {techGroups.map((g) => (
                            <div key={g.title}>
                                <div style={{ ...labelStyle, marginBottom: 10, paddingLeft: 12 }}>{g.title}</div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    {g.items.map(([href, label]) => (
                                        <L key={href} className="mlink" href={href} onClick={() => setOpen(null)} style={{ padding: '8px 12px' }}><strong style={{ fontWeight: 500 }}>{label}</strong></L>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <div style={{ background: '#EFFAF5', borderRadius: 16, padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
                            <div style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0E7A4B', fontWeight: 600 }}>Core stack</div>
                            <h4 style={{ fontSize: 20, lineHeight: 1.25 }}>Laravel · Ruby on Rails · React · WordPress</h4>
                            <p style={{ color: '#475569', fontSize: 14, lineHeight: 1.5 }}>Dedicated engineering pods for each stack, shipping every week.</p>
                            <a href="#stack" onClick={() => setOpen(null)} style={{ color: '#0E7A4B', fontWeight: 600, fontSize: 14, marginTop: 'auto' }}>See the full stack →</a>
                        </div>
                    </div>
                </Mega>
            )}

            {/* Products */}
            {open === 'products' && (
                <Mega>
                    <div className="wrap" style={{ paddingTop: 28, paddingBottom: 32 }}>
                        <div style={{ ...labelStyle, marginBottom: 14 }}>Products we build and run</div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 16 }}>
                            {products.map((p) => (
                                <L key={p.name} className="mlink" href={p.href} onClick={() => setOpen(null)} style={{ border: '1px solid #E5E8EF', padding: 20, gap: 8 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                        <span
                                            style={{
                                                width: 32,
                                                height: 32,
                                                borderRadius: 8,

                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                overflow: 'hidden',
                                                flexShrink: 0,
                                            }}
                                        >
                                            <Image
                                                src={p.logo}
                                                alt=""
                                                width={32}
                                                height={32}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                        </span>
                                        <strong style={{ fontSize: 17 }}>{p.name}</strong>
                                    </div>
                                    <span>{p.menuDesc}</span>
                                </L>
                            ))}
                        </div>
                    </div>
                </Mega>
            )}

            {/* Company */}
            {open === 'company' && (
                <Mega>
                    <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 32, paddingTop: 28, paddingBottom: 32 }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                            <L className="mlink" href="/about" onClick={() => setOpen(null)}><strong>About Us</strong><span>Who we are and how we work</span></L>
                            <L className="mlink" href="#team" onClick={() => setOpen(null)}><strong>Our Team</strong><span>The departments behind every project</span></L>
                            <L className="mlink" href="/partners-awards" onClick={() => setOpen(null)}><strong>Partners &amp; Awards</strong><span>Platform partnerships and recognition</span></L>
                            <L className="mlink" href="/careers" onClick={() => setOpen(null)}><strong>Careers</strong><span>Join our growing in-house team</span></L>
                        </div>
                        <div style={{ gridColumn: 'span 2', background: '#F7F8FB', borderRadius: 16, padding: 24, display: 'flex', gap: 24, alignItems: 'center' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                <h4 style={{ fontSize: 22 }}>20+ years of combined team experience</h4>
                                <p style={{ color: '#5B6474', fontSize: 14, lineHeight: 1.5 }}>[XX+] specialists across engineering, design, QA and marketing, working in your time zone. No subcontracting.</p>
                            </div>
                            <a href="#team" onClick={() => setOpen(null)} className="btn btn-ac" style={{ flexShrink: 0, minHeight: 44, padding: '10px 18px', fontSize: 14 }}>Meet the team</a>
                        </div>
                    </div>
                </Mega>
            )}

            {/* Mobile */}
            {mobile && (
                <div className="mega" style={{ borderTop: '1px solid #E5E8EF', background: '#fff', padding: '12px 20px 24px', maxHeight: 'calc(100vh - 140px)', overflowY: 'auto' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {mobileSections.map((s) => {
                            const expanded = mobileOpen === s.key;
                            const closeAll = () => { setMobile(false); setMobileOpen(null); };
                            if (!s.children.length) {
                                return (
                                    <L key={s.key} href={s.href} onClick={closeAll}
                                        style={{ color: '#0F172A', fontWeight: 600, fontSize: 18, padding: '14px 4px', borderBottom: '1px solid #EEF1F5', display: 'flex', justifyContent: 'space-between' }}>
                                        {s.label}<span style={{ color: '#5B6474' }}>›</span>
                                    </L>
                                );
                            }
                            return (
                                <div key={s.key} style={{ borderBottom: '1px solid #EEF1F5' }}>
                                    <button type="button" aria-expanded={expanded}
                                        onClick={() => setMobileOpen(expanded ? null : s.key)}
                                        style={{ width: '100%', background: 'none', border: 0, cursor: 'pointer', color: '#0F172A', fontWeight: 600, fontSize: 18, padding: '14px 4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left' }}>
                                        {s.label}
                                        <svg width="14" height="14" viewBox="0 0 12 12" aria-hidden="true"
                                            style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform .2s', color: '#5B6474' }}>
                                            <path d="M3 4.5 L6 7.5 L9 4.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                    {expanded && (
                                        <div style={{ display: 'flex', flexDirection: 'column', padding: '0 0 10px 12px' }}>
                                            <L href={s.href} onClick={closeAll} style={{ color: '#0E7A4B', fontWeight: 600, fontSize: 15, padding: '10px 4px' }}>
                                                All {s.label} →
                                            </L>
                                            {s.children.map((c) => (
                                                <L key={c.href + c.label} href={c.href} onClick={closeAll}
                                                    style={{ color: '#334155', fontSize: 16, padding: '10px 4px' }}>
                                                    {c.label}
                                                </L>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                        <a href="#contact" onClick={() => { setMobile(false); setMobileOpen(null); }} className="btn btn-ac" style={{ marginTop: 16, justifyContent: 'center' }}>Contact Us</a>
                    </div>
                </div>
            )}
        </header>
    );
}