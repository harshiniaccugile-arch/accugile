import SecHead from '@/components/About/SecHead';

const steps = [
    { title: 'Application', text: 'Submit your CV and portfolio or code samples.' },
    { title: 'Screening', text: 'A short conversation with our talent team.' },
    { title: 'Technical assessment', text: 'A practical task or technical interview relevant to the role.' },
    { title: 'Final interview', text: 'A discussion with the department lead, followed by an offer.' },
];

export default function HiringProcess() {
    return (
        <section className="sec">
            <div className="wrap">
                <SecHead n="03" eyebrow="Hiring process" title="What to expect" />
                <div className="grid g4" style={{ gap: 32 }}>
                    {steps.map((s, i) => (
                        <div key={s.title} className="step">
                            <b>Step {i + 1}</b>
                            <h3>{s.title}</h3>
                            <p>{s.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
