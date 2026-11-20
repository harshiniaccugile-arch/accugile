import SecHead from './SecHead';

const industries = [
    ['#EEF2FF', 'Retail and eCommerce', 'D2C brands, retailers and marketplaces.'],
    ['#EFFAF5', 'Travel and hospitality', 'Tour operators, hotels and experience providers.'],
    ['#FDEEE4', 'Education and eLearning', 'Institutions, training providers and edtech.'],
    ['#F3EEFF', 'Healthcare', 'Clinics, practitioners and health services.'],
    ['#FEF6DA', 'Financial services', 'Lenders, fintechs and advisory firms.'],
    ['#E8F4FD', 'Manufacturing and distribution', 'Manufacturers, distributors and B2B suppliers.'],
    ['#F1F4F9', 'Professional services', 'Consultancies, legal and accounting firms.'],
    ['#FCEFF5', 'Media and publishing', 'Publishers, creators and content platforms.'],
];

export default function Industries({ n = '05', bg = '#fff' }: { n?: string; bg?: string }) {
    return (
        <section className="sec" style={{ background: bg }}>
            <div className="wrap">
                <SecHead n={n} eyebrow="Industries" title="Sectors we serve" />
                <div className="grid g4">
                    {industries.map(([bg, h, p]) => (
                        <div key={h} className="box" style={{ background: bg, borderColor: 'transparent' }}>
                            <h3>{h}</h3><p>{p}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}