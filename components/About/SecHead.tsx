import type { ReactNode } from 'react';

export default function SecHead({ n, eyebrow, title, note }: { n: string; eyebrow: string; title: string; note?: ReactNode }) {
    return (
        <div className="sec-h">
            <div style={{ maxWidth: 760 }}>
                <div className="eyebrow" style={{ marginBottom: 14 }}>
                    <span className="num" style={{ color: 'inherit' }}>{n}</span> &nbsp;{eyebrow}
                </div>
                <h2 className="h2">{title}</h2>
            </div>
            {note && <p style={{ maxWidth: 420, color: '#5B6474', fontSize: 16, lineHeight: 1.6 }}>{note}</p>}
        </div>
    );
}