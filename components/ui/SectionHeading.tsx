"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import OrnamentalDivider from "./OrnamentalDivider";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  theme?: "dark" | "light";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn(
        "mb-12 md:mb-16",
        isCenter ? "text-center mx-auto max-w-2xl" : "text-left max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-block text-xs md:text-sm font-sans tracking-widest font-semibold uppercase mb-2 px-3 py-1 rounded-full border",
            theme === "dark"
              ? "text-temple-gold-light border-temple-gold/30 bg-temple-gold/10"
              : "text-temple-gold border-temple-gold/40 bg-temple-gold/5"
          )}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={cn(
          "font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight",
          theme === "dark" ? "text-temple-white" : "text-temple-maroon"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-3 text-base sm:text-lg font-sans leading-relaxed",
            theme === "dark" ? "text-temple-sandal/80" : "text-temple-muted"
          )}
        >
          {subtitle}
        </p>
      )}

      <OrnamentalDivider
        variant={theme === "dark" ? "gold" : "gold"}
        className={isCenter ? "mx-auto" : "ml-0"}
      />
    </motion.div>
  );
}
