import type { Metadata } from 'next';
import './globals.css';
import NavigationProgressBar from '@/components/NavigationProgressBar';

export const metadata: Metadata = {
  metadataBase: new URL('https://accugile.com'),
  title: 'Accugile | Full-stack development and digital agency',
  description: 'Full-stack development and digital agency. One accountable in-house team for AI, software, eCommerce and brand growth.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/assets/meta-image.png', sizes: 'any' },
      { url: '/assets/meta-image.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/assets/meta-image.png',
  },
  openGraph: {
    title: 'Accugile | Full-stack development and digital agency',
    description: 'Full-stack development and digital agency. One accountable in-house team for AI, software, eCommerce and brand growth.',
    images: [{ url: '/assets/opengraph-card.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accugile | Full-stack development and digital agency',
    description: 'Full-stack development and digital agency. One accountable in-house team for AI, software, eCommerce and brand growth.',
    images: ['/assets/opengraph-card.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NavigationProgressBar />
        <main>{children}</main>
      </body>
    </html>
  );
}