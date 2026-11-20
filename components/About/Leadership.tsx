import SecHead from './SecHead';

const people = [
    'Founder and Chief Executive Officer',
    'Head of Engineering',
    'Head of Design',
    'Head of Growth',
];

export default function Leadership() {
    return (
        <section className="sec" style={{ background: '#F7F8FB' }}>
            <div className="wrap">
                <SecHead n="04" eyebrow="Leadership" title="Leadership team"
                    note="Replace the placeholders below with your leadership profiles and photographs." />
                <div className="grid g4">
                    {people.map((role) => (
                        <div key={role} className="box">
                            <div className="ph" style={{ height: 200 }}>[Photograph]</div>
                            <h3>[Full name]</h3>
                            <p>[Title, for example {role}]</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}