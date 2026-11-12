import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prototyper avec l'IA en deux jours — Energ-IACK 2026 | ESM",
  description:
    "Clé 3 · IA de l'Energ-IACK 2026 : le bon outil pour la bonne question, des données à la démo, en gardant la maîtrise des données. ESM Genève.",
  icons: { icon: "/seagull/seagull-flying-black.svg" },
};

export const viewport: Viewport = {
  themeColor: "#725FE0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
