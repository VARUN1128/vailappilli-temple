"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import { templeInfoData } from "@/lib/data/templeData";
import { Sparkles, MapPin, HeartHandshake } from "lucide-react";

export default function TempleIntro() {
  return (
    <section
      id="intro"
      className="py-20 md:py-28 lg:py-32 bg-temple-ivory text-temple-text relative overflow-hidden"
    >
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="ക്ഷേത്രപരിചയം"
          title="ഭക്തിയുടെ പാരമ്പര്യം തലമുറകളിലൂടെ"
          subtitle="ശാന്തസുന്ദരമായ ഗ്രാമാന്തരീക്ഷത്തിൽ സ്ഥിതിചെയ്യുന്ന ശ്രീകൃഷ്ണസന്നിധി"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mt-12">
          {/* Left Column - Large Temple Photograph */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card border-2 border-temple-gold/30 bg-temple-sandal">
              <div className="aspect-[4/3] relative w-full">
                <Image
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop"
                  alt="വൈലപ്പിള്ളി ശ്രീകൃഷ്ണസ്വാമി ക്ഷേത്രം"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Photo Caption Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-temple-dark/85 backdrop-blur-md border border-temple-gold/30 text-temple-ivory flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm sm:text-base font-bold text-temple-gold-light">
                    പെരുമ്പിള്ളി ഗ്രാമക്ഷേത്രം
                  </h4>
                  <p className="font-sans text-xs text-temple-sandal/80">
                    മുളന്തുരുത്തി, എറണാകുളം
                  </p>
                </div>
                <Sparkles size={20} className="text-temple-gold shrink-0" />
              </div>
            </div>

            {/* Subtle Gold Background Accent geometry */}
            <div
              className="absolute -bottom-6 -left-6 w-32 h-32 border-l-2 border-b-2 border-temple-gold/40 rounded-bl-2xl -z-10"
              aria-hidden="true"
            />
          </motion.div>

          {/* Right Column - Malayalam Introduction & Gold Vertical Divider */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-6 flex flex-col justify-center space-y-6 relative lg:pl-6 border-l-0 lg:border-l lg:border-temple-gold/30"
          >
            <div className="space-y-4 font-sans text-base sm:text-lg leading-relaxed text-temple-text/90">
              {templeInfoData.introParagraphs.map((paragraph, idx) => (
                <p key={idx} className="first-letter:text-3xl first-letter:font-serif first-letter:font-bold first-letter:text-temple-maroon">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Highlights List */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-temple-sandal/40 border border-temple-gold/20">
                <MapPin className="text-temple-maroon mt-1 shrink-0" size={20} />
                <div>
                  <h5 className="font-serif font-bold text-sm text-temple-maroon">
                    ലൊക്കേഷൻ
                  </h5>
                  <p className="font-sans text-xs text-temple-muted">
                    പെരുമ്പിള്ളി, മുളന്തുരുത്തി
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-temple-sandal/40 border border-temple-gold/20">
                <HeartHandshake className="text-temple-maroon mt-1 shrink-0" size={20} />
                <div>
                  <h5 className="font-serif font-bold text-sm text-temple-maroon">
                    ആത്മീയ സമാധാനം
                  </h5>
                  <p className="font-sans text-xs text-temple-muted">
                    നാടിന്റെ ഐശ്വര്യകേന്ദ്രം
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
