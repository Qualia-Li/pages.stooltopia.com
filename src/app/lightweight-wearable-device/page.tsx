import Header from '@/components/Header';
import Image from "next/image";
import { Activity, Feather, Watch, Sparkles } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lightweight Wearable Device | Circul Ring",
  description: "Experience the perfect blend of comfort and precision with Circul Ring's lightweight design. Medical-grade health monitoring that you'll barely notice.",
  openGraph: {
    title: "Lightweight Wearable Device | Circul Ring",
    description: "Experience the perfect blend of comfort and precision with Circul Ring's lightweight design. Medical-grade monitoring you'll barely notice.",
    images: [
      {
        url: "/images/ring_in_hand.webp",
        width: 1200,
        height: 630,
        alt: "Lightweight Circul Ring Wearable Device"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Lightweight Wearable Device | Circul Ring",
    description: "Experience the perfect blend of comfort and precision with Circul Ring's lightweight design. Medical-grade monitoring you'll barely notice.",
    images: ["/images/ring_in_hand.webp"]
  }
};

export default function LightweightWearableDevicePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 animate-fade-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                <span className="text-[#8864ff]">Lightweight</span> Comfort, Powerful Monitoring
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Discover the perfect balance of comfort and capability with Circul Ring. 
                A lightweight wearable that delivers medical-grade monitoring.
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
                src="/images/ring_in_hand.webp"
                alt="Lightweight Circul Ring Wearable Device"
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
              Comfort Meets Technology
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Ergonomic Design</h3>
                <p className="text-gray-300">
                  Carefully crafted for all-day comfort without compromising on 
                  advanced monitoring capabilities.
                </p>
              </div>
              
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Barely There Feel</h3>
                <p className="text-gray-300">
                  So lightweight and comfortable, you'll forget you're wearing a 
                  powerful health monitoring device.
                </p>
              </div>

              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Premium Materials</h3>
                <p className="text-gray-300">
                  Made with high-quality, lightweight materials that ensure durability 
                  and all-day wearing comfort.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Lightweight Yet Powerful
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Feather className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Ultra-Light Design</h3>
                  <p className="text-gray-300">
                    Engineered to be as light as possible while maintaining 
                    medical-grade monitoring capabilities.
                  </p>
                </div>
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Watch className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">24/7 Comfort</h3>
                  <p className="text-gray-300">
                    Designed for continuous wear, allowing for uninterrupted 
                    health monitoring day and night.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Sparkles className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Advanced Sensors</h3>
                  <p className="text-gray-300">
                    Packed with cutting-edge sensors that deliver precise health 
                    data without adding bulk.
                  </p>
                </div>
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Activity className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Active Lifestyle Ready</h3>
                  <p className="text-gray-300">
                    Perfect for any activity, from sleep to exercise, with a design 
                    that never gets in your way.
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
              Experience Effortless Health Monitoring
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Join thousands who've discovered the perfect balance of comfort and 
              medical-grade health tracking.
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
                <a href="https://quanlai.li" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#8864ff] transition-colors">
                  Created by Quan-Lai Li
                </a>
                <span className="text-white/40">•</span>
                <a href="https://circulsense.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#8864ff] transition-colors">
                  Circul
                </a>
              </div>
              <div className="flex items-center gap-4">
                <a href="https://x.com/quanlai_li" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#8864ff] transition-colors">
                  @quanlai_li
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
} 