"use client";

import { useEffect } from "react";
import { useLang } from "@/lib/i18n";
import { CONTENT, Lang } from "@/lib/lang";

// Drawn flags: Windows does not render flag emojis (it shows "FR" / "GB" letters instead).
export function FlagFR({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 3 2" className={className} aria-hidden>
      <rect width="1" height="2" fill="#002654" />
      <rect x="1" width="1" height="2" fill="#FFFFFF" />
      <rect x="2" width="1" height="2" fill="#CE1126" />
    </svg>
  );
}

export function FlagGB({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 30" className={className} aria-hidden>
      <clipPath id="gb-diag">
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#gb-diag)" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#FFFFFF" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

const FLAGS: { lang: Lang; Flag: typeof FlagFR }[] = [
  { lang: "fr", Flag: FlagFR },
  { lang: "en", Flag: FlagGB },
];

/** 🇫🇷 🇬🇧 switch. The active language is at full opacity. */
export function LangToggle() {
  const { lang, setLang } = useLang();

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="flex items-center gap-2 px-3">
      {FLAGS.map(({ lang: l, Flag }) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          title={CONTENT[l].UI.langName}
          className={`flex items-center transition-opacity ${lang === l ? "opacity-100" : "opacity-40 hover:opacity-80"}`}
        >
          <Flag className="block h-[14px] w-[21px]" />
        </button>
      ))}
    </div>
  );
}
