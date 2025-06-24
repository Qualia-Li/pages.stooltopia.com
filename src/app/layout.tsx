import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
    { name: "Enception", url: "https://enception.ai" }
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
        <link rel="canonical" href="https://pages.circulsense.com" />
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
