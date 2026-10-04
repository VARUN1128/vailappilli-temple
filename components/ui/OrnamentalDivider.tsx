"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface OrnamentalDividerProps {
  className?: string;
  variant?: "gold" | "maroon" | "light";
  animate?: boolean;
}

export default function OrnamentalDivider({
  className,
  variant = "gold",
  animate = true,
}: OrnamentalDividerProps) {
  const lineColor =
    variant === "maroon"
      ? "bg-temple-maroon/30"
      : variant === "light"
      ? "bg-temple-sandal/40"
      : "bg-temple-gold/40";

  const iconColor =
    variant === "maroon"
      ? "text-temple-maroon"
      : variant === "light"
      ? "text-temple-gold-light"
      : "text-temple-gold";

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-3 my-6 w-full max-w-xs mx-auto",
        className
      )}
      aria-hidden="true"
    >
      <motion.div
        initial={animate ? { width: 0 } : { width: "100%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn("h-[1px] flex-1", lineColor)}
      />

      {/* Kerala traditional lotus flame motif */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("shrink-0", iconColor)}
      >
        <path
          d="M12 2C12 2 8 7 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 7 12 2 12 2Z"
          fill="currentColor"
          fillOpacity="0.85"
        />
        <path
          d="M12 16V22M9 19H15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="12" cy="7" r="1.5" fill="#FFFDF7" />
      </svg>

      <motion.div
        initial={animate ? { width: 0 } : { width: "100%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn("h-[1px] flex-1", lineColor)}
      />
    </div>
  );
}
