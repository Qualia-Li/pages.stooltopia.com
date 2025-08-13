import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://pages.stooltopia.com'),
  title: "StoolTopia - Premium Ergonomic Stools for Health & Comfort",
description: "Discover StoolTopia's innovative ergonomic stools designed for optimal posture, comfort, and productivity. Perfect for office work, home use, and active sitting. Transform your seating experience with our premium ergonomic solutions.",
  keywords: [
    "ergonomic stools",
    "office stools",
    "active sitting",
    "posture support",
    "ergonomic seating",
    "workplace comfort",
    "standing desk stools",
    "health and wellness",
    "ergonomic design",
    "comfortable seating"
  ],
  authors: [
    { name: "Enception", url: "https://enception.ai" }
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pages.stooltopia.com",
    siteName: "StoolTopia",
title: "StoolTopia - Premium Ergonomic Stools for Health & Comfort",
    description: "Premium ergonomic stools designed for optimal posture, comfort, and productivity. Transform your seating experience with StoolTopia's innovative designs.",
    images: [
      {
        url: "/images/logo.webp",
        width: 1200,
        height: 630,
        alt: "StoolTopia Ergonomic Stools"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "StoolTopia - Premium Ergonomic Stools for Health & Comfort",
    description: "Premium ergonomic stools designed for optimal posture, comfort, and productivity. Transform your seating experience with StoolTopia's innovative designs.",
    images: ["/images/logo.webp"],
    creator: "@enception_ai"
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
        <link rel="canonical" href="https://pages.stooltopia.com" />
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WP5BBC6J');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WP5BBC6J"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
