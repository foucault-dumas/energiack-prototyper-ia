"use client";

import { ReactNode, useSyncExternalStore } from "react";
import type { Accent } from "@/lib/content";
import { useContent } from "@/lib/i18n";
import { Block, H2, Kicker, NumberedList, Scene, Seagull, Title, TweetCard } from "./ui";
import { LocalDiagram } from "./LocalDiagram";

// One entry per slide. Titles (menu, HUD, /notes) live in content*.ts → SCENE_TITLES.
export type SceneDef = { id: string; accent: Accent; node: ReactNode };

/* ---------- 1 · cover ---------- */

function CoverScene() {
  const { SITE, COVER } = useContent();
  return (
    <Scene accent="violet" padded={false}>
      <div className="esm-grid h-full grid-cols-12 grid-rows-[auto_1fr]">
        <div className="col-span-12 flex items-start justify-end p-[3vw]">
          <Seagull accent="violet" className="w-[min(18vw,16rem)]" />
        </div>
        <div className="col-span-12 flex flex-col justify-end px-[5vw] pb-[2vh]">
          <div className="lead">{COVER.kicker}</div>
          <Title className="mt-[1vh] max-w-[16ch] text-[clamp(2.75rem,7vw,8rem)]">{SITE.title}</Title>
          <p className="lead mt-[2vh] max-w-[52ch]">{SITE.subtitle}</p>
          <p className="body mt-[2vh]">
            {SITE.speaker} · {SITE.role}
            <br />
            {SITE.date}
          </p>
        </div>
      </div>
    </Scene>
  );
}

/* ---------- 2 · two things to remember ---------- */

function TakeawaysScene() {
  const { TAKEAWAYS } = useContent();
  const accents: Accent[] = ["vert", "lavande"];
  return (
    <Scene accent="clair">
      <Kicker>{TAKEAWAYS.kicker}</Kicker>
      <Title>{TAKEAWAYS.title}</Title>
      <div className="esm-grid mt-[4vh] flex-1 grid-cols-1 md:grid-cols-2">
        {TAKEAWAYS.items.map((it, i) => (
          <Block key={i} accent={accents[i]} className="flex flex-col justify-between p-[3vw]">
            <span className="display-title tabular">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <div className="h2">{it.title}</div>
              <p className="lead mt-[2vh] opacity-90">{it.line}</p>
            </div>
          </Block>
        ))}
      </div>
    </Scene>
  );
}

/* ---------- 3 · vibe coding + the post ---------- */

function VibeScene() {
  const { VIBE } = useContent();
  return (
    <Scene accent="vert">
      <div className="esm-grid min-h-0 flex-1 grid-cols-1 md:grid-cols-12">
        <div className="flex flex-col justify-center pr-[3vw] md:col-span-5">
          <Kicker>{VIBE.kicker}</Kicker>
          <Title className="text-[clamp(2.5rem,5.5vw,6rem)]">{VIBE.title}</Title>
          <p className="lead mt-[3vh]">{VIBE.lead}</p>
          <p className="h3 mt-[4vh]">{VIBE.punch}</p>
        </div>
        <div className="flex flex-col justify-center md:col-span-7">
          <TweetCard {...VIBE.tweet} />
        </div>
      </div>
    </Scene>
  );
}

/* ---------- 4 · the right tool for the right question ---------- */

function ToolsScene() {
  const { TOOLS } = useContent();
  const last = TOOLS.rows.length - 1;
  return (
    <Scene accent="clair">
      <Kicker>{TOOLS.kicker}</Kicker>
      <H2>{TOOLS.title}</H2>
      <div className="mt-[3vh] flex min-h-0 flex-1 flex-col">
        <Block accent="noir" className="esm-grid small grid-cols-12 px-[1.5vw] py-[1vh]">
          <span className="col-span-4 pr-[3vw]">{TOOLS.head.question}</span>
          <span className="col-span-4 pr-[3vw]">{TOOLS.head.tool}</span>
          <span className="col-span-4">{TOOLS.head.why}</span>
        </Block>
        {TOOLS.rows.map((r, i) => (
          <Block
            key={i}
            accent={i === last ? "vert" : "clair"}
            className={`esm-grid flex-1 grid-cols-12 items-center gap-y-1 px-[1.5vw] py-[1.4vh] ${i === last ? "" : "hair-b"}`}
          >
            <span className="lead col-span-12 md:col-span-4 md:pr-[3vw]">{r.question}</span>
            <span className="h3 col-span-12 md:col-span-4 md:pr-[3vw]">{r.tool}</span>
            <span className="body col-span-12 md:col-span-4">{r.why}</span>
          </Block>
        ))}
      </div>
    </Scene>
  );
}

/* ---------- 5 · the method ---------- */

function MethodScene() {
  const { METHOD } = useContent();
  return (
    <Scene accent="clair">
      <div className="esm-grid min-h-0 flex-1 grid-cols-1 md:grid-cols-12">
        <div className="flex flex-col justify-center pr-[3vw] md:col-span-5">
          <Title className="text-[clamp(2.5rem,5.5vw,6rem)]">{METHOD.title}</Title>
        </div>
        <div className="flex flex-col justify-center md:col-span-7">
          <NumberedList items={METHOD.items} />
        </div>
      </div>
    </Scene>
  );
}

/* ---------- 6 · demo ---------- */

function DemoScene() {
  const { DEMO } = useContent();
  return (
    <Scene accent="bleu">
      <div className="esm-grid grid-cols-12">
        <div className="col-span-12 md:col-span-9">
          <Kicker>{DEMO.kicker}</Kicker>
          <Title>{DEMO.title}</Title>
        </div>
        <div className="col-span-3 hidden items-start justify-end md:flex">
          <Seagull accent="bleu" className="w-[75%]" />
        </div>
      </div>
      <ol className="esm-grid m-0 mt-[5vh] list-none grid-cols-1 p-0 md:grid-cols-4">
        {DEMO.steps.map((s, i) => (
          <li key={i} className="hair flex flex-col gap-[1vh] p-[1.6vw]">
            <span className="h2 tabular">{String(i + 1).padStart(2, "0")}</span>
            <span className="lead">{s}</span>
          </li>
        ))}
      </ol>
      <p className="lead mt-[4vh] max-w-[60ch]">{DEMO.line}</p>
      <p className="body mt-[1.5vh] opacity-90">{DEMO.interfaces}</p>
    </Scene>
  );
}

/* ---------- 7 · three datasets ---------- */

function DataScene() {
  const { DATA } = useContent();
  const accents: Accent[] = ["vert", "lavande", "rose"];
  return (
    <Scene accent="clair">
      <Kicker>{DATA.kicker}</Kicker>
      <H2>{DATA.title}</H2>
      <div className="esm-grid mt-[3vh] min-h-0 flex-1 grid-cols-1 md:grid-cols-3">
        {DATA.cards.map((c, i) => (
          <Block key={i} accent={accents[i]} className="flex flex-col p-[2.2vw]">
            <span className="small font-medium">{c.tag}</span>
            <span className="h2 mt-[1.5vh]">{c.name}</span>
            <p className="body mt-[1.5vh]">{c.body}</p>
            <p className="lead hair-t mt-auto pt-[1.5vh]">{c.rule}</p>
          </Block>
        ))}
      </div>
      <p className="body mt-[2.5vh]">{DATA.footer}</p>
    </Scene>
  );
}

/* ---------- 8 · the addendum ---------- */

function AvenantScene() {
  const { AVENANT } = useContent();
  return (
    <Scene accent="clair">
      <div className="esm-grid min-h-0 flex-1 grid-cols-1 md:grid-cols-12">
        <div className="flex flex-col pr-[3vw] md:col-span-8">
          <Kicker>{AVENANT.kicker}</Kicker>
          <H2>{AVENANT.title}</H2>
          <div className="esm-grid mt-[3vh] flex-1 grid-cols-1 md:grid-cols-2">
            {AVENANT.items.map((it, i) => (
              <div key={i} className="hair-t flex flex-col gap-[1vh] py-[2vh] pr-[2vw]">
                <span className="h3 tabular">{String(i + 1).padStart(2, "0")}</span>
                <span className="h3">{it.title}</span>
                <span className="body">{it.line}</span>
              </div>
            ))}
          </div>
        </div>
        <Block accent="orange" className="flex flex-col justify-end p-[2.5vw] md:col-span-4">
          <span className="h2">{AVENANT.boxTitle}</span>
          <p className="lead mt-[2vh]">{AVENANT.box}</p>
        </Block>
      </div>
    </Scene>
  );
}

/* ---------- 9 · turn training off ---------- */

function SettingsScene() {
  const { SETTINGS } = useContent();
  const accents: Accent[] = ["vert", "lavande"];
  return (
    <Scene accent="clair">
      <Kicker>{SETTINGS.kicker}</Kicker>
      <H2>{SETTINGS.title}</H2>
      <div className="esm-grid mt-[3vh] min-h-0 flex-1 grid-cols-1 md:grid-cols-2">
        {SETTINGS.cols.map((c, i) => (
          <Block key={i} accent={accents[i]} className="flex flex-col p-[2.5vw]">
            <span className="h2">{c.name}</span>
            <span className="small mt-[0.5vh]">{c.scope}</span>
            <p className="lead mt-[3vh]">{c.how}</p>
            <a href={`https://${c.link}`} target="_blank" rel="noreferrer" className="lead mt-[1.5vh] break-words underline">
              {c.link}
            </a>
            {c.extra && <p className="body mt-[2vh]">{c.extra}</p>}
            <p className="body hair-t mt-auto pt-[1.5vh]">{c.pro}</p>
          </Block>
        ))}
      </div>
    </Scene>
  );
}

/* ---------- 10 · rules of use ---------- */

function RulesScene() {
  const { RULES } = useContent();
  return (
    <Scene accent="lavande">
      <div className="esm-grid min-h-0 flex-1 grid-cols-1 md:grid-cols-12">
        <div className="flex flex-col justify-center pr-[3vw] md:col-span-5">
          <Kicker>{RULES.kicker}</Kicker>
          <Title className="text-[clamp(2.5rem,5.5vw,6rem)]">{RULES.title}</Title>
        </div>
        <div className="flex flex-col justify-center md:col-span-7">
          <NumberedList items={RULES.items} />
        </div>
      </div>
    </Scene>
  );
}

/* ---------- 11 · 100% local ---------- */

function LocalScene() {
  const { LOCAL } = useContent();
  return (
    <Scene accent="noir">
      <div className="esm-grid min-h-0 flex-1 grid-cols-1 md:grid-cols-12">
        <div className="flex flex-col justify-center pr-[3vw] md:col-span-4">
          <Kicker>{LOCAL.kicker}</Kicker>
          <H2>{LOCAL.title}</H2>
          <p className="lead mt-[3vh]">{LOCAL.lead}</p>
          <p className="body mt-[3vh] opacity-90">{LOCAL.who}</p>
        </div>
        <div className="flex min-h-0 items-center md:col-span-8">
          <LocalDiagram />
        </div>
      </div>
    </Scene>
  );
}

/* ---------- 12 · prototype ≠ product ---------- */

function ProtoScene() {
  const { PROTO } = useContent();
  return (
    <Scene accent="rose">
      <div className="esm-grid min-h-0 flex-1 grid-cols-1 md:grid-cols-12">
        <div className="flex flex-col justify-center pr-[3vw] md:col-span-6">
          <Kicker>{PROTO.kicker}</Kicker>
          <Title className="text-[clamp(2.5rem,5.5vw,6rem)]">{PROTO.title}</Title>
          <p className="lead mt-[3vh]">{PROTO.lead}</p>
        </div>
        <div className="flex flex-col md:col-span-6">
          <Block accent="clair" className="flex-1 p-[2.5vw]">
            <span className="h3">{PROTO.listTitle}</span>
            <ul className="m-0 mt-[2vh] list-none p-0">
              {PROTO.list.map((l, i) => (
                <li key={i} className="body hair-t py-[1.1vh] first:border-t-0">
                  — {l}
                </li>
              ))}
            </ul>
          </Block>
          <Block accent="noir" className="p-[2.5vw]">
            <span className="h3">{PROTO.pitchTitle}</span>
            <p className="lead mt-[1vh]">{PROTO.pitch}</p>
          </Block>
        </div>
      </div>
    </Scene>
  );
}

/* ---------- 13 · let's hack ---------- */

const noop = () => () => {};

function CloseScene() {
  const { CLOSE, SITE } = useContent();
  // The address the room is looking at, once deployed (empty during server rendering).
  const host = useSyncExternalStore(noop, () => window.location.host, () => "");
  return (
    <Scene accent="violet" padded={false}>
      <div className="esm-grid h-full grid-cols-12">
        <div className="col-span-12 flex flex-col justify-end px-[5vw] py-[4vh] md:col-span-8">
          <Title className="text-[clamp(4rem,12vw,13rem)]">{CLOSE.title}</Title>
          <p className="lead mt-[3vh] max-w-[40ch]">{CLOSE.line}</p>
          <p className="body mt-[3vh]">
            {SITE.event} · {SITE.speaker}
            {host && !host.startsWith("localhost") && (
              <>
                <br />
                <span className="lead">{host}</span>
              </>
            )}
          </p>
        </div>
        <div className="col-span-4 hidden items-center justify-center p-[3vw] md:flex">
          <Seagull accent="violet" className="w-[90%]" />
        </div>
      </div>
    </Scene>
  );
}

export const SCENES: SceneDef[] = [
  { id: "cover", accent: "violet", node: <CoverScene /> },
  { id: "takeaways", accent: "clair", node: <TakeawaysScene /> },
  { id: "vibe", accent: "vert", node: <VibeScene /> },
  { id: "tools", accent: "clair", node: <ToolsScene /> },
  { id: "method", accent: "clair", node: <MethodScene /> },
  { id: "demo", accent: "bleu", node: <DemoScene /> },
  { id: "data", accent: "clair", node: <DataScene /> },
  { id: "avenant", accent: "clair", node: <AvenantScene /> },
  { id: "settings", accent: "clair", node: <SettingsScene /> },
  { id: "rules", accent: "lavande", node: <RulesScene /> },
  { id: "local", accent: "noir", node: <LocalScene /> },
  { id: "proto", accent: "rose", node: <ProtoScene /> },
  { id: "close", accent: "violet", node: <CloseScene /> },
];
