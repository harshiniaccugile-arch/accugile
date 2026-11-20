// Same markup as SecHead, plus the short paragraph shown on the right of the heading.
// Used where the original page has supporting copy next to the title.
export default function SecHeadAside({
    n,
    eyebrow,
    title,
    aside,
}: {
    n: string;
    eyebrow: string;
    title: string;
    aside: string;
}) {
    return (
        <div className="sec-h">
            <div style={{ maxWidth: 760 }}>
                <div className="eyebrow" style={{ marginBottom: 14 }}>
                    <span className="num" style={{ color: 'inherit' }}>{n}</span> &nbsp;{eyebrow}
                </div>
                <h2 className="h2">{title}</h2>
            </div>
            <p style={{ maxWidth: 420, color: '#5B6474', fontSize: 16, lineHeight: 1.6 }}>{aside}</p>
        </div>
    );
}
