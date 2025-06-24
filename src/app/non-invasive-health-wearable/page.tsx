import Header from '@/components/Header';
import Image from "next/image";
import { Activity, Heart, Leaf, Sparkles } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Non-Invasive Health Wearable | Circul Ring",
  description: "Experience comfortable, non-invasive health monitoring with Circul Ring. Track your vital signs without compromising comfort or lifestyle.",
  openGraph: {
    title: "Non-Invasive Health Wearable | Circul Ring",
    description: "Experience comfortable, non-invasive health monitoring with Circul Ring. Track your vital signs without compromising comfort.",
    images: [
      {
        url: "/images/ring_in_hand.webp",
        width: 1200,
        height: 630,
        alt: "Non-Invasive Circul Ring Health Monitor"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Non-Invasive Health Wearable | Circul Ring",
    description: "Experience comfortable, non-invasive health monitoring with Circul Ring. Track your vital signs without compromising comfort.",
    images: ["/images/ring_in_hand.webp"]
  }
};

export default function NonInvasiveHealthWearablePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 animate-fade-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                <span className="text-[#8864ff]">Non-Invasive</span> Health Monitoring
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Track your vital signs comfortably and continuously with Circul Ring's 
                advanced non-invasive monitoring technology.
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
                alt="Non-Invasive Circul Ring Health Monitor"
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
              Comfortable Monitoring
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Gentle Tracking</h3>
                <p className="text-gray-300">
                  Advanced sensors that monitor your health metrics without any 
                  discomfort or intrusion.
                </p>
              </div>
              
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">24/7 Comfort</h3>
                <p className="text-gray-300">
                  Designed for continuous wear with a comfortable fit that you'll 
                  forget you're wearing.
                </p>
              </div>

              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Medical Grade</h3>
                <p className="text-gray-300">
                  Validated by over 20 research papers for accurate and reliable 
                  health monitoring.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Advanced Features
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Heart className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Heart Rate Monitoring</h3>
                  <p className="text-gray-300">
                    Continuous heart rate tracking without any uncomfortable chest 
                    straps or adhesive patches.
                  </p>
                </div>
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Leaf className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Natural Wear</h3>
                  <p className="text-gray-300">
                    Seamlessly integrates into your daily life without interfering 
                    with your activities.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Sparkles className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Advanced Technology</h3>
                  <p className="text-gray-300">
                    State-of-the-art sensors provide accurate readings without 
                    invasive procedures.
                  </p>
                </div>
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Activity className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Vital Signs</h3>
                  <p className="text-gray-300">
                    Monitor SpO2, heart rate, and other vital signs with medical-grade 
                    accuracy.
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
              Experience Comfortable Health Monitoring
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Join thousands of users who trust Circul Ring for non-invasive, 
              continuous health tracking.
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