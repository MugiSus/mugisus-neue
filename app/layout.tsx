import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Inter } from "next/font/google";
import TypekitLoader from "@/lib/typekitLoader";

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

      <body className="font-gothicmb101 text-content font-light underline-offset-2">
        {children}

        <div className="fixed pointer-events-none z-50 inset-0 grid grid-cols-[min-content,auto,min-content] grid-rows-[min-content,auto,min-content] p-2 md:p-4 gap-2 md:gap-4">
          <div className="bg-neutral-400/10 backdrop-blur-sm pointer-events-none w-12 h-12 border border-dashed border-neutral-400" />
          <div className="border-t border-dashed border-neutral-400" />
          <div className="bg-neutral-400/10 backdrop-blur-sm pointer-events-none w-12 h-12 border border-dashed border-neutral-400" />
          <div className="border-l border-dashed border-neutral-400" />
          <div />
          <div className="border-r border-dashed border-neutral-400" />
          <div className="bg-neutral-400/10 backdrop-blur-sm pointer-events-none w-12 h-12 border border-dashed border-neutral-400" />
          <div className="border-b border-dashed border-neutral-400" />
          <div className="bg-neutral-400/10 backdrop-blur-sm pointer-events-none w-12 h-12 border border-dashed border-neutral-400" />
        </div>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
