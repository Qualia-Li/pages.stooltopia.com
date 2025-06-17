import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://pages.circulsense.com'),
  title: "Circul Ring - Medical-Grade Health Monitoring",
  description: "Experience unparalleled accuracy in health tracking with Circul Ring, a medical-grade smart ring backed by over 20 published research papers. Features continuous SpO2, heart rate, sleep analysis, and temperature monitoring.",
  keywords: [
    "Circul Ring",
    "medical-grade smart ring",
    "health monitoring",
    "SpO2 monitoring",
    "heart rate tracking",
    "sleep analysis",
    "temperature monitoring",
    "continuous health tracking",
    "medical device",
    "health tech"
  ],
  authors: [
    { name: "Quan-Lai Li", url: "https://quanlai.li" }
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pages.circulsense.com",
    siteName: "Circul Ring",
    title: "Circul Ring - Medical-Grade Health Monitoring",
    description: "Medical-grade smart ring for continuous health monitoring with unparalleled accuracy",
    images: [
      {
        url: "/images/ring_in_hand.webp",
        width: 1200,
        height: 630,
        alt: "Circul Ring Health Monitor"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Circul Ring - Medical-Grade Health Monitoring",
    description: "Medical-grade smart ring for continuous health monitoring with unparalleled accuracy",
    images: ["/images/ring_in_hand.webp"],
    creator: "@quanlai_li"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.ico', sizes: '16x16' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://pages.circulsense.com" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
