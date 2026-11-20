import SecHead from '@/components/About/SecHead';

const leads = ['Head of Engineering', 'Head of Design', 'Head of Quality Assurance', 'Head of Digital Marketing'];

export default function DepartmentLeads() {
    return (
        <section className="sec">
            <div className="wrap">
                <SecHead n="03" eyebrow="Leadership" title="Department leads" />
                <div className="grid g4">
                    {leads.map((role) => (
                        <div key={role} className="box">
                            <div className="ph" style={{ height: 180 }}>[Photograph]</div>
                            <h3>[Full name]</h3>
                            <p>{role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}