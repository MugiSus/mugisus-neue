
import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { Inter } from 'next/font/google';
import TypekitLoader from '@/lib/typekitLoader';
// import GradientBackground from '@/components/GradientBackground/';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://mugisus.com/'),
  title: 'mugisus',
  description: 'The portfolio of mugisus. / mugisusのポートフォリオです。',
  keywords: [
    'mugisus',
    'mugisus',
    '湊真之',
    '湊 真之',
    'MinatoMasayuki',
    'Minato Masayuki',
    'Masayuki Minato',
    'MasayukiMinato',
    'Minato',
    'Masayuki',
    'Portfolio',
    'mugisus Portfolio',
    'ポートフォリオ',
    'Keio University',
    '慶應義塾大学',
    '環境情報学部',
    'SFC',
  ],
  twitter: {
    card: 'summary',
    site: '@mugisus',
    creator: '@mugisus',
    title: 'mugisus',
  },
  openGraph: {
    images: '/image.png',
    description: 'The portfolio of mugisus',
    title: 'mugisus / ムギスス',
    type: 'article',
    publishedTime: '2023-10-01T09:00:00Z',
    modifiedTime: '2024-12-14T09:00:00Z',
    url: 'https://mugisus.com/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <TypekitLoader />

      <body className="bg-background font-gothicmb101 text-sm font-light text-content underline-offset-2">
        {children}

        <div className="pointer-events-none fixed left-0 top-0 z-50 m-8 size-6 border border-dashed border-neutral-400 bg-primary backdrop-blur-sm md:m-8" />
        <div className="pointer-events-none fixed bottom-0 right-0 z-50 m-8 size-6 border border-dashed border-neutral-400 bg-primary backdrop-blur-sm md:m-8" />
        <div className="pointer-events-none fixed right-0 top-0 z-50 m-8 size-6 border border-dashed border-neutral-400 bg-primary backdrop-blur-sm md:m-8" />
        <div className="pointer-events-none fixed bottom-0 left-0 z-50 m-8 size-6 border border-dashed border-neutral-400 bg-primary backdrop-blur-sm md:m-8" />

        <div className="fixed inset-0 -z-50 h-lvh">
          {/* <GradientBackground /> */}
        </div>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
