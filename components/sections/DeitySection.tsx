"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import Emblem from "../ui/Emblem";
import { templeInfoData } from "@/lib/data/templeData";

export default function DeitySection() {
  return (
    <section className="py-20 md:py-28 bg-temple-maroon text-temple-white relative overflow-hidden">
      {/* Decorative Traditional Kerala Wooden Roof Motifs */}
      <div
        className="absolute top-0 left-0 right-0 h-4 bg-repeat-x opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='16' viewBox='0 0 40 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 16H0L20 0Z' fill='%25C89B3C'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <SectionHeading
          eyebrow="പ്രധാന പ്രതിഷ്ഠ"
          title="ശ്രീകൃഷ്ണൻ"
          subtitle="ഭക്തിയുടെയും ധർമ്മത്തിന്റെയും ദിവ്യസ്മരണ"
          theme="dark"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mt-10">
          {/* Left Column: Deity Image with Subtle Gold Geometry Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Gold Frame Geometry */}
            <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-gold border-2 border-temple-gold/40 bg-[#241313]">
              <Image
                src="https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1200&auto=format&fit=crop"
                alt="ശ്രീകൃഷ്ണസ്വാമി പ്രതിഷ്ഠ"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 40vw"
              />

              {/* Devotional Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#241313] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 text-center">
                <span className="font-serif text-lg font-bold text-temple-gold-light">
                  ശ്രീകൃഷ്ണസ്വാമി
                </span>
                <p className="font-sans text-xs text-temple-sandal/70 mt-1">
                  വൈലപ്പിള്ളി കാവൽദൈവം
                </p>
              </div>
            </div>

            {/* Decorative Gold Circular Mandalam Backdrop */}
            <div
              className="absolute -inset-4 border border-temple-gold/20 rounded-3xl -z-10 hidden sm:block"
              aria-hidden="true"
            />
          </motion.div>

          {/* Right Column: Deity Description & Mantras */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-temple-gold/10 border border-temple-gold/30 text-temple-gold-light text-sm font-serif">
              <Emblem size={20} variant="gold" />
              <span>ചതുർബാഹു ധാരിയായ മുരളിധരൻ</span>
            </div>

            <div className="space-y-4 font-sans text-base sm:text-lg leading-relaxed text-temple-sandal/90">
              {templeInfoData.deityDescription.map((desc, i) => (
                <p key={i}>{desc}</p>
              ))}
            </div>

            {/* Devotional Prayer Quote Box */}
            <div className="p-6 rounded-xl bg-[#241313]/70 border border-temple-gold/30 relative">
              <span className="font-serif text-sm font-semibold text-temple-gold block mb-1">
                പ്രധാന മന്ത്രം
              </span>
              <p className="font-serif text-xl sm:text-2xl text-temple-white font-bold tracking-wide">
                &ldquo;കസ്തൂരി തിലകം ലലാടപടലേ വക്ഷഃസ്ഥലേ കൗസ്തുഭം...&rdquo;
              </p>
              <p className="font-sans text-xs text-temple-sandal/70 mt-2">
                ശ്രീകൃഷ്ണസ്വാമിയുടെ അനുഗ്രഹത്തിനും മനോശാന്തിക്കുമായി ദിനംപ്രതി ജപിക്കുന്ന സ്തോത്രം.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
