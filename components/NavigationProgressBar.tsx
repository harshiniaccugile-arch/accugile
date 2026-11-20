'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState, useRef, Suspense } from 'react';
import Loading from '@/app/loading';

function NavigationProgressInner() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [navigating, setNavigating] = useState(false);
    const [progress, setProgress] = useState(0);
    const prevUrlRef = useRef(`${pathname}?${searchParams.toString()}`);

    // When pathname or searchParams change, conclude navigation
    useEffect(() => {
        const currentUrl = `${pathname}?${searchParams.toString()}`;
        if (prevUrlRef.current !== currentUrl) {
            prevUrlRef.current = currentUrl;
            setProgress(100);
            const timer = setTimeout(() => {
                setNavigating(false);
                setProgress(0);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [pathname, searchParams]);

    // Intercept in-app navigation clicks
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest('a');
            if (!target) return;

            const href = target.getAttribute('href');
            if (!href) return;

            // Ignore hash links, external links, mailto, tel, target _blank, modifier keys
            if (
                href.startsWith('#') ||
                href.startsWith('mailto:') ||
                href.startsWith('tel:') ||
                href.startsWith('http://') ||
                href.startsWith('https://') ||
                target.target === '_blank' ||
                e.ctrlKey ||
                e.metaKey ||
                e.shiftKey ||
                e.altKey
            ) {
                return;
            }

            // Check if it's the exact same page
            const currentFull = window.location.pathname + window.location.search;
            if (href === currentFull) return;

            // Trigger visible skeleton overlay
            setNavigating(true);
            setProgress(35);

            const interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 85) {
                        clearInterval(interval);
                        return prev;
                    }
                    return prev + 15;
                });
            }, 100);

            const timeout = setTimeout(() => {
                clearInterval(interval);
            }, 4000);

            return () => {
                clearInterval(interval);
                clearTimeout(timeout);
            };
        };

        document.addEventListener('click', handleClick, true);
        return () => document.removeEventListener('click', handleClick, true);
    }, []);

    return (
        <>
            {/* Top brand progress bar */}
            {navigating && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        zIndex: 100000,
                        pointerEvents: 'none',
                    }}
                >
                    <div
                        style={{
                            height: '100%',
                            width: `${progress}%`,
                            backgroundColor: '#304DDB',
                            boxShadow: '0 0 10px #304DDB, 0 0 4px #00A1D2',
                            transition: 'width 0.2s ease-out',
                        }}
                    />
                </div>
            )}

            {/* Full Shadcn Page Skeleton Screen (fixed, no secondary scrollbar) */}
            {navigating && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        width: '100vw',
                        height: '100vh',
                        zIndex: 99999,
                        backgroundColor: '#FFFFFF',
                        overflow: 'hidden',
                        pointerEvents: 'all',
                    }}
                >
                    <Loading />
                </div>
            )}
        </>
    );
}

export default function NavigationProgressBar() {
    return (
        <Suspense fallback={null}>
            <NavigationProgressInner />
        </Suspense>
    );
}
