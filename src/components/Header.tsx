'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <nav className="relative flex items-center justify-between h-16">
          {/* Logo - always visible */}
          <a href="/" className="relative z-50 flex items-center gap-2">
            <Image
              src="/images/vibehacker_logo.png"
              alt="VibeHacker"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-navy">VibeHacker</span>
          </a>

          {/* Hamburger menu button - only on mobile */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-50 md:hidden p-2 text-navy hover:text-skyblue transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="https://www.youtube.com/@VibeHackerFM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy hover:text-skyblue transition-colors"
            >
              YouTube
            </a>
            <a 
              href="#hosts"
              className="text-navy hover:text-skyblue transition-colors"
            >
              Hosts
            </a>
            <a 
              href="#episodes"
              className="text-navy hover:text-skyblue transition-colors"
            >
              Episodes
            </a>
            <a 
              href="https://x.com/vibehacker_fm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy hover:text-skyblue transition-colors"
            >
              Follow us
            </a>
          </div>

          {/* Mobile menu overlay */}
          <div 
            className={`
              fixed top-0 left-0 right-0 bottom-0 
              bg-white 
              transition-opacity duration-300 ease-in-out 
              md:hidden
              ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
            `}
            style={{ paddingTop: '4rem' }}
          >
            <div className="flex flex-col items-center gap-8 pt-8">
              <a 
                href="https://www.youtube.com/@VibeHackerFM"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-navy hover:text-skyblue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                YouTube
              </a>
              <a 
                href="#hosts"
                className="text-2xl text-navy hover:text-skyblue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Hosts
              </a>
              <a 
                href="#episodes"
                className="text-2xl text-navy hover:text-skyblue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Episodes
              </a>
              <a 
                href="https://x.com/vibehacker_fm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-navy hover:text-skyblue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Follow us
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
} 