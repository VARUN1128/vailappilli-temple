"use client";

import { MapPin, Navigation } from "lucide-react";
import { contactInfoData } from "@/lib/data/templeData";

export default function MapSection() {
  return (
    <section className="relative w-full h-[380px] sm:h-[450px] bg-temple-sandal overflow-hidden border-t border-b border-temple-gold/30">
      {/* Map Embed Frame */}
      <iframe
        title="Vailappilly Sree Krishna Swamy Kshethram Location Map"
        src="https://maps.google.com/maps?q=9.9076,76.37684&hl=ml&z=16&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0, filter: "sepia(20%) contrast(105%) brightness(95%)" }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      />

      {/* Floating Directions Card */}
      <div className="absolute bottom-6 left-6 right-6 sm:left-12 sm:right-auto sm:max-w-sm bg-temple-dark/90 backdrop-blur-md p-5 rounded-2xl border border-temple-gold/40 text-temple-ivory shadow-card">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-temple-gold/20 text-temple-gold shrink-0 mt-0.5">
            <MapPin size={22} />
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold text-temple-gold-light">
              പെരുമ്പിള്ളി, മുളന്തുരുത്തി
            </h4>
            <p className="font-sans text-xs text-temple-sandal/80 mt-1 leading-relaxed">
              എറണാകുളം ജില്ലയിൽ തൃപ്പൂണിത്തുറ - ചോറ്റാനിക്കര പാതയിൽ നിന്ന് മുളന്തുരുത്തി വഴി പെരുമ്പിള്ളി ഗ്രാമത്തിലേക്ക് എളുപ്പത്തിൽ എത്തിച്ചേരാവുന്നതാണ്.
            </p>

            <a
              href={contactInfoData.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-temple-gold text-temple-dark font-sans font-bold text-xs sm:text-sm hover:bg-temple-gold-light transition-all shadow-sm"
            >
              <Navigation size={14} />
              <span>വഴികാട്ടി (Google Maps)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
