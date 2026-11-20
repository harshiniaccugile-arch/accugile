import SecHead from '@/components/About/SecHead';

const standards = [
    ['Code review', 'Every change is reviewed by a second engineer before merge.'],
    ['Automated testing', 'Unit, integration and end-to-end tests run on every build.'],
    ['Secure development', 'Dependency scanning, secrets management and least-privilege access.'],
    ['Data protection', 'Practices aligned with the Digital Personal Data Protection Act, 2023 and GDPR principles.'],
    ['Environment separation', 'Distinct development, staging and production environments.'],
    ['Backup and recovery', 'Scheduled backups and documented recovery procedures.'],
];

function ShieldIcon() {
    return (
        <span style={{ width: 36, height: 36, borderRadius: 10, background: '#EEF2FF', color: 'var(--ac)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M10 2 L17 5 V10 C17 14 14 17 10 18 C6 17 3 14 3 10 V5 Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M7 10 L9.2 12.2 L13 8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </span>
    );
}

export default function QualitySecurity() {
    return (
        <section className="sec" style={{ background: '#FFFFFF' }}>
            <div className="wrap">
                <SecHead n="10" eyebrow="Quality and security" title="Standards applied to every engagement" />
                <div className="grid g3">
                    {standards.map(([title, text]) => (
                        <div key={title} className="box">
                            <ShieldIcon />
                            <h3>{title}</h3>
                            <p>{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
