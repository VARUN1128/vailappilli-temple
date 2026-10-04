"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import { historyTimelineData } from "@/lib/data/templeData";
import MalayalamBadge from "../ui/MalayalamBadge";

export default function HistoryTimeline() {
  return (
    <section
      id="history"
      className="py-20 md:py-28 bg-[#241313] text-temple-white relative overflow-hidden"
    >
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <SectionHeading
          eyebrow="പരമ്പരാഗത ഐതിഹ്യം"
          title="ക്ഷേത്രചരിത്രം & പാരമ്പര്യം"
          subtitle="പെരുമ്പിള്ളി ഗ്രാമത്തിന്റെ സാംസ്കാരിക ഹൃദയമായി തലയുയർത്തി നിൽക്കുന്ന ശ്രീകൃഷ്ണസന്നിധിയുടെ ചരിത്ര വഴികൾ"
          theme="dark"
        />

        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Vertical Timeline Spine */}
          <div
            className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-[2px] bg-temple-gold/30"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {historyTimelineData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className={`flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  } gap-6 sm:gap-12 relative`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#5B1717] border-2 border-temple-gold flex items-center justify-center shadow-gold">
                    <div className="w-2.5 h-2.5 rounded-full bg-temple-gold-light" />
                  </div>

                  {/* Card Content */}
                  <div
                    className={`w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0 ${
                      isEven ? "sm:text-right" : "sm:text-left"
                    }`}
                  >
                    <div className="p-6 rounded-2xl bg-[#5B1717]/40 border border-temple-gold/30 shadow-card backdrop-blur-sm hover:border-temple-gold transition-all duration-300">
                      <MalayalamBadge variant="gold" className="mb-3">
                        {item.eraMl}
                      </MalayalamBadge>

                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-temple-ivory mb-3">
                        {item.titleMl}
                      </h3>

                      <p className="font-sans text-xs sm:text-sm text-temple-sandal/85 leading-relaxed">
                        {item.descriptionMl}
                      </p>

                      {item.imageUrl && (
                        <div className="mt-4 relative h-40 w-full rounded-xl overflow-hidden border border-temple-gold/20">
                          <Image
                            src={item.imageUrl}
                            alt={item.titleMl}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 30vw"
                          />
                        </div>
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
