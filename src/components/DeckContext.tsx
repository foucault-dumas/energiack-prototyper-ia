"use client";

// Slide navigation, lightened from cas-ia-ESM: keyboard, URL hash, scene menu, full screen.
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

type DeckState = {
  sceneIndex: number;
  sceneCount: number;
  setSceneCount: (n: number) => void;
  goNext: () => void;
  goPrev: () => void;
  goTo: (i: number) => void;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  toggleFullscreen: () => void;
};

const Ctx = createContext<DeckState | null>(null);

export function useDeck() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useDeck must be used within DeckProvider");
  return v;
}

function toggleFullscreen() {
  if (document.fullscreenElement) void document.exitFullscreen();
  else void document.documentElement.requestFullscreen?.();
}

export function DeckProvider({ children }: { children: React.ReactNode }) {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [sceneCount, setSceneCount] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  // Restore the scene from the URL hash so a refresh keeps the place. The hash is only
  // written once the restore has happened, otherwise "#6" would be overwritten with "#0".
  const hashRestored = useRef(false);
  useEffect(() => {
    const h = parseInt(window.location.hash.replace("#", ""), 10);
    if (Number.isNaN(h) || h <= 0) {
      hashRestored.current = true;
      return;
    }
    const t = setTimeout(() => {
      setSceneIndex(h);
      hashRestored.current = true;
    }, 0);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    if (!hashRestored.current) return;
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#${sceneIndex}`);
  }, [sceneIndex]);

  const goTo = useCallback(
    (i: number) => {
      setSceneIndex(Math.max(0, Math.min(sceneCount - 1, i)));
      setMenuOpen(false);
    },
    [sceneCount],
  );
  const goNext = useCallback(() => setSceneIndex((i) => Math.min(sceneCount - 1, i + 1)), [sceneCount]);
  const goPrev = useCallback(() => setSceneIndex((i) => Math.max(0, i - 1)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "Home") {
        goTo(0);
      } else if (e.key === "End") {
        goTo(sceneCount - 1);
      } else if (e.key === "m" || e.key === "M") {
        setMenuOpen((v) => !v);
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      } else if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev, goTo, sceneCount]);

  const value = useMemo<DeckState>(
    () => ({ sceneIndex, sceneCount, setSceneCount, goNext, goPrev, goTo, menuOpen, setMenuOpen, toggleFullscreen }),
    [sceneIndex, sceneCount, goNext, goPrev, goTo, menuOpen],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
