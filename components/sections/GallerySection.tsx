"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import { galleryImagesData } from "@/lib/data/templeData";
import GalleryLightbox from "./GalleryLightbox";
import { ZoomIn } from "lucide-react";

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: "all", nameMl: "എല്ലാം" },
    { id: "temple", nameMl: "ക്ഷേത്രം" },
    { id: "rituals", nameMl: "പൂജാദൃശ്യങ്ങൾ" },
    { id: "festivals", nameMl: "ആഘോഷങ്ങൾ" },
    { id: "deity", nameMl: "ദേവസന്നിധി" },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? galleryImagesData
      : galleryImagesData.filter((img) => img.category === selectedCategory);

  return (
    <section
      id="gallery"
      className="py-20 md:py-28 bg-temple-ivory text-temple-text relative overflow-hidden"
    >
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="ദൃശ്യാനുഭവം"
          title="ചിത്രശാല"
          subtitle="ക്ഷേത്രാങ്കണത്തിന്റെയും വിശേഷാൽ ആഘോഷങ്ങളുടെയും മനോഹരമായ ചിത്രങ്ങൾ"
        />

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full font-serif text-xs sm:text-sm font-semibold transition-colors border ${
                selectedCategory === cat.id
                  ? "bg-temple-gold text-temple-dark border-temple-gold shadow-sm"
                  : "bg-white text-temple-muted border-temple-gold/30 hover:border-temple-gold hover:text-temple-maroon"
              }`}
            >
              {cat.nameMl}
            </button>
          ))}
        </div>

        {/* 3-Column Asymmetric Masonry / Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {filteredImages.map((image, index) => {
            const isTall = image.aspectRatio === "portrait";

            return (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                onClick={() => setLightboxIndex(index)}
                className={`relative rounded-xl overflow-hidden shadow-subtle border border-temple-gold/25 cursor-pointer group bg-temple-sandal ${
                  isTall ? "row-span-2 aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={image.url}
                  alt={image.titleMl}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                  <ZoomIn
                    size={24}
                    className="text-temple-gold absolute top-4 right-4"
                  />
                  <h4 className="font-serif font-bold text-sm sm:text-base text-temple-gold-light">
                    {image.titleMl}
                  </h4>
                  <p className="font-sans text-xs text-temple-sandal/80 line-clamp-1">
                    {image.captionMl}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        images={filteredImages}
        selectedIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={(idx) => setLightboxIndex(idx)}
      />
    </section>
  );
}
