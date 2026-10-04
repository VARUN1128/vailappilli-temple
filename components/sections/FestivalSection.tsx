"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import { festivalsData } from "@/lib/data/templeData";
import { Festival } from "@/types/temple";
import MalayalamBadge from "../ui/MalayalamBadge";
import { Calendar, CheckCircle2, Music, Sparkles } from "lucide-react";

export default function FestivalSection() {
  const [selectedFestival, setSelectedFestival] = useState<Festival>(
    festivalsData[0]
  );

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
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden min-h-[300px] lg:min-h-[420px] border border-temple-gold/20 shadow-card">
              <Image
                src={selectedFestival.imageUrl || "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?q=80&w=1200&auto=format&fit=crop"}
                alt={selectedFestival.titleMl}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241313] via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <MalayalamBadge variant="gold" className="mb-2">
                  <Calendar size={14} />
                  <span>{selectedFestival.dateMl}</span>
                </MalayalamBadge>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-temple-ivory">
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
                  <div className="space-y-3">
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
              </div>

              {/* Bottom Notice */}
              <div className="pt-4 border-t border-temple-gold/20 text-xs font-sans text-temple-sandal/60">
                വാർഷിക തിയ്യതികളും കൂടുതൽ വിവരങ്ങളും ക്ഷേത്ര അറിയിപ്പ് ബോർഡിൽ സമയാസമയം നൽകുന്നതാണ്.
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
