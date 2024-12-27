import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Inter } from "next/font/google";
import TypekitLoader from "@/lib/typekitLoader";
import GradientBackground from "@/components/GradientBackground/";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://mugisus.com/"),
  title: "MugiSus",
  description: "The portfolio of MugiSus. / MugiSusのポートフォリオです。",
  keywords: [
    "MugiSus",
    "mugisus",
    "湊真之",
    "湊 真之",
    "MinatoMasayuki",
    "Minato Masayuki",
    "Masayuki Minato",
    "MasayukiMinato",
    "Minato",
    "Masayuki",
    "Portfolio",
    "MugiSus Portfolio",
    "ポートフォリオ",
    "Keio University",
    "慶應義塾大学",
    "環境情報学部",
    "SFC",
  ],
  twitter: {
    card: "summary",
    site: "@MugiSus",
    creator: "@MugiSus",
    title: "MugiSus",
  },
  openGraph: {
    images: "/image.png",
    description: "The portfolio of MugiSus",
    title: "MugiSus / ムギスス",
    type: "article",
    publishedTime: "2023-10-01T09:00:00Z",
    modifiedTime: "2024-12-14T09:00:00Z",
    url: "https://mugisus.com/",
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

      <body className="bg-background font-gothicmb101 font-light text-content underline-offset-2">
        {children}

        <div className="pointer-events-none fixed left-2 top-2 z-50 size-12 border border-dashed border-neutral-400 bg-neutral-400/10 backdrop-blur-sm md:left-4 md:top-4" />
        <div className="pointer-events-none fixed bottom-2 right-2 z-50 size-12 border border-dashed border-neutral-400 bg-neutral-400/10 backdrop-blur-sm md:bottom-4 md:right-4" />
        <div className="pointer-events-none fixed right-2 top-2 z-50 size-12 border border-dashed border-neutral-400 bg-neutral-400/10 backdrop-blur-sm md:right-4 md:top-4" />
        <div className="pointer-events-none fixed bottom-2 left-2 z-50 size-12 border border-dashed border-neutral-400 bg-neutral-400/10 backdrop-blur-sm md:bottom-4 md:left-4" />

        <div className="fixed inset-0 -z-50 h-lvh">
          <GradientBackground />
        </div>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
