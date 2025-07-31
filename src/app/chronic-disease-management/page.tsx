import Header from '@/components/Header';
import Image from "next/image";
import { Activity, Heart, Shield, Star, TrendingUp, AlertTriangle, Clock, Users } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chronic Disease Management with Smart Ring | Circul Ring",
  description: "Manage chronic conditions effectively with Circul Ring's medical-grade monitoring. Continuous tracking for diabetes, heart disease, sleep apnea, and more.",
  openGraph: {
    title: "Chronic Disease Management with Smart Ring | Circul Ring",
    description: "Manage chronic conditions effectively with Circul Ring's medical-grade monitoring. Continuous tracking for diabetes, heart disease, sleep apnea, and more.",
    images: [
      {
        url: "/images/rings.webp",
        width: 1200,
        height: 630,
        alt: "Circul Ring for Chronic Disease Management"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chronic Disease Management with Smart Ring | Circul Ring",
    description: "Manage chronic conditions effectively with Circul Ring's medical-grade monitoring. Continuous tracking for diabetes, heart disease, sleep apnea, and more.",
    images: ["/images/rings.webp"]
  }
};

export default function ChronicDiseaseManagementPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 animate-fade-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                <span className="text-[#8864ff]">Chronic Disease</span> Management
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Take control of your chronic conditions with medical-grade monitoring. Circul Ring provides 
                the continuous health data you and your healthcare team need for better management.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://circulsense.com/products/circul-ring-health-monitor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#8864ff] text-white px-8 py-4 rounded-lg text-lg font-semibold
                    hover:bg-[#8864ff]/90 transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>Start Managing</span>
                  <Shield className="w-6 h-6" />
                </a>
                <Link
                  href="/medical-grade-smart-rings"
                  className="bg-transparent text-white border border-white px-8 py-4 rounded-lg text-lg font-semibold
                    hover:bg-white/10 transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  Learn About Accuracy
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 animate-fade-in">
              <Image
                src="/images/rings.webp"
                alt="Circul Ring for Chronic Disease Management"
                width={600}
                height={600}
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* Why Continuous Monitoring Matters */}
        <section className="bg-black/50 py-20 border-y border-white/10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Why Chronic Disease Management Needs Continuous Monitoring
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <Clock className="w-12 h-12 text-[#8864ff] mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">24/7 Tracking</h3>
                <p className="text-gray-300">
                  Chronic conditions don't take breaks. Continuous monitoring provides a complete picture 
                  of how your condition affects you throughout the day and night.
                </p>
              </div>
              
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <TrendingUp className="w-12 h-12 text-[#8864ff] mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Early Warning Signs</h3>
                <p className="text-gray-300">
                  Detect changes in your health metrics before symptoms worsen, allowing for 
                  proactive intervention and better health outcomes.
                </p>
              </div>

              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <Users className="w-12 h-12 text-[#8864ff] mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Healthcare Collaboration</h3>
                <p className="text-gray-300">
                  Share accurate, continuous data with your healthcare team for better treatment 
                  decisions and more personalized care plans.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions Managed */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Chronic Conditions Supported
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Heart className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Cardiovascular Disease</h3>
                  <p className="text-gray-300">
                    Monitor heart rate variability, detect arrhythmias, and track cardiovascular recovery. 
                    Essential for managing heart disease, hypertension, and cardiac rehabilitation.
                  </p>
                </div>
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Activity className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Sleep Apnea</h3>
                  <p className="text-gray-300">
                    Continuous SpO2 and heart rate monitoring during sleep helps track sleep apnea severity 
                    and CPAP therapy effectiveness throughout the night.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Shield className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Respiratory Conditions</h3>
                  <p className="text-gray-300">
                    Track blood oxygen levels for COPD, asthma, and other respiratory conditions. 
                    Early detection of oxygen drops can prevent serious complications.
                  </p>
                </div>
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Star className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Diabetes Management</h3>
                  <p className="text-gray-300">
                    Monitor how blood sugar fluctuations affect heart rate and sleep quality. 
                    Track the impact of diabetes on overall health and wellness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Research Section */}
        <section className="bg-black/50 py-20 border-y border-white/10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Proven Effectiveness in Clinical Settings
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <h3 className="text-3xl font-bold text-[#8864ff] mb-4">20+</h3>
                  <h4 className="text-xl font-bold text-white mb-4">Published Research Papers</h4>
                  <p className="text-gray-300">
                    Circul Ring's effectiveness in chronic disease management has been validated 
                    through extensive clinical research and peer-reviewed studies.
                  </p>
                </div>
                
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <h3 className="text-3xl font-bold text-[#8864ff] mb-4">Medical-Grade</h3>
                  <h4 className="text-xl font-bold text-white mb-4">Accuracy Standards</h4>
                  <p className="text-gray-300">
                    Meets hospital-grade accuracy standards for SpO2 and heart rate monitoring, 
                    ensuring reliable data for healthcare decision-making.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10 text-center">
                <p className="text-lg text-gray-300 italic">
                  "The continuous monitoring capabilities of Circul Ring have significantly improved 
                  our ability to track patient progress and adjust treatment plans in real-time."
                </p>
                <p className="text-white mt-4 font-semibold">- Clinical Research Team</p>
              </div>
            </div>
          </div>
        </section>

        {/* Management Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Benefits for Chronic Disease Management
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-black/40 p-6 rounded-2xl shadow-lg border border-white/10 text-center">
                <AlertTriangle className="w-12 h-12 text-[#8864ff] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Early Alerts</h3>
                <p className="text-gray-300">
                  Receive notifications when health metrics go outside your normal ranges.
                </p>
              </div>
              
              <div className="bg-black/40 p-6 rounded-2xl shadow-lg border border-white/10 text-center">
                <TrendingUp className="w-12 h-12 text-[#8864ff] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Trend Analysis</h3>
                <p className="text-gray-300">
                  Track long-term trends to understand how treatments are working.
                </p>
              </div>
              
              <div className="bg-black/40 p-6 rounded-2xl shadow-lg border border-white/10 text-center">
                <Heart className="w-12 h-12 text-[#8864ff] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Medication Timing</h3>
                <p className="text-gray-300">
                  Monitor how medications affect your vital signs and optimize timing.
                </p>
              </div>
              
              <div className="bg-black/40 p-6 rounded-2xl shadow-lg border border-white/10 text-center">
                <Shield className="w-12 h-12 text-[#8864ff] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Data Security</h3>
                <p className="text-gray-300">
                  Your health data is protected with medical-grade security standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Q&A Section */}
        <section className="bg-black/50 py-20 border-y border-white/10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Can my doctor use Circul Ring data for medical decisions?</h3>
                <p className="text-gray-300">
                  Yes, Circul Ring provides medical-grade accuracy that healthcare professionals can rely on. 
                  The data can be easily shared with your healthcare team and is backed by extensive clinical validation, 
                  making it suitable for informing treatment decisions.
                </p>
              </div>

              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">How does it help with medication management?</h3>
                <p className="text-gray-300">
                  Circul Ring tracks how your vital signs respond to medications, helping you and your doctor 
                  understand effectiveness and optimal timing. You can correlate medication schedules with 
                  changes in heart rate, SpO2, and sleep quality.
                </p>
              </div>

              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Is it suitable for elderly patients with multiple conditions?</h3>
                <p className="text-gray-300">
                  Absolutely. Circul Ring is designed for simplicity and comfort, making it ideal for elderly patients. 
                  The automatic monitoring requires no daily interaction, and the comprehensive data helps manage 
                  multiple chronic conditions simultaneously.
                </p>
              </div>

              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">What chronic conditions benefit most from continuous monitoring?</h3>
                <p className="text-gray-300">
                  Conditions involving cardiovascular health (heart disease, hypertension), respiratory issues 
                  (COPD, sleep apnea), and metabolic disorders (diabetes) benefit significantly. Any condition 
                  where vital sign changes indicate disease progression or treatment effectiveness.
                </p>
              </div>

              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">How long does the battery last for continuous monitoring?</h3>
                <p className="text-gray-300">
                  Circul Ring is designed for extended wear with multi-day battery life, ensuring continuous 
                  monitoring without frequent charging interruptions. This is crucial for chronic disease 
                  management where consistent data collection is essential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#8864ff] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">
              Transform Your Chronic Disease Management
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Join patients and healthcare providers who rely on Circul Ring for accurate, 
              continuous health monitoring and better chronic disease management.
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
                href="/heart-rate-monitoring"
                className="bg-transparent text-white border border-white px-12 py-4 rounded-lg text-lg font-semibold
                  hover:bg-white/10 transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                Heart Rate Monitoring
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