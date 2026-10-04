import Link from "next/link";
import Emblem from "@/components/ui/Emblem";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-temple-dark text-temple-white flex flex-col items-center justify-center p-6 text-center">
      <Emblem size={64} variant="gold" className="mb-6" />
      <h1 className="font-serif text-4xl sm:text-5xl font-bold text-temple-gold-light mb-4">
        പേജ് കണ്ടെത്താനായില്ല (404)
      </h1>
      <p className="font-sans text-base sm:text-lg text-temple-sandal/80 max-w-md mb-8">
        നിങ്ങൾ തിരഞ്ഞ പേജ് നിലവിലില്ല അല്ലെങ്കിൽ നീക്കം ചെയ്തിരിക്കുന്നു. വൈലപ്പിള്ളി ശ്രീകൃഷ്ണസ്വാമി ക്ഷേത്രത്തിന്റെ പ്രധാന പേജിലേക്ക് മടങ്ങാം.
      </p>
      <Link
        href="/"
        className="px-8 py-3.5 rounded-full bg-temple-gold text-temple-dark font-sans font-bold text-sm sm:text-base hover:bg-temple-gold-light transition-all shadow-gold"
      >
        പ്രധാന പേജിലേക്ക് മടങ്ങുക
      </Link>
    </div>
  );
}
