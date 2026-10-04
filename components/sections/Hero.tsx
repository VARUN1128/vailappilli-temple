"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Clock, Info } from "lucide-react";
import Emblem from "../ui/Emblem";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full h-[88vh] sm:h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-temple-dark text-temple-white">
      {/* Background Image with slow cinematic zoom animation */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/temple bg.png')`,
        }}
        initial={{ scale: 1 }}
        animate={shouldReduceMotion ? {} : { scale: 1.06 }}
        transition={{
          duration: 18,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Dark Maroon & Gradient Overlay for optimal legibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#241313] via-[#5B1717]/75 to-black/60" />

      {/* Hero Content Box */}
      <div className="relative z-20 max-w-content mx-auto px-5 sm:px-8 lg:px-12 text-center flex flex-col items-center pt-16 sm:pt-20">
        {/* Sacred Devotional Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 mb-4"
        >
          <Emblem size={28} variant="gold" />
          <span className="font-serif text-sm sm:text-base md:text-lg text-temple-gold-light tracking-widest uppercase font-medium">
            ഓം നമോ ഭഗവതേ വാസുദേവായ
          </span>
          <Emblem size={28} variant="gold" />
        </motion.div>

        {/* Thin Gold Ornamental Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "70px" }}
          transition={{ duration: 1, delay: 0.4 }}
          className="h-[1.5px] bg-temple-gold mb-6"
        />

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-temple-ivory leading-[1.15] max-w-4xl text-drop-shadow"
        >
          <span className="block text-temple-gold-light font-normal text-3xl sm:text-5xl md:text-6xl mb-2">
            വൈലപ്പിള്ളി
          </span>
          <span className="block text-temple-white">
            ശ്രീകൃഷ്ണസ്വാമി ക്ഷേത്രം
          </span>
        </motion.h1>

        {/* Location Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 font-sans text-base sm:text-xl text-temple-sandal/90 font-medium tracking-wide flex items-center justify-center gap-2 flex-wrap"
        >
          <span>പെരുമ്പിള്ളി</span>
          <span className="text-temple-gold font-bold">·</span>
          <span>മുളന്തുരുത്തി</span>
          <span className="text-temple-gold font-bold">·</span>
          <span>എറണാകുളം</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#intro"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-temple-gold text-temple-dark font-sans font-semibold text-sm sm:text-base hover:bg-temple-gold-light transition-all duration-300 shadow-gold group"
          >
            <Info size={18} className="group-hover:scale-110 transition-transform" />
            <span>ക്ഷേത്രത്തെക്കുറിച്ച് അറിയാം</span>
          </a>

          <a
            href="#timings"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white/10 text-temple-ivory border border-temple-gold/40 font-sans font-medium text-sm sm:text-base hover:bg-white/20 hover:border-temple-gold transition-all duration-300 backdrop-blur-sm"
          >
            <Clock size={18} className="text-temple-gold" />
            <span>ദർശന സമയം</span>
          </a>
        </motion.div>
      </div>

      {/* Down Arrow Scroll Indicator */}
      <motion.a
        href="#intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-temple-gold/70 hover:text-temple-gold transition-colors p-2"
        aria-label="Scroll to introduction"
      >
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.a>
    </section>
  );
}
