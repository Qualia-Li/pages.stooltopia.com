import Header from '@/components/Header';
import Image from "next/image";
import { Activity, Heart, Shield, Star, TrendingUp, Clock, Zap, Moon } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "24/7 Continuous Health Monitoring Ring | Circul Ring",
  description: "Experience true continuous health monitoring with Circul Ring. Real-time SpO2, heart rate, temperature, and sleep tracking for comprehensive health insights.",
  openGraph: {
    title: "24/7 Continuous Health Monitoring Ring | Circul Ring",
    description: "Experience true continuous health monitoring with Circul Ring. Real-time SpO2, heart rate, temperature, and sleep tracking for comprehensive health insights.",
    images: [
      {
        url: "/images/sleep.webp",
        width: 1200,
        height: 630,
        alt: "Circul Ring Continuous Health Monitoring"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Continuous Health Monitoring Ring | Circul Ring",
    description: "Experience true continuous health monitoring with Circul Ring. Real-time SpO2, heart rate, temperature, and sleep tracking for comprehensive health insights.",
    images: ["/images/sleep.webp"]
  }
};

export default function ContinuousHealthMonitoringPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 animate-fade-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                <span className="text-[#8864ff]">24/7</span> Continuous Health Monitoring
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Never miss a moment of your health journey. Circul Ring provides true continuous monitoring 
                of vital health metrics, giving you and your healthcare team the complete picture.
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
                  <Clock className="w-6 h-6" />
                </a>
                <Link
                  href="/medical-grade-smart-rings"
                  className="bg-transparent text-white border border-white px-8 py-4 rounded-lg text-lg font-semibold
                    hover:bg-white/10 transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  Medical Grade Quality
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 animate-fade-in">
              <Image
                src="/images/sleep.webp"
                alt="Circul Ring 24/7 Continuous Health Monitoring"
                width={600}
                height={600}
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* What is Continuous Monitoring */}
        <section className="bg-black/50 py-20 border-y border-white/10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              What Makes True Continuous Monitoring Different?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <Clock className="w-12 h-12 text-[#8864ff] mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Always On</h3>
                <p className="text-gray-300">
                  Unlike smartwatches that only monitor during workouts, Circul Ring tracks your health 
                  metrics 24/7 - during work, sleep, rest, and activity.
                </p>
              </div>
              
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <Zap className="w-12 h-12 text-[#8864ff] mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Real-Time Data</h3>
                <p className="text-gray-300">
                  Get instant access to your health metrics with real-time monitoring that provides 
                  immediate insights into your body's current state.
                </p>
              </div>

              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <TrendingUp className="w-12 h-12 text-[#8864ff] mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Complete Picture</h3>
                <p className="text-gray-300">
                  Continuous data reveals patterns and trends that sporadic measurements miss, 
                  providing a comprehensive view of your health.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Monitored Metrics */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Continuously Monitored Health Metrics
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Heart className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Heart Rate & HRV</h3>
                  <p className="text-gray-300">
                    Continuous heart rate monitoring with heart rate variability analysis provides insights 
                    into cardiovascular health, stress levels, and recovery status.
                  </p>
                </div>
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Activity className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Blood Oxygen (SpO2)</h3>
                  <p className="text-gray-300">
                    Medical-grade SpO2 monitoring tracks oxygen saturation levels continuously, 
                    critical for respiratory health and sleep quality assessment.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Star className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Skin Temperature</h3>
                  <p className="text-gray-300">
                    Continuous temperature tracking helps monitor immune response, sleep quality, 
                    and can provide early indicators of illness or hormonal changes.
                  </p>
                </div>
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Moon className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Sleep Analysis</h3>
                  <p className="text-gray-300">
                    Comprehensive sleep tracking including sleep stages, efficiency, and disturbances 
                    using multiple sensors for the most accurate sleep analysis available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Timeline */}
        <section className="bg-black/50 py-20 border-y border-white/10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              The Power of Continuous Data Over Time
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10 border-l-4 border-l-[#8864ff]">
                  <h3 className="text-2xl font-bold text-white mb-4">First Week: Baseline Establishment</h3>
                  <p className="text-gray-300">
                    Circul Ring learns your unique health patterns, establishing personalized baselines 
                    for all monitored metrics to enable accurate anomaly detection.
                  </p>
                </div>
                
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10 border-l-4 border-l-[#8864ff]">
                  <h3 className="text-2xl font-bold text-white mb-4">First Month: Pattern Recognition</h3>
                  <p className="text-gray-300">
                    Identify daily and weekly patterns in your health metrics, understanding how lifestyle, 
                    stress, and activities affect your well-being.
                  </p>
                </div>
                
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10 border-l-4 border-l-[#8864ff]">
                  <h3 className="text-2xl font-bold text-white mb-4">Ongoing: Predictive Insights</h3>
                  <p className="text-gray-300">
                    Long-term continuous data enables predictive health insights, early warning systems, 
                    and personalized recommendations for optimal health management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Applications */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Clinical Applications of Continuous Monitoring
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-black/40 p-6 rounded-2xl shadow-lg border border-white/10 text-center">
                <Shield className="w-12 h-12 text-[#8864ff] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Remote Patient Monitoring</h3>
                <p className="text-gray-300">
                  Healthcare providers can monitor patients remotely with reliable, continuous data.
                </p>
              </div>
              
              <div className="bg-black/40 p-6 rounded-2xl shadow-lg border border-white/10 text-center">
                <Heart className="w-12 h-12 text-[#8864ff] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Post-Surgery Recovery</h3>
                <p className="text-gray-300">
                  Track recovery progress with continuous vital sign monitoring during healing.
                </p>
              </div>
              
              <div className="bg-black/40 p-6 rounded-2xl shadow-lg border border-white/10 text-center">
                <Activity className="w-12 h-12 text-[#8864ff] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Medication Efficacy</h3>
                <p className="text-gray-300">
                  Monitor how medications affect vital signs and adjust dosages accordingly.
                </p>
              </div>
              
              <div className="bg-black/40 p-6 rounded-2xl shadow-lg border border-white/10 text-center">
                <TrendingUp className="w-12 h-12 text-[#8864ff] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Clinical Research</h3>
                <p className="text-gray-300">
                  Continuous data supports medical research with unprecedented detail and accuracy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Behind Continuous Monitoring */}
        <section className="bg-black/50 py-20 border-y border-white/10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              The Technology Behind Continuous Monitoring
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Advanced Sensor Array</h3>
                <p className="text-gray-300">
                  Multiple precision sensors work together to provide comprehensive health monitoring 
                  without interfering with daily activities or sleep.
                </p>
              </div>
              
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Low-Power Design</h3>
                <p className="text-gray-300">
                  Optimized for continuous operation with minimal battery drain, ensuring 
                  uninterrupted monitoring for days without charging.
                </p>
              </div>
              
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Intelligent Processing</h3>
                <p className="text-gray-300">
                  On-device processing reduces data noise and provides real-time insights 
                  while maintaining privacy and reducing bandwidth usage.
                </p>
              </div>
              
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Clinical Validation</h3>
                <p className="text-gray-300">
                  Backed by 20+ research papers proving accuracy and reliability in 
                  clinical settings for medical-grade health monitoring.
                </p>
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
                <h3 className="text-2xl font-bold text-white mb-4">How does continuous monitoring differ from periodic checks?</h3>
                <p className="text-gray-300">
                  Continuous monitoring captures health events that happen between periodic measurements. 
                  For example, sleep apnea episodes, arrhythmias, or oxygen drops can occur at any time. 
                  Continuous monitoring ensures nothing is missed, providing a complete health picture.
                </p>
              </div>

              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Won't continuous monitoring drain the battery quickly?</h3>
                <p className="text-gray-300">
                  Circul Ring is engineered specifically for continuous operation with multi-day battery life. 
                  The advanced low-power sensors and intelligent processing ensure you get comprehensive 
                  monitoring without frequent charging interruptions.
                </p>
              </div>

              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Is the data overwhelming with 24/7 monitoring?</h3>
                <p className="text-gray-300">
                  Not at all. Circul Ring's intelligent algorithms process the continuous data and present 
                  meaningful insights and trends. You get actionable information rather than raw data overload, 
                  with alerts only for significant changes.
                </p>
              </div>

              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">How accurate is continuous monitoring compared to medical devices?</h3>
                <p className="text-gray-300">
                  Circul Ring meets medical-grade accuracy standards, validated through extensive clinical testing. 
                  The continuous monitoring provides data quality that matches hospital equipment while being 
                  comfortable enough for 24/7 wear.
                </p>
              </div>

              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Can continuous monitoring detect health emergencies?</h3>
                <p className="text-gray-300">
                  While not a replacement for emergency medical care, continuous monitoring can detect significant 
                  changes in vital signs that may indicate health issues. Early detection allows for prompt 
                  medical attention, potentially preventing emergencies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#8864ff] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">
              Experience True Continuous Health Monitoring
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Don't let important health moments go unnoticed. Start your journey with 24/7 continuous 
              health monitoring that never misses a beat.
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