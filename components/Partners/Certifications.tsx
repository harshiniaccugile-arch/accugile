import SecHead from '@/components/About/SecHead';

const items = [
    ['[Certification]', '[Describe scope and validity. Add only certifications currently held.]'],
    ['Data protection', 'Confidentiality agreements, role-based access and secure credential handling on every engagement.'],
    ['Secure development', 'Code review, dependency auditing and environment separation as standard practice.'],
];

export default function Certifications() {
    return (
        <section className="sec">
            <div className="wrap">
                <SecHead n="03" eyebrow="Standards" title="Certifications and compliance" />
                <div className="grid g3">
                    {items.map(([h, p]) => (
                        <div key={h} className="box">
                            <h3>{h}</h3><p>{p}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}