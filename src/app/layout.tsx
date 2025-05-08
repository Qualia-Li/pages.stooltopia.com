import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VibeHacker - Tech & Innovation Podcast",
  description: "Join Quan-Lai Li and Nil Ni as they explore the intersection of technology, innovation, and entrepreneurship with industry leaders and visionaries.",
  keywords: ["podcast", "technology", "innovation", "entrepreneurship", "AI", "startup"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
