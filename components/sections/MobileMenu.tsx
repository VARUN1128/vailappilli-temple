"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, MapPin, Phone } from "lucide-react";
import Emblem from "../ui/Emblem";
import OrnamentalDivider from "../ui/OrnamentalDivider";

interface NavItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

export default function MobileMenu({ isOpen, onClose, items }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-temple-maroon text-temple-white flex flex-col justify-between p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-temple-gold/20 pb-4">
            <div className="flex items-center gap-3">
              <Emblem size={32} variant="gold" />
              <div>
                <span className="block font-serif text-lg font-bold leading-tight text-temple-ivory">
                  വൈലപ്പിള്ളി
                </span>
                <span className="block font-sans text-xs text-temple-gold-light">
                  ശ്രീകൃഷ്ണസ്വാമി ക്ഷേത്രം
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-3 rounded-full hover:bg-white/10 transition-colors text-temple-gold-light focus:outline-none focus:ring-2 focus:ring-temple-gold"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Nav List */}
          <nav className="my-8 flex flex-col gap-2">
            {items.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={onClose}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index, duration: 0.3 }}
                className="py-3 px-4 text-xl font-serif font-medium text-temple-sandal hover:text-temple-gold hover:bg-white/5 rounded-lg transition-all flex items-center justify-between border-b border-white/5"
              >
                <span>{item.label}</span>
                <span className="text-xs font-sans text-temple-gold/50">➔</span>
              </motion.a>
            ))}
          </nav>

          {/* Quick info footer */}
          <div className="pt-4 border-t border-temple-gold/20 space-y-4">
            <div className="flex items-center gap-3 text-sm text-temple-sandal/80 font-sans">
              <MapPin size={18} className="text-temple-gold shrink-0" />
              <span>പെരുമ്പിള്ളി · മുളന്തുരുത്തി · എറണാകുളം</span>
            </div>

            <a
              href="#timings"
              onClick={onClose}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-md bg-temple-gold text-temple-dark font-sans font-semibold text-base shadow-gold hover:bg-temple-gold-light transition-colors"
            >
              <Clock size={18} />
              <span>ദർശന സമയം</span>
            </a>

            <OrnamentalDivider variant="gold" animate={false} className="my-2" />

            <p className="text-center font-sans text-xs text-temple-sandal/60">
              © 2026 വൈലപ്പിള്ളി ശ്രീകൃഷ്ണസ്വാമി ക്ഷേത്രം
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
