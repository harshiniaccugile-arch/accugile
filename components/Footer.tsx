import Image from 'next/image';
import L from './Home/Link';
import { footerCols } from '@/lib/data';

export default function Footer() {
    return (
        <footer className="ft">
            <div className="wrap">
                <div className="ft-top">
                    <div className="ft-brand">
                        <L href="/" aria-label="Accugile home" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: '#0F172A' }}>
                            <Image src="/assets/Accugile-Logo-Primary.png" alt="Accugile" width={300} height={80} style={{ display: 'block', height: 80, width: 'auto' }} />
                        </L>
                        <p>Full-stack development and digital agency. One accountable in-house team for AI, software, eCommerce and brand growth.</p>
                        <p>Coimbatore, Tamil Nadu, India</p>
                    </div>
                    {footerCols.map(([title, links]) => (
                        <div key={title}>
                            <h4>{title}</h4>
                            <ul>{links.map(([href, label]) => <li key={href}><L href={href}>{label}</L></li>)}</ul>
                        </div>
                    ))}
                </div>

                <div className="ft-contact">
                    <div><span>New business</span><a href="mailto:hello@accugile.com">hello@accugile.com</a></div>
                    <div><span>Telephone</span><a href="tel:+910000000000">+91 9943798451</a></div>
                    <div><span>Start a project</span><L href="/contact" style={{ color: 'var(--ac)' }}>Request a proposal →</L></div>
                </div>

                <div className="ft-bottom">
                    <span>© 2026 Accugile. All rights reserved.</span>
                    <nav aria-label="Legal">
                        <L href="/legal?tab=privacy">Privacy Policy</L><L href="/legal?tab=terms">Terms &amp; Conditions</L><L href="/legal?tab=cookies">Cookie Policy</L><L href="/contact">Contact</L>
                    </nav>
                    <div className="ft-social">
                        <a href="#" aria-label="Accugile on LinkedIn">
                            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden><path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.2c0-1.2 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4z" /></svg>
                        </a>
                        <a href="#" aria-label="Accugile on Instagram">
                            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" /></svg>
                        </a>
                        <a href="#" aria-label="Accugile on X">
                            <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden><path fill="currentColor" d="M18.2 2H21l-6.5 7.4L22 22h-6l-4.7-6.1L5.8 22H3l7-8L2 2h6.1l4.2 5.6zM17.2 20h1.6L7 3.9H5.3z" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}