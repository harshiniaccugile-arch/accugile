import SecHead from '@/components/About/SecHead';

const faqs = [

    {
        q: 'How long does the hiring process take?',
        a: 'Most candidates complete the process within two to three weeks, depending on the role and how quickly schedules line up. We keep you updated at each stage, so you are never left waiting without news.',
    },
    {
        q: 'What does the interview process look like?',
        a: 'It usually has three steps: an introductory conversation about your background and goals, a skills round (a practical task or technical discussion, depending on the role), and a final conversation with the team lead. Design and marketing candidates may be asked to walk us through past work. We always tell you what to expect before each round.',
    },
    {
        q: 'Will I work on client projects or products?',
        a: 'Team members may work on client engagements, our own products or both, depending on the role and current priorities. Many people move between the two, which gives you a broad view of how software is planned, built and shipped.',
    },
    {
        q: 'Which technologies and tools will I work with?',
        a: 'It varies by team. Our work includes modern web applications with Next.js and React, WordPress and WooCommerce, integrations with platforms such as HubSpot, and AI-powered features. We choose the right tool for each project and expect you to keep learning as that mix changes.',
    },
    {
        q: 'How do you support learning and career growth?',
        a: 'You get regular feedback, code and design reviews, and exposure to different projects and clients. We encourage knowledge sharing within the team, and people with the right skills and ownership are given more responsibility, including leading projects and mentoring newer colleagues.',
    },
    {
        q: 'What is the work culture like?',
        a: 'We are a team of 30+ in-house specialists who work closely together. We value ownership, clear communication and well-documented work, and we run on simple, disciplined habits: code reviews, automated tests and regular demos. People are expected to ask questions, share ideas and help each other.',
    },
    {
        q: 'What should I include in my application?',
        a: 'A current resume and a short note on why you are interested in the role. Developers can add links to GitHub or live projects, designers and marketers a portfolio or work samples. A few lines about something you built or improved tells us more than a long list of skills.',
    },

];

export default function CareersFaq() {
    return (
        <section className="sec" style={{ background: '#F7F8FB' }}>
            <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 48 }}>
                <div style={{ flex: '1 1 300px' }}>
                    <SecHead n="06" eyebrow="FAQ" title="Careers questions" />
                </div>
                <div style={{ flex: '2 1 560px', minWidth: 0, borderTop: '1px solid #E5E8EF' }}>
                    {faqs.map((f) => (
                        <details key={f.q} className="faq">
                            <summary>{f.q}</summary>
                            <p>{f.a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}