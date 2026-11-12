# Prototyper avec l'IA en deux jours

Mini-site de présentation (20 min) pour la **Clé 3 · IA** de l'atelier « Une heure, trois clés » de
l'**Energ-IACK 2026** (hackathon IA × sortie des énergies fossiles, ESM Vernier, 13-14 novembre 2026).

> Le bon outil pour la bonne question, des données à la démo, en gardant la maîtrise des données.

Charles Foucault-Dumas · Responsable développement, innovation et IA, ESM.
Bilingue français / anglais (`?lang=en`). Charte ESM 2026 (Die Grotesk, palette violet / vert / bleu héritage).

## Utiliser

| Touche | Action |
|---|---|
| → · Espace · Page suivante | Slide suivante |
| ← · Page précédente | Slide précédente |
| M | Menu des slides |
| F | Plein écran |
| Début / Fin | Première / dernière slide |

Notes orateur, avec le minutage : `/notes` (à ouvrir sur le téléphone).

## Lancer en local

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000.

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4. Aucun backend, aucune donnée.
Textes : `src/lib/content.fr.ts` (français, par défaut) et `src/lib/content.ts` (anglais), mêmes exports.
Slides : `src/components/scenes.tsx`.

## Données

Ce dépôt ne contient **aucune donnée du hackathon**. Les documents sources (PDF, DOCX) et tout fichier
de données (`*.csv`, `*.xlsx`, `*.parquet`) sont exclus par `.gitignore`.

Opportunity. For everyone.
