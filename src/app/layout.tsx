import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lormy Makeup Studio | Professional Makeup Artist in Bogotá",
  description:
    "Professional makeup services for brides, quinceañeras, and social events in Bogotá. Visit our studio or request home service.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={playfair.className}>{children}</body>
    </html>
  );
}
