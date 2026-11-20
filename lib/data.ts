export type Item = { href: string; title: string; desc?: string };

export const aiLinks: Item[] = [
    { href: '/ai-ml', title: 'AI/ML', desc: 'Custom models, predictions and data pipelines' },
    { href: '/generative-ai', title: 'Generative AI', desc: 'LLM apps, copilots and content engines' },
    { href: '/enterprise-ai', title: 'Enterprise AI', desc: 'Secure AI wired into your internal systems' },
    { href: '/ai-chatbot', title: 'AI Chatbot', desc: 'Sales and support bots for web and WhatsApp' },
    { href: '/ai-voicebot', title: 'AI Voicebot', desc: 'Voice agents for calls, bookings and IVR' },
    { href: '/automated-workflows', title: 'Automated Workflows', desc: 'AI-driven automation across your tools' },
];

export const serviceLinks: Item[] = [
    { href: '/digital-marketing-branding', title: 'Digital Marketing & Branding', desc: 'Brand identity, SEO and performance campaigns' },
    { href: '/software-development', title: 'Software Development', desc: 'Custom business software and integrations' },
    { href: '/website-development', title: 'Website Development', desc: 'Fast, secure, conversion-led websites' },
    { href: '/cms-solutions', title: 'CMS Solutions', desc: 'WordPress and headless CMS builds' },
    { href: '/web-design', title: 'Web Design', desc: 'UI/UX that turns visitors into leads' },
    { href: '/membership-management', title: 'Membership Management', desc: 'Subscriptions, gated content and renewals' },
    { href: '/learning-management', title: 'Learning Management', desc: 'Course platforms and LMS portals' },
    { href: '/ecommerce-solutions', title: 'eCommerce Solutions', desc: 'Stores, marketplaces and migrations' },
    { href: '/saas-development', title: 'SaaS Development', desc: 'Multi-tenant products from MVP to scale' },
    { href: '/cloud-solutions', title: 'Cloud Solutions', desc: 'Hosting, DevOps and cloud migration' },
];

export const techGroups = [
    {
        title: 'eCommerce',
        desc: 'Platforms we build, customise and migrate between.',
        items: [
            ['/magento', 'Magento'], ['/shopify', 'Shopify'], ['/shopify-plus', 'Shopify Plus'],
            ['/woocommerce', 'WooCommerce'], ['/wix', 'Wix'], ['/bigcommerce', 'BigCommerce'],
        ],
    },
    {
        title: 'Website Development',
        desc: 'Back-end frameworks and full-stack JavaScript.',
        items: [['/php-frameworks', 'PHP Frameworks'], ['/nodejs', 'NodeJS'], ['/mern', 'MERN'], ['/mean', 'MEAN']],
    },
    {
        title: 'Website Designing',
        desc: 'Front-end frameworks and design craft.',
        items: [
            ['/angular', 'Angular'], ['/ui-ux', 'UI/UX'], ['/graphics', 'Graphics'],
            ['/reactjs', 'ReactJS'], ['/nextjs', 'NextJS'],
        ],
    },
];

export const marqueeItems = [
    'Laravel', 'Ruby on Rails', 'React', 'Next.js', 'Node.js', 'WordPress',
    'WooCommerce', 'Shopify Plus', 'Magento', 'BigCommerce', 'Angular', 'OpenAI',
];

export const products = [
    {
        href: '/adorack', name: 'Adorack', tag: 'SaaS', domain: 'adorack.com',
        color: '#EEF2FF',
        logo: '/products/ak-logo.png',
        menuDesc: 'Social media scheduling with AI content tools',
        desc: 'Social media scheduling and management for teams and agencies, with AI content tools across eight platforms.'
    },
    {
        href: '/skiplore', name: 'Skiplore', tag: 'Marketplace', domain: 'skiplore.com',
        color: '#d0e2d37a',
        logo: '/products/skiploreailogo.ico',
        menuDesc: 'Travel and local experiences marketplace for India',
        desc: 'A marketplace connecting travellers with verified local hosts and experiences across Kerala, Tamil Nadu and Goa.'
    },
    {
        href: '/recomonk', name: 'Recomonk', tag: 'Content', domain: 'recomonk.com',
        color: '#FFF7ED',
        logo: '/products/recomonk.png',
        menuDesc: 'Product recommendations and buying guides',
        desc: 'An affiliate content site publishing honest product recommendations and buying guides.'
    },
];

export const serviceTabs = [
    {
        n: '01', tab: 'Build software', sub: 'Custom, SaaS and cloud', badge: 'Engineering',
        h: 'Software that fits your business, not the other way round.',
        p: 'From internal tools to multi-tenant SaaS, we design the architecture, write the code and run it in the cloud, with one accountable team from start to finish.',
        cards: [
            ['/software-development', 'Software Development', 'Custom business software, portals and integrations.'],
            ['/saas-development', 'SaaS Development', 'Subscription products from MVP to scale.'],
            ['/cloud-solutions', 'Cloud Solutions', 'Hosting, DevOps, monitoring and migration.'],
        ],
        stack: ['Laravel', 'Ruby on Rails', 'Node.js', 'React'],
    },
    {
        n: '02', tab: 'Launch websites', sub: 'Design, development and CMS', badge: 'Web',
        h: 'Fast, secure websites that turn visitors into leads.',
        p: 'Corporate sites, landing pages and content platforms, designed for clarity and built on a CMS your team can actually use.',
        cards: [
            ['/website-development', 'Website Development', 'Performance-first builds on modern stacks.'],
            ['/web-design', 'Web Design', 'UI/UX, wireframes and design systems.'],
            ['/cms-solutions', 'CMS Solutions', 'WordPress and headless CMS setups.'],
        ],
        stack: ['WordPress', 'Next.js', 'Angular', 'Figma'],
    },
    {
        n: '03', tab: 'Sell online', sub: 'eCommerce, memberships, LMS', badge: 'Commerce',
        h: 'Stores, marketplaces and members-only platforms that sell.',
        p: 'Whether you are migrating from Shopify to WooCommerce, launching a multivendor marketplace or selling courses, we build the whole revenue engine.',
        cards: [
            ['/ecommerce-solutions', 'eCommerce Solutions', 'Stores, marketplaces and migrations.'],
            ['/membership-management', 'Membership Management', 'Subscriptions, gated content and renewals.'],
            ['/learning-management', 'Learning Management', 'Course platforms and LMS portals.'],
        ],
        stack: ['Shopify Plus', 'WooCommerce', 'Magento', 'BigCommerce'],
    },
    {
        n: '04', tab: 'Grow the brand', sub: 'Digital marketing and branding', badge: 'Growth',
        h: 'A brand people remember, and the traffic to match.',
        p: 'Identity, messaging and the campaigns that put them in front of the right buyers, measured against revenue rather than vanity metrics.',
        cards: [
            ['/digital-marketing-branding', 'Brand identity', 'Logo, visual system and brand guidelines.'],
            ['/digital-marketing-branding', 'SEO and content', 'Technical SEO and content that ranks.'],
            ['/digital-marketing-branding', 'Performance marketing', 'Paid social and search campaigns.'],
        ],
        stack: ['Google Ads', 'Meta Ads', 'GA4', 'Search Console'],
    },
];

export const team = [
    { code: 'PM', bg: '#EEF2FF', fg: '#2338B0', h: 'Strategy and project management', p: 'Discovery, scoping and one accountable project lead for every engagement.' },
    { code: 'UX', bg: '#FDEEE4', fg: '#9A3412', h: 'UI/UX and brand design', p: 'Research, wireframes, design systems and brand identity.' },
    { code: '</>', bg: '#EFFAF5', fg: '#0E7A4B', h: 'Engineering', p: 'Laravel, Ruby on Rails, React, Node.js and WordPress specialists.' },
    { code: 'QA', bg: '#FEF6DA', fg: '#8A5A00', h: 'Quality assurance', p: 'Manual and automated testing before anything reaches production.' },
    { code: 'AI', bg: '#F3EEFF', fg: '#5B3CC4', h: 'AI and data', p: 'LLM apps, chatbots, voicebots and data pipelines.' },
    { code: 'GR', bg: '#E8F4FD', fg: '#0B5C8F', h: 'Digital marketing and SEO', p: 'SEO, content and paid campaigns measured against revenue.' },
    { code: 'CL', bg: '#F1F4F9', fg: '#334155', h: 'Cloud solutions', p: 'Cloud hosting, migration, CI/CD and monitoring for reliable releases.' },
    { code: 'SD', bg: '#FCEFF5', fg: '#A21C5B', h: 'Software development', p: 'Custom business software, integrations and SaaS products built end to end.' },
];

export const process = [
    ['01', 'Discover', 'We learn your goals, users and constraints, then agree scope, budget and a timeline you can plan around.', 'Project lead + solution architect'],
    ['02', 'Design', 'Wireframes and high-fidelity designs you review and approve before a line of code is written.', 'UI/UX design team'],
    ['03', 'Build', 'Two-week sprints, a staging link from week one and a weekly demo, so you always see progress.', 'Engineering + QA squad'],
    ['04', 'Launch and scale', 'Zero-downtime launch, monitoring and ongoing support as your traffic and team grow.', 'DevOps + support team'],
];

export const footerCols = [
    ['AI', [['/ai-ml', 'AI/ML'], ['/generative-ai', 'Generative AI'], ['/enterprise-ai', 'Enterprise AI'], ['/ai-chatbot', 'AI Chatbot'], ['/ai-voicebot', 'AI Voicebot'], ['/automated-workflows', 'Automated Workflows']]],
    ['Services', [['/software-development', 'Software Development'], ['/saas-development', 'SaaS Development'], ['/website-development', 'Website Development'], ['/ecommerce-solutions', 'eCommerce Solutions'], ['/cloud-solutions', 'Cloud Solutions'], ['/digital-marketing-branding', 'Digital Marketing'], ['/services', 'All services']]],
    ['Technology', [['/shopify-plus', 'Shopify Plus'], ['/woocommerce', 'WooCommerce'], ['/magento', 'Magento'], ['/php-frameworks', 'PHP Frameworks'], ['/mern', 'MERN / MEAN'], ['/reactjs', 'ReactJS / NextJS'], ['/technology', 'All technologies']]],
    ['Company', [['/about', 'About Us'], ['/team', 'Our Team'], ['/partners-awards', 'Partners & Awards'], ['/career', 'Careers'], ['/case-studies', 'Case Studies']]],
    ['Products', [['/adorack', 'Adorack'], ['/skiplore', 'Skiplore'], ['/recomonk', 'Recomonk']]],
] as const;