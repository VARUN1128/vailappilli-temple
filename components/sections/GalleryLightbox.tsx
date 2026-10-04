"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { GalleryImage } from "@/types/temple";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryLightboxProps {
  images: GalleryImage[];
  selectedIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export default function GalleryLightbox({
  images,
  selectedIndex,
  onClose,
  onSelectIndex,
}: GalleryLightboxProps) {
  const isOpened = selectedIndex !== null;
  const currentImage = isOpened ? images[selectedIndex] : null;

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    onSelectIndex((selectedIndex + 1) % images.length);
  }, [selectedIndex, images.length, onSelectIndex]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    onSelectIndex((selectedIndex - 1 + images.length) % images.length);
  }, [selectedIndex, images.length, onSelectIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpened) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpened, onClose, handleNext, handlePrev]);

  if (!isOpened || !currentImage) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-label="Photo Lightbox"
      >
        {/* Top Control Bar */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-50 text-temple-white">
          <span className="font-serif text-sm text-temple-gold-light">
            {selectedIndex + 1} / {images.length}
          </span>
          <button
            onClick={onClose}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white focus:outline-none focus:ring-2 focus:ring-temple-gold"
            aria-label="Close Lightbox"
          >
            <X size={26} />
          </button>
        </div>

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 z-50 p-3 rounded-full bg-black/50 hover:bg-temple-gold hover:text-temple-dark transition-all text-white focus:outline-none"
          aria-label="Previous Image"
        >
          <ChevronLeft size={32} />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 z-50 p-3 rounded-full bg-black/50 hover:bg-temple-gold hover:text-temple-dark transition-all text-white focus:outline-none"
          aria-label="Next Image"
        >
          <ChevronRight size={32} />
        </button>

        {/* Main Image Container */}
        <motion.div
          key={currentImage.id}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-5xl w-full h-[75vh] flex flex-col items-center justify-center"
        >
          <div className="relative w-full h-full">
            <Image
              src={currentImage.url}
              alt={currentImage.titleMl}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <div className="mt-4 text-center text-temple-white">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-temple-gold-light">
              {currentImage.titleMl}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-temple-sandal/80 mt-1 max-w-xl">
              {currentImage.captionMl}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
