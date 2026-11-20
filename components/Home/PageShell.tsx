import type { CSSProperties, ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';

export default function PageShell({ children }: { children: ReactNode }) {
    return (
        <div
            className="acc motion-on"
            style={{ '--ac': '#304DDB', width: '100%', background: '#fff', overflowX: 'clip' } as CSSProperties}
        >
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}