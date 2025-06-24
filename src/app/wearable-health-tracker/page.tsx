import Header from '@/components/Header';
import Image from "next/image";
import { Activity, Heart, Smartphone, Watch } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wearable Health Tracker | Circul Ring",
  description: "Experience the next evolution in wearable health tracking with Circul Ring. Medical-grade accuracy in a comfortable, stylish ring form factor.",
  openGraph: {
    title: "Wearable Health Tracker | Circul Ring",
    description: "Experience the next evolution in wearable health tracking with Circul Ring. Medical-grade accuracy in a comfortable form.",
    images: [
      {
        url: "/images/rings.webp",
        width: 1200,
        height: 630,
        alt: "Circul Ring Wearable Health Tracker"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Wearable Health Tracker | Circul Ring",
    description: "Experience the next evolution in wearable health tracking with Circul Ring. Medical-grade accuracy in a comfortable form.",
    images: ["/images/rings.webp"]
  }
};

export default function WearableHealthTrackerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 animate-fade-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Advanced <span className="text-[#8864ff]">Wearable</span> Health Tracker
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Discover the perfect blend of comfort and precision with Circul Ring. 
                A medical-grade health tracker that you'll forget you're wearing.
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
                alt="Circul Ring Wearable Health Tracker"
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
              The Future of Wearable Health
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Comfortable Design</h3>
                <p className="text-gray-300">
                  Lightweight and ergonomic design ensures 24/7 comfort while maintaining 
                  medical-grade tracking accuracy.
                </p>
              </div>
              
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Comprehensive Tracking</h3>
                <p className="text-gray-300">
                  Monitor vital health metrics including SpO2, heart rate, temperature, and 
                  sleep patterns in one device.
                </p>
              </div>

              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Long Battery Life</h3>
                <p className="text-gray-300">
                  Extended battery life ensures continuous health monitoring without frequent 
                  charging interruptions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Why Choose Circul Ring?
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Heart className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Medical Precision</h3>
                  <p className="text-gray-300">
                    Get hospital-grade accuracy in a comfortable wearable form factor, 
                    validated by extensive research.
                  </p>
                </div>
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Watch className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">24/7 Monitoring</h3>
                  <p className="text-gray-300">
                    Continuous health tracking that seamlessly integrates into your lifestyle 
                    without compromising comfort.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Smartphone className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Smart App Integration</h3>
                  <p className="text-gray-300">
                    View your health data and insights through our intuitive mobile app, 
                    with easy sharing capabilities.
                  </p>
                </div>
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Activity className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Proactive Health</h3>
                  <p className="text-gray-300">
                    Stay ahead of your health with early warning signs and comprehensive 
                    health trend analysis.
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
              Transform Your Health Tracking
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Join the future of wearable health technology with Circul Ring's 
              medical-grade tracking capabilities.
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