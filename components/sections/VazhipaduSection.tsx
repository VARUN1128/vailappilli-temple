"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { vazhipaduData } from "@/lib/data/templeData";
import { Vazhipadu } from "@/types/temple";
import { HelpCircle, Phone, X, Check } from "lucide-react";
import MalayalamBadge from "../ui/MalayalamBadge";

export default function VazhipaduSection() {
  const [activeCategory, setActiveCategory] = useState<string>("എല്ലാം");
  const [selectedVazhipadu, setSelectedVazhipadu] = useState<Vazhipadu | null>(null);

  const categories = [
    "എല്ലാം",
    ...Array.from(new Set(vazhipaduData.map((v) => v.categoryMl))),
  ];

  const filteredVazhipadu =
    activeCategory === "എല്ലാം"
      ? vazhipaduData
      : vazhipaduData.filter((v) => v.categoryMl === activeCategory);

  return (
    <section
      id="vazhipadu"
      className="py-20 md:py-28 bg-temple-ivory text-temple-text relative overflow-hidden"
    >
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="ഭക്തിസമർപ്പണം"
          title="വഴിപാടുകൾ & നിവേദ്യങ്ങൾ"
          subtitle="ഭഗവാൻ ശ്രീകൃഷ്ണസ്വാമി സന്നിധിയിൽ ഭക്തജനങ്ങൾക്കായി സമർപ്പിക്കുന്ന പ്രധാന വഴിപാടുകൾ"
        />

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-sans text-xs sm:text-sm font-semibold transition-colors border ${
                activeCategory === cat
                  ? "bg-temple-maroon text-temple-ivory border-temple-maroon"
                  : "bg-white text-temple-muted border-temple-gold/30 hover:border-temple-maroon hover:text-temple-maroon"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Refined Editorial Vazhipadu Table */}
        <div className="bg-white rounded-2xl border border-temple-gold/30 shadow-subtle overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse font-sans">
              <thead>
                <tr className="bg-temple-sandal/50 border-b border-temple-gold/30 text-temple-maroon font-serif text-sm sm:text-base">
                  <th className="py-4 px-6 font-bold">വഴിപാട് (Vazhipadu)</th>
                  <th className="py-4 px-6 font-bold hidden md:table-cell">വിഭാഗം</th>
                  <th className="py-4 px-6 font-bold hidden sm:table-cell">വിവരണം</th>
                  <th className="py-4 px-6 font-bold text-right">നിരക്ക് (Rates)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-temple-gold/15 text-sm sm:text-base">
                {filteredVazhipadu.map((item, idx) => (
                  <motion.tr
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    onClick={() => setSelectedVazhipadu(item)}
                    className="hover:bg-temple-ivory/60 transition-colors cursor-pointer group"
                  >
                    <td className="py-4 px-6 font-serif font-semibold text-temple-text group-hover:text-temple-maroon transition-colors">
                      <div className="flex items-center gap-2">
                        <span>{item.nameMl}</span>
                        <HelpCircle
                          size={15}
                          className="text-temple-gold opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                    </td>

                    <td className="py-4 px-6 hidden md:table-cell text-xs text-temple-muted">
                      <MalayalamBadge variant="gold">
                        {item.categoryMl}
                      </MalayalamBadge>
                    </td>

                    <td className="py-4 px-6 hidden sm:table-cell text-xs sm:text-sm text-temple-muted max-w-xs truncate">
                      {item.descriptionMl}
                    </td>

                    <td className="py-4 px-6 text-right font-sans text-xs sm:text-sm font-semibold text-temple-maroon">
                      {item.ratePlaceholder}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-temple-sandal/30 border-t border-temple-gold/20 text-center font-sans text-xs text-temple-muted">
            വഴിപാടുകൾ ബുക്ക് ചെയ്യുന്നതിനും തുക സംബന്ധിച്ച വിവരങ്ങൾക്കുമായി ക്ഷേത്ര ഓഫീസുമായി നേരിട്ടോ ഫോൺ വഴിയോ ബന്ധപ്പെടാവുന്നതാണ്.
          </div>
        </div>
      </div>

      {/* Vazhipadu Details Modal */}
      <AnimatePresence>
        {selectedVazhipadu && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-temple-ivory border-2 border-temple-gold rounded-2xl max-w-md w-full p-6 relative shadow-card text-temple-text"
            >
              <button
                onClick={() => setSelectedVazhipadu(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 text-temple-muted"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <MalayalamBadge variant="maroon" className="mb-2">
                {selectedVazhipadu.categoryMl}
              </MalayalamBadge>

              <h3 className="font-serif text-2xl font-bold text-temple-maroon mb-2">
                {selectedVazhipadu.nameMl}
              </h3>

              <p className="font-sans text-sm text-temple-muted mb-4 leading-relaxed">
                {selectedVazhipadu.descriptionMl}
              </p>

              <div className="p-3 rounded-lg bg-temple-sandal/60 border border-temple-gold/30 mb-6 flex items-center justify-between font-sans text-xs sm:text-sm">
                <span className="font-medium text-temple-muted">വഴിപാട് നിരക്ക്:</span>
                <span className="font-bold text-temple-maroon">
                  {selectedVazhipadu.ratePlaceholder}
                </span>
              </div>

              <div className="space-y-3">
                <a
                  href="#contact"
                  onClick={() => setSelectedVazhipadu(null)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-temple-maroon text-temple-ivory font-sans font-semibold text-sm hover:bg-temple-dark transition-colors"
                >
                  <Phone size={16} />
                  <span>ക്ഷേത്ര ഓഫീസുമായി ബന്ധപ്പെടുക</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
