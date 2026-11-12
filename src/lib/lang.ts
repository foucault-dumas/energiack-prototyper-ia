// Language table, usable from server and client code. French is the default; ?lang=en switches to English.
import * as EN from "./content";
import * as FR from "./content.fr";

export type Lang = "en" | "fr";
export type Content = typeof EN;

// Typed as Content: if content.fr.ts misses an export, or one has the wrong shape, this line fails.
export const CONTENT: Record<Lang, Content> = { en: EN, fr: FR };

export function parseLang(v: string | string[] | null | undefined): Lang {
  return v === "en" ? "en" : "fr";
}

/** Adds ?lang=en to a path when needed. */
export function withLang(path: string, lang: Lang) {
  return lang === "en" ? `${path}?lang=en` : path;
}
