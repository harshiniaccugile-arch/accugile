import NextLink from 'next/link';
import type { CSSProperties, ReactNode } from 'react';

type Props = {
    href: string; children: ReactNode; className?: string;
    style?: CSSProperties; 'aria-label'?: string;
    onClick?: () => void;
};

export default function L({ href, children, ...rest }: Props) {
    if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('[')) {
        return <a href={href} {...rest}>{children}</a>;
    }
    return <NextLink href={href} prefetch={true} {...rest}>{children}</NextLink>;
}

export const Arrow = ({ size = 14 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 14 14" aria-hidden="true">
        <path d="M2 7 H12 M8 3 L12 7 L8 11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);