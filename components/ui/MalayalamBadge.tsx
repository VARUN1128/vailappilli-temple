"use client";

import { cn } from "@/lib/utils";

interface MalayalamBadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "maroon" | "green" | "outline";
  className?: string;
}

export default function MalayalamBadge({
  children,
  variant = "gold",
  className,
}: MalayalamBadgeProps) {
  const styles = {
    gold: "bg-temple-gold/15 text-temple-maroon border-temple-gold/30",
    maroon: "bg-temple-maroon text-temple-ivory border-temple-maroon",
    green: "bg-temple-green/15 text-temple-green border-temple-green/30",
    outline: "bg-transparent text-temple-text border-temple-gold/40",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-sans font-medium border transition-colors",
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
