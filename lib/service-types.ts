export type Pair = { title: string; text: string };

export type ServiceData = {
    metaTitle: string;
    metaDescription: string;
    parent: { label: string; href: string }; // breadcrumb middle item
    name: string; // breadcrumb last item
    eyebrow: string;
    title: string;
    lead: string;
    overview: [string, string][]; // hero "Engagement overview" card rows
    overviewParas: string[];
    outcomes: string[];
    challenge: { title: string; intro: string; items: string[] };
    capabilities: { aside: string; items: Pair[] };
    useCases: Pair[];
    phases: (Pair & { output: string })[];
    governance: { deliverables: string[]; ipNote: string; kpis: Pair[] };
    tools: { aside: string; items: string[] };
    featuredTag: string; // e.g. "[Client] · [Industry] · AI/ML"
    faqs: { q: string; a: string }[];
    related: { href: string; label: string; title: string; text: string }[];
    reading: { tag: string; title: string }[];
};
