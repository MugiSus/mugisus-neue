import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://neue.mugisus.com/"),
  title: "MugiSus",
  description:
    "MugiSus / 湊 真之 / Minato Masayuki / Keio University; Department of Environment and Information Studies / Web Engineer / Designer",
  keywords: [
    "MugiSus",
    "mugisus",
    "湊真之",
    "湊 真之",
    "MinatoMasayuki",
    "Minato Masayuki",
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
    images: "/oyagi-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="side-stripe fixed h-full left-0 w-4 -z-50 md:w-8" />
        <div className="side-stripe fixed h-full right-0 w-4 -z-50 md:w-8" />
        {children}
      </body>
      <Analytics />
    </html>
  );
}
