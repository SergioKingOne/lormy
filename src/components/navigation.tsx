"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Instagram, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/#booking", label: "Book Now" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <nav className="container mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="relative h-8 w-32">
          <Image
            src="/logo.svg"
            alt="Lormy Makeup Studio"
            fill
            className="object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-neutral-600 hover:text-[#FEBAB9] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild variant="ghost" size="icon">
            <Link
              href="https://instagram.com/lormy_makeup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5" />
            </Link>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <div className="flex justify-between items-center">
                <Link
                  href="/"
                  className="relative h-8 w-32"
                  onClick={() => setIsOpen(false)}
                >
                  <Image
                    src="/logo.svg"
                    alt="Lormy Makeup Studio"
                    fill
                    className="object-contain"
                  />
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-neutral-600 hover:text-[#FEBAB9] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild variant="outline" className="mt-4">
                <Link
                  href="https://instagram.com/lormy_makeup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Instagram className="w-5 h-5" />
                  Follow on Instagram
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
