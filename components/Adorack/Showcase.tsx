import React from 'react';
import { ChevronLeft, ChevronRight, Plus, Check, Lock } from 'lucide-react';

/* ---------- Calendar data (November 2026, week starts Sunday) ---------- */
type Camp = 'bf' | 'pl' | 'up' | 'wk';

const CAMPS: Record<Camp, { name: string; dot: string; fg: string; bg: string }> = {
  bf: { name: 'Black Friday', dot: '#E0782B', fg: '#B4530A', bg: '#FDEBDD' },
  pl: { name: 'Product Launches', dot: '#0E9F6E', fg: '#047857', bg: '#DCF5EA' },
  up: { name: 'Updates', dot: '#304DDB', fg: '#2740C4', bg: '#E3E9FF' },
  wk: { name: 'Webinar Week', dot: '#8B5CF6', fg: '#6D28D9', bg: '#EDE4FF' },
};

type Post = { t: string; n: string; c: Camp; drag?: boolean };

const POSTS: Record<number, Post[]> = {
  2: [{ t: '10:00', n: 'Team spotlight', c: 'up' }],
  3: [{ t: '12:30', n: 'New feature', c: 'pl' }],
  4: [{ t: '17:00', n: 'Q4 webinar', c: 'wk' }],
  5: [
    { t: '09:00', n: 'Customer story', c: 'up' },
    { t: '18:30', n: 'Tips reel', c: 'pl' },
  ],
  6: [{ t: '10:00', n: 'Early-bird deals', c: 'bf' }],
  9: [{ t: '10:00', n: 'Monday boost', c: 'up' }],
  10: [{ t: '11:00', n: 'Release notes', c: 'pl' }],
  11: [{ t: '15:00', n: 'Webinar recap', c: 'wk' }],
  12: [{ t: '09:30', n: 'Gift guide', c: 'bf' }],
  13: [{ t: '18:00', n: 'Weekend roundup', c: 'up' }],
  16: [
    { t: '10:00', n: 'Launch teaser', c: 'pl' },
    { t: '14:00', n: 'Hiring post', c: 'up' },
  ],
  18: [{ t: '16:00', n: 'Live Q&A', c: 'wk' }],
  19: [{ t: '10:00', n: 'Countdown', c: 'bf' }],
  20: [{ t: '12:00', n: 'Behind scenes', c: 'up' }],
  23: [
    { t: '09:00', n: 'BF preview', c: 'bf' },
    { t: '13:00', n: 'Feature video', c: 'pl' },
  ],
  24: [
    { t: '10:00', n: 'Company news', c: 'up' },
    { t: '18:30', n: 'Deals sneak peek', c: 'bf' },
  ],
  25: [{ t: '10:00', n: 'Doorbuster list', c: 'bf', drag: true }],
  26: [{ t: '11:00', n: 'Thank you post', c: 'pl' }],
  27: [
    { t: '08:00', n: 'BF is live!', c: 'bf' },
    { t: '12:00', n: 'Flash deal #1', c: 'bf' },
  ],
  28: [{ t: '10:00', n: 'Small Biz Sat', c: 'bf' }],
  30: [{ t: '11:00', n: 'Cyber recap', c: 'wk' }],
};

const MORE: Record<number, number> = { 27: 2 };
const TODAY = 24;
const DROP_TARGET = 26;
const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// 5 rows x 7 columns. Nov 1, 2026 is a Sunday, so the grid starts on day 1.
const CELLS = Array.from({ length: 35 }, (_, i) => {
  const n = i + 1;
  return n <= 30 ? { day: n, mute: false } : { day: n - 30, mute: true };
});

const vars = (c: Camp) =>
  ({ '--d': CAMPS[c].dot, '--f': CAMPS[c].fg, '--b': CAMPS[c].bg }) as React.CSSProperties;

/* ---------- Styles (scoped with the adc- prefix, responsive via container queries) ---------- */
const css = `
.adc{container-type:inline-size;position:relative;width:100%;isolation:isolate}
.adc *{box-sizing:border-box}
.adc::before{content:"";position:absolute;inset:6% 4% -8% 4%;z-index:-1;pointer-events:none;
  background:radial-gradient(60% 60% at 25% 30%,rgba(96,120,255,.55),transparent 70%),
             radial-gradient(50% 50% at 78% 72%,rgba(139,92,246,.45),transparent 70%);
  filter:blur(48px);opacity:.75}

.adc-win{position:relative;background:#fff;border-radius:18px;overflow:hidden;text-align:left;color:#0F172A;
  border:1px solid rgba(255,255,255,.18);
  box-shadow:0 40px 80px -24px rgba(0,0,0,.6),0 0 0 1px rgba(15,23,42,.08)}

.adc-bar{display:flex;align-items:center;gap:10px;padding:10px 14px;background:#F3F5FA;border-bottom:1px solid #E6EAF2}
.adc-dots{display:flex;gap:6px;width:46px}
.adc-dots i{display:block;width:10px;height:10px;border-radius:50%}
.adc-url{flex:1;max-width:280px;margin:0 auto;height:24px;border-radius:8px;background:#fff;border:1px solid #E6EAF2;
  font-size:11px;color:#64748B;display:flex;align-items:center;justify-content:center;gap:5px}
.adc-sp{width:46px}

.adc-tb{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;padding:16px 18px 12px}
.adc-ttl{display:flex;align-items:center;gap:12px;min-width:0}
.adc-month{font-size:19px;font-weight:800;letter-spacing:-.02em;line-height:1.2;color:#0F172A}
.adc-nav{display:flex;align-items:center;gap:6px}
.adc-ib{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:8px;border:1px solid #E2E8F0;background:#fff;color:#475569}
.adc-today{display:inline-flex;align-items:center;height:28px;padding:0 11px;border-radius:8px;border:1px solid #E2E8F0;background:#fff;font-size:12px;font-weight:700;color:#334155}
.adc-act{display:flex;align-items:center;gap:10px}
.adc-seg{display:flex;padding:3px;background:#F1F4F9;border-radius:10px}
.adc-seg span{padding:5px 11px;font-size:12px;font-weight:600;color:#64748B;border-radius:8px}
.adc-seg span.on{background:#fff;color:#0F172A;box-shadow:0 1px 3px rgba(15,23,42,.12)}
.adc-new{display:inline-flex;align-items:center;gap:6px;background:var(--ac,#3050E0);color:#fff;font-size:12px;font-weight:700;
  padding:7px 12px;border-radius:9px;box-shadow:0 8px 18px -8px var(--ac,#3050E0)}

.adc-lg{display:flex;flex-wrap:wrap;align-items:center;gap:6px 14px;padding:0 18px 12px;font-size:11.5px;color:#475569}
.adc-lg span.k{display:inline-flex;align-items:center;gap:6px;font-weight:600}
.adc-lg i{display:block;width:8px;height:8px;border-radius:3px}
.adc-lg .r{margin-left:auto;font-weight:600;color:#64748B}

.adc-gr{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:1px;background:#E8ECF4;border-top:1px solid #E8ECF4}
.adc-wd{background:#F8FAFC;padding:8px;font-size:10.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#64748B}
.adc-wd-s{display:none}

.adc-c{position:relative;background:#fff;min-height:96px;padding:6px;display:flex;flex-direction:column;gap:4px;min-width:0}
.adc-c.mute{background:#FAFBFD}
.adc-c.mute .adc-d{color:#B6BFCE}
.adc-c.has-drag{z-index:3}
.adc-c.over{background:#EEF2FF;outline:1.5px dashed #8C9DF2;outline-offset:-3px}
.adc-d{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;font-size:11.5px;font-weight:700;color:#334155}
.adc-c.today .adc-d{background:var(--ac,#3050E0);color:#fff;box-shadow:0 4px 10px -3px var(--ac,#3050E0)}

.adc-l{display:flex;flex-direction:column;gap:3px;min-width:0}
.adc-p{display:flex;align-items:center;gap:5px;min-width:0;padding:3px 5px;border-radius:6px;border-left:2px solid var(--d);
  background:var(--b);color:var(--f);font-size:10px;font-weight:600;line-height:1.3}
.adc-p b{display:none;flex-shrink:0;font-weight:800;opacity:.8}
.adc-p span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.adc-p.drag{position:relative;background:#fff;outline:1px solid var(--d);transform:rotate(-2deg) scale(1.05);
  box-shadow:0 14px 26px -10px rgba(15,23,42,.45)}
.adc-more{padding-left:4px;font-size:10px;font-weight:700;color:#64748B}
.adc-ghost{border:1.5px dashed #9AA9F5;border-radius:6px;padding:3px 5px;text-align:center;font-size:10px;font-weight:700;color:var(--ac,#3050E0)}

.adc-toast{position:absolute;right:14px;bottom:14px;z-index:5;display:flex;align-items:center;gap:10px;padding:10px 14px 10px 10px;
  background:#0F172A;color:#fff;border-radius:12px;font-size:12px;line-height:1.35;box-shadow:0 22px 40px -12px rgba(0,0,0,.55)}
.adc-toast .ok{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:50%;background:#16A34A;flex-shrink:0}
.adc-toast strong{display:block;font-weight:700}
.adc-toast small{display:block;font-size:11px;color:#94A3B8}

@container (min-width: 900px){
  .adc-p b{display:inline}
  .adc-p{font-size:10.5px}
}
@container (max-width: 640px){
  .adc-seg,.adc-url{display:none}
  .adc-toast{display:none}
}
@container (max-width: 520px){
  .adc-tb{padding:12px 12px 8px}
  .adc-lg{padding:0 12px 10px}
  .adc-lg .r{display:none}
  .adc-new .lbl{display:none}
  .adc-new{padding:7px 9px}
  .adc-month{font-size:17px}
  .adc-wd{padding:6px 0;text-align:center}
  .adc-wd-f{display:none}
  .adc-wd-s{display:inline}
  .adc-c{min-height:52px;padding:4px;align-items:center}
  .adc-l{flex-direction:row;flex-wrap:wrap;justify-content:center;gap:3px}
  .adc-p{width:7px;height:7px;padding:0;border:0;border-radius:50%;background:var(--d)}
  .adc-p > *{display:none !important}
  .adc-p.drag{transform:none;outline:0;box-shadow:0 0 0 3px rgba(48,77,219,.25)}
  .adc-more,.adc-ghost{display:none}
}
`;

/* ---------- Calendar mockup ---------- */
function CalendarMock() {
  return (
    <div
      className="adc"
      role="img"
      aria-label="Adorack content calendar showing scheduled social media posts for November 2026"
    >
      <style>{css}</style>
      <div className="adc-win" aria-hidden="true">
        {/* Window bar */}
        <div className="adc-bar">
          <div className="adc-dots">
            <i style={{ background: '#FF5F57' }} />
            <i style={{ background: '#FEBC2E' }} />
            <i style={{ background: '#28C840' }} />
          </div>
          <div className="adc-url">
            <Lock size={10} /> app.adorack.com/calendar
          </div>
          <div className="adc-sp" />
        </div>

        {/* Toolbar */}
        <div className="adc-tb">
          <div className="adc-ttl">
            <div className="adc-month">November 2026</div>
            <div className="adc-nav">
              <span className="adc-ib"><ChevronLeft size={14} /></span>
              <span className="adc-ib"><ChevronRight size={14} /></span>
              <span className="adc-today">Today</span>
            </div>
          </div>
          <div className="adc-act">
            <div className="adc-seg">
              <span className="on">Month</span>
              <span>Week</span>
              <span>List</span>
            </div>
            <div className="adc-new">
              <Plus size={13} /> <span className="lbl">New post</span>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="adc-lg">
          {(Object.keys(CAMPS) as Camp[]).map((k) => (
            <span className="k" key={k}>
              <i style={{ background: CAMPS[k].dot }} />
              {CAMPS[k].name}
            </span>
          ))}
          <span className="r">28 scheduled · 4 awaiting approval</span>
        </div>

        {/* Month grid */}
        <div className="adc-gr">
          {WEEKDAYS.map((d) => (
            <div className="adc-wd" key={d}>
              <span className="adc-wd-f">{d}</span>
              <span className="adc-wd-s">{d.charAt(0)}</span>
            </div>
          ))}

          {CELLS.map(({ day, mute }, i) => {
            const posts = mute ? [] : POSTS[day] ?? [];
            const isToday = !mute && day === TODAY;
            const isOver = !mute && day === DROP_TARGET;
            const hasDrag = posts.some((p) => p.drag);
            const more = !mute ? MORE[day] : undefined;

            return (
              <div
                key={i}
                className={`adc-c${mute ? ' mute' : ''}${isToday ? ' today' : ''}${isOver ? ' over' : ''}${hasDrag ? ' has-drag' : ''}`}
              >
                <span className="adc-d">{day}</span>
                {(posts.length > 0 || isOver || more) && (
                  <div className="adc-l">
                    {posts.map((p) => (
                      <div key={p.n} className={`adc-p${p.drag ? ' drag' : ''}`} style={vars(p.c)}>
                        <b>{p.t}</b>
                        <span>{p.n}</span>
                      </div>
                    ))}
                    {more && <div className="adc-more">+{more} more</div>}
                    {isOver && <div className="adc-ghost">Drop to schedule</div>}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Floating toast */}
        <div className="adc-toast">
          <span className="ok"><Check size={14} /></span>
          <span>
            <strong>Post published</strong>
            <small>Instagram, Facebook, LinkedIn · just now</small>
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------- Section ---------- */
export default function Showcase() {
  return (
    <section style={{ padding: '72px 0 0' }}>
      <div className="wrap">
        <div className="show">
          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '40px',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                flex: '1 1 320px',
                minWidth: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div className="eyebrow" style={{ color: '#A8B8FF' }}>
                Adorack in action
              </div>
              <h2 className="h2" style={{ color: '#FFFFFF' }}>
                One calm dashboard for every brand you manage.
              </h2>
              <p style={{ color: '#B6C0D2', fontSize: '16.5px', lineHeight: 1.7 }}>
                Approvals, scheduled posts, campaigns and your whole team in one view, so you always know what is going out, where and when.
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  flexWrap: 'wrap',
                  marginTop: '6px',
                }}
              >
                <a
                  href="https://app.adorack.com/registration/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ac"
                >
                  Start free trial
                </a>
                {/* <a
                  href="https://app.adorack.com/login/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ border: '1px solid rgba(255,255,255,.3)', color: '#FFFFFF' }}
                >
                  Sign in
                </a> */}
              </div>
            </div>
            <div style={{ flex: '1.6 1 520px', minWidth: 0 }}>
              <CalendarMock />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}