// Server component: do NOT add 'use client' to this file.

type Article = {
  id: number | string;
  title: string;
  link: string;
  category: string;
  image?: string;
};

type WPPost = {
  id: number;
  link: string;
  title: { rendered: string };
  featured_media: number;
  categories: number[];
};

type WPMedia = {
  id: number;
  source_url?: string;
  media_details?: { sizes?: Record<string, { source_url?: string }> };
};

type WPCategory = { id: number; name: string };

const SITE = 'https://recomonk.com';
const API = `${SITE}/wp-json/wp/v2`;
const REVALIDATE = { next: { revalidate: 3600 } } as const; // refresh at most hourly

// Shown only if the API request fails completely
const FALLBACK: Article[] = [
  {
    id: 'f1',
    title: "Comfortable High Heels in 2026: Pick Pairs That Won't Hurt",
    link: `${SITE}/comfortable-high-heels/`,
    category: 'Fashion',
    image: `${SITE}/wp-content/uploads/2026/11/comfortable-high-heels-city-sidewalk-1024x683.png`,
  },
  {
    id: 'f2',
    title: 'Electric Toothbrush Brush Head Cost Over Time: The Hidden Expense',
    link: `${SITE}/electric-toothbrush-brush-head-cost/`,
    category: 'Wellness',
    image: `${SITE}/wp-content/uploads/2026/11/electric-toothbrush-brush-head-cost-1024x683.png`,
  },
  {
    id: 'f3',
    title: 'Best Dental Care Products for Sensitive Teeth in 2026: Ranked by Ingredient',
    link: `${SITE}/best-dental-care-products-sensitive-teeth/`,
    category: 'Wellness',
    image: `${SITE}/wp-content/uploads/2026/11/best-dental-care-products-for-sensitive-teeth-1024x768.png`,
  },
];

// WordPress returns text with HTML entities (&#8217;, &amp;, ...)
function decodeEntities(s: string): string {
  return s
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

async function getJson<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url, REVALIDATE);
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

// Last resort: read the <meta property="og:image"> tag from the article page
async function getOgImage(link: string): Promise<string | undefined> {
  try {
    const res = await fetch(link, REVALIDATE);
    if (!res.ok) return undefined;
    const html = await res.text();
    const m =
      html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i) ||
      html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);
    return m ? decodeEntities(m[1]) : undefined;
  } catch {
    return undefined;
  }
}

function pickMediaUrl(m?: WPMedia): string | undefined {
  if (!m) return undefined;
  const s = m.media_details?.sizes;
  return s?.large?.source_url || s?.medium_large?.source_url || m.source_url || undefined;
}

async function getLatestArticles(): Promise<Article[]> {
  const posts = await getJson<WPPost[]>(
    `${API}/posts?per_page=3&orderby=date&order=desc&_fields=id,link,title,featured_media,categories`
  );
  if (!posts || posts.length === 0) return FALLBACK;

  const mediaIds = [...new Set(posts.map((p) => p.featured_media).filter(Boolean))];
  const catIds = [...new Set(posts.flatMap((p) => p.categories ?? []))];

  const [media, cats] = await Promise.all([
    mediaIds.length
      ? getJson<WPMedia[]>(
        `${API}/media?include=${mediaIds.join(',')}&per_page=${mediaIds.length}&_fields=id,source_url,media_details`
      )
      : Promise.resolve(null),
    catIds.length
      ? getJson<WPCategory[]>(
        `${API}/categories?include=${catIds.join(',')}&per_page=${catIds.length}&_fields=id,name`
      )
      : Promise.resolve(null),
  ]);

  const mediaById = new Map((media ?? []).map((m) => [m.id, m]));
  const catById = new Map((cats ?? []).map((c) => [c.id, c.name]));

  return Promise.all(
    posts.map(async (p) => {
      let image = pickMediaUrl(mediaById.get(p.featured_media));
      if (!image) image = await getOgImage(p.link);

      const catName = p.categories?.map((id) => catById.get(id)).find(Boolean);

      return {
        id: p.id,
        title: decodeEntities(p.title.rendered),
        link: p.link,
        category: decodeEntities(catName ?? 'Guide'),
        image,
      };
    })
  );
}

export default async function LatestArticles() {
  const articles = await getLatestArticles();

  return (
    <section className="sec" style={{ background: 'var(--cream)' }}>
      <div className="wrap">
        <div className="sec-h">
          <div style={{ maxWidth: '760px' }}>
            <div className="eyebrow" style={{ marginBottom: '14px' }}>
              Fresh on Recomonk
            </div>
            <h2 className="h2">Guides readers are opening right now.</h2>
          </div>
          <a
            href={SITE}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: 700, color: 'var(--ac)' }}
          >
            Read the latest →
          </a>
        </div>

        <div className="arts">
          {articles.map((a) => (
            <a
              key={a.id}
              className="acard"
              href={a.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="im"
                style={{ background: '#E0F2FE', overflow: 'hidden', aspectRatio: '3 / 2' }}
              >
                {a.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                )}
              </div>
              <div className="bd">
                <span className="k">{a.category}</span>
                <h3>{a.title}</h3>
                <span className="rd">Read the guide →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}