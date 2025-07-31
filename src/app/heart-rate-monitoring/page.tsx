import Header from '@/components/Header';
import Image from "next/image";
import { Activity, Heart, Shield, Star, TrendingUp, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advanced Heart Rate Monitoring Ring | Circul Ring",
  description: "Discover medical-grade heart rate monitoring with Circul Ring. Continuous, accurate heart rate tracking for better cardiovascular health management.",
  openGraph: {
    title: "Advanced Heart Rate Monitoring Ring | Circul Ring",
    description: "Discover medical-grade heart rate monitoring with Circul Ring. Continuous, accurate heart rate tracking for better cardiovascular health management.",
    images: [
      {
        url: "/images/ring_in_hand.webp",
        width: 1200,
        height: 630,
        alt: "Circul Ring Heart Rate Monitoring"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced Heart Rate Monitoring Ring | Circul Ring",
    description: "Discover medical-grade heart rate monitoring with Circul Ring. Continuous, accurate heart rate tracking for better cardiovascular health management.",
    images: ["/images/ring_in_hand.webp"]
  }
};

export default function HeartRateMonitoringPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 animate-fade-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Advanced <span className="text-[#8864ff]">Heart Rate</span> Monitoring
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Monitor your cardiovascular health with medical-grade accuracy. Circul Ring provides 
                continuous heart rate tracking that healthcare professionals trust.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://circulsense.com/products/circul-ring-health-monitor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#8864ff] text-white px-8 py-4 rounded-lg text-lg font-semibold
                    hover:bg-[#8864ff]/90 transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>Start Monitoring</span>
                  <Heart className="w-6 h-6" />
                </a>
                <Link
                  href="/medical-grade-smart-rings"
                  className="bg-transparent text-white border border-white px-8 py-4 rounded-lg text-lg font-semibold
                    hover:bg-white/10 transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 animate-fade-in">
              <Image
                src="/images/ring_structure.webp"
                alt="Circul Ring Heart Rate Monitoring Technology"
                width={600}
                height={600}
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* Why Heart Rate Monitoring Matters */}
        <section className="bg-black/50 py-20 border-y border-white/10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Why Heart Rate Monitoring Is Critical
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <AlertTriangle className="w-12 h-12 text-[#8864ff] mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Early Detection</h3>
                <p className="text-gray-300">
                  Continuous heart rate monitoring can help detect arrhythmias, irregular heartbeats, 
                  and other cardiovascular issues before they become serious problems.
                </p>
              </div>
              
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <TrendingUp className="w-12 h-12 text-[#8864ff] mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Fitness Optimization</h3>
                <p className="text-gray-300">
                  Track your heart rate zones during exercise to optimize workouts and improve 
                  cardiovascular fitness safely and effectively.
                </p>
              </div>

              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <Shield className="w-12 h-12 text-[#8864ff] mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Stress Management</h3>
                <p className="text-gray-300">
                  Monitor how stress affects your heart rate and learn to manage stress levels 
                  for better overall cardiovascular health.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Circul Ring Heart Rate Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Advanced Heart Rate Technology
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Heart className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Medical-Grade Accuracy</h3>
                  <p className="text-gray-300">
                    Circul Ring delivers hospital-grade heart rate accuracy with precision sensors 
                    that have been validated through extensive clinical research.
                  </p>
                </div>
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Activity className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">24/7 Continuous Monitoring</h3>
                  <p className="text-gray-300">
                    Unlike smartwatches that only monitor during workouts, Circul Ring tracks your 
                    heart rate continuously, even during sleep and daily activities.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Star className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Advanced Analytics</h3>
                  <p className="text-gray-300">
                    Get detailed insights into heart rate variability, resting heart rate trends, 
                    and recovery metrics to understand your cardiovascular health better.
                  </p>
                </div>
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <TrendingUp className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Real-Time Alerts</h3>
                  <p className="text-gray-300">
                    Receive immediate notifications when your heart rate goes outside normal ranges, 
                    helping you take quick action when needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Heart Rate Zones Section */}
        <section className="bg-black/50 py-20 border-y border-white/10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Understanding Heart Rate Zones
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-6">
                <div className="bg-black/40 p-6 rounded-2xl shadow-lg border border-white/10 flex items-center gap-6">
                  <div className="w-4 h-16 bg-blue-500 rounded"></div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Resting Zone (50-60% Max HR)</h3>
                    <p className="text-gray-300">Recovery and light activity. Your heart is working at minimal effort.</p>
                  </div>
                </div>
                
                <div className="bg-black/40 p-6 rounded-2xl shadow-lg border border-white/10 flex items-center gap-6">
                  <div className="w-4 h-16 bg-green-500 rounded"></div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Fat Burn Zone (60-70% Max HR)</h3>
                    <p className="text-gray-300">Optimal for fat burning and building aerobic base fitness.</p>
                  </div>
                </div>
                
                <div className="bg-black/40 p-6 rounded-2xl shadow-lg border border-white/10 flex items-center gap-6">
                  <div className="w-4 h-16 bg-yellow-500 rounded"></div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Aerobic Zone (70-80% Max HR)</h3>
                    <p className="text-gray-300">Cardiovascular fitness improvement and endurance building.</p>
                  </div>
                </div>
                
                <div className="bg-black/40 p-6 rounded-2xl shadow-lg border border-white/10 flex items-center gap-6">
                  <div className="w-4 h-16 bg-orange-500 rounded"></div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Anaerobic Zone (80-90% Max HR)</h3>
                    <p className="text-gray-300">High-intensity training for performance and speed improvement.</p>
                  </div>
                </div>
                
                <div className="bg-black/40 p-6 rounded-2xl shadow-lg border border-white/10 flex items-center gap-6">
                  <div className="w-4 h-16 bg-red-500 rounded"></div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Max Effort Zone (90-100% Max HR)</h3>
                    <p className="text-gray-300">Maximum intensity training for elite performance enhancement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Q&A Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">How accurate is Circul Ring's heart rate monitoring?</h3>
                <p className="text-gray-300">
                  Circul Ring provides medical-grade accuracy that matches hospital equipment. Our heart rate monitoring 
                  has been validated through over 20 published research papers and clinical studies, ensuring reliability 
                  for both healthcare professionals and personal use.
                </p>
              </div>

              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Can the ring detect heart problems?</h3>
                <p className="text-gray-300">
                  While Circul Ring is not a diagnostic device, its continuous monitoring can help identify irregular 
                  heart patterns, significant changes in resting heart rate, and other indicators that may warrant 
                  consultation with a healthcare provider. Early detection of anomalies can be crucial for heart health.
                </p>
              </div>

              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">How does it compare to chest strap heart rate monitors?</h3>
                <p className="text-gray-300">
                  Circul Ring provides comparable accuracy to chest strap monitors but with much greater convenience. 
                  You can wear it 24/7 without discomfort, getting continuous data rather than just during workouts. 
                  This comprehensive monitoring provides better insights into your overall cardiovascular health.
                </p>
              </div>

              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">What heart rate metrics does it track?</h3>
                <p className="text-gray-300">
                  Circul Ring tracks real-time heart rate, resting heart rate trends, heart rate variability (HRV), 
                  heart rate zones during activities, recovery heart rate, and can detect irregular rhythms. 
                  These comprehensive metrics provide a complete picture of your cardiovascular fitness and health.
                </p>
              </div>

              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Is continuous heart rate monitoring safe?</h3>
                <p className="text-gray-300">
                  Yes, Circul Ring uses safe LED technology for heart rate monitoring. The low-power sensors are 
                  designed for continuous wear and emit only minimal light that's completely safe for long-term use. 
                  The ring is also designed for comfort during 24/7 wear.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#8864ff] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">
              Take Control of Your Heart Health
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Start monitoring your heart rate with medical-grade accuracy. Join thousands who trust 
              Circul Ring for comprehensive cardiovascular health tracking.
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
                href="/chronic-disease-management"
                className="bg-transparent text-white border border-white px-12 py-4 rounded-lg text-lg font-semibold
                  hover:bg-white/10 transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                Chronic Disease Management
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