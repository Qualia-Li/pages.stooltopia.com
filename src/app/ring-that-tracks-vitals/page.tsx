import Header from '@/components/Header';
import Image from "next/image";
import { Activity, Heart, Thermometer, LineChart } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ring That Tracks Vitals | Circul Ring",
  description: "Monitor your vital signs with medical-grade accuracy using Circul Ring. Track heart rate, SpO2, temperature, and more in real-time.",
  openGraph: {
    title: "Ring That Tracks Vitals | Circul Ring",
    description: "Monitor your vital signs with medical-grade accuracy using Circul Ring. Track heart rate, SpO2, temperature, and more in real-time.",
    images: [
      {
        url: "/images/ring_structure.webp",
        width: 1200,
        height: 630,
        alt: "Circul Ring Vital Signs Monitor"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ring That Tracks Vitals | Circul Ring",
    description: "Monitor your vital signs with medical-grade accuracy using Circul Ring. Track heart rate, SpO2, temperature, and more in real-time.",
    images: ["/images/ring_structure.webp"]
  }
};

export default function RingThatTracksVitalsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 animate-fade-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Track Your <span className="text-[#8864ff]">Vital Signs</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Monitor your essential health metrics with medical-grade accuracy. 
                Get real-time insights into your body's vital signs.
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
                alt="Circul Ring Vital Signs Monitor"
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
              Comprehensive Vital Monitoring
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Heart Rate</h3>
                <p className="text-gray-300">
                  Continuous heart rate monitoring with medical-grade accuracy, 
                  tracking your cardiovascular health 24/7.
                </p>
              </div>
              
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Blood Oxygen</h3>
                <p className="text-gray-300">
                  Monitor your SpO2 levels in real-time, ensuring optimal oxygen 
                  saturation throughout day and night.
                </p>
              </div>

              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Temperature</h3>
                <p className="text-gray-300">
                  Track your skin temperature variations to detect potential health 
                  changes early.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Advanced Tracking
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Heart className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Continuous Monitoring</h3>
                  <p className="text-gray-300">
                    24/7 tracking of your vital signs with real-time updates and 
                    alerts for any concerning changes.
                  </p>
                </div>
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Thermometer className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Temperature Insights</h3>
                  <p className="text-gray-300">
                    Advanced temperature monitoring helps detect potential fever or 
                    illness early.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <LineChart className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Trend Analysis</h3>
                  <p className="text-gray-300">
                    Track patterns and trends in your vital signs over time for 
                    better health insights.
                  </p>
                </div>
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Activity className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Medical Grade</h3>
                  <p className="text-gray-300">
                    Research-validated accuracy ensures reliable vital sign measurements 
                    you can trust.
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
              Monitor Your Health with Precision
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Get accurate, continuous vital sign monitoring with Circul Ring's 
              advanced tracking technology.
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