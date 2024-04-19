import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import { Inter } from "next/font/google";
import TypekitLoader from "@/lib/typekitLoader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://neue.mugisus.com/"),
  title: "MugiSus",
  description:
    "The official portfolio of MugiSus. / MugiSusの公式ポートフォリオです。",
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
    description:
      "The official portfolio of MugiSus. / MugiSusの公式ポートフォリオです。",
    title: "MugiSus",
    type: "website",
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
      <body className="font-gothicmb101 text-content font-light">
        <div className="side-stripe fixed h-full left-0 w-4 -z-40 md:w-8" />
        <div className="side-stripe fixed h-full right-0 w-4 -z-40 md:w-8 -scale-x-100" />
        {children}
      </body>
      <Analytics />
    </html>
  );
}
