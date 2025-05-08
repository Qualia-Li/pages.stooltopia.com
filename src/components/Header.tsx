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
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4">
        <nav className="relative flex items-center justify-between h-16">
          {/* Logo - always visible */}
          <Link href="/" className="relative z-50 flex items-center gap-2">
            <Image
              src="/images/vibehacker_logo.png"
              alt="VibeHacker"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-navy">VibeHacker</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="https://www.youtube.com/@VibeHackerFM" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      YouTube
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#hosts" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Hosts
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#episodes" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Episodes
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="https://x.com/vibehacker_fm" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Follow us
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
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-4 mt-8">
                  <Link 
                    href="https://www.youtube.com/@VibeHackerFM"
                    className="text-lg font-semibold hover:text-skyblue transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    YouTube
                  </Link>
                  <Link 
                    href="#hosts"
                    className="text-lg font-semibold hover:text-skyblue transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Hosts
                  </Link>
                  <Link 
                    href="#episodes"
                    className="text-lg font-semibold hover:text-skyblue transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Episodes
                  </Link>
                  <Link 
                    href="https://x.com/vibehacker_fm"
                    className="text-lg font-semibold hover:text-skyblue transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Follow us
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