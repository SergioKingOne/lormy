"use client";

import { Button } from "@/components/ui/button";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { BookingForm } from "@/components/booking-form";
import { Services } from "@/components/services";
import { Instagram, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty(
        "--parallax-y",
        `${scrollY * 0.5}px`
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="overflow-hidden">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#FEBAB9]/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white" />
          <div
            className="relative h-full w-full"
            style={{ transform: "translateY(var(--parallax-y))" }}
          >
            <Image
              src="/images/makeup-bg.jpg"
              alt="Background"
              fill
              className="object-cover object-center opacity-50"
              priority
            />
          </div>
        </div>
        <div className="container mx-auto max-w-7xl relative z-10 px-4 py-20 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-neutral-800 mb-6 animate-fade-up">
            Enhance Your Natural Beauty
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-8 animate-fade-up animation-delay-100">
            Professional makeup artistry for your most special moments. From
            bridal to quinceañeras, we create looks that celebrate your unique
            beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up animation-delay-200">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-[#FEBAB9] hover:bg-[#FEBAB9]/90"
            >
              <Link href="#booking">Book Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Link href="/portfolio">
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Services />

      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center text-neutral-800 mb-8 sm:mb-16">
            Recent Transformations
          </h2>
          <Gallery />
        </div>
      </section>

      <Testimonials />

      <section className="py-16 sm:py-24 bg-[#FEBAB9]/5">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-neutral-800 mb-4">
            Follow Our Journey
          </h2>
          <p className="text-neutral-600 mb-8">
            @lormy_makeup • 4,487 followers
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="relative aspect-square group overflow-hidden rounded-xl"
              >
                <Image
                  src={`/images/instagram-${i + 1}.jpg`}
                  alt="Instagram post"
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
              </div>
            ))}
          </div>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
          >
            <Link
              href="https://instagram.com/lormy_makeup"
              target="_blank"
              className="flex items-center justify-center gap-2"
            >
              <Instagram className="w-5 h-5" />
              Follow on Instagram
            </Link>
          </Button>
        </div>
      </section>

      <section id="booking" className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center text-neutral-800 mb-4">
              Book Your Session
            </h2>
            <p className="text-center text-neutral-600 mb-8 sm:mb-12">
              Fill out the form below and we&apos;ll get back to you within 24
              hours
            </p>
            <BookingForm />
          </div>
        </div>
      </section>
    </main>
  );
}
