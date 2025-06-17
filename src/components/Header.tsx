'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="container mx-auto px-4">
        <nav className="relative flex items-center justify-between h-16">
          {/* Logo - always visible */}
          <Link href="/" className="relative z-50 flex items-center gap-2">
            <Image
              src="/images/logo.webp"
              alt="Circul"
              width={128}
              height={32}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList className="text-white">
                <NavigationMenuItem>
                  <Link href="#features" legacyBehavior passHref>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent text-white hover:bg-white/10`}>
                      Features
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#benefits" legacyBehavior passHref>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent text-white hover:bg-white/10`}>
                      Benefits
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="https://circulsense.com/products/circul-ring-health-monitor" legacyBehavior passHref>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-white text-black hover:bg-white/90`}>
                      Buy Now
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-black text-white border-l border-white/10">
                <div className="flex flex-col gap-4 mt-8">
                  <Link 
                    href="#features"
                    className="text-lg font-semibold text-white hover:text-white/80 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Features
                  </Link>
                  <Link 
                    href="#benefits"
                    className="text-lg font-semibold text-white hover:text-white/80 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Benefits
                  </Link>
                  <Link 
                    href="https://circulsense.com/products/circul-ring-health-monitor"
                    className="text-lg font-semibold text-black bg-white px-4 py-2 rounded-lg hover:bg-white/90 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Buy Now
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
} 