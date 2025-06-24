import Header from '@/components/Header';
import Image from "next/image";
import { Activity, Eye, Shield, Gem } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discreet Health Tracker | Circul Ring",
  description: "Monitor your health discreetly with Circul Ring. A sophisticated smart ring that combines elegant design with medical-grade health tracking.",
  openGraph: {
    title: "Discreet Health Tracker | Circul Ring",
    description: "Monitor your health discreetly with Circul Ring. Elegant design meets medical-grade health tracking.",
    images: [
      {
        url: "/images/rings.webp",
        width: 1200,
        height: 630,
        alt: "Discreet Circul Ring Health Tracker"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Discreet Health Tracker | Circul Ring",
    description: "Monitor your health discreetly with Circul Ring. Elegant design meets medical-grade health tracking.",
    images: ["/images/rings.webp"]
  }
};

export default function DiscreetHealthTrackerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 animate-fade-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                <span className="text-[#8864ff]">Discreet</span> Health Tracking
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Monitor your health with sophistication. Circul Ring combines elegant design 
                with powerful medical-grade tracking capabilities.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://circulsense.com/products/circul-ring-health-monitor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#8864ff] text-white px-8 py-4 rounded-lg text-lg font-semibold
                    hover:bg-[#8864ff]/90 transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>Get Your Ring</span>
                  <Activity className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 animate-fade-in">
              <Image
                src="/images/rings.webp"
                alt="Discreet Circul Ring Health Tracker"
                width={600}
                height={600}
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-black/50 py-20 border-y border-white/10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Elegantly Powerful
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Sophisticated Design</h3>
                <p className="text-gray-300">
                  Sleek and minimalist design that looks like a premium piece of jewelry 
                  while monitoring your health.
                </p>
              </div>
              
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Invisible Technology</h3>
                <p className="text-gray-300">
                  Advanced sensors seamlessly integrated into the ring's design for 
                  unobtrusive health monitoring.
                </p>
              </div>

              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Professional Appeal</h3>
                <p className="text-gray-300">
                  Perfect for any setting, from business meetings to social events, 
                  while tracking your health.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Subtle Yet Powerful
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Eye className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Unobtrusive Monitoring</h3>
                  <p className="text-gray-300">
                    Track your health metrics without drawing attention, perfect for 
                    professional and social settings.
                  </p>
                </div>
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Shield className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Private Health Data</h3>
                  <p className="text-gray-300">
                    Monitor your health privately with secure, encrypted data 
                    transmission to your smartphone.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Gem className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Premium Aesthetics</h3>
                  <p className="text-gray-300">
                    Elegant design that complements your style while providing 
                    medical-grade health monitoring.
                  </p>
                </div>
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Activity className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Continuous Tracking</h3>
                  <p className="text-gray-300">
                    24/7 health monitoring that seamlessly integrates into your 
                    lifestyle without compromise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#8864ff] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">
              Sophisticated Health Monitoring
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Experience the perfect blend of style and medical-grade health tracking 
              with Circul Ring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://circulsense.com/products/circul-ring-health-monitor"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#8864ff] px-12 py-4 rounded-lg text-lg font-semibold
                  hover:bg-white/90 transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                Get Your Circul Ring
              </a>
              <Link
                href="/medical-grade-smart-rings"
                className="bg-transparent text-white border border-white px-12 py-4 rounded-lg text-lg font-semibold
                  hover:bg-white/10 transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/40 border-t border-white/10 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4">
                <a href="https://enception.ai" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#8864ff] transition-colors">
                  Created by Enception
                </a>
                <span className="text-white/40">•</span>
                <a href="https://circulsense.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#8864ff] transition-colors">
                  Circul
                </a>
              </div>
              <div className="flex items-center gap-4">
                <a href="https://x.com/enception_ai" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#8864ff] transition-colors">
                  @enception_ai
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
} 