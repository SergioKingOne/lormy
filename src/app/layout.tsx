import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import "../globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Lormy Makeup Studio | Professional Makeup Artist in Bogotá",
    template: "%s | Lormy Makeup Studio",
  },
  description:
    "Professional makeup services for brides, quinceañeras, and social events in Bogotá. Visit our studio or request home service.",
  openGraph: {
    title: "Lormy Makeup Studio",
    description: "Professional makeup services in Bogotá",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </head>
      <body className={`${playfair.variable} font-sans`}>
        <Navigation />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
