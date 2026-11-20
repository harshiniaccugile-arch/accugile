import type { ServiceData } from '@/lib/service-types';
import { techGovernance, techOverviewCard, techPhases, commonFaqs } from './tech-common';

export const graphics: ServiceData = {
    metaTitle: 'Graphic Design | Accugile',
    metaDescription:
        'We produce professional graphic design for digital and print, ensuring every asset reflects your brand with consistency and quality.',
    parent: { label: 'Technology', href: '/technology' },
    name: 'Graphics',
    eyebrow: 'Technology · Website Designing',
    title: 'Graphic Design',
    lead: 'We produce professional graphic design for digital and print, ensuring every asset reflects your brand with consistency and quality.',
    overview: techOverviewCard,
    overviewParas: [
        'Consistent visual communication builds trust. Our graphic designers produce marketing assets, presentations, illustrations and print collateral aligned to your brand guidelines.',
        'Through retained design support, marketing teams gain dependable capacity for campaigns and day-to-day requests.',
    ],
    outcomes: [
        'Consistent brand presentation',
        'Faster turnaround on marketing assets',
        'Professional sales and investor materials',
        'Reliable ongoing design capacity',
    ],
    challenge: {
        title: 'Every asset represents the brand',
        intro: 'Marketing teams need a steady flow of quality assets. Inconsistent design across campaigns, decks and print weakens brand recognition and credibility. Our approach addresses these issues directly, with clear ownership and measurable outcomes from the outset.',
        items: [
            'Inconsistent visual style across materials',
            'Slow turnaround on campaign and sales assets',
            'Limited in-house design capacity',
        ],
    },
    capabilities: {
        aside: 'Each capability is delivered by specialists from our in-house teams and can be engaged individually or as part of a wider programme.',
        items: [
            { title: 'Marketing creatives', text: 'Social media, display and email assets.' },
            { title: 'Presentations', text: 'Sales decks and investor presentations.' },
            { title: 'Brochures and print', text: 'Company profiles, catalogues and stationery.' },
            { title: 'Illustration and iconography', text: 'Custom illustrations and icon sets.' },
            { title: 'Infographics', text: 'Data visualisation for reports and content.' },
            { title: 'Packaging', text: 'Product packaging and labelling design.' },
        ],
    },
    useCases: [
        { title: 'Marketing teams', text: 'Campaign creative at volume.' },
        { title: 'Sales teams', text: 'Pitch materials and proposals.' },
        { title: 'Product brands', text: 'Packaging and retail materials.' },
        { title: 'Corporate communications', text: 'Annual reports and internal materials.' },
    ],
    phases: techPhases,
    governance: techGovernance,
    tools: {
        aside: 'Technology is selected for maintainability, security and fit with your existing estate, not vendor preference.',
        items: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'Figma', 'Canva for Teams', 'After Effects'],
    },
    featuredTag: '[Client] · [Industry] · Graphics',
    faqs: [
        { q: 'Do you offer monthly design retainers?', a: 'Yes. Retainers provide a defined monthly capacity with agreed turnaround times.' },
        { q: 'Can you work within our brand guidelines?', a: 'Yes. All work follows your guidelines, or we can create them.' },
        { q: 'Will we receive editable source files?', a: 'Yes. Source files are transferred on completion.' },
        ...commonFaqs,
    ],
    related: [
        { href: '/digital-marketing-branding', label: 'Services', title: 'Digital Marketing and Branding', text: 'We build brands that earn recognition and marketing programmes that generate measurable pipeline, managed by a single team accountable for…' },
        { href: '/ui-ux', label: 'Technology', title: 'UI/UX Design', text: 'Our UI/UX team designs intuitive, accessible digital products grounded in research and aligned with business…' },
        { href: '/web-design', label: 'Services', title: 'Web Design and UI/UX', text: 'We design digital experiences grounded in user research and business objectives, producing interfaces that are clear, accessible and consistent with…' },
    ],
    reading: [
        { tag: 'Graphics · [X] min read', title: '[Article on Graphics]' },
        { tag: 'Engineering · [X] min read', title: '[Article title]' },
        { tag: 'Strategy · [X] min read', title: '[Article title]' },
    ],
};