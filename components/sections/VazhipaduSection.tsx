"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { vazhipaduData, vazhipaduNoticeData } from "@/lib/data/templeData";
import { Vazhipadu } from "@/types/temple";
import { HelpCircle, Phone, X, Search, Sparkles, AlertCircle, Receipt } from "lucide-react";
import MalayalamBadge from "../ui/MalayalamBadge";

export default function VazhipaduSection() {
  const [activeCategory, setActiveCategory] = useState<string>("എല്ലാം");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedVazhipadu, setSelectedVazhipadu] = useState<Vazhipadu | null>(null);

  const categories = useMemo(() => [
    "എല്ലാം",
    ...Array.from(new Set(vazhipaduData.map((v) => v.categoryMl))),
  ], []);

  const filteredVazhipadu = useMemo(() => {
    return vazhipaduData.filter((item) => {
      const matchesCategory =
        activeCategory === "എല്ലാം" || item.categoryMl === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        item.nameMl.toLowerCase().includes(q) ||
        (item.descriptionMl && item.descriptionMl.toLowerCase().includes(q)) ||
        item.ratePlaceholder.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="vazhipadu"
      className="py-20 md:py-28 bg-temple-ivory text-temple-text relative overflow-hidden"
    >
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="ഭക്തിസമർപ്പണം"
          title="വഴിപാടുകൾ & നിവേദ്യങ്ങൾ"
          subtitle="വൈലപ്പിള്ളി ശ്രീകൃഷ്ണസ്വാമി ക്ഷേത്രത്തിൽ ഭക്തജനങ്ങൾക്കായി സമർപ്പിക്കുന്ന ഔദ്യോഗിക വഴിപാട് നിരക്കുകൾ"
        />

        {/* Special Advance Booking Notice Banner */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50 via-white to-amber-50 border border-amber-300 shadow-sm flex items-start sm:items-center gap-3 sm:gap-4 text-temple-text"
        >
          <div className="w-10 h-10 rounded-full bg-amber-500/15 border border-amber-400/40 flex items-center justify-center shrink-0 text-amber-700">
            <Sparkles size={20} />
          </div>
          <div className="flex-1">
            <span className="font-serif font-bold text-xs uppercase tracking-wider text-amber-800 block mb-0.5">
              വിശേഷാൽ പൂജാ അറിയിപ്പ്
            </span>
            <p className="font-serif text-sm sm:text-base font-semibold text-temple-maroon">
              {vazhipaduNoticeData.advanceBookingNotice}
            </p>
          </div>
        </motion.div>

        {/* Search and Category Filter Controls */}
        <div className="space-y-4 mb-8">
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-temple-gold pointer-events-none"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="വഴിപാടുകൾ തിരയുക... (Search Vazhipadu)"
              className="w-full pl-11 pr-10 py-3 rounded-full bg-white border border-temple-gold/40 text-sm font-sans text-temple-text placeholder-temple-muted/70 focus:outline-none focus:ring-2 focus:ring-temple-maroon/40 focus:border-temple-maroon transition-all shadow-subtle"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-temple-muted hover:text-temple-maroon p-1"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none px-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all shrink-0 border ${
                  activeCategory === cat
                    ? "bg-temple-maroon text-temple-ivory border-temple-maroon shadow-sm"
                    : "bg-white text-temple-muted border-temple-gold/30 hover:border-temple-maroon hover:text-temple-maroon"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Refined Vazhipadu Table */}
        <div className="bg-white rounded-2xl border border-temple-gold/30 shadow-subtle overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse font-sans">
              <thead>
                <tr className="bg-temple-sandal/60 border-b border-temple-gold/30 text-temple-maroon font-serif text-xs sm:text-sm uppercase tracking-wide">
                  <th className="py-4 px-4 sm:px-6 font-bold w-12 text-center">#</th>
                  <th className="py-4 px-4 sm:px-6 font-bold">വഴിപാട്</th>
                  <th className="py-4 px-4 sm:px-6 font-bold hidden md:table-cell">വിഭാഗം</th>
                  <th className="py-4 px-4 sm:px-6 font-bold hidden sm:table-cell">വിവരണം</th>
                  <th className="py-4 px-4 sm:px-6 font-bold text-right">നിരക്ക്</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-temple-gold/15 text-sm sm:text-base">
                {filteredVazhipadu.length > 0 ? (
                  filteredVazhipadu.map((item, idx) => (
                    <motion.tr
                      key={item.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: Math.min(idx * 0.02, 0.3) }}
                      onClick={() => setSelectedVazhipadu(item)}
                      className="hover:bg-amber-50/50 transition-colors cursor-pointer group"
                    >
                      <td className="py-3.5 px-4 sm:px-6 font-sans text-xs sm:text-sm font-semibold text-temple-gold text-center">
                        {item.slNo ?? "—"}
                      </td>

                      <td className="py-3.5 px-4 sm:px-6 font-serif font-semibold text-temple-text group-hover:text-temple-maroon transition-colors">
                        <div className="flex items-center gap-2">
                          <span>{item.nameMl}</span>
                          <HelpCircle
                            size={14}
                            className="text-temple-gold opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                          />
                        </div>
                        {item.noteMl && (
                          <span className="block font-sans text-[11px] font-normal text-amber-700 mt-0.5">
                            * {item.noteMl}
                          </span>
                        )}
                      </td>

                      <td className="py-3.5 px-4 sm:px-6 hidden md:table-cell text-xs text-temple-muted">
                        <MalayalamBadge variant="gold">
                          {item.categoryMl}
                        </MalayalamBadge>
                      </td>

                      <td className="py-3.5 px-4 sm:px-6 hidden sm:table-cell text-xs sm:text-sm text-temple-muted max-w-xs truncate">
                        {item.descriptionMl}
                      </td>

                      <td className="py-3.5 px-4 sm:px-6 text-right font-sans text-xs sm:text-sm font-bold text-temple-maroon whitespace-nowrap">
                        {item.ratePlaceholder}
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={5}
                      className="py-12 px-6 text-center text-temple-muted font-sans text-sm"
                    >
                      &quot;{searchQuery}&quot; എന്നതിൽ വഴിപാടുകൾ ഒന്നും കണ്ടെത്താനായില്ല.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Important Board Reminders & NB Footer */}
          <div className="p-4 sm:p-5 bg-amber-50/70 border-t border-temple-gold/30">
            <div className="flex items-center justify-center gap-2 text-amber-900 font-serif font-semibold text-xs sm:text-sm mb-3">
              <Receipt size={17} className="text-amber-700 shrink-0" />
              <span>{vazhipaduNoticeData.receiptNotice}</span>
            </div>

            {/* Committee Contacts bar */}
            <div className="pt-3 border-t border-amber-200/60 flex flex-col sm:flex-row items-center justify-between gap-3 font-sans text-xs text-temple-muted">
              <span className="font-serif font-bold text-temple-maroon">
                {vazhipaduNoticeData.committeeTitle} ബന്ധപ്പെടാൻ:
              </span>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {vazhipaduNoticeData.contacts.map((c) => (
                  <a
                    key={c.phone}
                    href={`tel:+91${c.phone}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-temple-gold/40 text-temple-maroon hover:bg-temple-maroon hover:text-white transition-colors"
                  >
                    <Phone size={12} />
                    <span className="font-medium">
                      {c.role}: +91 {c.phone}
                    </span>
                  </a>
                ))}
              </div>
            </div>
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

              <div className="flex items-center gap-2 mb-2">
                {selectedVazhipadu.slNo && (
                  <span className="px-2 py-0.5 rounded bg-temple-gold/20 text-temple-maroon font-bold text-xs font-sans">
                    #{selectedVazhipadu.slNo}
                  </span>
                )}
                <MalayalamBadge variant="maroon">
                  {selectedVazhipadu.categoryMl}
                </MalayalamBadge>
              </div>

              <h3 className="font-serif text-2xl font-bold text-temple-maroon mb-2">
                {selectedVazhipadu.nameMl}
              </h3>

              <p className="font-sans text-sm text-temple-muted mb-4 leading-relaxed">
                {selectedVazhipadu.descriptionMl}
              </p>

              {selectedVazhipadu.noteMl && (
                <div className="p-3 rounded-lg bg-amber-50 border border-amber-300 mb-4 flex items-start gap-2 text-amber-900 text-xs font-sans">
                  <AlertCircle size={16} className="text-amber-700 shrink-0 mt-0.5" />
                  <span>{selectedVazhipadu.noteMl}</span>
                </div>
              )}

              <div className="p-3 rounded-lg bg-temple-sandal/60 border border-temple-gold/30 mb-6 flex items-center justify-between font-sans text-xs sm:text-sm">
                <span className="font-medium text-temple-muted">വഴിപാട് നിരക്ക്:</span>
                <span className="font-bold text-temple-maroon text-base">
                  {selectedVazhipadu.ratePlaceholder}
                </span>
              </div>

              <div className="space-y-3">
                <a
                  href={`tel:+91${vazhipaduNoticeData.contacts[1].phone}`}
                  onClick={() => setSelectedVazhipadu(null)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-temple-maroon text-temple-ivory font-sans font-semibold text-sm hover:bg-temple-dark transition-colors shadow-sm"
                >
                  <Phone size={16} />
                  <span>ക്ഷേത്ര ഭാരവാഹികളുമായി ബന്ധപ്പെടുക ({vazhipaduNoticeData.contacts[1].phone})</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
