import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VibeHacker - Tech Innovation & AI Podcast",
  description: "Join Quan-Lai Li and Nil Ni as they explore the intersection of technology, AI, and entrepreneurship. Featuring in-depth conversations with industry leaders about ChatGPT, AI tools, and the future of tech.",
  keywords: [
    "tech podcast",
    "AI podcast",
    "ChatGPT",
    "artificial intelligence",
    "Quan-Lai Li",
    "Nil Ni",
    "ChatSlide.AI",
    "MakeForm.AI",
    "tech entrepreneurship",
    "startup podcast"
  ],
  authors: [
    { name: "Quan-Lai Li", url: "https://x.com/quanlai_li" },
    { name: "Nil Ni", url: "https://x.com/_nilni" }
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vibehacker.fm",
    siteName: "VibeHacker",
    title: "VibeHacker - Tech Innovation & AI Podcast",
    description: "Tech innovation podcast exploring AI, startups, and the future of technology",
    images: [
      {
        url: "/image/vibehacker_logo.png",
        width: 1200,
        height: 630,
        alt: "VibeHacker Podcast"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "VibeHacker - Tech Innovation & AI Podcast",
    description: "Tech innovation podcast exploring AI, startups, and the future of technology",
    images: ["/image/vibehacker_logo.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://vibehacker.fm" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
