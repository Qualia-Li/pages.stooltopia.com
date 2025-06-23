import Header from '@/components/Header';
import Image from "next/image";
import { Activity, Heart, Shield, Star } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Medical-Grade Smart Rings | Circul Ring",
  description: "Discover why Circul Ring leads the medical-grade smart ring market with unmatched accuracy and comprehensive health monitoring. Backed by 20+ research papers.",
  openGraph: {
    title: "Best Medical-Grade Smart Rings | Circul Ring",
    description: "Discover why Circul Ring leads the medical-grade smart ring market with unmatched accuracy and comprehensive health monitoring.",
    images: [
      {
        url: "/images/ring_in_hand.webp",
        width: 1200,
        height: 630,
        alt: "Circul Ring Medical Grade Smart Ring"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Medical-Grade Smart Rings | Circul Ring",
    description: "Discover why Circul Ring leads the medical-grade smart ring market with unmatched accuracy and comprehensive health monitoring.",
    images: ["/images/ring_in_hand.webp"]
  }
};

export default function MedicalGradeRingsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 animate-fade-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Best <span className="text-[#8864ff]">Medical-Grade</span> Smart Rings
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Discover why Circul Ring leads the medical-grade smart ring market with its unmatched accuracy 
                and comprehensive health monitoring capabilities.
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
                alt="Circul Ring Medical Grade Smart Ring"
                width={600}
                height={600}
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* What Makes a Ring Medical Grade */}
        <section className="bg-black/50 py-20 border-y border-white/10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              What Makes a Smart Ring Medical Grade?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Clinical Validation</h3>
                <p className="text-gray-300">
                  Medical-grade devices undergo rigorous testing and validation through clinical studies. 
                  Circul Ring is backed by over 20 published research papers.
                </p>
              </div>
              
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Precision Sensors</h3>
                <p className="text-gray-300">
                  High-quality sensors capable of providing accurate, continuous measurements of vital 
                  health metrics like SpO2, heart rate, and temperature.
                </p>
              </div>

              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Data Reliability</h3>
                <p className="text-gray-300">
                  Consistent, reliable data that healthcare professionals can trust for making 
                  informed decisions about patient care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Why Choose Circul Ring?
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Heart className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Superior Accuracy</h3>
                  <p className="text-gray-300">
                    Clinically validated accuracy that matches hospital-grade equipment for SpO2, 
                    heart rate, and other vital measurements.
                  </p>
                </div>
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Shield className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Research Backed</h3>
                  <p className="text-gray-300">
                    Extensively validated through multiple clinical studies and research papers, 
                    proving its reliability in real-world medical settings.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Star className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Comprehensive Monitoring</h3>
                  <p className="text-gray-300">
                    Track multiple health metrics including SpO2, heart rate, skin temperature, 
                    and sleep patterns in one comfortable device.
                  </p>
                </div>
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Activity className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Continuous Tracking</h3>
                  <p className="text-gray-300">
                    24/7 monitoring capabilities provide a complete picture of your health, 
                    helping identify patterns and potential issues.
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
              Experience Medical-Grade Health Monitoring
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Join healthcare professionals and patients who trust Circul Ring for accurate, 
              continuous health monitoring.
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
                href="/spo2"
                className="bg-transparent text-white border border-white px-12 py-4 rounded-lg text-lg font-semibold
                  hover:bg-white/10 transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                Learn About SpO2
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