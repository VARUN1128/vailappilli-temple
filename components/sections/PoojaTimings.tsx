"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { poojaTimingsData } from "@/lib/data/templeData";
import MalayalamBadge from "../ui/MalayalamBadge";
import { Clock, Info } from "lucide-react";

export default function PoojaTimings() {
  return (
    <section
      id="timings"
      className="py-20 md:py-28 bg-temple-ivory text-temple-text relative overflow-hidden"
    >
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="പൂജാക്രമം"
          title="പൂജാസമയം & ദർശനവേളകൾ"
          subtitle="ഭക്തജനങ്ങൾക്ക് ദർശനത്തിനും വഴിപാടുകൾക്കുമായി ക്ഷേത്രനട തുറന്നിരിക്കുന്ന സമയങ്ങൾ"
        />

        {/* CMS Notice / Timings Info Banner */}
        <div className="mb-12 max-w-2xl mx-auto p-4 rounded-xl bg-temple-sandal/50 border border-temple-gold/40 flex items-center gap-3 text-xs sm:text-sm font-sans text-temple-muted">
          <Info size={18} className="text-temple-maroon shrink-0" />
          <p>
            വിശേഷാൽ പൂജാദിനങ്ങളിലും ഉത്സവ ദിനങ്ങളിലും പൂജാസമയങ്ങളിൽ മാറ്റമുണ്ടാകാം.
            കൂടുതൽ വിവരങ്ങൾക്ക് ക്ഷേത്ര കാര്യാലയവുമായി ബന്ധപ്പെടുക.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Gold Line */}
          <div
            className="absolute top-4 bottom-4 left-6 sm:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-temple-gold/20 via-temple-gold to-temple-gold/20"
            aria-hidden="true"
          />

          <div className="space-y-8 sm:space-y-12 relative z-10">
            {poojaTimingsData.map((timing, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={timing.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  } gap-4 sm:gap-8 group`}
                >
                  {/* Timeline Node Icon/Dot */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-temple-ivory border-2 border-temple-gold shadow-md flex items-center justify-center group-hover:scale-125 group-hover:border-temple-maroon transition-transform">
                    <div className="w-2 h-2 rounded-full bg-temple-maroon" />
                  </div>

                  {/* Content Box */}
                  <div
                    className={`w-full sm:w-[calc(50%-2rem)] pl-14 sm:pl-0 ${
                      isEven ? "sm:text-right" : "sm:text-left"
                    }`}
                  >
                    <div className="p-5 rounded-2xl bg-white border border-temple-gold/25 shadow-subtle hover:border-temple-gold transition-all duration-300 group-hover:shadow-card">
                      <div
                        className={`flex items-center gap-2 mb-2 flex-wrap ${
                          isEven ? "sm:justify-end" : "sm:justify-start"
                        }`}
                      >
                        <span className="inline-flex items-center gap-1 font-sans text-sm font-bold text-temple-maroon bg-temple-gold/15 px-3 py-1 rounded-full">
                          <Clock size={14} className="text-temple-gold" />
                          {timing.time}
                        </span>

                        {timing.isMainPooja && (
                          <MalayalamBadge variant="maroon">
                            പ്രധാന പൂജ
                          </MalayalamBadge>
                        )}
                      </div>

                      <h3 className="font-serif text-lg sm:text-xl font-bold text-temple-text">
                        {timing.nameMl}
                      </h3>

                      {timing.descriptionMl && (
                        <p className="font-sans text-xs sm:text-sm text-temple-muted mt-2 leading-relaxed">
                          {timing.descriptionMl}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
