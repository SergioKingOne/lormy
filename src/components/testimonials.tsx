"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Maria G.",
    role: "Bride",
    content:
      "Lormy did an amazing job with my bridal makeup. It lasted all day and looked perfect in photos!",
    rating: 5,
  },
  {
    name: "Sofia R.",
    role: "Quinceañera",
    content:
      "I felt so beautiful on my special day. The makeup was perfect and age-appropriate.",
    rating: 5,
  },
  {
    name: "Ana P.",
    role: "Social Event",
    content:
      "Professional service and stunning results. Will definitely book again!",
    rating: 5,
  },
  {
    name: "Laura M.",
    role: "Regular Client",
    content:
      "Lormy is my go-to makeup artist. She always knows exactly what I want!",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center text-neutral-800 mb-4">
          Client Love
        </h2>
        <p className="text-center text-neutral-600 max-w-2xl mx-auto mb-8 sm:mb-12">
          Don't just take our word for it. Here's what our clients have to say.
        </p>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 pl-4"
              >
                <Card className="border-none shadow-none bg-neutral-50 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-[#FEBAB9] text-[#FEBAB9]"
                          />
                        )
                      )}
                    </div>
                    <p className="text-neutral-600 mb-4 flex-grow">
                      {testimonial.content}
                    </p>
                    <div>
                      <p className="font-medium text-neutral-800">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-neutral-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
