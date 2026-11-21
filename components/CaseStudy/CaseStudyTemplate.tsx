import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CaseStudyHero from './CaseStudyHero';
import TableOfContents from './TableOfContents';
import { CaseStudyData } from '@/lib/case-study-types';

interface CaseStudyTemplateProps {
  data: CaseStudyData;
}

export default function CaseStudyTemplate({ data }: CaseStudyTemplateProps) {
  return (
    <>
      <Header />
      <main className="case-study-page">
        <CaseStudyHero
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: 'Case Studies', href: '/case-studies' },
            { label: data.breadcrumbTitle },
          ]}
          title={data.title}
          subtitle={data.subtitle}
          chips={data.chips}
          glance={data.glance}
          stats={data.heroStats}
        />

        <div className="wrap cs-body">
          <TableOfContents items={data.tocItems} />

          <article
            className="cs-doc"
            dangerouslySetInnerHTML={{ __html: data.contentHtml }}
          />
        </div>

        {data.moreStudies && data.moreStudies.length > 0 && (
          <section className="more">
            <div className="wrap">
              <h2>More Case Studies</h2>
              <div className="cs-cards">
                {data.moreStudies.map((item) => (
                  <article key={item.slug} className="cs-card">
                    <span className="cs-tag">{item.tags.join(' · ')}</span>
                    <h3>
                      <Link href={`/case-studies/${item.slug}`}>{item.title}</Link>
                    </h3>
                    <p>{item.desc}</p>
                    <Link
                      href={`/case-studies/${item.slug}`}
                      className="inline-flex items-center text-sm font-semibold text-[#304DDB] hover:underline"
                    >
                      Read Case Study →
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section id="cta" className="cs-cta">
          <div className="wrap">
            <div className="box">
              <h2>Have a Complex Platform in Mind?</h2>
              <p>
                From modern LMS platforms and IoT tracking to healthcare workflows and smart energy apps,
                Accugile provides dedicated engineering teams that take products from early architecture
                to scale.
              </p>
              <div className="btns">
                <Link href="/contact" className="btn btn-primary">
                  Book an Architecture Call
                </Link>
                <Link href="/case-studies" className="btn btn-outline">
                  Browse All Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

