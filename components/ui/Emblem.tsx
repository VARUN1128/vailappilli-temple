"use client";

import { cn } from "@/lib/utils";

interface EmblemProps {
  size?: number;
  className?: string;
  variant?: "gold" | "white" | "maroon";
}

export default function Emblem({
  size = 36,
  className,
  variant = "gold",
}: EmblemProps) {
  const fillColor =
    variant === "white"
      ? "#FFFDF7"
      : variant === "maroon"
      ? "#5B1717"
      : "#C89B3C";

  return (
    <div className={cn("inline-flex items-center justify-center", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer subtle halo ring */}
        <circle
          cx="24"
          cy="24"
          r="22"
          stroke={fillColor}
          strokeWidth="1"
          strokeDasharray="3 3"
          strokeOpacity="0.5"
        />

        {/* Nilavilakku Lamp Base */}
        <path
          d="M14 40H34M17 40L21 34H27L31 40M22 34V28H26V34"
          stroke={fillColor}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Middle Bowl / Thattu */}
        <path
          d="M12 28C12 28 18 31 24 31C30 31 36 28 36 28L34 25H14L12 28Z"
          fill={fillColor}
          fillOpacity="0.2"
          stroke={fillColor}
          strokeWidth="1.5"
        />

        {/* Center Stem */}
        <path
          d="M24 25V15"
          stroke={fillColor}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Top Flame (Prabha) */}
        <path
          d="M24 7C24 7 19 12 19 16C19 18.7614 21.2386 21 24 21C26.7614 21 29 18.7614 29 16C29 12 24 7 24 7Z"
          fill={fillColor}
        />
        <circle cx="24" cy="16" r="2" fill="#FFFDF7" />

        {/* Radiant Rays */}
        <path
          d="M24 3V5M16 9L17.5 10.5M32 9L30.5 10.5"
          stroke={fillColor}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
