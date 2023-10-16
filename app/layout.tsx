import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MugiSus",
  description:
    "MugiSus / 湊 真之 / Minato Masayuki's Portfolio / Keio University; Department of Environment and Information Studies",
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
    "SFC",
  ],
  twitter: {
    card: "summary",
    site: "@MugiSus",
    creator: "@MugiSus",
    title: "MugiSus's Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  );
}
