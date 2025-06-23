import Header from '@/components/Header';
import Image from "next/image";
import { Activity, Moon, AlertTriangle, LineChart } from 'lucide-react';
import Link from 'next/link';

export default function SleepApneaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 animate-fade-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Monitor Your <span className="text-[#8864ff]">Sleep Apnea</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Track your sleep apnea symptoms with medical-grade accuracy using Circul Ring's 
                continuous SpO2 and heart rate monitoring.
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
                src="/images/sleep.webp"
                alt="Sleep Apnea Monitoring with Circul Ring"
                width={600}
                height={600}
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* Understanding Sleep Apnea Section */}
        <section className="bg-black/50 py-20 border-y border-white/10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Understanding Sleep Apnea
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">What is Sleep Apnea?</h3>
                <p className="text-gray-300">
                  Sleep apnea is a serious sleep disorder where breathing repeatedly stops and starts 
                  during sleep, leading to oxygen level fluctuations.
                </p>
              </div>
              
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Common Symptoms</h3>
                <p className="text-gray-300">
                  Symptoms include loud snoring, gasping for air during sleep, morning headaches, 
                  excessive daytime sleepiness, and difficulty concentrating.
                </p>
              </div>

              <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Health Impacts</h3>
                <p className="text-gray-300">
                  Untreated sleep apnea can lead to high blood pressure, heart problems, type 2 diabetes, 
                  and other serious health conditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Monitoring Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              How Circul Ring Helps Monitor Sleep Apnea
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Moon className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Overnight Monitoring</h3>
                  <p className="text-gray-300">
                    Continuous tracking of blood oxygen levels and heart rate throughout the night 
                    to detect apnea episodes and their severity.
                  </p>
                </div>
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <AlertTriangle className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Early Detection</h3>
                  <p className="text-gray-300">
                    Identify potential sleep apnea symptoms early by monitoring oxygen desaturation 
                    events and irregular heart rate patterns.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <LineChart className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Detailed Analytics</h3>
                  <p className="text-gray-300">
                    Comprehensive sleep reports showing oxygen level variations, heart rate changes, 
                    and potential apnea events throughout the night.
                  </p>
                </div>
                <div className="bg-black/40 p-8 rounded-2xl shadow-lg border border-white/10">
                  <Activity className="w-12 h-12 text-[#8864ff] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Treatment Progress</h3>
                  <p className="text-gray-300">
                    Track the effectiveness of your sleep apnea treatment by monitoring improvements 
                    in oxygen levels and sleep quality over time.
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
              Take Control of Your Sleep Health
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Don't let sleep apnea affect your health and quality of life. Start monitoring your 
              sleep with medical-grade accuracy today.
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
                Learn About Our Ring
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