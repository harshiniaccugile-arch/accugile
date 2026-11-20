import L from '@/components/Home/Link';
import SecHead from './SecHead';

const caps = [
    ['/services', 'Strategy and consulting', 'Discovery, roadmaps and solution architecture.'],
    ['/web-design', 'Design', 'UI/UX, brand identity and design systems.'],
    ['/software-development', 'Engineering', 'Software, SaaS, websites and integrations.'],
    ['/ecommerce-solutions', 'Commerce', 'Stores, marketplaces and migrations.'],
    ['/ai', 'Artificial intelligence', 'ML, generative AI, chatbots and automation.'],
    ['/digital-marketing-branding', 'Growth', 'SEO, performance marketing and analytics.'],
];

export default function Capabilities() {
    return (
        <section className="sec">
            <div className="wrap">
                <SecHead n="03" eyebrow="Capabilities" title="An integrated service portfolio" />
                <div className="grid g3">
                    {caps.map(([href, h, p]) => (
                        <L key={h} href={href} className="box">
                            <h3>{h}</h3><p>{p}</p>
                            <span style={{ color: 'var(--ac)', fontWeight: 600, fontSize: 14 }}>Explore →</span>
                        </L>
                    ))}
                </div>
            </div>
        </section>
    );
}