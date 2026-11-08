"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import { festivalsData, festival2027Details } from "@/lib/data/templeData";
import { Festival } from "@/types/temple";
import MalayalamBadge from "../ui/MalayalamBadge";
import {
  Calendar,
  CheckCircle2,
  Music,
  Sparkles,
  FileText,
  Download,
  X,
  Phone,
  Landmark,
  Clock,
  Layers,
} from "lucide-react";

export default function FestivalSection() {
  const [selectedFestival, setSelectedFestival] = useState<Festival>(
    festivalsData[0]
  );
  const [showScheduleModal, setShowScheduleModal] = useState<boolean>(false);
  const [modalTab, setModalTab] = useState<"dashavatharam" | "highlights" | "committee">("dashavatharam");

  return (
    <section
      id="festivals"
      className="py-20 md:py-28 bg-[#241313] text-temple-white relative overflow-hidden"
    >
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <SectionHeading
          eyebrow="വാർഷിക ആഘോഷങ്ങൾ"
          title="ഉത്സവവിശേഷങ്ങൾ"
          subtitle="ക്ഷേത്രത്തിലെ വിശേഷാൽ ചടങ്ങുകളും വാർഷിക ആഘോഷ മഹോത്സവങ്ങളും"
          theme="dark"
        />

        {/* Festival Selection Tabs */}
        <div className="flex items-center justify-center gap-3 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {festivalsData.map((festival) => {
            const isSelected = selectedFestival.id === festival.id;
            return (
              <button
                key={festival.id}
                onClick={() => setSelectedFestival(festival)}
                className={`px-5 py-2.5 rounded-full font-serif text-sm sm:text-base font-semibold whitespace-nowrap transition-all duration-300 border ${
                  isSelected
                    ? "bg-temple-gold text-temple-dark border-temple-gold shadow-gold"
                    : "bg-white/5 text-temple-sandal/80 border-white/10 hover:border-temple-gold/40 hover:text-temple-white"
                }`}
              >
                {festival.titleMl}
              </button>
            );
          })}
        </div>

        {/* Main Showcase Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFestival.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-3xl bg-[#5B1717]/40 border border-temple-gold/30 p-6 sm:p-8 md:p-10 backdrop-blur-md"
          >
            {/* Left: Large Image & Badge */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden min-h-[320px] lg:min-h-[460px] border border-temple-gold/20 shadow-card">
              <Image
                src={selectedFestival.imageUrl || "/img1.jpeg"}
                alt={selectedFestival.titleMl}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241313] via-black/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <MalayalamBadge variant="gold" className="mb-2">
                  <Calendar size={14} />
                  <span>{selectedFestival.dateMl}</span>
                </MalayalamBadge>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-temple-ivory leading-snug">
                  {selectedFestival.titleMl}
                </h3>
              </div>
            </div>

            {/* Right: Rituals & Programs */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <p className="font-sans text-base sm:text-lg text-temple-sandal/90 leading-relaxed mb-6">
                  {selectedFestival.descriptionMl}
                </p>

                {/* Important Rituals */}
                <div className="space-y-3 mb-6">
                  <h4 className="font-serif text-base font-bold text-temple-gold-light flex items-center gap-2 border-b border-temple-gold/20 pb-2">
                    <Sparkles size={18} className="text-temple-gold" />
                    <span>പ്രധാന ചടങ്ങുകൾ & വിശേഷാൽ പൂജകൾ</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-sans text-xs sm:text-sm text-temple-sandal/85">
                    {selectedFestival.rituals.map((ritual, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-temple-gold shrink-0" />
                        <span>{ritual}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cultural Programmes */}
                {selectedFestival.programmes.length > 0 && (
                  <div className="space-y-3 mb-6">
                    <h4 className="font-serif text-base font-bold text-temple-gold-light flex items-center gap-2 border-b border-temple-gold/20 pb-2">
                      <Music size={18} className="text-temple-gold" />
                      <span>കലാസാംസ്കാരിക പരിപാടികൾ</span>
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-sans text-xs sm:text-sm text-temple-sandal/85">
                      {selectedFestival.programmes.map((prog, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-temple-gold shrink-0" />
                          <span>{prog}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Special Festival Action CTAs */}
                {selectedFestival.pdfUrl && (
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={selectedFestival.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-temple-gold text-temple-dark font-sans font-bold text-xs sm:text-sm hover:bg-temple-gold-light transition-all shadow-md group"
                    >
                      <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                      <span>ഉത്സവ നോട്ടീസ് ഡൗൺലോഡ് (PDF)</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setShowScheduleModal(true)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-temple-gold/50 text-temple-gold-light font-sans font-semibold text-xs sm:text-sm hover:bg-white/20 transition-all"
                    >
                      <Layers size={16} className="text-temple-gold" />
                      <span>ദശാവതാരം & 13 ദിന പൂജാക്രമം</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Bottom Notice */}
              <div className="pt-4 border-t border-temple-gold/20 text-xs font-sans text-temple-sandal/60">
                വാർഷിക തിയ്യതികളും കൂടുതൽ വിവരങ്ങളും ക്ഷേത്ര അറിയിപ്പ് ബോർഡിൽ സമയാസമയം നൽകുന്നതാണ്.
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 13-Day Festival Schedule & Dashavatharam Modal */}
      <AnimatePresence>
        {showScheduleModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#1e0e0e] border-2 border-temple-gold/60 rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl text-temple-white overflow-hidden"
            >
              {/* Modal Header */}
              <div className="p-5 sm:p-6 bg-[#331111] border-b border-temple-gold/30 flex items-center justify-between shrink-0">
                <div>
                  <MalayalamBadge variant="gold" className="mb-1">
                    {festival2027Details.dates}
                  </MalayalamBadge>
                  <h3 className="font-serif text-lg sm:text-2xl font-bold text-temple-ivory">
                    {festival2027Details.title}
                  </h3>
                </div>
                <button
                  onClick={() => setShowScheduleModal(false)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Sub-Tabs */}
              <div className="flex border-b border-temple-gold/20 bg-[#281111] px-4 pt-2 gap-2 overflow-x-auto scrollbar-none shrink-0">
                <button
                  onClick={() => setModalTab("dashavatharam")}
                  className={`pb-3 px-4 font-serif text-xs sm:text-sm font-semibold border-b-2 transition-all shrink-0 ${
                    modalTab === "dashavatharam"
                      ? "border-temple-gold text-temple-gold"
                      : "border-transparent text-temple-sandal/60 hover:text-white"
                  }`}
                >
                  ദശാവതാരം ചന്ദനം ചാർത്ത് (11 ദിനങ്ങൾ)
                </button>
                <button
                  onClick={() => setModalTab("highlights")}
                  className={`pb-3 px-4 font-serif text-xs sm:text-sm font-semibold border-b-2 transition-all shrink-0 ${
                    modalTab === "highlights"
                      ? "border-temple-gold text-temple-gold"
                      : "border-transparent text-temple-sandal/60 hover:text-white"
                  }`}
                >
                  പ്രതിഷ്ഠാദിനം & സമാപനം (ഫെബ്രു 10, 11)
                </button>
                <button
                  onClick={() => setModalTab("committee")}
                  className={`pb-3 px-4 font-serif text-xs sm:text-sm font-semibold border-b-2 transition-all shrink-0 ${
                    modalTab === "committee"
                      ? "border-temple-gold text-temple-gold"
                      : "border-transparent text-temple-sandal/60 hover:text-white"
                  }`}
                >
                  ഉത്സവ കമ്മിറ്റി & കാർമ്മികർ
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-5 sm:p-6 overflow-y-auto space-y-4 font-sans text-sm flex-1">
                {modalTab === "dashavatharam" && (
                  <div className="space-y-4">
                    <p className="font-serif text-xs sm:text-sm text-temple-gold-light italic">
                      ✦ ചന്ദനം ചാർത്തുന്നത്: {festival2027Details.charthuPriest} | മേൽശാന്തി: {festival2027Details.melsanthi}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {festival2027Details.dashavatharam.map((item) => (
                        <div
                          key={item.day}
                          className="p-4 rounded-xl bg-[#361414]/60 border border-temple-gold/25 space-y-1.5"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-serif font-bold text-temple-gold text-base">
                              {item.day}. {item.avatar}
                            </span>
                            <span className="text-[11px] text-temple-sandal/70 font-mono">
                              ദിവസം {item.day}
                            </span>
                          </div>
                          <p className="text-xs text-amber-200/90 font-medium">
                            {item.date}
                          </p>
                          <div className="text-xs text-temple-sandal/80 pt-1 border-t border-white/5 space-y-0.5">
                            <p>
                              <span className="text-temple-gold/80">പൂക്കൾ:</span> {item.flower}
                            </p>
                            <p>
                              <span className="text-temple-gold/80">ഫലസിദ്ധി:</span> {item.benefit}
                            </p>
                            <p>
                              <span className="text-temple-gold/80">വിശേഷാൽ വഴിപാട്:</span> {item.offering}
                            </p>
                          </div>
                          <p className="text-[11px] text-temple-sandal/70 pt-1 italic">
                            {item.eveningEvent}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {modalTab === "highlights" && (
                  <div className="space-y-4">
                    {festival2027Details.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-2xl bg-[#361414]/70 border border-temple-gold/35 space-y-2"
                      >
                        <div className="flex items-center gap-2 text-temple-gold font-serif text-xs">
                          <Calendar size={14} />
                          <span>{h.date}</span>
                        </div>
                        <h4 className="font-serif text-lg sm:text-xl font-bold text-temple-ivory">
                          {h.title}
                        </h4>
                        <p className="font-sans text-xs sm:text-sm text-temple-sandal/90 leading-relaxed">
                          {h.details}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {modalTab === "committee" && (
                  <div className="space-y-6">
                    {/* Priests */}
                    <div className="p-4 rounded-xl bg-[#361414]/60 border border-temple-gold/25 space-y-2">
                      <h4 className="font-serif font-bold text-temple-gold text-base">
                        മുഖ്യ കാർമ്മികത്വം
                      </h4>
                      <p className="text-xs sm:text-sm text-temple-sandal">
                        ✦ <strong>തന്ത്രിമുഖ്യൻ:</strong> {festival2027Details.tantri}
                      </p>
                      <p className="text-xs sm:text-sm text-temple-sandal">
                        ✦ <strong>ചന്ദനം ചാർത്തുന്നത്:</strong> {festival2027Details.charthuPriest}
                      </p>
                      <p className="text-xs sm:text-sm text-temple-sandal">
                        ✦ <strong>മേൽശാന്തി:</strong> {festival2027Details.melsanthi}
                      </p>
                    </div>

                    {/* Committee Members */}
                    <div className="space-y-2">
                      <h4 className="font-serif font-bold text-temple-gold text-base">
                        ഉത്സവ കമ്മിറ്റി ഭാരവാഹികൾ
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {festival2027Details.committee.map((c) => (
                          <div
                            key={c.phone}
                            className="p-3.5 rounded-xl bg-white/5 border border-temple-gold/20 flex items-center justify-between"
                          >
                            <div>
                              <p className="text-[10px] uppercase tracking-wider text-temple-gold/70">
                                {c.role}
                              </p>
                              <p className="font-serif font-bold text-sm text-temple-ivory">
                                {c.name}
                              </p>
                            </div>
                            <a
                              href={`tel:+91${c.phone}`}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-temple-gold text-temple-dark text-xs font-bold hover:bg-temple-gold-light transition-colors"
                            >
                              <Phone size={12} />
                              <span>{c.phone}</span>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bank Details */}
                    <div className="p-4 rounded-xl bg-[#361414]/60 border border-temple-gold/25 space-y-2">
                      <h4 className="font-serif font-bold text-temple-gold text-base flex items-center gap-2">
                        <Landmark size={16} />
                        <span>ഉത്സവ സംഭാവനകൾ അയക്കേണ്ട വിലാസം</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-temple-sandal">
                        <strong>ബാങ്ക്:</strong> {festival2027Details.bankDetails.bank}
                      </p>
                      <p className="text-xs sm:text-sm text-temple-sandal font-mono">
                        <strong>അക്കൗണ്ട് നമ്പർ:</strong> {festival2027Details.bankDetails.accountNo}
                      </p>
                      <p className="text-xs sm:text-sm text-temple-sandal font-mono">
                        <strong>IFSC:</strong> {festival2027Details.bankDetails.ifsc}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-[#281111] border-t border-temple-gold/20 flex items-center justify-between gap-3 shrink-0">
                <a
                  href="/Vailappilly Sheet Notice 2027.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-temple-gold text-temple-dark text-xs sm:text-sm font-bold hover:bg-temple-gold-light transition-colors"
                >
                  <Download size={14} />
                  <span>പൂർണ്ണ നോട്ടീസ് ഡൗൺലോഡ് (PDF)</span>
                </a>
                <button
                  onClick={() => setShowScheduleModal(false)}
                  className="px-4 py-2 text-xs font-sans text-temple-sandal/70 hover:text-white"
                >
                  അടയ്ക്കുക
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
