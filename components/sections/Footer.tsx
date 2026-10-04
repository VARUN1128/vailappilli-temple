"use client";

import Emblem from "../ui/Emblem";
import OrnamentalDivider from "../ui/OrnamentalDivider";
import { contactInfoData } from "@/lib/data/templeData";
import { MapPin, Phone, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#241313] text-temple-white border-t border-temple-gold/30 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 text-center flex flex-col items-center">
        {/* Emblem Logo */}
        <Emblem size={54} variant="gold" className="mb-4" />

        {/* Devotional Line */}
        <span className="font-serif text-xs sm:text-sm text-temple-gold-light tracking-widest uppercase mb-2">
          ഓം നമോ ഭഗവതേ വാസുദേവായ
        </span>

        {/* Temple Name */}
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-temple-ivory">
          വൈലപ്പിള്ളി ശ്രീകൃഷ്ണസ്വാമി ക്ഷേത്രം
        </h3>
        <p className="font-sans text-xs text-temple-sandal/70 mt-1">
          പെരുമ്പിള്ളി · മുളന്തുരുത്തി · എറണാകുളം · കേരളം
        </p>

        {/* Thin Gold Separator */}
        <OrnamentalDivider variant="gold" className="my-6 max-w-md" />

        {/* Navigation Quick Links */}
        <nav className="flex items-center justify-center gap-4 sm:gap-8 flex-wrap font-serif text-sm text-temple-sandal/90 mb-8">
          <a href="#intro" className="hover:text-temple-gold transition-colors">
            ക്ഷേത്രം
          </a>
          <a href="#history" className="hover:text-temple-gold transition-colors">
            ചരിത്രം
          </a>
          <a href="#timings" className="hover:text-temple-gold transition-colors">
            പൂജാസമയം
          </a>
          <a href="#vazhipadu" className="hover:text-temple-gold transition-colors">
            വഴിപാടുകൾ
          </a>
          <a href="#festivals" className="hover:text-temple-gold transition-colors">
            ഉത്സവം
          </a>
          <a href="#gallery" className="hover:text-temple-gold transition-colors">
            ചിത്രശാല
          </a>
          <a href="#contact" className="hover:text-temple-gold transition-colors">
            ബന്ധപ്പെടുക
          </a>
        </nav>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <a
            href={contactInfoData.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 text-temple-gold hover:bg-temple-gold hover:text-temple-dark transition-all"
            aria-label="Facebook Page"
          >
            <Facebook size={18} />
          </a>
          <a
            href={contactInfoData.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 text-temple-gold hover:bg-temple-gold hover:text-temple-dark transition-all"
            aria-label="Instagram Profile"
          >
            <Instagram size={18} />
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/10 w-full font-sans text-xs text-temple-sandal/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 വൈലപ്പിള്ളി ശ്രീകൃഷ്ണസ്വാമി ക്ഷേത്രം. All rights reserved.</p>
          <p className="text-temple-gold/60">
            സ്നേഹത്തോടെയും ഭക്തിയോടെയും നിർമ്മിച്ചത്
          </p>
        </div>
      </div>
    </footer>
  );
}
