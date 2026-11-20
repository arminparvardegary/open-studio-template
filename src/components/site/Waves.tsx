"use client";

import { useEffect, useRef } from "react";

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
function poly(fn: (u: number) => number, w: number, pts: number, close: string) {
  let d = "";
  for (let i = 0; i <= pts; i++) {
    const x = (w * i) / pts;
    d += (i ? "L" : "M") + x.toFixed(1) + " " + fn(x / w).toFixed(1);
  }
  return d + close;
}
/** Catmull-Rom interpolation through control points */
function cr(P: number[], u: number) {
  const n = P.length - 1, f = clamp(u, 0, 1) * n, i = Math.min(n - 1, Math.floor(f)), s = f - i;
  const p0 = P[Math.max(0, i - 1)], p1 = P[i], p2 = P[i + 1], p3 = P[Math.min(n, i + 2)];
  return 0.5 * (2 * p1 + (-p0 + p2) * s + (2 * p0 - 5 * p1 + 4 * p2 - p3) * s * s + (-p0 + 3 * p1 - 3 * p2 + p3) * s * s * s);
}
const HERO_EDGE = [640, 665, 700, 722, 660, 585, 545, 520, 545, 580, 600];

/** Slow animated wave. `variant="hero"` = dark wave rising into the hero; `"accent"` = top edge of the reviews block. */
export function Waves({ variant }: { variant: "hero" | "accent" }) {
  const blob = useRef<SVGPathElement>(null);
  const glow = useRef<SVGPathElement>(null);

  useEffect(() => {
    const W = 1342;
    const draw = (t: number) => {
      if (variant === "hero") {
        const he = (u: number) => cr(HERO_EDGE, u) + 16 * Math.sin(u * 7 - t * 0.55) + 8 * Math.sin(u * 15 + t * 0.8);
        blob.current?.setAttribute("d", poly(he, W, 56, "LW 900 L0 900Z".replace("W", String(W))));
        glow.current?.setAttribute("d", poly((u) => he(u) - 34, W, 56, "LW 900 L0 900Z".replace("W", String(W))));
      } else {
        const kb = (u: number) => {
          const x = u * 1342;
          return 975 + 45 * Math.cos(((x - 100) / 1000) * Math.PI * 2 + Math.sin(t * 0.3) * 0.25) + 9 * Math.sin(u * 14 + t * 0.5);
        };
        let d = "M-300 215 L1642 215";
        for (let i = 0; i <= 64; i++) {
          const u = 1 - i / 64;
          d += " L" + (-300 + 1942 * u).toFixed(1) + " " + kb((-300 + 1942 * u) / 1342).toFixed(1);
        }
        blob.current?.setAttribute("d", d + " Z");
      }
    };
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    draw(0);
    if (still) return;
    let raf = 0;
    const t0 = performance.now();
    const loop = (now: number) => {
      draw((now - t0) / 1000);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [variant]);

  if (variant === "hero") {
    return (
      <svg viewBox="0 0 1342 820" preserveAspectRatio="none" aria-hidden="true">
        <path ref={glow} className="glow" fill="var(--color-accent-bright)" opacity=".5" />
        <path ref={blob} className="blob" fill="var(--color-ink)" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 1342 1180" preserveAspectRatio="none" aria-hidden="true">
      <path ref={blob} className="blob" fill="var(--color-accent)" />
    </svg>
  );
}
