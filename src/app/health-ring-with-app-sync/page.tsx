import Header from '@/components/Header';
import Image from "next/image";
import { Activity, Smartphone, Share2, Cloud } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Ring with App Sync | Circul Ring",
  description: "Experience seamless health data synchronization with Circul Ring's smart app integration. Monitor your health metrics in real-time with medical-grade accuracy.",
  openGraph: {
    title: "Health Ring with App Sync | Circul Ring",
    description: "Experience seamless health data synchronization with Circul Ring's smart app integration. Monitor your health in real-time.",
    images: [
      {
        url: "/images/ring_structure.webp",
        width: 1200,
        height: 630,
        alt: "Circul Ring with App Integration"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Ring with App Sync | Circul Ring",
    description: "Experience seamless health data synchronization with Circul Ring's smart app integration. Monitor your health in real-time.",
    images: ["/images/ring_structure.webp"]
  }
};

export default function HealthRingAppSyncPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 animate-fade-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Smart Health Ring with <span className="text-[#8864ff]">App Sync</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Experience seamless health monitoring with Circul Ring's intelligent app 
                integration. Your health data, instantly synchronized and analyzed.
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
                src="/images/ring_structure.webp"
                alt="Circul Ring with App Integration"
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
              Seamless App Integration
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Real-Time Sync</h3>
                <p className="text-gray-300">
                  Instant synchronization of your health data to your smartphone for 
                  immediate access and analysis.
                </p>
              </div>
              
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Smart Analytics</h3>
                <p className="text-gray-300">
                  Advanced data analysis provides actionable insights and trends about 
                  your health metrics.
                </p>
              </div>

              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Easy Integration</h3>
                <p className="text-gray-300">
                  Seamlessly connects with your favorite health apps for comprehensive 
                  health tracking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Smart Features
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Smartphone className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Intuitive App</h3>
                  <p className="text-gray-300">
                    User-friendly mobile application that makes tracking and understanding 
                    your health data effortless.
                  </p>
                </div>
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Share2 className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Easy Sharing</h3>
                  <p className="text-gray-300">
                    Share your health data securely with healthcare providers or family 
                    members when needed.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Cloud className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Cloud Backup</h3>
                  <p className="text-gray-300">
                    Secure cloud storage ensures your health data is always backed up 
                    and accessible when you need it.
                  </p>
                </div>
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Activity className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Smart Alerts</h3>
                  <p className="text-gray-300">
                    Receive personalized notifications and insights about your health 
                    metrics through the app.
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
              Stay Connected to Your Health
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Experience the power of seamless health monitoring with Circul Ring's 
              intelligent app integration.
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