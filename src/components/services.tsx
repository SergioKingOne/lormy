import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sparkles, Heart, Crown } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Social Events",
    description:
      "Perfect makeup for parties, gatherings, and special occasions",
    icon: Sparkles,
    price: "From $150.000 COP",
    features: [
      "Professional makeup application",
      "Lashes included",
      "Touch-up kit",
      "2-3 hours wear test",
    ],
  },
  {
    title: "Bridal",
    description:
      "Stunning bridal makeup that lasts throughout your special day",
    icon: Heart,
    price: "From $350.000 COP",
    features: [
      "Consultation & trial session",
      "Premium products",
      "Lashes included",
      "12+ hours wear test",
      "Touch-up kit",
    ],
  },
  {
    title: "Quinceañeras",
    description:
      "Beautiful makeup to make your quinceañera celebration unforgettable",
    icon: Crown,
    price: "From $250.000 COP",
    features: [
      "Age-appropriate makeup",
      "Consultation included",
      "Lashes included",
      "8+ hours wear test",
      "Touch-up kit",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center text-neutral-800 mb-4">
          Our Services
        </h2>
        <p className="text-center text-neutral-600 max-w-2xl mx-auto mb-12">
          Professional makeup services tailored to your special moments. Each
          service includes a consultation to understand your style and
          preferences.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="relative group overflow-hidden"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#FEBAB9]/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-[#FEBAB9]" />
                </div>
                <CardTitle className="font-serif">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-serif text-neutral-800 mb-4">
                  {service.price}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-neutral-600"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FEBAB9]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className="w-full bg-[#FEBAB9] hover:bg-[#FEBAB9]/90"
                >
                  <Link href="#booking">Book Now</Link>
                </Button>
              </CardFooter>
              <div className="absolute inset-0 bg-gradient-to-t from-[#FEBAB9]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
