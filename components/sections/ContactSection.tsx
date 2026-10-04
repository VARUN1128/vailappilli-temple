"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { contactInfoData } from "@/lib/data/templeData";
import { MapPin, Phone, Mail, Navigation, Clock, Share2 } from "lucide-react";
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-10">
          {/* Main Address Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 p-8 rounded-3xl bg-white border border-temple-gold/30 shadow-subtle flex flex-col justify-between space-y-6"
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

              <div className="flex items-start gap-3 pt-2 border-t border-temple-gold/15">
                <Mail size={20} className="text-temple-maroon shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif font-bold text-temple-maroon">ഇമെയിൽ വിലാസം</h4>
                  <p className="text-temple-muted font-sans text-xs sm:text-sm">
                    {contactInfoData.emailPlaceholder}
                  </p>
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
            className="lg:col-span-6 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-temple-sandal/50 border border-temple-gold/30 space-y-4">
              <h4 className="font-serif text-xl font-bold text-temple-maroon flex items-center gap-2">
                <Clock size={20} className="text-temple-gold" />
                <span>ദർശന മാർഗ്ഗനിർദ്ദേശങ്ങൾ</span>
              </h4>

              <ul className="space-y-3 font-sans text-xs sm:text-sm text-temple-muted list-disc list-inside leading-relaxed">
                <li>ക്ഷേത്രാങ്കണത്തിൽ കേരളീയ പരമ്പരാഗത വസ്ത്രധാരണം പാലിക്കുക.</li>
                <li>ശ്രീകോവിലിന് മുന്നിൽ ശാന്തതയും ആത്മീയ അന്തരീക്ഷവും കാത്തുസൂക്ഷിക്കുക.</li>
                <li>പ്രഭാത ദർശനം 05:00 AM മുതൽ 11:00 AM വരെയും സന്ധ്യാ ദർശനം 05:00 PM മുതൽ 08:00 PM വരെയുമാണ്.</li>
                <li>വിശേഷാൽ വഴിപാടുകൾക്കും ഹരിനാമകീർത്തന യജ്ഞങ്ങൾക്കും ഓഫീസുമായി മുൻകൂട്ടി ബന്ധപ്പെടുക.</li>
              </ul>
            </div>

            {/* Committee Note Box */}
            <div className="p-6 rounded-2xl bg-white border border-temple-gold/25 flex items-center justify-between text-xs sm:text-sm text-temple-muted">
              <div>
                <span className="font-serif font-bold text-temple-maroon block">
                  ക്ഷേത്ര ഭരണസമിതി
                </span>
                <span>ഭക്തജന സേവനത്തിനായുള്ള വികസന സമിതി</span>
              </div>
              <Share2 size={24} className="text-temple-gold" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
