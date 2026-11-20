import Link from 'next/link';
import SecHead from '@/components/About/SecHead';

const services = [
    {
        num: '01',
        title: 'Digital Marketing and Branding',
        desc: 'We build brands that earn recognition and marketing programmes that generate measurable pipeline, managed by a single team accountable for both.',
        href: '/digital-marketing-branding',
    },
    {
        num: '02',
        title: 'Custom Software Development',
        desc: 'We engineer custom business software, portals and integrations that fit your operating model precisely and scale with your organisation.',
        href: '/software-development',
    },
    {
        num: '03',
        title: 'Website Development',
        desc: 'We build fast, secure and accessible websites engineered for conversion, search performance and straightforward management by your team.',
        href: '/website-development',
    },
    {
        num: '04',
        title: 'CMS Solutions',
        desc: 'We implement content management platforms that give marketing and editorial teams full control of content while maintaining performance, security and governance.',
        href: '/cms-solutions',
    },
    {
        num: '05',
        title: 'Web Design and UI/UX',
        desc: 'We design digital experiences grounded in user research and business objectives, producing interfaces that are clear, accessible and consistent with your brand.',
        href: '/web-design',
    },
    {
        num: '06',
        title: 'Membership Management Platforms',
        desc: 'We build membership platforms that manage subscriptions, gated content, renewals and member communication from a single, reliable system.',
        href: '/membership-management',
    },
    {
        num: '07',
        title: 'Learning Management Systems',
        desc: 'We build learning platforms for training providers, institutions and enterprises, covering course delivery, assessment, certification and commerce.',
        href: '/learning-management',
    },
    {
        num: '08',
        title: 'eCommerce Solutions',
        desc: 'We design, build and scale online stores and marketplaces on Shopify, WooCommerce, Magento and custom platforms, with the integrations required to operate efficiently.',
        href: '/ecommerce-solutions',
    },
    {
        num: '09',
        title: 'SaaS Product Development',
        desc: 'We take SaaS products from validated concept to scalable, multi-tenant platforms, combining product strategy, engineering and the operational experience of running our own products.',
        href: '/saas-development',
    },
    {
        num: '10',
        title: 'Cloud Solutions and DevOps',
        desc: 'We design, migrate and operate cloud infrastructure that is secure, cost-efficient and resilient, supported by modern DevOps practices.',
        href: '/cloud-solutions',
    },
];

export default function ServicesPortfolio() {
    return (
        <section className="sec">
            <div className="wrap">
                <SecHead n="01" eyebrow="Portfolio" title="Explore services" />
                <div className="grid g3">
                    {services.map((s) => (
                        <Link key={s.num} href={s.href} className="box">
                            <span className="num">{s.num}</span>
                            <h3>{s.title}</h3>
                            <p>{s.desc}</p>
                            <span style={{ color: 'var(--ac)', fontWeight: 600, fontSize: 14, marginTop: 'auto' }}>
                                Learn more →
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

