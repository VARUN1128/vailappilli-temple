
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Copy, Check, Landmark, Users } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

/* ─── Committee Data ─────────────────────────────────────────────────────── */

const COMMITTEE = [
  {
    role: "ചെയർമാൻ",
    name: "സി. ആർ. സുദർശൻ നമ്പൂതിരി",
    phone: "9946137262",
  },
  {
    role: "കൺവീനർ",
    name: "കൃഷ്ണകുമാർ വി. എ.",
    phone: "9747132591",
  },
  {
    role: "ജോ. കൺവീനർ",
    name: "ശ്രീകുമാർ എസ്. പിള്ള",
    phone: "9539037270",
  },
  {
    role: "ജോ. കൺവീനർ",
    name: "രാജേഷ് കെ. ആർ.",
    phone: "9447189764",
  },
];

/* ─── Bank Details ───────────────────────────────────────────────────────── */

const BANKS = [
  {
    name: "Amballoor Service Co-operative Bank Ltd.",
    fields: [
      { label: "ബ്രാഞ്ച് നമ്പർ", value: "502" },
      { label: "അക്കൗണ്ട് നമ്പർ", value: "4972" },
      {
        label: "അക്കൗണ്ട് ഉടമ",
        value: "KSHETRA PUNARUDHARANA SAMITHY",
      },
    ],
  },
  {
    name: "State Bank of India (SBI)",
    fields: [
      { label: "ബ്രാഞ്ച്", value: "Mulanthuruthy" },
      { label: "അക്കൗണ്ട് നമ്പർ", value: "57035552585" },
      { label: "IFSC", value: "SBIN0070334" },
      {
        label: "അക്കൗണ്ട് ഉടമ",
        value: "Vailappilly Sreekrishna Kshethra Samrakshana Samithy",
      },
    ],
  },
];

/* ─── Animation ───────────────────────────────────────────────────────────── */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: {
    duration: 0.65,
    ease: "easeOut" as const,
    delay,
  },
});

/* ─── Copy Button ─────────────────────────────────────────────────────────── */

function CopyBtn({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access may be unavailable in some browsers.
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      title={`${text} പകർത്തുക`}
      aria-label={`${text} പകർത്തുക`}
      className={`ml-2 p-1 rounded transition-all duration-300 shrink-0 ${copied
          ? "text-emerald-400 bg-emerald-400/10"
          : "text-temple-gold/50 hover:text-temple-gold hover:bg-temple-gold/10"
        }`}
    >
      {copied ? <Check size={13} /> : <Copy size={13} />}
    </button>
  );
}

/* ─── Main Component ──────────────────────────────────────────────────────── */

export default function CommitteeSection() {
  return (
    <section
      id="committee"
      className="relative py-20 md:py-28 bg-[#110808] text-temple-white overflow-hidden"
    >
      {/* Ambient background decorations */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-temple-gold/4 blur-3xl" />
        <div className="absolute bottom-0 left-1/5 w-[450px] h-[450px] rounded-full bg-[#5B1717]/15 blur-3xl" />
      </div>

      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <SectionHeading
          eyebrow="ക്ഷേത്ര പുനരുദ്ധാരണ സമിതി"
          title="ഭാരവാഹികളും ബാങ്ക് വിവരങ്ങളും"
          subtitle="ക്ഷേത്ര നവീകരണ പ്രവർത്തനങ്ങൾക്കായി രൂപീകരിച്ച ഭരണ സമിതി അംഗങ്ങളും സംഭാവനയ്ക്കുള്ള ബാങ്ക് വിവരങ്ങളും"
          theme="dark"
        />

        <div className="max-w-5xl mx-auto space-y-14">
          {/* ─── Committee Members ──────────────────────────────────────── */}

          <motion.div {...fadeUp(0)}>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-temple-gold/15 border border-temple-gold/35">
                <Users size={16} className="text-temple-gold" />
              </span>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-temple-ivory">
                ഭാരവാഹികൾ
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {COMMITTEE.map((member, i) => (
                <motion.div
                  key={member.phone}
                  {...fadeUp(i * 0.08)}
                  className="group relative rounded-xl overflow-hidden"
                >
                  <div className="h-[2px] bg-gradient-to-r from-transparent via-temple-gold/70 to-transparent" />

                  <div className="bg-[#5B1717]/30 border border-temple-gold/20 border-t-0 rounded-b-xl p-5 flex items-start gap-4 hover:bg-[#5B1717]/45 transition-colors duration-300">
                    <span className="mt-0.5 flex items-center justify-center w-8 h-8 rounded-full bg-temple-gold/10 border border-temple-gold/30 shrink-0 font-sans text-[11px] font-bold text-temple-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-temple-gold/65 mb-0.5">
                        {member.role}
                      </p>

                      <p className="font-serif text-[17px] sm:text-[18px] font-semibold text-temple-sandal leading-snug mb-2">
                        {member.name}
                      </p>

                      <a
                        href={`tel:+91${member.phone}`}
                        className="inline-flex items-center gap-1.5 font-sans text-sm text-temple-gold hover:text-temple-gold-light transition-colors duration-200"
                      >
                        <Phone size={13} />
                        {member.phone}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ─── Decorative Divider ────────────────────────────────────── */}

          <motion.div
            {...fadeUp(0.3)}
            className="h-px max-w-xs mx-auto"
            style={{
              background:
                "linear-gradient(90deg,transparent,rgba(200,155,60,0.35) 30%,rgba(200,155,60,0.35) 70%,transparent)",
            }}
          />

          {/* ─── Bank Details ──────────────────────────────────────────── */}

          <motion.div {...fadeUp(0.35)}>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-temple-gold/15 border border-temple-gold/35">
                <Landmark size={16} className="text-temple-gold" />
              </span>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-temple-ivory">
                ബാങ്ക് വിവരങ്ങൾ
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {BANKS.map((bank, bi) => (
                <motion.div
                  key={bank.name}
                  {...fadeUp(0.38 + bi * 0.1)}
                  className="rounded-xl overflow-hidden"
                >
                  <div className="h-[2px] bg-gradient-to-r from-transparent via-temple-gold/60 to-transparent" />

                  <div className="bg-[#3a1010]/40 border border-temple-gold/20 border-t-0 rounded-b-xl p-5 sm:p-6">
                    <div className="flex items-start gap-2.5 mb-5">
                      <span className="mt-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-temple-gold/20 text-temple-gold font-bold text-xs shrink-0">
                        {bi + 1}
                      </span>

                      <h4 className="font-serif text-[15px] sm:text-[16px] font-bold text-temple-gold-light leading-snug">
                        {bank.name}
                      </h4>
                    </div>

                    <div className="space-y-3">
                      {bank.fields.map((field) => (
                        <div
                          key={field.label}
                          className="flex items-start justify-between gap-3 py-2 border-b border-temple-gold/10 last:border-0"
                        >
                          <span className="font-sans text-[11px] text-temple-muted shrink-0 pt-0.5 min-w-[100px] sm:min-w-[110px]">
                            {field.label}
                          </span>

                          <div className="flex items-start gap-0.5 flex-1 justify-end min-w-0">
                            <span className="font-sans text-[13px] sm:text-[14px] font-medium text-temple-sandal text-right break-all">
                              {field.value}
                            </span>

                            <CopyBtn text={field.value} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Donation note */}

            <motion.p
              {...fadeUp(0.55)}
              className="mt-6 text-center font-sans text-[12px] text-temple-sandal/50 italic"
            >
              സംഭാവന നൽകിയ ശേഷം ഭാരവാഹികളെ ബന്ധപ്പെട്ട് അറിയിക്കുക.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
