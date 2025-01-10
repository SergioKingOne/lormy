import { Instagram } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Image
            src="/logo.svg"
            alt="Lormy Makeup Studio"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
          <div className="hidden md:flex gap-8">
            <Link href="#services" className="text-neutral-800 hover:text-[#FEBAB9]">
              Services
            </Link>
            <Link href="#contact" className="text-neutral-800 hover:text-[#FEBAB9]">
              Contact
            </Link>
            <Link
              href="https://instagram.com/lormy_makeup"
              className="text-neutral-800 hover:text-[#FEBAB9]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="py-20 bg-gradient-to-b from-[#FEBAB9]/10 to-white">
          <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <Image
              src="/logo.svg"
              alt="Lormy Makeup Studio"
              width={400}
              height={400}
              className="w-64 md:w-80 mb-8"
              priority
            />
            <h1 className="text-4xl md:text-5xl font-serif text-neutral-800 mb-4">
              Enhance Your Natural Beauty
            </h1>
            <p className="text-neutral-600 max-w-xl mb-8">
              Professional makeup services for all your special moments
            </p>
            <Link
              href="#contact"
              className="bg-[#FEBAB9] text-white px-8 py-3 rounded-full hover:bg-[#FEBAB9]/90 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif text-center text-neutral-800 mb-12">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#FEBAB9]/5 p-8 rounded-lg text-center">
                <h3 className="text-xl font-serif text-neutral-800 mb-4">Social Events</h3>
                <p className="text-neutral-600">
                  Perfect makeup for parties, gatherings, and special occasions
                </p>
              </div>
              <div className="bg-[#FEBAB9]/5 p-8 rounded-lg text-center">
                <h3 className="text-xl font-serif text-neutral-800 mb-4">Bridal</h3>
                <p className="text-neutral-600">
                  Stunning bridal makeup that lasts throughout your special day
                </p>
              </div>
              <div className="bg-[#FEBAB9]/5 p-8 rounded-lg text-center">
                <h3 className="text-xl font-serif text-neutral-800 mb-4">Quinceañeras</h3>
                <p className="text-neutral-600">
                  Beautiful makeup to make your quinceañera celebration unforgettable
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FEBAB9]/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif text-neutral-800 mb-4">Follow Us on Instagram</h2>
            <p className="text-neutral-600 mb-8">@lormy_makeup • 4,487 followers</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-[#FEBAB9]/20 rounded-lg" />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif text-neutral-800 mb-4">Book Your Session</h2>
            <p className="text-neutral-600 mb-8">
              Visit our studio or request a home service
            </p>
            <div className="max-w-md mx-auto space-y-4">
              <p className="text-neutral-800">
                📍 Studio Location:
                <br />
                Transversal 42a#3a-69, Bogotá
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  href="https://instagram.com/lormy_makeup"
                  className="flex items-center gap-2 text-neutral-800 hover:text-[#FEBAB9]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Message us on Instagram</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-neutral-600">
          <p>© 2024 Lormy Makeup Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

