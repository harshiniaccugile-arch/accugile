import L from './Link';

export default function UtilityBar() {
    return (
        <div style={{ background: '#F3F5FB', color: '#334155', fontSize: 13, borderBottom: '1px solid #E5E8EF' }}>
            <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, minHeight: 40, flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span className="live" style={{ width: 8, height: 8, borderRadius: '50%', background: '#1DBF73', display: 'inline-block' }} />
                    <span>30+ in-house specialists across engineering, design, QA and marketing</span>
                </div>
                <div className="top-hide" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                    <L href="/careers" style={{ color: '#334155' }}>Careers</L>
                    <a href="mailto:hello@accugile.com" style={{ color: '#334155' }}>hello@accugile.com</a>
                    <a href="tel:+91 9943798451" style={{ color: '#334155' }}>+91 9943798451</a>
                </div>
            </div>
        </div>
    );
}