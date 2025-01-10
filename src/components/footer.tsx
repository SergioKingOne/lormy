import { Instagram, Mail, MapPin, Phone } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src="/logo.svg"
              alt="Lormy Makeup Studio"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
            <p className="text-sm text-neutral-600">
              Professional makeup services for all your special moments.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Transversal 42a#3a-69, Bogotá
              </li>
              <li>
                <Link
                  href="tel:+573001234567"
                  className="flex items-center gap-2 hover:text-[#FEBAB9]"
                >
                  <Phone className="w-4 h-4" />
                  +57 300 123 4567
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:info@lormymakeup.com"
                  className="flex items-center gap-2 hover:text-[#FEBAB9]"
                >
                  <Mail className="w-4 h-4" />
                  info@lormymakeup.com
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li>
                <Link href="/#services" className="hover:text-[#FEBAB9]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#FEBAB9]">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/#booking" className="hover:text-[#FEBAB9]">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg mb-4">Follow Us</h3>
            <Link
              href="https://instagram.com/lormy_makeup"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-neutral-600 hover:text-[#FEBAB9]"
            >
              <Instagram className="w-4 h-4" />
              @lormy_makeup
            </Link>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-neutral-600">
          <p>© 2024 Lormy Makeup Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

