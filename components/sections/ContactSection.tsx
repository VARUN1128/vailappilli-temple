"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { contactInfoData } from "@/lib/data/templeData";
import { MapPin, Phone, Navigation, Clock } from "lucide-react";
import Emblem from "../ui/Emblem";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-temple-ivory text-temple-text relative overflow-hidden"
    >
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="ക്ഷേത്ര വിലാസം"
          title="ബന്ധപ്പെടുക"
          subtitle="വൈലപ്പിള്ളി ശ്രീകൃഷ്ണസ്വാമി ക്ഷേത്ര കാര്യാലയം & വിവരങ്ങൾ"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-10">
          {/* Main Address Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 h-full p-8 rounded-3xl bg-white border border-temple-gold/30 shadow-subtle flex flex-col justify-between space-y-6"
          >
            <div className="flex items-center gap-4 border-b border-temple-gold/20 pb-6">
              <Emblem size={42} variant="maroon" />
              <div>
                <h3 className="font-serif text-2xl font-bold text-temple-maroon">
                  വൈലപ്പിള്ളി ശ്രീകൃഷ്ണസ്വാമി ക്ഷേത്രം
                </h3>
                <p className="font-sans text-xs text-temple-muted">
                  Vailappilly Sree Krishna Swamy Kshethram
                </p>
              </div>
            </div>

            {/* Address Lines */}
            <div className="space-y-4 font-sans text-sm sm:text-base text-temple-text">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-temple-maroon shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif font-bold text-temple-maroon">ലൊക്കേഷൻ വിലാസം</h4>
                  {contactInfoData.addressMl.map((line, idx) => (
                    <p key={idx} className="text-temple-muted">
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-temple-gold/15">
                <Phone size={20} className="text-temple-maroon shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif font-bold text-temple-maroon">ഫോൺ നമ്പറുകൾ</h4>
                  {contactInfoData.phonePlaceholders.map((ph, idx) => (
                    <p key={idx} className="text-temple-muted font-sans text-xs sm:text-sm">
                      {ph}
                    </p>
                  ))}
                </div>
              </div>


            </div>

            {/* Prominent Directions CTA */}
            <div className="pt-4">
              <a
                href={contactInfoData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-temple-maroon text-temple-ivory font-sans font-bold text-base hover:bg-temple-dark transition-all duration-300 shadow-md group"
              >
                <Navigation size={20} className="text-temple-gold group-hover:rotate-12 transition-transform" />
                <span>വഴികാട്ടി (Google Maps ദിശകൾ)</span>
              </a>
            </div>
          </motion.div>

          {/* Quick Enquiry / Visiting Guidelines Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 h-full"
          >
            <div className="h-full p-8 rounded-3xl bg-temple-sandal/50 border border-temple-gold/30 flex flex-col justify-between">
              {/* Heading */}
              <h4 className="font-serif text-xl font-bold text-temple-maroon flex items-center gap-2 mb-6 pb-4 border-b border-temple-gold/25">
                <Clock size={20} className="text-temple-gold shrink-0" />
                <span>ദർശന മാർഗ്ഗനിർദ്ദേശങ്ങൾ</span>
              </h4>

              {/* Guidelines list — flex-1 so it stretches to fill available height */}
              <ul className="flex-1 flex flex-col justify-around gap-2">
                {[
                  "ക്ഷേത്രാങ്കണത്തിൽ കേരളീയ പരമ്പരാഗത വസ്ത്രധാരണം പാലിക്കുക.",
                  "ശ്രീകോവിലിന് മുന്നിൽ ശാന്തതയും ആത്മീയ അന്തരീക്ഷവും കാത്തുസൂക്ഷിക്കുക.",
                  "പ്രഭാത ദർശനം 05:00 AM – 11:00 AM; സന്ധ്യാ ദർശനം 05:00 PM – 08:00 PM.",
                  "വിശേഷ വഴിപാടുകൾക്ക് ഓഫീസുമായി മുൻകൂട്ടി ബന്ധപ്പെടുക.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl
                               bg-white/55 border border-temple-gold/20
                               font-sans text-xs sm:text-sm text-temple-muted leading-relaxed"
                  >
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-temple-maroon/12
                                     flex items-center justify-center shrink-0
                                     text-temple-maroon font-bold text-[10px]">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Decorative footer */}
              <p className="font-serif text-[11px] text-temple-maroon/45 text-center tracking-wide mt-5 pt-4 border-t border-temple-gold/20">
                ✦ ഭഗവദ് ദർശനം ജീവിതത്തെ ധന്യമാക്കട്ടെ ✦
              </p>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}
