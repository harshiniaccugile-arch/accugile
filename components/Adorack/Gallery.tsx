import React from 'react';
import { Sparkles, Building2, Clock, GitBranch, Check, Plus, Users, ChevronRight } from 'lucide-react';

const ACCENT = 'var(--ac, #3050E0)';
const INK = '#0F172A';
const MUTED = '#64748B';
const LINE = '#E2E8F0';

/* Own layout/theme reset, so no inherited site CSS can leak into the mockups */
const base: React.CSSProperties = {
  display: 'block',
  position: 'relative',
  margin: 0,
  padding: 0,
  width: 'auto',
  height: 'auto',
  minWidth: 0,
  aspectRatio: 'auto',
  boxSizing: 'border-box',
  overflow: 'visible',
  float: 'none',
  transform: 'none',
  background: 'none',
  textAlign: 'left',
  color: 'inherit',
};

function Box({ style, children, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...rest} style={{ ...base, ...style }}>
      {children}
    </div>
  );
}

function Row({ style, children }: { style?: React.CSSProperties; children: React.ReactNode }) {
  return (
    <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', ...style }}>
      {children}
    </Box>
  );
}

const pill = (bg: string, color: string): React.CSSProperties => ({
  display: 'inline-block',
  background: bg,
  color,
  borderRadius: 999,
  padding: '3px 9px',
  fontSize: 11,
  fontWeight: 600,
  lineHeight: 1.4,
  whiteSpace: 'nowrap',
});

const primaryBtn: React.CSSProperties = {
  background: ACCENT,
  color: '#fff',
  borderRadius: 8,
  padding: '7px 12px',
  fontSize: 12,
  fontWeight: 700,
  textAlign: 'center',
  lineHeight: 1.3,
};

const wrapText: React.CSSProperties = { overflowWrap: 'anywhere' };

function Title({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <Row style={{ gap: 6, marginBottom: 10, fontWeight: 700 }}>
      {icon}
      <span style={{ display: 'inline' }}>{children}</span>
    </Row>
  );
}

/* ---------- Shared frame (fills the top of the card) ---------- */
function Frame({ label, bg, children }: { label: string; bg: string; children: React.ReactNode }) {
  return (
    <Box
      role="img"
      aria-label={label}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '1 1 auto',
        minHeight: 340,
        background: bg,
        padding: 'clamp(14px, 3vw, 22px)',
        overflow: 'hidden',
        fontSize: 12,
        lineHeight: 1.4,
        color: INK,
      }}
    >
      <Box
        aria-hidden="true"
        style={{
          width: '100%',
          maxWidth: 320,
          background: '#fff',
          borderRadius: 14,
          boxShadow: '0 10px 30px rgba(15,23,42,.10)',
          border: `1px solid ${LINE}`,
          padding: 14,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

/* ---------- 1. AI assistant ---------- */
function AiMock() {
  return (
    <Frame label="Adorack AI assistant generating social media content" bg="linear-gradient(135deg,#EEF2FF,#E0E7FF)">
      <Title icon={<Sparkles size={14} color={ACCENT} />}>AI Assistant</Title>
      <Box style={{ background: '#F1F5F9', borderRadius: 10, padding: '8px 10px', color: MUTED, marginBottom: 10, ...wrapText }}>
        Write a launch post for our spring sale
      </Box>
      <Box style={{ border: `1px solid ${LINE}`, borderRadius: 10, padding: 10, marginBottom: 10 }}>
        <Box style={{ marginBottom: 6, ...wrapText }}>
          🌸 Spring is here and so are our best deals! Save up to 30% on everything this week only.
        </Box>
        <Box style={{ color: ACCENT, fontWeight: 600, ...wrapText }}>#SpringSale #NewArrivals #ShopNow</Box>
      </Box>
      <Row style={{ gap: 8, flexWrap: 'wrap' }}>
        <Box style={{ ...pill('#F1F5F9', INK), padding: '7px 12px', borderRadius: 8 }}>Regenerate</Box>
        <Box style={{ ...primaryBtn, flex: '1 1 110px' }}>Use this post</Box>
      </Row>
    </Frame>
  );
}

/* ---------- 2. Company management ---------- */
function CompanyMock() {
  const companies = [
    { name: 'Northwind Retail', members: 8, color: '#F97316', status: 'Active' },
    { name: 'Bluebird Studio', members: 5, color: '#0EA5E9', status: 'Active' },
    { name: 'Harbor & Co.', members: 3, color: '#8B5CF6', status: 'Invited' },
  ];
  return (
    <Frame label="Company and workspace management in Adorack" bg="linear-gradient(135deg,#FFF7ED,#FFEDD5)">
      <Row style={{ justifyContent: 'space-between', marginBottom: 10 }}>
        <Row style={{ gap: 6, fontWeight: 700 }}>
          <Building2 size={14} color={ACCENT} />
          <span style={{ display: 'inline' }}>Companies</span>
        </Row>
        <Row style={{ ...primaryBtn, gap: 4, padding: '5px 10px' }}>
          <Plus size={12} />
          <span style={{ display: 'inline' }}>Add</span>
        </Row>
      </Row>
      {companies.map((c) => (
        <Row key={c.name} style={{ gap: 10, padding: '8px 0', borderTop: `1px solid ${LINE}` }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 30,
              height: 30,
              flexShrink: 0,
              borderRadius: 8,
              background: c.color,
              color: '#fff',
              fontWeight: 700,
            }}
          >
            {c.name.charAt(0)}
          </span>
          <Box style={{ flex: 1 }}>
            <strong
              style={{
                display: 'block',
                fontSize: 12,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {c.name}
            </strong>
            <Row style={{ gap: 4, color: MUTED }}>
              <Users size={11} />
              <span style={{ display: 'inline' }}>{c.members} members</span>
            </Row>
          </Box>
          <span style={{ ...(c.status === 'Active' ? pill('#DCFCE7', '#15803D') : pill('#FEF3C7', '#B45309')), flexShrink: 0 }}>
            {c.status}
          </span>
        </Row>
      ))}
    </Frame>
  );
}

/* ---------- 3. Send later ---------- */
function SendLaterMock() {
  const days = [
    { d: 'Mon', n: 21 },
    { d: 'Tue', n: 22 },
    { d: 'Wed', n: 23 },
    { d: 'Thu', n: 24 },
    { d: 'Fri', n: 25 },
  ];
  const times = ['9:00 AM', '12:30 PM', '6:00 PM'];
  return (
    <Frame label="Send later scheduling in Adorack" bg="linear-gradient(135deg,#ECFDF5,#D1FAE5)">
      <Title icon={<Clock size={14} color={ACCENT} />}>Send later</Title>
      <Row style={{ gap: 6, marginBottom: 10, alignItems: 'stretch' }}>
        {days.map((x) => {
          const on = x.n === 24;
          return (
            <Box
              key={x.n}
              style={{
                flex: '1 1 0',
                textAlign: 'center',
                padding: '6px 0',
                borderRadius: 8,
                background: on ? ACCENT : '#F1F5F9',
                color: on ? '#fff' : INK,
              }}
            >
              <Box style={{ fontSize: 10, opacity: on ? 0.9 : 0.7, color: on ? '#fff' : MUTED }}>{x.d}</Box>
              <Box style={{ fontWeight: 700, color: on ? '#fff' : INK }}>{x.n}</Box>
            </Box>
          );
        })}
      </Row>
      <Row style={{ flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
        {times.map((t, i) => (
          <span
            key={t}
            style={{
              ...pill(i === 1 ? '#E0E7FF' : '#F1F5F9', i === 1 ? ACCENT : INK),
              border: `1px solid ${i === 1 ? ACCENT : 'transparent'}`,
            }}
          >
            {t}
          </span>
        ))}
      </Row>
      <Row style={{ ...primaryBtn, justifyContent: 'center', gap: 6 }}>
        <Check size={13} />
        <span style={{ display: 'inline' }}>Schedule post</span>
      </Row>
    </Frame>
  );
}

/* ---------- 4. Workflows ---------- */
function WorkflowMock() {
  const steps = [
    { name: 'Draft', who: 'Content team', state: 'done' },
    { name: 'Review', who: 'Brand manager', state: 'done' },
    { name: 'Approval', who: 'Client', state: 'active' },
    { name: 'Publish', who: 'Auto-post', state: 'todo' },
  ];
  return (
    <Frame label="Team workflows in Adorack" bg="linear-gradient(135deg,#FDF2F8,#FCE7F3)">
      <Title icon={<GitBranch size={14} color={ACCENT} />}>Approval workflow</Title>
      {steps.map((s, i) => {
        const last = i === steps.length - 1;
        return (
          <Row key={s.name} style={{ gap: 10, alignItems: 'stretch' }}>
            <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 22,
                  height: 22,
                  borderRadius: '50%',
                  background: s.state === 'done' ? '#16A34A' : s.state === 'active' ? ACCENT : '#E2E8F0',
                  color: '#fff',
                }}
              >
                {s.state === 'done' ? <Check size={12} /> : s.state === 'active' ? <ChevronRight size={12} /> : null}
              </span>
              {!last && (
                <span
                  style={{
                    display: 'block',
                    width: 2,
                    flex: 1,
                    minHeight: 14,
                    background: s.state === 'done' ? '#16A34A' : LINE,
                  }}
                />
              )}
            </Box>
            <Box style={{ paddingBottom: last ? 0 : 8 }}>
              <strong style={{ display: 'block', fontSize: 12 }}>{s.name}</strong>
              <span style={{ display: 'block', color: MUTED }}>{s.who}</span>
            </Box>
          </Row>
        );
      })}
    </Frame>
  );
}

/* ---------- Section ---------- */
const css = `
.adx-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px;align-items:stretch}
.adx-card{margin:0;display:flex;flex-direction:column;min-width:0;background:#fff;border:1px solid #E5E9F2;border-radius:20px;overflow:hidden}
.adx-cap{padding:18px 20px;font-size:15px;font-weight:700;line-height:1.3;color:#0F172A;background:#fff}
@media (max-width:1099px){.adx-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:599px){.adx-grid{grid-template-columns:minmax(0,1fr)}}
`;

export default function Gallery() {
  return (
    <section className="sec" style={{ paddingTop: 0, background: '#F7F8FB' }}>
      <style>{css}</style>
      <div className="wrap">
        <div className="sec-h" style={{ marginBottom: '28px' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: '12px' }}>
              Inside Adorack
            </div>
            <h2 className="h2" style={{ fontSize: 'clamp(26px, 2.6vw, 34px)' }}>
              A closer look at the tools your team will use daily.
            </h2>
          </div>
        </div>
        <div className="adx-grid">
          <figure className="adx-card">
            <AiMock />
            <figcaption className="adx-cap">Get a boost from AI</figcaption>
          </figure>
          <figure className="adx-card">
            <CompanyMock />
            <figcaption className="adx-cap">Company management</figcaption>
          </figure>
          <figure className="adx-card">
            <SendLaterMock />
            <figcaption className="adx-cap">Send later</figcaption>
          </figure>
          <figure className="adx-card">
            <WorkflowMock />
            <figcaption className="adx-cap">Workflows</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}