import Header from '@/components/Header';
import Image from "next/image";
import { Activity, Heart, Brain, Wind } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical-Grade SpO2 Monitoring | Circul Ring",
  description: "Experience continuous blood oxygen monitoring with unmatched accuracy. Circul Ring's SpO2 tracking is validated by over 20 published research papers for medical-grade precision.",
  openGraph: {
    title: "Medical-Grade SpO2 Monitoring | Circul Ring",
    description: "Experience continuous blood oxygen monitoring with unmatched accuracy. Validated by over 20 research papers.",
    images: [
      {
        url: "/images/ring_structure.webp",
        width: 1200,
        height: 630,
        alt: "Circul Ring SpO2 Monitoring"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical-Grade SpO2 Monitoring | Circul Ring",
    description: "Experience continuous blood oxygen monitoring with unmatched accuracy. Validated by over 20 research papers.",
    images: ["/images/ring_structure.webp"]
  }
};

export default function SpO2Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 animate-fade-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Medical-Grade <span className="text-[#8864ff]">SpO2</span> Monitoring
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Experience continuous blood oxygen monitoring with unmatched accuracy. 
                Circul Ring's SpO2 tracking is validated by over 20 published research papers.
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
                alt="Circul Ring SpO2 Monitoring"
                width={600}
                height={600}
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* What is SpO2 Section */}
        <section className="bg-black/50 py-20 border-y border-white/10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Understanding Blood Oxygen Saturation
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">What is SpO2?</h3>
                <p className="text-gray-300">
                  SpO2 (Peripheral Oxygen Saturation) measures the percentage of hemoglobin in your blood 
                  that's carrying oxygen. A normal reading typically ranges from 95% to 100%.
                </p>
              </div>
              
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Why Monitor It?</h3>
                <p className="text-gray-300">
                  Regular SpO2 monitoring can help detect respiratory issues early, track sleep apnea, 
                  and ensure optimal oxygen levels during physical activities.
                </p>
              </div>

              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Medical-Grade Accuracy</h3>
                <p className="text-gray-300">
                  Circul Ring's SpO2 monitoring is clinically validated and matches the accuracy 
                  of medical pulse oximeters used in healthcare settings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Key Benefits of Continuous SpO2 Monitoring
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Heart className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Cardiovascular Health</h3>
                  <p className="text-gray-300">
                    Monitor how well your circulatory system is delivering oxygen throughout your body, 
                    providing insights into your cardiovascular health.
                  </p>
                </div>
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Brain className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Sleep Quality</h3>
                  <p className="text-gray-300">
                    Track oxygen levels during sleep to detect potential sleep apnea episodes and 
                    understand your sleep quality better.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Wind className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Respiratory Health</h3>
                  <p className="text-gray-300">
                    Get early warnings about potential respiratory issues by monitoring your blood 
                    oxygen levels throughout the day and night.
                  </p>
                </div>
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Activity className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Exercise Performance</h3>
                  <p className="text-gray-300">
                    Optimize your workouts by understanding how your body's oxygen levels respond 
                    to different types and intensities of exercise.
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
              Start Monitoring Your SpO2 Today
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Join thousands of users who trust Circul Ring for medical-grade SpO2 monitoring 
              and comprehensive health insights.
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
                href="/"
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