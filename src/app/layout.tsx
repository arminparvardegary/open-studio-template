import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/content/site";
import "./globals.css";

/* Fonts live in src/fonts (all SIL Open Font License — see README). */
const sans = localFont({
  src: [{ path: "../fonts/HankenGrotesk-Variable.woff2", weight: "100 900", style: "normal" }],
  variable: "--font-sans",
  display: "swap",
});
const mono = localFont({
  src: [
    { path: "../fonts/GeistMono-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/GeistMono-Medium.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-mono",
  display: "swap",
});
const display = localFont({
  src: [{ path: "../fonts/UnifrakturMaguntia-Regular.woff2", weight: "400", style: "normal" }],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: site.name, template: `%s — ${site.name}` },
  description: site.description,
};

export const viewport: Viewport = { themeColor: "#0a0b1f" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
