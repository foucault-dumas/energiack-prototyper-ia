// Texte français (langue par défaut) de la présentation « Prototyper avec l'IA en deux jours »,
// Energ-IACK 2026, Clé 3 · IA. content.ts a exactement les mêmes exports, en anglais.
// Charte ESM 2026 : voir la skill branding-esm. Faits vérifiés le 12.11.2026 (sources dans NOTES).

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

/** Fond + seule couleur de texte permise dessus (table de contraste du brandbook). */
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
  title: "Prototyper avec l'IA en deux jours",
  subtitle: "Le bon outil pour la bonne question, des données à la démo, en gardant la maîtrise des données.",
  event: "Energ-IACK 2026",
  key: "Clé 3 · IA",
  date: "Vendredi 13 novembre 2026 · Vernier",
  speaker: "Charles Foucault-Dumas",
  role: "Responsable développement, innovation et IA",
  signature: "Opportunity. For everyone.",
};

export const UI = {
  menu: "Menu (M)",
  goTo: "Aller à",
  escToClose: "Échap pour fermer",
  previous: "Précédent",
  next: "Suivant",
  fullscreen: "Plein écran (F)",
  langName: "Français",
  notes: { title: "Notes orateur", none: "Pas de note.", total: "Total" },
  tweetFallback: "Capture du post à déposer dans public/img/",
  seePost: "Voir le compte sur X",
};

export const SCENE_TITLES: Record<string, string> = {
  cover: "Prototyper avec l'IA en deux jours",
  takeaways: "Deux choses à retenir",
  vibe: "Vibe coding",
  tools: "Le bon outil pour la bonne question",
  method: "La méthode en cinq gestes",
  demo: "Démo",
  data: "Trois jeux, trois régimes",
  avenant: "L'avenant : quatre conditions",
  settings: "Couper l'entraînement",
  rules: "Les données restent, le code sort",
  local: "Option 100 % local",
  proto: "Du prototype à la démo",
  close: "Let's hack.",
};

export const COVER = {
  kicker: "Energ-IACK 2026 · Clé 3 · IA",
};

export const TAKEAWAYS = {
  kicker: "Dans vingt minutes",
  title: "Deux choses à retenir.",
  items: [
    { title: "Le bon outil dépend de la question.", line: "Explorer, construire, montrer : chaque étape a son outil." },
    {
      title: "Vos données restreintes ne sortent que dans les règles.",
      line: "Charte, règlement, avenant : ce qui est permis, et comment le prouver au rendu.",
    },
  ],
};

export const VIBE = {
  kicker: "Vibe coding",
  title: "Coder en langage naturel.",
  lead: "Vous décrivez ce que vous voulez. L'IA écrit le code, le lance, le corrige. Vous jugez le résultat.",
  punch: "Pour un hackathon : montrez, n'expliquez pas.",
  tweet: {
    src: "/img/MadhuGhuru_Tweet1.png",
    alt: "Post de Madhu Guru (Google) du 30 juillet 2025 : Google passe d'une culture de l'écrit à une culture du prototype. Quand prototyper prend autant de temps qu'écrire une spécification, on montre au lieu d'expliquer.",
    caption: "Madhu Guru, Google · X, 30.07.2025",
    url: "https://x.com/realmadhuguru",
  },
};

export const TOOLS = {
  kicker: "Le bon outil pour la bonne question",
  title: "Une question, un outil.",
  head: { question: "Votre question", tool: "L'outil", why: "Pour quoi faire" },
  rows: [
    {
      question: "Qu'y a-t-il dans les données ?",
      tool: "Un assistant d'IA ou un agent de code",
      why: "Structure, colonnes, défauts, premiers graphiques.",
    },
    {
      question: "Comment construire la démo ?",
      tool: "Un agent de code : Claude Code, Codex…",
      why: "Il lit le dossier, écrit le code, lance l'application.",
    },
    {
      question: "Comment la montrer au jury ?",
      tool: "GitHub + Vercel",
      why: "Le code dans un dépôt, une vraie adresse à ouvrir au pitch.",
    },
    {
      question: "Faut-il garder des données ?",
      tool: "Supabase, seulement si nécessaire",
      why: "Base de données et comptes. Sinon, restez simples.",
    },
    {
      question: "Et si les données ne doivent pas sortir ?",
      tool: "Un modèle local",
      why: "Tout tourne sur votre ordinateur (on y revient).",
    },
  ],
};

export const METHOD = {
  title: "La méthode en cinq gestes.",
  items: [
    { title: "Demandez un plan avant le code.", line: "Décrivez le projet, faites valider les étapes, puis seulement codez." },
    { title: "Une fonctionnalité à la fois.", line: "Construire → tester → ajuster → recommencer." },
    { title: "Testez à chaque ajout.", line: "« Lance l'application et dis-moi comment la voir. »" },
    { title: "Questionnez l'IA.", line: "« Pourquoi tu as fait ça ? Quels risques ? »" },
    { title: "Visez la démo, pas la perfection.", line: "Un prototype qui marche vaut mieux qu'un projet parfait inachevé." },
  ],
};

export const DEMO = {
  kicker: "Démo",
  title: "Ce site a été codé par une IA.",
  steps: ["La conversation dans Claude Code", "Le code poussé sur GitHub", "Le site publié sur Vercel", "La même chose avec Codex"],
  line: "Même logique dans les deux outils : un dossier, une consigne, un plan, du code, une vérification.",
  interfaces: "Terminal, application ou éditeur : ce sont des interfaces, pas des outils différents.",
};

export const DATA = {
  kicker: "Vos données",
  title: "Trois jeux, trois régimes.",
  cards: [
    {
      tag: "Ouvert · CC BY 4.0",
      name: "Rive-Claire",
      body: "Commune fictive : 48 sites, 172 compteurs, 2021–2025.",
      rule: "Tous les outils sont permis. Citez la source.",
    },
    {
      tag: "Restreint · annexe A",
      name: "Ville de Genève",
      body: "Deux cas réels du Service de l'énergie.",
      rule: "Jamais dans un dépôt public. IA en ligne : selon l'avenant seulement.",
    },
    {
      tag: "Restreint · annexe B",
      name: "Quanthome",
      body: "Le parc bâti des communes genevoises.",
      rule: "Jamais dans un dépôt public. IA en ligne : selon l'avenant seulement.",
    },
  ],
  footer:
    "Dans tous les cas, l'IA peut vous aider à coder, documenter ou traduire, sans y verser de données restreintes (règlement, art. 5.4).",
};

export const AVENANT = {
  kicker: "Avenant n° 1 · assistants d'IA et données restreintes",
  title: "Quatre conditions. Toutes à la fois.",
  items: [
    {
      title: "Pas d'entraînement.",
      line: "Offre pro, équipe, entreprise ou API, ou réglage d'entraînement désactivé avant tout versement.",
    },
    { title: "Pas de partage.", line: "Aucun lien de partage, aucune publication, aucun connecteur vers un stockage public." },
    { title: "Un compte de l'équipe.", line: "Celui d'un·e participant·e inscrit·e, qui en répond pour l'équipe." },
    { title: "Une offre déclarée.", line: "Outil, offre, état du réglage et jeux concernés : déclarés au rendu." },
  ],
  boxTitle: "Quel jeu est couvert ?",
  box: "Chaque fournisseur décide pour son seul jeu. Écoutez l'annonce de l'organisateur. Sans validation : pas d'IA en ligne sur ce jeu.",
};

export const SETTINGS = {
  kicker: "Condition 1, en pratique",
  title: "Coupez l'entraînement.",
  cols: [
    {
      name: "Claude",
      scope: "Comptes Free, Pro et Max, Claude Code compris",
      how: "Paramètres › Confidentialité : désactivez l'amélioration du modèle (« Model Improvement »).",
      link: "claude.ai/settings/data-privacy-controls",
      extra: "",
      pro: "Offres commerciales (Team, Enterprise, API) : pas d'entraînement par défaut.",
    },
    {
      name: "ChatGPT et Codex",
      scope: "Comptes Free, Plus et Pro, Codex compris",
      how: "Settings › Data Controls : désactivez « Improve the model for everyone ».",
      link: "chatgpt.com/settings/DataControls",
      extra: "Codex dans le cloud : un 2ᵉ interrupteur, « Include environments » (paramètres Codex), autorise l'entraînement sur votre code. Laissez-le désactivé.",
      pro: "Business, Enterprise, Edu et API : pas d'entraînement par défaut.",
    },
  ],
};

export const RULES = {
  kicker: "Règles d'usage",
  title: "Les données restent. Le code sort.",
  items: [
    {
      title: "Le strict nécessaire.",
      line: "La structure, les colonnes, quelques lignes d'exemple. Le jeu entier seulement si l'analyse l'exige.",
    },
    { title: "Aucune réidentification.", line: "Ne demandez jamais d'identifier un site, un bâtiment, un compteur ou une personne." },
    {
      title: "Le code sort, les données restent.",
      line: "Dépôt public sous licence MIT : aucune donnée restreinte, ni en dur, ni en fichier joint.",
    },
    { title: "Tracez.", line: "Outils, prompts, versions. Mesuré, estimé ou généré par l'IA : dites-le." },
    { title: "Effacez à la fin.", line: "Copies locales, conversations, historiques et fichiers téléversés." },
  ],
};

export const LOCAL = {
  kicker: "Option 100 % local",
  title: "Rien ne sort de votre ordinateur.",
  lead: "Toujours admis, sans autre condition (Charte, art. 5 ; avenant, art. 2.2).",
  who: "Pour les équipes à l'aise avec le terminal, avec un ordinateur qui encaisse un modèle capable de coder. Sinon : l'avenant.",
  diagram: {
    frame: "Votre ordinateur",
    brain: "1 · Le cerveau",
    brainTools: "LM Studio ou Ollama",
    brainSub: "fait tourner le modèle",
    hands: "2 · Les mains",
    handsTools: "OpenCode",
    handsSub: "agent de code, dans votre dossier",
    disk: "3 · Votre disque",
    file1: "script.py · créé, modifié",
    file2: "donnees_privees.csv · lu",
    a1: "consigne + liste des fichiers",
    a2: "« Crée le fichier X avec ce code »",
    a3: "lit et écrit",
    internet: "Internet : rien ne sort",
  },
};

export const PROTO = {
  kicker: "Samedi 14 h 30",
  title: "Un prototype n'est pas un produit.",
  lead: "Vous rendez une démo qui convainc, pas un logiciel fini.",
  listTitle: "À rendre",
  list: [
    "Le prototype, fonctionnel ou non, ou une démonstration",
    "Le code source",
    "La présentation du pitch",
    "La fiche projet d'une page",
    "Une vidéo de 2 min, si vous le souhaitez",
  ],
  pitchTitle: "Le pitch",
  pitch: "3 minutes, sans questions. Préparez-les dès ce soir.",
};

export const CLOSE = {
  title: "Let's hack.",
  line: "Le bon outil pour la bonne question. Vos données dans les règles.",
};

/** Minutes prévues par scène (total 20). */
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
    "Je remplace Exponent au pied levé. Vingt minutes : comment prototyper vite avec l'IA, et comment le faire sans enfreindre les règles sur les données.",
  takeaways: "Annoncer les deux idées. Tout le reste sert l'une ou l'autre.",
  vibe:
    "Le post de Madhu Guru (Google, 30.07.2025) : « building-first ». Quand prototyper coûte autant qu'écrire, on montre.\nLien vers le post exact à ajouter dans content.fr.ts / content.ts (VIBE.tweet.url) si tu l'as : je n'ai trouvé que le compte.",
  tools:
    "Pas de comparatif de marques : ce sont des fonctions. Insister sur la dernière ligne : un modèle local est la seule voie toujours admise pour les données restreintes.",
  method: "Repris de l'atelier 2-5 (bonnes pratiques). Le premier geste est le plus important : plan avant code.",
  demo:
    "Basculer sur Claude Code : montrer cette conversation (le plan, les questions posées, la vérification des faits), puis le dépôt GitHub, puis le déploiement Vercel.\nPuis ouvrir Codex : même logique.\nTerminal, appli de bureau, éditeur, web : Claude Code et Codex existent sous plusieurs interfaces (docs officielles).",
  data: "Source : deck de lancement, slide 5 ; règlement art. 5.3-5.4 et art. 9.2 (jeux restreints jamais dans un dépôt public).",
  avenant:
    "Source : EIAK-R5-Avenant-IA-Donnees-v1, art. 2.1 (projet du 11.11.2026). L'avenant ne vaut que pour les jeux dont le fournisseur l'a validé (art. 1.2, 7.2) : l'organisateur l'annonce à l'ouverture (art. 7.3). Ne jamais dire qu'un jeu est couvert si ce n'est pas annoncé.",
  settings:
    "Vérifié le 12.11.2026 :\n- Anthropic, privacy.claude.com « Is my data used for model training? » : réglage « Model Improvement », page claude.ai/settings/data-privacy-controls ; produits commerciaux (Claude for Work, API) non utilisés pour l'entraînement par défaut.\n- OpenAI, help.openai.com art. 5722486 : Settings › Data Controls › « Improve the model for everyone » ; couvre aussi les tâches Codex des offres personnelles ; réglage Codex séparé « Include environments » (entraînement sur les environnements Codex cloud : dépôt et fichiers), non modifié par le précédent.\n- Lien chatgpt.com/settings/DataControls (validé par Charles). Alternative officielle : privacy.openai.com › « Do not train on my content ». Paramètres Codex cloud : chatgpt.com/codex/cloud/settings/general (source tierce, à vérifier). Business, Enterprise, Edu et API : pas d'entraînement par défaut.\nLe libellé exact du menu Claude peut varier : le montrer en direct si possible.",
  rules:
    "Sources : avenant art. 3, 5 ; Charte art. 6 (traçabilité : modèles, prompts, versions ; distinguer mesuré, estimé, généré) ; règlement art. 9.1-9.2 (code sous MIT dans un dépôt public dans les 30 jours, sans données restreintes).\nAstuce : mettre le dossier des données dans .gitignore dès la première minute.",
  local:
    "Version propre de mon schéma. OpenCode détecte en local Ollama (127.0.0.1:11434) et LM Studio (127.0.0.1:1234) : opencode.ai/docs/providers (vérifié le 12.11.2026).\nLimite honnête : il faut un ordinateur qui encaisse un modèle capable de coder, et des modèles locaux plus modestes que les modèles en ligne.",
  proto:
    "Source : règlement art. 3.4 (rendu samedi 14 h 30) et deck de lancement slide 8. Rappel atelier 2-5 : phase 1 vibe coding pour valider l'idée ; phase 2 développement classique pour industrialiser.",
  close: "Je suis aussi membre du jury : renvoyer vers les mentors pour l'accompagnement.",
};
