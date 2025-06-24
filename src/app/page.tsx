import Header from '@/components/Header';
import Image from "next/image";
import { Heart, Activity, Moon, ThermometerSun } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

interface Page {
  slug: string;
  title: string;
  ogImage: string;
  lastmod?: string;
}

interface PagesData {
  pages: Page[];
  pendingPages: Page[];
}

function getPages(): PagesData {
  const pagesJsonPath = path.join(process.cwd(), 'pages.json');
  return JSON.parse(fs.readFileSync(pagesJsonPath, 'utf-8'));
}

export default function Home() {
  const { pages } = getPages();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 animate-fade-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Circul Ring: <span className="text-[#8864ff]">Medical-Grade</span> Health Monitoring
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Experience unparalleled accuracy in health tracking with our medical-grade smart ring,
                backed by over 20 published research papers.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://circulsense.com/products/circul-ring-health-monitor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#8864ff] text-white px-8 py-4 rounded-lg text-lg font-semibold
                    hover:bg-[#8864ff]/90 transition-all hover:scale-105 inline-flex items-center gap-2"
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
        <section className="bg-black/50 py-20 border-y border-white/10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16 animate-fade-up">
              Advanced Health Monitoring
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-white/10">
                <Heart className="w-12 h-12 text-[#8864ff] mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Heart Rate</h3>
                <p className="text-gray-300">
                  Continuous heart rate monitoring with medical-grade accuracy for early detection of cardiovascular issues.
                </p>
              </div>
              
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-white/10">
                <Activity className="w-12 h-12 text-[#8864ff] mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Blood Oxygen</h3>
                <p className="text-gray-300">
                  Precise SpO2 monitoring for respiratory health insights and sleep apnea detection.
                </p>
              </div>

              <div className="bg-black/40 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-white/10">
                <Moon className="w-12 h-12 text-[#8864ff] mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Sleep Analysis</h3>
                <p className="text-gray-300">
                  Advanced sleep tracking with detailed insights for better rest and recovery.
                </p>
              </div>

              <div className="bg-black/40 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-white/10">
                <ThermometerSun className="w-12 h-12 text-[#8864ff] mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Temperature</h3>
                <p className="text-gray-300">
                  Continuous skin temperature monitoring for early detection of health changes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Learn More About Circul Ring
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pages.map((page) => (
                <Link 
                  key={page.slug}
                  href={`/${page.slug}`}
                  className="bg-black/40 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-white/10 overflow-hidden group"
                >
                  <div className="relative h-48">
                    <Image
                      src={page.ogImage}
                      alt={page.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#8864ff] transition-colors">
                      {page.title.replace(' | Circul Ring', '')}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Last updated: {page.lastmod || new Date().toISOString().split('T')[0]}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#8864ff] text-white py-20">
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
              className="bg-white text-[#8864ff] px-12 py-4 rounded-lg text-lg font-semibold
                hover:bg-white/90 transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              Get Your Circul Ring
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
