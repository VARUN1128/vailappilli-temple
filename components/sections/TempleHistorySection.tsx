"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";

/* ─── Content ────────────────────────────────────────────────────────────── */
const PARAGRAPHS = [
  `പെരുമ്പിള്ളി വൈലപ്പിള്ളി ശ്രീകൃഷ്ണസ്വാമി ക്ഷേത്രത്തിൽ പുനരുദ്ധാരണ പ്രവർത്തനങ്ങൾ ആരംഭിച്ചിരിക്കുന്ന വിവരം ഭക്ത്യാദരപൂർവ്വം അറിയിച്ചുകൊള്ളട്ടെ.`,

  `മലയാള വർഷം 57-ൽ സ്ഥാപിതമായി എന്ന് കരുതപ്പെടുന്ന ഈ ക്ഷേത്രത്തിന് ഏകദേശം ആയിരത്തി ഇരുന്നൂറോളം വർഷങ്ങൾ പഴക്കമുണ്ട്. ക്ഷേത്രത്തിന്റെ ഉൽപ്പത്തിയെക്കുറിച്ചുള്ള ഐതിഹ്യം ഇപ്രകാരമാണ്.`,

  `ഈ ക്ഷേത്രത്തിന്റെ വടക്ക് കിഴക്ക് ഭാഗത്തായി ഏകദേശം 15 കിലോമീറ്റർ ദൂരത്തായി ചെമ്മനാട് എന്ന ദേശം സ്ഥിതി ചെയ്യുന്നു. അവിടെ പെരിയാൽ ഇല്ലം എന്നൊരു ബ്രാഹ്മണ കുടുംബം ഉണ്ടായിരുന്നു. അവിടുത്തെ നമ്പൂതിരിക്ക് നദിയിൽ ഒഴുകിവന്ന ഒരു പേളി ലഭിക്കുകയും അതിൽ വൈഷ്ണവ വിഗ്രഹങ്ങൾ കാണപ്പെടുകയും ചെയ്തു. മറ്റുള്ളവരുടെ ആഗ്രഹപ്രകാരം അതിലൊന്ന് ചെമ്മനാട് ദേശത്തും മറ്റൊന്ന് തളുവൻ കുളങ്ങരയിലും പ്രതിഷ്ഠിച്ചു. അവശേഷിച്ച ഒരു വിഗ്രഹം സ്വന്തം ഇല്ലത്ത് വെച്ച് പൂജിച്ചു പോന്നു.`,

  `അഞ്ചുശിലയിൽ തീർത്ത ശ്രീകൃഷ്ണ വിഗ്രഹമായിരുന്നു അത്. പാലും വെണ്ണയുമാണ് ആദ്യ നിവേദ്യമായി സമർപ്പിച്ചിരുന്നത്. പ്രായാധിക്യത്താൽ അവശനായ ആ നമ്പൂതിരി പിന്നീട് പൂജാകർമ്മങ്ങൾ തന്റെ ഏകപുത്രിയെ ഏൽപ്പിക്കുകയും, അവൾ വിധിയാംവണ്ണം പൂജകൾ നടത്തിപ്പോരുകയും ചെയ്തു.`,

  `ആ പെൺകുട്ടി വിവാഹപ്രായമായപ്പോൾ പെരുമ്പിള്ളി ദേശത്ത് ചമൂഴിക്കുന്നത്തുമനയിലെ ഒരു നമ്പൂതിരിയെ വിവാഹം കഴിക്കുകയും ആ മനയിൽ സ്ഥിരതാമസമാക്കുകയും ചെയ്തു. ഈ സമയത്ത് മുടങ്ങിപ്പോയ പാലും വെണ്ണയും ആവശ്യപ്പെട്ട് ഭഗവാൻ ആ ദമ്പതിമാരുടെ സ്വപ്നത്തിൽ വന്നു. തന്മൂലം ഭഗവാന്റെ വിഗ്രഹം പിതൃഗൃഹത്തിൽ നിന്നും ചമൂഴിക്കുന്നത്തുമനയിൽ കൊണ്ടുവരികയും ചെയ്തു.`,

  `പിന്നീട് ദേശവാസികളും നാടുപ്രമാണിമാരും മനക്കാരും മറ്റും ചേർന്ന് ഇപ്പോൾ സ്ഥിതിചെയ്യുന്ന പ്രദേശത്ത് ഒരു ക്ഷേത്രം പണിത് പ്രതിഷ്ഠ നടത്തുകയും ഗണപതിയേയും ശാസ്താവിനേയും കുടിയിരുത്തുകയും ചെയ്തു.`,

  `കാലക്രമേണ ക്ഷേത്രകാര്യങ്ങളിൽ പൊതുജനങ്ങൾ പങ്കെടുക്കുകയും ക്ഷേത്രത്തിന്റെ പരിപാലനവും ചുമതലകളും ഭക്തജനങ്ങളാൽ രൂപീകരിക്കപ്പെട്ട ക്ഷേത്രസംരക്ഷണ സമിതിയിൽ നിക്ഷിപ്തമാവുകയും ചെയ്തു.`,

  `തന്ത്രിമുഖ്യരായ മനയത്താറ്റ് ഇല്ലത്ത് ശ്രീ. ചന്ദ്രശേഖരൻ നമ്പൂതിരി, ബ്രഹ്മശ്രീ പ്രകാശൻ നമ്പൂതിരി എന്നിവർ പൂജാവിധികളിലും ആചാരപാലനങ്ങളിലും ഉപദേശങ്ങളും നിർദ്ദേശങ്ങളും നൽകിവരുന്നു. മേൽശാന്തി ശ്രീ. സുരേഷ് കുളങ്ങര പൂജാകർമ്മങ്ങൾ അനുഷ്ഠിക്കുന്നു.`,
];

const TOTAL = PARAGRAPHS.length;

/* ─── Scroll container height
   Each page needs ~85 vh of scrolling.
   Total sticky range = TOTAL * 85 vh.
   We add one extra viewport so the last page stays pinned long enough.
   Container height = TOTAL * 85 + 100  (vh)
──────────────────────────────────────────────────────────────────────────── */
const CONTAINER_VH = TOTAL * 85 + 100;

/* ─── Page-flip variants ─────────────────────────────────────────────────── */
const flipVariants = {
  enter: (dir: number) => ({
    y: dir > 0 ? 52 : -52,
    opacity: 0,
    rotateX: dir > 0 ? -7 : 7,
  }),
  center: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      y: { type: "spring" as const, stiffness: 260, damping: 28 },
      opacity: { duration: 0.32 },
      rotateX: { duration: 0.38 },
    },
  },
  exit: (dir: number) => ({
    y: dir > 0 ? -52 : 52,
    opacity: 0,
    rotateX: dir > 0 ? 7 : -7,
    transition: { duration: 0.28, ease: "easeIn" as const },
  }),
};

/* ─── Binding hole ───────────────────────────────────────────────────────── */
function BindingHole() {
  return (
    <div
      className="w-[17px] h-[17px] rounded-full shrink-0"
      style={{
        background:
          "radial-gradient(circle at 38% 32%, #D4A448 0%, #8B5A1A 50%, #3E2000 100%)",
        boxShadow:
          "inset 0 2px 5px rgba(0,0,0,0.65), 0 1px 3px rgba(200,140,40,0.2)",
        border: "1.5px solid #7A4A18",
      }}
    />
  );
}

/* ─── Binding cord row ───────────────────────────────────────────────────── */
function CordRow() {
  return (
    <div className="absolute left-0 right-0 z-10 flex items-center pointer-events-none">
      <div
        className="flex-1 h-px"
        style={{
          background:
            "linear-gradient(90deg,transparent,rgba(100,55,8,0.32) 12%,rgba(100,55,8,0.32) 88%,transparent)",
        }}
      />
      <BindingHole />
      <div
        className="flex-1 h-px"
        style={{
          background:
            "linear-gradient(90deg,rgba(100,55,8,0.32) 12%,rgba(100,55,8,0.32) 88%,transparent)",
        }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Main component
═══════════════════════════════════════════════════════════════════════════ */
export default function TempleHistorySection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef(0);
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState(1);

  /* ── Native scroll listener ─────────────────────────────────────────────
     getBoundingClientRect() gives the container's position relative to the
     viewport on every scroll event — reliable regardless of parent overflow.
  ────────────────────────────────────────────────────────────────────────── */
  useEffect(() => {
    const update = () => {
      const el = scrollRef.current;
      if (!el) return;

      const { top } = el.getBoundingClientRect();
      const scrolled = Math.max(0, -top);               // px past container top
      const range = el.offsetHeight - window.innerHeight; // total sticky range
      if (range <= 0) return;

      const progress = Math.min(1, scrolled / range);
      const next = Math.min(Math.floor(progress * TOTAL), TOTAL - 1);

      if (next !== pageRef.current) {
        setDir(next > pageRef.current ? 1 : -1);
        pageRef.current = next;
        setPage(next);
      }
    };

    window.addEventListener("scroll", update, { passive: true });
    update(); // run once on mount in case the user is already mid-page
    return () => window.removeEventListener("scroll", update);
  }, []);

  /* ── Manuscript content shared between sticky stages ─────────────────── */
  const manuscript = (
    <div
      className="w-full max-w-5xl mx-auto"
      style={{
        filter:
          "drop-shadow(0 20px 60px rgba(180,120,30,0.22)) drop-shadow(0 6px 20px rgba(0,0,0,0.5))",
      }}
    >
      {/* Top wooden end-cap */}
      <div
        className="h-[18px] rounded-t-sm mx-7"
        style={{
          background:
            "linear-gradient(180deg,#4E2808 0%,#864A18 35%,#9E5E26 65%,#744010 100%)",
          boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
        }}
      />

      {/* ── Leaf body ────────────────────────────────────────────────── */}
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg,#C8913A 0%,#DDA84C 4%,#EEC870 10%,#F2D080 28%,#EDCC78 50%,#F0CE7A 72%,#EEC870 90%,#DDA84C 96%,#C8913A 100%)",
        }}
      >
        {/* Grain */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent 0px,transparent 19px,rgba(100,55,8,0.07) 19px,rgba(100,55,8,0.07) 20px),repeating-linear-gradient(0deg,transparent 0px,transparent 58px,rgba(100,55,8,0.04) 58px,rgba(100,55,8,0.04) 60px)",
          }}
        />
        {/* Edge vignette */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background:
              "linear-gradient(90deg,rgba(80,40,5,0.20) 0%,transparent 7%,transparent 93%,rgba(80,40,5,0.20) 100%),radial-gradient(ellipse 110% 100% at 50% 50%,transparent 52%,rgba(80,40,5,0.11) 100%)",
          }}
        />

        {/* Binding cord — top */}
        <div className="absolute top-10 left-0 right-0">
          <CordRow />
        </div>
        {/* Binding cord — bottom */}
        <div className="absolute bottom-10 left-0 right-0">
          <CordRow />
        </div>

        {/* ── Text area ──────────────────────────────────────────────── */}
        <div
          className="relative z-10 px-8 sm:px-14 md:px-20 py-16 md:py-20"
          style={{ perspective: "900px" }}
        >
          {/* Header row */}
          <div className="flex items-center justify-between mb-3">
            <span
              className="font-serif text-lg tracking-[0.3em]"
              style={{ color: "#5B2800", opacity: 0.62 }}
            >
              ॥ ശ്രീ ॥
            </span>
            <span
              className="font-sans text-[11px] tabular-nums"
              style={{ color: "#7A4A18", opacity: 0.8 }}
            >
              <span className="font-semibold">{page + 1}</span>
              <span className="mx-0.5">/</span>
              <span>{TOTAL}</span>
            </span>
          </div>

          {/* Thin rule */}
          <div
            className="mb-5 h-px"
            style={{
              background:
                "linear-gradient(90deg,transparent,rgba(100,55,8,0.38) 18%,rgba(100,55,8,0.38) 82%,transparent)",
            }}
          />

          {/* Animated paragraph */}
          <div className="min-h-[180px] sm:min-h-[200px] flex flex-col justify-center">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={page}
                custom={dir}
                variants={flipVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full"
              >
                {page === 0 && (
                  <h3
                    className="font-serif text-lg sm:text-xl font-bold text-center mb-5"
                    style={{ color: "#3D1C02" }}
                  >
                    ഭക്തജനങ്ങളേ,
                  </h3>
                )}

                <p
                  className="font-sans text-[14px] sm:text-[16px] leading-[2.15]"
                  style={{
                    color: page === TOTAL - 1 ? "#5A3010" : "#2C1A0E",
                    fontStyle: page === TOTAL - 1 ? "italic" : "normal",
                    borderLeft:
                      page === TOTAL - 1
                        ? "2px solid rgba(122,74,24,0.35)"
                        : "none",
                    paddingLeft: page === TOTAL - 1 ? "14px" : undefined,
                  }}
                >
                  {page === 1 ? (
                    <>
                      <span className="font-semibold" style={{ color: "#7A3A00" }}>
                        മലയാള വർഷം 57-ൽ
                      </span>{" "}
                      സ്ഥാപിതമായി എന്ന് കരുതപ്പെടുന്ന ഈ ക്ഷേത്രത്തിന് ഏകദേശം{" "}
                      <span className="font-semibold" style={{ color: "#7A3A00" }}>
                        ആയിരത്തി ഇരുന്നൂറോളം വർഷങ്ങൾ
                      </span>{" "}
                      പഴക്കമുണ്ട്. ക്ഷേത്രത്തിന്റെ ഉൽപ്പത്തിയെക്കുറിച്ചുള്ള
                      ഐതിഹ്യം ഇപ്രകാരമാണ്.
                    </>
                  ) : (
                    PARAGRAPHS[page]
                  )}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thin rule */}
          <div
            className="mt-5 mb-3 h-px"
            style={{
              background:
                "linear-gradient(90deg,transparent,rgba(100,55,8,0.38) 18%,rgba(100,55,8,0.38) 82%,transparent)",
            }}
          />

          {/* Footer colophon */}
          <div className="h-6 flex items-center justify-center">
            <AnimatePresence>
              {page === TOTAL - 1 && (
                <motion.span
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 0.62, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="font-serif text-base tracking-[0.3em]"
                  style={{ color: "#5B2800" }}
                >
                  ॥ ഇതി ॥
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Bottom wooden end-cap */}
      <div
        className="h-[18px] rounded-b-sm mx-7"
        style={{
          background:
            "linear-gradient(180deg,#9E5E26 0%,#864A18 35%,#4E2808 100%)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.45)",
        }}
      />
    </div>
  );

  return (
    <section id="history" className="relative bg-[#160b0b] text-temple-white">
      {/* ── Ambient blobs ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 left-1/4 w-[640px] h-[640px] rounded-full bg-[#C89B3C]/5 blur-3xl" />
        <div className="absolute bottom-[5%] right-1/4 w-[520px] h-[520px] rounded-full bg-[#5B1717]/12 blur-3xl" />
      </div>

      {/* ── Section heading — scrolls away normally ───────────────────── */}
      <div className="relative z-10 pt-20 pb-10">
        <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="ക്ഷേത്രചരിത്രം"
            title="ചരിത്രവും ഐതിഹ്യവും"
            subtitle="ആയിരത്തി ഇരുന്നൂറോളം വർഷം പഴക്കമുള്ള വൈലപ്പിള്ളി ശ്രീകൃഷ്ണസ്വാമി ക്ഷേത്രത്തിന്റെ ഉൽപ്പത്തി ഐതിഹ്യവും ചരിത്ര വഴികളും"
            theme="dark"
          />
        </div>
      </div>

      {/* ══ Scroll container ════════════════════════════════════════════ */}
      <div
        ref={scrollRef}
        className="relative"
        style={{ height: `${CONTAINER_VH}vh` }}
      >
        {/* ── Sticky stage ─────────────────────────────────────────────
            position:sticky is now free to stick to the viewport because
            the parent <main> uses overflow-x:clip (not hidden).
        ─────────────────────────────────────────────────────────────── */}
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-4 sm:px-8 lg:px-12 py-6">

          {manuscript}

          {/* ── Progress pills ───────────────────────────────────────── */}
          <div className="flex items-center gap-[7px] mt-5">
            {PARAGRAPHS.map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  width: i === page ? 22 : 6,
                  backgroundColor:
                    i === page ? "#C89B3C" : "rgba(200,155,60,0.22)",
                }}
                transition={{ duration: 0.28 }}
                className="h-[5px] rounded-full"
              />
            ))}
          </div>

          {/* Scroll hint — page 0 only */}
          <AnimatePresence>
            {page === 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="mt-2.5 font-sans text-[10px] tracking-[0.18em] uppercase"
                style={{ color: "rgba(200,155,60,0.45)" }}
              >
                ↕ scroll to read
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Metadata strip ────────────────────────────────────────────── */}
      <div className="relative z-10 pt-8 pb-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-wrap items-center justify-center gap-5 sm:gap-10 font-sans text-[11px] text-temple-sandal/50 tracking-wide">
          {[
            ["സ്ഥാപിതം", "മലയാള വർഷം 57"],
            ["ഉൽഭവം", "ചെമ്മനാട് · ചമൂഴിക്കുന്നത്തുമന"],
            ["മൂർത്തി", "ശ്രീകൃഷ്ണ വിഗ്രഹം (അഞ്ചുശില)"],
          ].map(([label, value]) => (
            <span key={label} className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-temple-gold/45" />
              <span className="text-temple-gold/55">{label}:</span> {value}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
