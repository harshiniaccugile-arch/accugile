'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SecHead from '@/components/About/SecHead';
import { ALL_CASE_STUDIES, CaseStudyListItem } from '@/lib/all-case-studies';

const INITIAL_BATCH_SIZE = 9;
const BATCH_INCREMENT = 6;

export default function FeaturedEngagements() {
    const [visibleCount, setVisibleCount] = useState(INITIAL_BATCH_SIZE);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const sentinelRef = useRef<HTMLDivElement | null>(null);

    const hasMore = visibleCount < ALL_CASE_STUDIES.length;

    const loadMore = useCallback(() => {
        if (isLoadingMore || !hasMore) return;
        setIsLoadingMore(true);
        setTimeout(() => {
            setVisibleCount((prev) => Math.min(prev + BATCH_INCREMENT, ALL_CASE_STUDIES.length));
            setIsLoadingMore(false);
        }, 300);
    }, [isLoadingMore, hasMore]);

    useEffect(() => {
        const sentinel = sentinelRef.current;
        if (!sentinel) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    loadMore();
                }
            },
            { rootMargin: '300px' }
        );

        observer.observe(sentinel);
        return () => observer.disconnect();
    }, [loadMore, hasMore]);

    const displayedCases = ALL_CASE_STUDIES.slice(0, visibleCount);

    return (
        <section className="sec" style={{ position: 'relative' }}>
            <div className="wrap">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 40 }}>
                    <SecHead n="01" eyebrow="Portfolio" title="Featured engagements" />
                    <div style={{ fontSize: 14, color: '#64748B', fontWeight: 600 }}>
                        Showing <strong style={{ color: '#0F172A' }}>{displayedCases.length}</strong> of{' '}
                        <strong style={{ color: '#0F172A' }}>{ALL_CASE_STUDIES.length}</strong> client stories
                    </div>
                </div>

                <div className="grid g3">
                    {displayedCases.map((c: CaseStudyListItem) => (
                        <article
                            key={c.slug}
                            className="box transition-transform hover:-translate-y-1 hover:shadow-lg"
                            style={{
                                padding: 0,
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                background: '#FFFFFF',
                                borderRadius: 16,
                                border: '1px solid #E2E8F0',
                            }}
                        >
                            <Link href={`/case-studies/${c.slug}`} className="block group">
                                <div
                                    style={{
                                        height: 200,
                                        width: '100%',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        background: '#0B1020',
                                        borderBottom: '1px solid #E2E8F0',
                                    }}
                                >
                                    <Image
                                        src={c.image}
                                        alt={c.title}
                                        fill
                                        style={{ objectFit: 'cover', objectPosition: 'top center' }}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: 14,
                                            left: 14,
                                            background: 'rgba(15, 23, 42, 0.82)',
                                            backdropFilter: 'blur(6px)',
                                            color: '#FFFFFF',
                                            fontSize: 11,
                                            fontWeight: 700,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.06em',
                                            padding: '4px 10px',
                                            borderRadius: 999,
                                        }}
                                    >
                                        {c.client}
                                    </div>
                                    <div
                                        style={{
                                            position: 'absolute',
                                            bottom: 12,
                                            right: 12,
                                            background: '#FFFFFF',
                                            padding: '6px 14px',
                                            borderRadius: 10,
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'flex-end',
                                        }}
                                    >
                                        <span style={{ fontSize: 18, fontWeight: 800, color: c.tone || '#304DDB', lineHeight: 1.1 }}>
                                            {c.metric}
                                        </span>
                                        <span style={{ fontSize: 11, color: '#64748B', fontWeight: 600 }}>
                                            {c.metricLabel}
                                        </span>
                                    </div>
                                </div>
                            </Link>

                            <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 12, flexGrow: 1 }}>
                                <span className="num" style={{ fontSize: 12, color: '#64748B', fontWeight: 600 }}>
                                    {c.tag}
                                </span>
                                <h3 style={{ fontSize: 18, lineHeight: 1.35, fontWeight: 700, minHeight: 48 }}>
                                    <Link
                                        href={`/case-studies/${c.slug}`}
                                        className="hover:text-[#304DDB] transition-colors"
                                    >
                                        {c.title}
                                    </Link>
                                </h3>
                                {c.subtitle && (
                                    <p
                                        style={{
                                            fontSize: 14,
                                            color: '#475569',
                                            lineHeight: 1.5,
                                            display: '-webkit-box',
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                            margin: '4px 0 12px',
                                        }}
                                    >
                                        {c.subtitle}
                                    </p>
                                )}
                                <div style={{ marginTop: 'auto', paddingTop: 14, borderTop: '1px solid #EEF2F6' }}>
                                    <Link
                                        href={`/case-studies/${c.slug}`}
                                        className="inline-flex items-center text-sm font-semibold text-[#304DDB] hover:underline"
                                    >
                                        Read Full Case Study →
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Infinite Scroll Sentinel */}
                <div ref={sentinelRef} style={{ height: 40, marginTop: 30, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {isLoadingMore && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#64748B', fontSize: 14 }}>
                            <div
                                style={{
                                    width: 18,
                                    height: 18,
                                    border: '2px solid #E2E8F0',
                                    borderTopColor: '#304DDB',
                                    borderRadius: '50%',
                                    animation: 'spin 0.8s linear infinite',
                                }}
                            />
                            Loading more case studies...
                        </div>
                    )}
                    {!hasMore && ALL_CASE_STUDIES.length > INITIAL_BATCH_SIZE && (
                        <div style={{ color: '#94A3B8', fontSize: 14, fontWeight: 500 }}>
                            You&apos;ve viewed all {ALL_CASE_STUDIES.length} case studies.
                        </div>
                    )}
                </div>
            </div>
            <style jsx>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    );
}
