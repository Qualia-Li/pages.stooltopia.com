import Header from '@/components/Header';
import Image from "next/image";
import { Heart, Activity, Moon, ThermometerSun } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 animate-fade-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-navy mb-6">
                Circul Ring: <span className="text-gold">Medical-Grade</span> Health Monitoring
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Experience unparalleled accuracy in health tracking with our medical-grade smart ring,
                backed by over 20 published research papers.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://circulsense.com/products/circul-ring-health-monitor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-navy text-white px-8 py-4 rounded-lg text-lg font-semibold
                    hover:bg-opacity-90 transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>Buy Now</span>
                  <Heart className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 animate-fade-in">
              <Image
                src="/images/ring_in_hand.webp"
                alt="Circul Ring on hand"
                width={600}
                height={600}
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-skyblue/10 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-navy mb-16 animate-fade-up">
              Advanced Health Monitoring
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <Heart className="w-12 h-12 text-gold mb-4" />
                <h3 className="text-2xl font-bold text-navy mb-4">Heart Rate</h3>
                <p className="text-gray-600">
                  Continuous heart rate monitoring with medical-grade accuracy for early detection of cardiovascular issues.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <Activity className="w-12 h-12 text-gold mb-4" />
                <h3 className="text-2xl font-bold text-navy mb-4">Blood Oxygen</h3>
                <p className="text-gray-600">
                  Precise SpO2 monitoring for respiratory health insights and sleep apnea detection.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <Moon className="w-12 h-12 text-gold mb-4" />
                <h3 className="text-2xl font-bold text-navy mb-4">Sleep Analysis</h3>
                <p className="text-gray-600">
                  Advanced sleep tracking with detailed insights for better rest and recovery.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <ThermometerSun className="w-12 h-12 text-gold mb-4" />
                <h3 className="text-2xl font-bold text-navy mb-4">Temperature</h3>
                <p className="text-gray-600">
                  Continuous skin temperature monitoring for early detection of health changes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-navy mb-16">
              Why Choose Circul Ring?
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <Image
                  src="/images/ring_structure.webp"
                  alt="Circul Ring Structure"
                  width={500}
                  height={500}
                  className="rounded-2xl shadow-xl"
                />
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-navy mb-4">Medical-Grade Accuracy</h3>
                  <p className="text-gray-600">
                    Validated by over 20 published research papers, our ring provides therapeutically meaningful data you can trust.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-navy mb-4">Continuous Monitoring</h3>
                  <p className="text-gray-600">
                    24/7 health tracking with real-time data for early detection of potential health issues.
                  </p>
                </div>
                <Image
                  src="/images/sleep.webp"
                  alt="Sleep Tracking"
                  width={500}
                  height={500}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-navy text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">
              Take Control of Your Health Today
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Join thousands of users who trust Circul Ring for precise health monitoring and early detection of potential health issues.
            </p>
            <a
              href="https://circulsense.com/products/circul-ring-health-monitor"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-navy px-12 py-4 rounded-lg text-lg font-semibold
                hover:bg-opacity-90 transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              Get Your Circul Ring
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
