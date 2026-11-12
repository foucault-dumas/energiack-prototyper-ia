"use client";

import { useEffect } from "react";
import { DeckProvider, useDeck } from "@/components/DeckContext";
import { Hud, SceneMenu } from "@/components/Hud";
import { SCENES } from "@/components/scenes";
import { useContent } from "@/lib/i18n";

function NavArrow({ dir }: { dir: "prev" | "next" }) {
  const { goPrev, goNext, sceneIndex, sceneCount } = useDeck();
  const { UI } = useContent();
  const disabled = dir === "prev" ? sceneIndex === 0 : sceneIndex === sceneCount - 1;
  return (
    <button
      onClick={dir === "prev" ? goPrev : goNext}
      disabled={disabled}
      aria-label={dir === "prev" ? UI.previous : UI.next}
      className={`fixed top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-2xl opacity-0 transition-opacity hover:opacity-100 focus-visible:opacity-100 disabled:pointer-events-none ${dir === "prev" ? "left-0" : "right-0"}`}
      style={{ background: "#051609", color: "#F3F2EE" }}
    >
      {dir === "prev" ? "←" : "→"}
    </button>
  );
}

function Stage() {
  const { sceneIndex, setSceneCount } = useDeck();
  useEffect(() => {
    setSceneCount(SCENES.length);
  }, [setSceneCount]);
  const scene = SCENES[Math.min(sceneIndex, SCENES.length - 1)];
  return (
    <main className="deck flex h-dvh w-screen flex-col">
      <Hud />
      <div key={scene.id} className="min-h-0 flex-1">
        {scene.node}
      </div>
      <NavArrow dir="prev" />
      <NavArrow dir="next" />
      <SceneMenu />
    </main>
  );
}

export default function Page() {
  return (
    <DeckProvider>
      <Stage />
    </DeckProvider>
  );
}
