import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface CaseStudyHeroProps {
  breadcrumb: BreadcrumbItem[];
  title: string;
  subtitle: string;
  chips: string[];
  glance: {
    client: string;
    letter: string;
    items: { label: string; value: string }[];
  };
  stats: { value: string; label: string }[];
}

export default function CaseStudyHero({
  breadcrumb,
  title,
  subtitle,
  chips,
  glance,
  stats,
}: CaseStudyHeroProps) {
  return (
    <section className="cs-hero">
      <div className="wrap">
        <nav className="crumb" aria-label="Breadcrumb">
          {breadcrumb.map((item, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <span aria-hidden="true">/</span>}
              {item.href ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <span>{item.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        <div className="cs-hero-grid">
          <div className="cs-hero-copy">
            <div className="cs-chips">
              {chips.map((chip, idx) => (
                <span key={idx} className="cs-chip">{chip}</span>
              ))}
            </div>

            <h1 className="rise rise1">{title}</h1>
            <p className="sub rise rise2">{subtitle}</p>
          </div>

          <aside className="cs-glance rise rise3" aria-label="Project at a glance">
            <div className="mono">
              <b>{glance.letter}</b>
              <span>
                <strong>{glance.client}</strong>
                <span>Project at a glance</span>
              </span>
            </div>
            <dl>
              {glance.items.map((item, idx) => (
                <div key={idx}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        {stats && stats.length > 0 && (
          <div className="cs-stats">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

