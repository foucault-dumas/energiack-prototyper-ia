// English copy of the talk "Prototyping with AI in two days", Energ-IACK 2026, Key 3 · AI.
// French is the default language: content.fr.ts has exactly the same exports, this file is its translation.
// ESM brandbook 2026: see the branding-esm skill. Facts checked on 12.11.2026 (sources in NOTES).

export type Accent = "violet" | "vert" | "bleu" | "orange" | "rose" | "lavande" | "noir" | "clair";

export const ESM = {
  bleu: "#003284",
  violet: "#725FE0",
  vert: "#96CEB3",
  rose: "#F19DF6",
  orange: "#DF5727",
  lavande: "#B3AFD3",
  noir: "#051609",
  clair: "#F3F2EE",
  blanc: "#FFFFFF",
} as const;

/** Background hex + the only text colour allowed on it (brandbook contrast rules). */
export const ACCENT: Record<Accent, { bg: string; fg: string; className: string }> = {
  violet: { bg: ESM.violet, fg: ESM.blanc, className: "bg-violet" },
  vert: { bg: ESM.vert, fg: ESM.noir, className: "bg-vert" },
  bleu: { bg: ESM.bleu, fg: ESM.blanc, className: "bg-bleu" },
  orange: { bg: ESM.orange, fg: ESM.noir, className: "bg-orange" },
  rose: { bg: ESM.rose, fg: ESM.noir, className: "bg-rose" },
  lavande: { bg: ESM.lavande, fg: ESM.noir, className: "bg-lavande" },
  noir: { bg: ESM.noir, fg: ESM.clair, className: "bg-noir" },
  clair: { bg: ESM.clair, fg: ESM.noir, className: "bg-clair" },
};

export const SITE = {
  title: "Prototyping with AI in two days",
  subtitle: "The right tool for the right question, from data to demo, while staying in control of your data.",
  event: "Energ-IACK 2026",
  key: "Key 3 · AI",
  date: "Friday 13 November 2026 · Vernier",
  speaker: "Charles Foucault-Dumas",
  role: "Head of Development, Innovation and AI",
  signature: "Opportunity. For everyone.",
};

export const UI = {
  menu: "Menu (M)",
  goTo: "Go to",
  escToClose: "Esc to close",
  previous: "Previous",
  next: "Next",
  fullscreen: "Full screen (F)",
  langName: "English",
  notes: { title: "Speaker notes", none: "No note.", total: "Total" },
  tweetFallback: "Screenshot of the post goes in public/img/",
  seePost: "See the account on X",
};

export const SCENE_TITLES: Record<string, string> = {
  cover: "Prototyping with AI in two days",
  takeaways: "Two things to remember",
  vibe: "Vibe coding",
  tools: "The right tool for the right question",
  method: "The method in five moves",
  demo: "Demo",
  data: "Three datasets, three regimes",
  avenant: "The addendum: four conditions",
  settings: "Turn training off",
  rules: "Data stays, code ships",
  local: "The 100% local option",
  proto: "From prototype to demo",
  close: "Let's hack.",
};

export const COVER = {
  kicker: "Energ-IACK 2026 · Key 3 · AI",
};

export const TAKEAWAYS = {
  kicker: "In twenty minutes",
  title: "Two things to remember.",
  items: [
    { title: "The right tool depends on the question.", line: "Explore, build, show: each step has its tool." },
    {
      title: "Your restricted data only leaves within the rules.",
      line: "Charter, rules, addendum: what is allowed, and how to prove it when you hand in.",
    },
  ],
};

export const VIBE = {
  kicker: "Vibe coding",
  title: "Coding in plain language.",
  lead: "You describe what you want. The AI writes the code, runs it, fixes it. You judge the result.",
  punch: "For a hackathon: show, don't tell.",
  tweet: {
    src: "/img/MadhuGhuru_Tweet1.png",
    alt: "Post by Madhu Guru (Google), 30 July 2025: Google is moving from a writing-first culture to a building-first one. When building a prototype takes as long as writing a spec, you show instead of telling.",
    caption: "Madhu Guru, Google · X, 30.07.2025",
    url: "https://x.com/realmadhuguru",
  },
};

export const TOOLS = {
  kicker: "The right tool for the right question",
  title: "One question, one tool.",
  head: { question: "Your question", tool: "The tool", why: "What for" },
  rows: [
    {
      question: "What is in the data?",
      tool: "An AI assistant or a coding agent",
      why: "Structure, columns, defects, first charts.",
    },
    {
      question: "How do we build the demo?",
      tool: "A coding agent: Claude Code, Codex…",
      why: "It reads the folder, writes the code, runs the app.",
    },
    {
      question: "How do we show it to the jury?",
      tool: "GitHub + Vercel",
      why: "The code in a repository, a real address to open at the pitch.",
    },
    {
      question: "Do we need to store data?",
      tool: "Supabase, only if needed",
      why: "Database and accounts. Otherwise, keep it simple.",
    },
    {
      question: "What if the data must not leave?",
      tool: "A local model",
      why: "Everything runs on your computer (more on this later).",
    },
  ],
};

export const METHOD = {
  title: "The method in five moves.",
  items: [
    { title: "Ask for a plan before the code.", line: "Describe the project, approve the steps, and only then code." },
    { title: "One feature at a time.", line: "Build → test → adjust → repeat." },
    { title: "Test after every addition.", line: "“Run the app and tell me how to see it.”" },
    { title: "Question the AI.", line: "“Why did you do that? What are the risks?”" },
    { title: "Aim for the demo, not perfection.", line: "A working prototype beats an unfinished perfect project." },
  ],
};

export const DEMO = {
  kicker: "Demo",
  title: "This site was coded by an AI.",
  steps: ["The conversation in Claude Code", "The code pushed to GitHub", "The site published on Vercel", "The same thing with Codex"],
  line: "Same logic in both tools: a folder, an instruction, a plan, code, a check.",
  interfaces: "Terminal, app or editor: these are interfaces, not different tools.",
};

export const DATA = {
  kicker: "Your data",
  title: "Three datasets, three regimes.",
  cards: [
    {
      tag: "Open · CC BY 4.0",
      name: "Rive-Claire",
      body: "Fictional town: 48 sites, 172 meters, 2021–2025.",
      rule: "Any tool is allowed. Credit the source.",
    },
    {
      tag: "Restricted · annex A",
      name: "City of Geneva",
      body: "Two real cases from the Energy Department.",
      rule: "Never in a public repository. Online AI: only under the addendum.",
    },
    {
      tag: "Restricted · annex B",
      name: "Quanthome",
      body: "The building stock of Geneva's municipalities.",
      rule: "Never in a public repository. Online AI: only under the addendum.",
    },
  ],
  footer:
    "In every case, AI can help you code, document or translate, as long as no restricted data goes into it (rules, art. 5.4).",
};

export const AVENANT = {
  kicker: "Addendum no. 1 · AI assistants and restricted data",
  title: "Four conditions. All at once.",
  items: [
    {
      title: "No training.",
      line: "A professional, team, enterprise or API plan, or the training setting turned off before any upload.",
    },
    { title: "No sharing.", line: "No share link, no publication, no connector to public storage." },
    { title: "A team account.", line: "Owned by a registered participant, who answers for the team." },
    { title: "A declared plan.", line: "Tool, plan, setting status and datasets: declared when you hand in." },
  ],
  boxTitle: "Which dataset is covered?",
  box: "Each provider decides for its own dataset. Listen to the organisers' announcement. Without approval: no online AI on that dataset.",
};

export const SETTINGS = {
  kicker: "Condition 1, in practice",
  title: "Turn training off.",
  cols: [
    {
      name: "Claude",
      scope: "Free, Pro and Max accounts, Claude Code included",
      how: "Settings › Privacy: turn off model improvement (“Model Improvement”).",
      link: "claude.ai/settings/data-privacy-controls",
      extra: "",
      pro: "Commercial plans (Team, Enterprise, API): no training by default.",
    },
    {
      name: "ChatGPT and Codex",
      scope: "Free, Plus and Pro accounts, Codex included",
      how: "Settings › Data Controls: turn off “Improve the model for everyone”.",
      link: "chatgpt.com/settings/DataControls",
      extra: "Codex in the cloud: a second switch, “Include environments” (Codex settings), allows training on your code. Leave it off.",
      pro: "Business, Enterprise, Edu and API: no training by default.",
    },
  ],
};

export const RULES = {
  kicker: "Rules of use",
  title: "Data stays. Code ships.",
  items: [
    {
      title: "Only what is needed.",
      line: "The structure, the columns, a few sample rows. The full dataset only if the analysis requires it.",
    },
    { title: "No re-identification.", line: "Never ask to identify a site, a building, a meter or a person." },
    {
      title: "Code ships, data stays.",
      line: "Public repository under the MIT licence: no restricted data, neither hard-coded nor attached.",
    },
    { title: "Keep a trace.", line: "Tools, prompts, versions. Measured, estimated or AI-generated: say which." },
    { title: "Delete at the end.", line: "Local copies, conversations, histories and uploaded files." },
  ],
};

export const LOCAL = {
  kicker: "The 100% local option",
  title: "Nothing leaves your computer.",
  lead: "Always allowed, with no other condition (Charter, art. 5; addendum, art. 2.2).",
  who: "For teams at ease with the terminal, with a computer that can run a model able to code. Otherwise: the addendum.",
  diagram: {
    frame: "Your computer",
    brain: "1 · The brain",
    brainTools: "LM Studio or Ollama",
    brainSub: "runs the model",
    hands: "2 · The hands",
    handsTools: "OpenCode",
    handsSub: "coding agent, in your folder",
    disk: "3 · Your drive",
    file1: "script.py · created, edited",
    file2: "private_data.csv · read",
    a1: "instruction + list of files",
    a2: "“Create file X with this code”",
    a3: "reads and writes",
    internet: "Internet: nothing goes out",
  },
};

export const PROTO = {
  kicker: "Saturday 14:30",
  title: "A prototype is not a product.",
  lead: "You hand in a demo that convinces, not finished software.",
  listTitle: "To hand in",
  list: [
    "The prototype, working or not, or a demonstration",
    "The source code",
    "The pitch presentation",
    "The one-page project sheet",
    "A 2-minute video, if you wish",
  ],
  pitchTitle: "The pitch",
  pitch: "3 minutes, no questions. Prepare it tonight.",
};

export const CLOSE = {
  title: "Let's hack.",
  line: "The right tool for the right question. Your data within the rules.",
};

/** Planned minutes per scene (total 20). */
export const TIMING: Record<string, number> = {
  cover: 0.5,
  takeaways: 0.5,
  vibe: 1,
  tools: 2,
  method: 1.5,
  demo: 6,
  data: 1,
  avenant: 1.5,
  settings: 1,
  rules: 1,
  local: 1.5,
  proto: 1,
  close: 0.5,
};

export const NOTES: Record<string, string> = {
  cover:
    "I am standing in for Exponent at short notice. Twenty minutes: how to prototype fast with AI, and how to do it without breaking the data rules.",
  takeaways: "State the two ideas. Everything else serves one or the other.",
  vibe:
    "Madhu Guru's post (Google, 30.07.2025): “building-first”. When prototyping costs as much as writing, you show.\nAdd the exact post link in content.fr.ts / content.ts (VIBE.tweet.url) if you have it: I only found the account.",
  tools:
    "No brand comparison: these are functions. Stress the last row: a local model is the only route that is always allowed for restricted data.",
  method: "Taken from workshop 2-5 (good practices). The first move matters most: plan before code.",
  demo:
    "Switch to Claude Code: show this conversation (the plan, the questions asked, the fact-checking), then the GitHub repository, then the Vercel deployment.\nThen open Codex: same logic.\nTerminal, desktop app, editor, web: Claude Code and Codex exist in several interfaces (official docs).",
  data: "Source: launch deck, slide 5; rules art. 5.3-5.4 and art. 9.2 (restricted datasets never in a public repository).",
  avenant:
    "Source: EIAK-R5-Avenant-IA-Donnees-v1, art. 2.1 (draft of 11.11.2026). The addendum only applies to datasets whose provider approved it (art. 1.2, 7.2): the organisers announce it at the opening (art. 7.3). Never say a dataset is covered unless it has been announced.",
  settings:
    "Checked on 12.11.2026:\n- Anthropic, privacy.claude.com “Is my data used for model training?”: “Model Improvement” setting, page claude.ai/settings/data-privacy-controls; commercial products (Claude for Work, API) not used for training by default.\n- OpenAI, help.openai.com article 5722486: Settings › Data Controls › “Improve the model for everyone”; also covers Codex tasks on personal plans; separate Codex setting “Include environments” (training on Codex cloud environments: repository and files), not changed by the first one.\n- Link chatgpt.com/settings/DataControls (checked by Charles). Official alternative: privacy.openai.com › “Do not train on my content”. Codex cloud settings: chatgpt.com/codex/cloud/settings/general (third-party source, to check). Business, Enterprise, Edu and API: no training by default.\nThe exact Claude menu label may vary: show it live if possible.",
  rules:
    "Sources: addendum art. 3, 5; Charter art. 6 (traceability: models, prompts, versions; tell measured, estimated and generated apart); rules art. 9.1-9.2 (code under MIT in a public repository within 30 days, without restricted data).\nTip: put the data folder in .gitignore from minute one.",
  local:
    "Clean version of my diagram. OpenCode detects Ollama (127.0.0.1:11434) and LM Studio (127.0.0.1:1234) locally: opencode.ai/docs/providers (checked on 12.11.2026).\nHonest limit: you need a computer that can run a model able to code, and local models are more modest than online ones.",
  proto:
    "Source: rules art. 3.4 (hand-in Saturday 14:30) and launch deck slide 8. Reminder from workshop 2-5: phase 1, vibe coding to validate the idea; phase 2, classic development to industrialise.",
  close: "I am also on the jury: send teams to the mentors for coaching.",
};
