"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const images = [
  {
    src: "/images/bride.jpg",
    alt: "Bridal makeup",
    className: "md:col-span-2",
  },
  {
    src: "/images/fifteen.png",
    alt: "Quinceañera makeup",
  },
  {
    src: "/images/social.png",
    alt: "Social event makeup",
  },
  {
    src: "/images/natural.png",
    alt: "Natural makeup",
    className: "md:col-span-2",
  },
  {
    src: "/images/evening.png",
    alt: "Evening makeup",
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={image.src}
            className={cn(
              "relative aspect-square cursor-pointer group overflow-hidden rounded-xl bg-neutral-200",
              image.className
            )}
            onClick={() => setSelectedImage(image.src)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity" />
          </div>
        ))}
      </div>

      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-3xl">
          {selectedImage && (
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={selectedImage}
                alt="Gallery image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
