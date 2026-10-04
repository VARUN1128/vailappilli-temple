"use client";

import { useState, useEffect } from "react";
import { Menu, Clock } from "lucide-react";
import Emblem from "../ui/Emblem";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "ക്ഷേത്രം", href: "#intro" },
  { label: "ചരിത്രം", href: "#history" },
  { label: "പൂജാസമയം", href: "#timings" },
  { label: "വഴിപാടുകൾ", href: "#vazhipadu" },
  { label: "ഉത്സവം", href: "#festivals" },
  { label: "ചിത്രശാല", href: "#gallery" },
  { label: "ബന്ധപ്പെടുക", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out",
          isScrolled
            ? "bg-[#5B1717]/95 backdrop-blur-md shadow-md border-b border-temple-gold/25 py-3"
            : "bg-gradient-to-b from-black/75 via-black/30 to-transparent py-5"
        )}
      >
        <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo & Emblem */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-temple-gold rounded-lg p-1"
          >
            <Emblem
              size={36}
              variant="gold"
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-temple-ivory leading-tight group-hover:text-temple-gold transition-colors">
                വൈലപ്പിള്ളി
              </span>
              <span className="font-sans text-[11px] sm:text-xs text-temple-gold-light tracking-wide font-medium">
                ശ്രീകൃഷ്ണസ്വാമി ക്ഷേത്രം
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 font-serif">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm xl:text-base font-medium text-temple-sandal hover:text-temple-gold transition-colors py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-temple-gold hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#timings"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-sans font-semibold rounded-full bg-temple-gold/15 text-temple-gold border border-temple-gold/50 hover:bg-temple-gold hover:text-temple-dark transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-temple-gold"
            >
              <Clock size={15} />
              <span>ദർശന സമയം</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2.5 rounded-lg text-temple-gold hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-temple-gold"
              aria-label="Open Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={NAV_ITEMS}
      />
    </>
  );
}
