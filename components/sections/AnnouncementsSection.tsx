"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { announcementsData } from "@/lib/data/templeData";
import MalayalamBadge from "../ui/MalayalamBadge";
import { Bell, ArrowRight } from "lucide-react";

export default function AnnouncementsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#241313] text-temple-white relative overflow-hidden">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <SectionHeading
          eyebrow="ക്ഷേത്ര വാർത്തകൾ"
          title="അറിയിപ്പുകൾ & വിവരങ്ങൾ"
          subtitle="ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ, പൂജാക്രമങ്ങളിലെ മാറ്റങ്ങൾ, പൊതു അറിയിപ്പുകൾ"
          theme="dark"
        />

        {/* Editorial List Layout */}
        <div className="max-w-3xl mx-auto space-y-4">
          {announcementsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-6 rounded-2xl bg-[#5B1717]/30 border border-temple-gold/20 hover:border-temple-gold/50 transition-all duration-300 group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="font-sans text-xs text-temple-gold-light font-semibold">
                    {item.dateMl}
                  </span>
                  {item.isImportant && (
                    <MalayalamBadge variant="gold">
                      പ്രധാനം
                    </MalayalamBadge>
                  )}
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-temple-ivory group-hover:text-temple-gold transition-colors">
                  {item.titleMl}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-temple-sandal/80 leading-relaxed">
                  {item.descriptionMl}
                </p>
              </div>

              <div className="shrink-0 self-end sm:self-center">
                <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-temple-gold group-hover:text-temple-dark transition-all flex items-center justify-center text-temple-gold">
                  <ArrowRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10 text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-temple-gold/15 text-temple-gold border border-temple-gold/40 font-sans text-sm font-semibold hover:bg-temple-gold hover:text-temple-dark transition-all duration-300">
            <Bell size={16} />
            <span>എല്ലാ അറിയിപ്പുകളും കാണാം</span>
          </button>
        </div>
      </div>
    </section>
  );
}
