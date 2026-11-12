"use client";

import { ReactNode, useState } from "react";
import { ACCENT, Accent, SITE } from "@/lib/content";
import { useContent } from "@/lib/i18n";

/** Full-scene background block. Children lay out inside; the footer carries the ESM logotype. */
export function Scene({
  accent = "clair",
  children,
  className = "",
  padded = true,
}: {
  accent?: Accent;
  children: ReactNode;
  className?: string;
  padded?: boolean;
}) {
  const a = ACCENT[accent];
  return (
    <section
      className={`animate-scene-in relative flex h-full w-full flex-col ${a.className} ${className}`}
      style={{ background: a.bg, color: a.fg }}
    >
      <div className={`relative flex min-h-0 flex-1 flex-col overflow-y-auto ${padded ? "px-[5vw] pt-[4vh] pb-[2vh]" : ""}`}>
        {children}
      </div>
      <Footer />
    </section>
  );
}

export function Footer() {
  return (
    <div className="flex shrink-0 items-end justify-between px-[5vw] pb-[2.5vh] pt-2">
      <span className="esm-logo text-[clamp(1.4rem,2.2vw,2.2rem)]">ESM</span>
      <span className="small">{SITE.signature}</span>
    </div>
  );
}

/** Dark seagull on light backgrounds, white on heritage blue / black. */
export function Seagull({ accent, className = "", style }: { accent: Accent; className?: string; style?: React.CSSProperties }) {
  const white = accent === "bleu" || accent === "noir";
  return (
    // eslint-disable-next-line @next/next/no-img-element -- static SVG asset, next/image adds nothing
    <img
      src={white ? "/seagull/seagull-flying-white.svg" : "/seagull/seagull-flying-black.svg"}
      alt=""
      aria-hidden
      className={`animate-glide block h-auto ${className}`}
      style={style}
    />
  );
}

export function Kicker({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`lead mb-[1.5vh] opacity-90 ${className}`}>{children}</div>;
}

export function Title({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h1 className={`display-title ${className}`}>{children}</h1>;
}

export function H2({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h2 className={`h2 ${className}`}>{children}</h2>;
}

/** A coloured block for the modular grid. Text colour is locked to the background. */
export function Block({
  accent,
  children,
  className = "",
  style,
}: {
  accent: Accent;
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const a = ACCENT[accent];
  return (
    <div className={`${a.className} ${className}`} style={{ background: a.bg, color: a.fg, ...style }}>
      {children}
    </div>
  );
}

/** Ordered list with big numerals, ESM style. */
export function NumberedList({ items, className = "" }: { items: { title: string; line?: string }[]; className?: string }) {
  return (
    <ol className={`m-0 list-none p-0 ${className}`}>
      {items.map((it, i) => (
        <li key={i} className="hair-t flex gap-[2vw] py-[1.6vh] first:border-t-0">
          <span className="h3 w-[3ch] shrink-0 tabular">{String(i + 1).padStart(2, "0")}</span>
          <div>
            <div className="lead">{it.title}</div>
            {it.line && <div className="body opacity-90">{it.line}</div>}
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Screenshot of a post, with a text fallback while the image is not in public/img yet. */
export function TweetCard({
  src,
  alt,
  caption,
  url,
  imgClassName = "max-h-[52vh]",
}: {
  src: string;
  alt: string;
  caption: string;
  url: string;
  imgClassName?: string;
}) {
  const { UI } = useContent();
  const [missing, setMissing] = useState(false);
  return (
    <figure className="m-0 flex flex-col">
      {missing ? (
        <div className="bg-clair body p-[2vw]" style={{ background: "#F3F2EE", color: "#051609" }}>
          <p className="m-0">{alt}</p>
          <p className="small mt-3 m-0 opacity-70">{UI.tweetFallback}</p>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element -- static screenshot, next/image adds nothing
        <img src={src} alt={alt} className={`block h-auto w-full object-contain object-left ${imgClassName}`} onError={() => setMissing(true)} />
      )}
      <figcaption className="small mt-2 flex justify-between gap-4">
        <span>{caption}</span>
        <a href={url} target="_blank" rel="noreferrer" className="underline">
          {UI.seePost}
        </a>
      </figcaption>
    </figure>
  );
}
