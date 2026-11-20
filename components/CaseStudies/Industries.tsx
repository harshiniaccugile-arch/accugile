import SecHead from '@/components/About/SecHead';

const industries = [
    { title: 'Retail and eCommerce', text: 'D2C brands, retailers and marketplaces.', bg: '#EEF2FF' },
    { title: 'Travel and hospitality', text: 'Tour operators, hotels and experience providers.', bg: '#EFFAF5' },
    { title: 'Education and eLearning', text: 'Institutions, training providers and edtech.', bg: '#FDEEE4' },
    { title: 'Healthcare', text: 'Clinics, practitioners and health services.', bg: '#F3EEFF' },
    { title: 'Financial services', text: 'Lenders, fintechs and advisory firms.', bg: '#FEF6DA' },
    { title: 'Manufacturing and distribution', text: 'Manufacturers, distributors and B2B suppliers.', bg: '#E8F4FD' },
    { title: 'Professional services', text: 'Consultancies, legal and accounting firms.', bg: '#F1F4F9' },
    { title: 'Media and publishing', text: 'Publishers, creators and content platforms.', bg: '#FCEFF5' },
];

export default function Industries() {
    return (
        <section className="sec" style={{ background: '#F7F8FB' }}>
            <div className="wrap">
                <SecHead n="02" eyebrow="Industries" title="Sectors we serve" />
                <div className="grid g4">
                    {industries.map((i) => (
                        <div key={i.title} className="box" style={{ background: i.bg, borderColor: 'transparent' }}>
                            <h3>{i.title}</h3>
                            <p>{i.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
