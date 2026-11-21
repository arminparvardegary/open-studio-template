"use client";

import { useEffect, useRef, useState } from "react";

const AVATAR = "@AV";

/**
 * Big intro sentence whose words fade in one by one when it scrolls into view.
 * Use the token "@AV" in `words` where the round avatar should appear.
 */
export function RevealText({ words }: { words: string[] }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || rect.top < window.innerHeight * 0.65) {
      return; // already visible (or reduced motion): leave the text as is
    }
    setArmed(true);
    const io = new IntersectionObserver(
      (es, o) => {
        es.forEach((e) => {
          if (e.isIntersecting) { setShown(true); o.disconnect(); }
        });
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <p
      ref={ref}
      className={`lede${armed ? " is-armed" : ""}${shown ? " in" : ""}`}
      aria-label={words.filter((w) => w !== AVATAR).join(" ")}
    >
      {words.map((w, i) => (
        <span key={i} aria-hidden="true">
          <span className="w" style={{ ["--i" as string]: i }}>
            {w === AVATAR ? (
              <span className="avatar">
                <svg viewBox="0 0 100 100">
                  <rect width="100" height="100" fill="var(--color-accent)" />
                  <circle cx="50" cy="41" r="17" fill="var(--color-ink)" />
                  <path d="M14 100c3-25 20-36 36-36s33 11 36 36z" fill="var(--color-ink)" />
                </svg>
              </span>
            ) : (
              w
            )}
          </span>{" "}
        </span>
      ))}
    </p>
  );
}
