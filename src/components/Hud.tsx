"use client";

import { ACCENT } from "@/lib/content";
import { useContent } from "@/lib/i18n";
import { useDeck } from "./DeckContext";
import { LangToggle } from "./LangToggle";
import { SCENES } from "./scenes";

/** Thin black bar: talk key, scene title, counter, full screen, language. A progress line underneath. */
export function Hud() {
  const { sceneIndex, sceneCount, setMenuOpen, toggleFullscreen } = useDeck();
  const { SITE, SCENE_TITLES, UI } = useContent();
  const scene = SCENES[sceneIndex] ?? SCENES[0];
  const a = ACCENT[scene.accent === "clair" ? "violet" : scene.accent];
  const progress = sceneCount > 1 ? (sceneIndex / (sceneCount - 1)) * 100 : 0;

  return (
    <header className="relative shrink-0" style={{ background: "#051609", color: "#F3F2EE" }}>
      <div className="flex h-[44px] items-stretch">
        <div className="flex items-center px-4 font-medium" style={{ background: a.bg, color: a.fg }}>
          <span className="small">{SITE.key}</span>
        </div>
        <div className="flex min-w-0 flex-1 items-center px-4">
          <span className="small truncate">{SCENE_TITLES[scene.id]}</span>
        </div>
        <button className="small tabular px-4 hover:bg-white/10" onClick={() => setMenuOpen(true)} title={UI.menu}>
          {sceneIndex + 1} / {sceneCount}
        </button>
        <button className="small hidden px-3 hover:bg-white/10 md:block" onClick={toggleFullscreen} title={UI.fullscreen} aria-label={UI.fullscreen}>
          ⛶
        </button>
        <LangToggle />
      </div>
      <div className="h-[3px] w-full" style={{ background: "rgba(243,242,238,0.15)" }} aria-hidden>
        <div className="h-full transition-[width] duration-300" style={{ width: `${progress}%`, background: "#96CEB3" }} />
      </div>
    </header>
  );
}

export function SceneMenu() {
  const { menuOpen, setMenuOpen, goTo, sceneIndex } = useDeck();
  const { SCENE_TITLES, UI } = useContent();
  if (!menuOpen) return null;
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" style={{ background: "#051609", color: "#F3F2EE" }} onClick={() => setMenuOpen(false)}>
      <div className="mx-auto max-w-5xl px-[5vw] py-[5vh]" onClick={(e) => e.stopPropagation()}>
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="h2">{UI.goTo}</h2>
          <span className="small opacity-70">{UI.escToClose}</span>
        </div>
        <div className="esm-grid grid-cols-1 md:grid-cols-2">
          {SCENES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              className={`flex items-center gap-3 px-4 py-3 text-left hover:bg-white/10 ${i === sceneIndex ? "bg-white/15" : ""}`}
            >
              <span className="small tabular w-[3ch] opacity-70">{String(i + 1).padStart(2, "0")}</span>
              <span className="h-3 w-3 shrink-0" style={{ background: ACCENT[s.accent].bg, outline: "1px solid rgba(243,242,238,0.4)" }} aria-hidden />
              <span className="body">{SCENE_TITLES[s.id]}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
