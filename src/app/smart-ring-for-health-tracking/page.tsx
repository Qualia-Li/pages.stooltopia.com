import Header from '@/components/Header';
import Image from "next/image";
import { Activity, Heart, Brain, LineChart } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Ring for Health Tracking | Circul Ring",
  description: "Transform your health tracking with Circul Ring's medical-grade smart ring. Get continuous monitoring of vital health metrics with unmatched accuracy.",
  openGraph: {
    title: "Smart Ring for Health Tracking | Circul Ring",
    description: "Transform your health tracking with Circul Ring's medical-grade smart ring. Get continuous monitoring of vital health metrics.",
    images: [
      {
        url: "/images/ring_in_hand.webp",
        width: 1200,
        height: 630,
        alt: "Circul Ring Health Tracking"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Ring for Health Tracking | Circul Ring",
    description: "Transform your health tracking with Circul Ring's medical-grade smart ring. Get continuous monitoring of vital health metrics.",
    images: ["/images/ring_in_hand.webp"]
  }
};

export default function SmartRingHealthTrackingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 animate-fade-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Smart Ring for <span className="text-[#8864ff]">Health Tracking</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Experience the future of health monitoring with Circul Ring's medical-grade accuracy. 
                Track your vital health metrics continuously and effortlessly.
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
                alt="Circul Ring Health Tracking"
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
              Comprehensive Health Tracking
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Continuous Monitoring</h3>
                <p className="text-gray-300">
                  24/7 tracking of vital health metrics including SpO2, heart rate, and temperature 
                  with medical-grade accuracy.
                </p>
              </div>
              
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Sleep Analysis</h3>
                <p className="text-gray-300">
                  Detailed sleep tracking with insights into sleep stages, quality, and potential 
                  sleep disorders like sleep apnea.
                </p>
              </div>

              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Research Validated</h3>
                <p className="text-gray-300">
                  Backed by over 20 published research papers, ensuring the highest standards 
                  of accuracy and reliability.
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
                  <h3 className="text-2xl font-bold text-white mb-4">Medical-Grade Accuracy</h3>
                  <p className="text-gray-300">
                    Get hospital-grade precision in your health measurements, trusted by healthcare 
                    professionals worldwide.
                  </p>
                </div>
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Brain className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Smart Insights</h3>
                  <p className="text-gray-300">
                    Advanced algorithms provide actionable insights about your health patterns 
                    and potential areas for improvement.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <LineChart className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Trend Analysis</h3>
                  <p className="text-gray-300">
                    Track your health trends over time and identify patterns that can help you 
                    make better health decisions.
                  </p>
                </div>
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Activity className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Easy Integration</h3>
                  <p className="text-gray-300">
                    Seamlessly sync your health data with your preferred health apps and share 
                    insights with your healthcare providers.
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
              Start Tracking Your Health Today
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Join thousands of users who trust Circul Ring for comprehensive health tracking 
              with medical-grade accuracy.
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