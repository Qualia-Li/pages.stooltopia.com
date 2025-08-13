import Header from '@/components/Header';
import Image from "next/image";
import { Heart, Activity, Moon, ThermometerSun, Users, Zap, Shield, Award } from 'lucide-react';
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
  
  // Sort pages by lastmod in reverse chronological order (newest first)
  const sortedPages = pages.sort((a, b) => {
    const dateA = a.lastmod ? new Date(a.lastmod) : new Date(0);
    const dateB = b.lastmod ? new Date(b.lastmod) : new Date(0);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 animate-fade-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                StoolTopia: <span className="text-gold">Ergonomic</span> Seating Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Transform your workspace with our premium ergonomic stools designed for optimal posture, 
                comfort, and productivity. Experience the perfect balance of support and style.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://stooltopia.com/products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold text-black px-8 py-4 rounded-lg text-lg font-semibold
                    hover:bg-gold/90 transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>Shop Now</span>
                  <Heart className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 animate-fade-in">
              <Image
                src="/images/logo.webp"
                alt="StoolTopia Ergonomic Stools"
                width={600}
                height={600}
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="products" className="bg-black/50 py-20 border-y border-white/10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16 animate-fade-up">
              Premium Ergonomic Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-white/10">
                <Shield className="w-12 h-12 text-gold mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Posture Support</h3>
                <p className="text-gray-300">
                  Ergonomic design that promotes proper spinal alignment and reduces back strain during extended sitting.
                </p>
              </div>
              
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-white/10">
                <Zap className="w-12 h-12 text-gold mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Active Sitting</h3>
                <p className="text-gray-300">
                  Encourages natural movement and engagement of core muscles for better health and energy levels.
                </p>
              </div>

              <div className="bg-black/40 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-white/10">
                <Award className="w-12 h-12 text-gold mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Premium Quality</h3>
                <p className="text-gray-300">
                  Crafted with high-grade materials and sustainable practices for lasting comfort and durability.
                </p>
              </div>

              <div className="bg-black/40 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-white/10">
                <Users className="w-12 h-12 text-gold mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Versatile Design</h3>
                <p className="text-gray-300">
                  Perfect for office work, home use, standing desks, and various professional environments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Why Choose StoolTopia?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Improved Posture</h3>
                <p className="text-gray-300 mb-4">
                  Our ergonomic design naturally aligns your spine, reducing neck and back pain while promoting better posture habits.
                </p>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Reduces back strain</li>
                  <li>• Promotes spinal alignment</li>
                  <li>• Prevents slouching</li>
                </ul>
              </div>
              
              <div className="bg-black/40 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Enhanced Productivity</h3>
                <p className="text-gray-300 mb-4">
                  Comfortable seating leads to better focus, reduced fatigue, and increased work efficiency throughout the day.
                </p>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Better concentration</li>
                  <li>• Reduced fatigue</li>
                  <li>• Increased energy</li>
                </ul>
              </div>

              <div className="bg-black/40 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Health Benefits</h3>
                <p className="text-gray-300 mb-4">
                  Active sitting engages core muscles, improves circulation, and supports overall physical well-being.
                </p>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Core muscle engagement</li>
                  <li>• Better circulation</li>
                  <li>• Reduced health risks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="py-20 bg-black/50 border-y border-white/10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Learn More About Ergonomic Seating
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedPages.map((page) => (
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
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                      {page.title.replace(' | StoolTopia', '')}
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
        <section className="bg-gold text-black py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">
              Transform Your Seating Experience Today
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Join thousands of professionals who trust StoolTopia for premium ergonomic seating solutions that enhance comfort, productivity, and well-being.
            </p>
            <a
              href="https://stooltopia.com/products"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-gold px-12 py-4 rounded-lg text-lg font-semibold
                hover:bg-black/90 transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              Shop StoolTopia Stools
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
