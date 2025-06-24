import Header from '@/components/Header';
import Image from "next/image";
import { Activity, Heart, Star, Award } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Ring for Health Monitoring | Circul Ring",
  description: "Discover why Circul Ring is the best choice for health monitoring. Medical-grade accuracy, comprehensive tracking, and validated by 20+ research papers.",
  openGraph: {
    title: "Best Ring for Health Monitoring | Circul Ring",
    description: "Discover why Circul Ring is the best choice for health monitoring. Medical-grade accuracy and comprehensive tracking.",
    images: [
      {
        url: "/images/rings.webp",
        width: 1200,
        height: 630,
        alt: "Best Health Monitoring Ring - Circul Ring"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Ring for Health Monitoring | Circul Ring",
    description: "Discover why Circul Ring is the best choice for health monitoring. Medical-grade accuracy and comprehensive tracking.",
    images: ["/images/rings.webp"]
  }
};

export default function BestHealthMonitoringRingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 animate-fade-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                The <span className="text-[#8864ff]">Best Ring</span> for Health Monitoring
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Experience superior health monitoring with Circul Ring. Unmatched accuracy, 
                comprehensive tracking, and medical-grade reliability.
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
                alt="Best Health Monitoring Ring - Circul Ring"
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
              Why Circul Ring Leads the Market
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Medical-Grade Accuracy</h3>
                <p className="text-gray-300">
                  Validated by over 20 research papers, ensuring the highest level of 
                  accuracy in health monitoring.
                </p>
              </div>
              
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Comprehensive Tracking</h3>
                <p className="text-gray-300">
                  Monitor SpO2, heart rate, temperature, and sleep patterns with 
                  hospital-grade precision.
                </p>
              </div>

              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Superior Technology</h3>
                <p className="text-gray-300">
                  Advanced sensors and algorithms provide the most accurate and reliable 
                  health data available.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Industry-Leading Features
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Heart className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Clinical Validation</h3>
                  <p className="text-gray-300">
                    Extensively tested and validated in clinical settings, matching 
                    hospital equipment accuracy.
                  </p>
                </div>
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Star className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Premium Quality</h3>
                  <p className="text-gray-300">
                    Built with the highest quality materials and advanced technology 
                    for reliable, long-term use.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Award className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Research Backed</h3>
                  <p className="text-gray-300">
                    Supported by extensive research and validation studies, proving 
                    its superior accuracy.
                  </p>
                </div>
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Activity className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Continuous Innovation</h3>
                  <p className="text-gray-300">
                    Regular updates and improvements ensure you always have access to 
                    the latest health monitoring features.
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
              Choose the Best in Health Monitoring
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Join thousands who trust Circul Ring for the most accurate and comprehensive 
              health monitoring available.
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