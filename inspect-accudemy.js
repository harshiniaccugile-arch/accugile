const fs = require('fs');

const raw = fs.readFileSync('c:/Users/Mac-2/Downloads/case-study-accudemy.html', 'utf8');

// Hero
const heroIdx = raw.indexOf('<section class="cs-hero">');
const heroEnd = raw.indexOf('</section>', heroIdx) + 10;
const heroHtml = raw.slice(heroIdx, heroEnd);

// TOC
const tocIdx = raw.indexOf('<nav class="cs-toc"');
const tocEnd = raw.indexOf('</nav>', tocIdx) + 6;
const tocHtml = raw.slice(tocIdx, tocEnd);

// DOC
const docIdx = raw.indexOf('<article class="cs-doc">');
const docEnd = raw.indexOf('</article>', docIdx) + 10;
const docHtml = raw.slice(docIdx, docEnd);

// MORE
const moreIdx = raw.indexOf('<section class="more">');
const moreEnd = moreIdx !== -1 ? raw.indexOf('</section>', moreIdx) + 10 : -1;
const moreHtml = moreIdx !== -1 ? raw.slice(moreIdx, moreEnd) : '';

// CTA
const ctaIdx = raw.indexOf('<section class="cs-cta">');
const ctaEnd = ctaIdx !== -1 ? raw.indexOf('</section>', ctaIdx) + 10 : -1;
const ctaHtml = ctaIdx !== -1 ? raw.slice(ctaIdx, ctaEnd) : '';

console.log('Hero len:', heroHtml.length);
console.log('TOC len:', tocHtml.length);
console.log('Doc len:', docHtml.length);
console.log('More len:', moreHtml.length);
console.log('CTA len:', ctaHtml.length);

// Extract toc items
const tocItems = [];
const matches = [...tocHtml.matchAll(/<a href="#([^"]+)">([\s\S]*?)<\/a>/g)];
matches.forEach(m => {
  tocItems.push({ id: m[1], label: m[2].replace(/<[^>]+>/g, '').trim() });
});

console.log('TOC items extracted:', tocItems);

