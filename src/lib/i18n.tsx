"use client";

// The language lives in the URL (?lang=en, French by default), so a refresh or a shared link keeps it,
// and switching does not reset the deck (scene, scores, timers).
import { useCallback, useSyncExternalStore } from "react";
import { CONTENT, Lang, parseLang } from "./lang";

const EVENT = "langchange";

function subscribe(cb: () => void) {
  window.addEventListener(EVENT, cb);
  window.addEventListener("popstate", cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener("popstate", cb);
  };
}
const getLang = () => parseLang(new URLSearchParams(window.location.search).get("lang"));
const getServerLang = (): Lang => "fr";

export function useLang() {
  const lang = useSyncExternalStore(subscribe, getLang, getServerLang);
  const setLang = useCallback((next: Lang) => {
    const url = new URL(window.location.href);
    if (next === "en") url.searchParams.set("lang", "en");
    else url.searchParams.delete("lang");
    window.history.replaceState(null, "", url);
    window.dispatchEvent(new Event(EVENT));
  }, []);
  return { lang, setLang };
}

export function useContent() {
  return CONTENT[useLang().lang];
}
