"use client";

// Speaker notes, slide by slide, with the running clock. Not linked from the deck: open /notes on your phone.

import { ACCENT } from "@/lib/content";
import { useContent } from "@/lib/i18n";
import { SCENES } from "@/components/scenes";
import { LangToggle } from "@/components/LangToggle";

function mmss(min: number) {
  const s = Math.round(min * 60);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

export default function NotesPage() {
  const { NOTES, SCENE_TITLES, SITE, TIMING, UI } = useContent();
  const minutes = SCENES.map((s) => TIMING[s.id] ?? 0);
  const starts = minutes.map((_, i) => minutes.slice(0, i).reduce((a, b) => a + b, 0));
  const total = minutes.reduce((a, b) => a + b, 0);
  return (
    <main className="mx-auto min-h-screen max-w-3xl">
      <header className="flex items-center justify-between px-6 py-5" style={{ background: "#051609", color: "#F3F2EE" }}>
        <span className="esm-logo text-2xl">ESM</span>
        <div className="flex items-center">
          <span className="small">
            {SITE.key} · {UI.notes.title}
          </span>
          <LangToggle />
        </div>
      </header>
      <ol className="m-0 list-none p-0">
        {SCENES.map((s, i) => {
          const a = ACCENT[s.accent];
          const note = NOTES[s.id];
          const min = minutes[i];
          const start = starts[i];
          return (
            <li key={s.id} className="hair-b px-6 py-4">
              <div className="flex items-baseline gap-3">
                <span className="small tabular w-[3ch] opacity-70">{String(i + 1).padStart(2, "0")}</span>
                <span className="h-3 w-3 shrink-0 self-center" style={{ background: a.bg, outline: "1px solid #051609" }} aria-hidden />
                <span className="lead">{SCENE_TITLES[s.id]}</span>
              </div>
              <div className="small tabular mt-2 ml-[3ch] inline-block px-3 py-1" style={{ background: "#051609", color: "#F3F2EE" }}>
                ⏱ {mmss(start)} → {mmss(start + min)} · {mmss(min)}
              </div>
              <p className={`body mt-2 whitespace-pre-line pl-[3ch] ${note ? "" : "opacity-50"}`}>{note ?? UI.notes.none}</p>
            </li>
          );
        })}
      </ol>
      <footer className="flex justify-between px-6 py-5 small" style={{ background: "#051609", color: "#F3F2EE" }}>
        <span>
          {UI.notes.total} : {mmss(total)}
        </span>
        <span>{SITE.signature}</span>
      </footer>
    </main>
  );
}
