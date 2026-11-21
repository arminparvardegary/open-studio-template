"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useStoredValue } from "@/lib/useStoredValue";

const KEY = "studio-template-consent";
const OPEN_EVENT = "open-cookie-banner";

/** Cookie notice. Remembers the choice in localStorage; the footer button re-opens it. */
export function CookieBanner() {
  // "pending" on the server so returning visitors never see the banner flash
  const [stored, store] = useStoredValue(KEY, "pending");
  const [reopened, setReopened] = useState(false);
  const hidden = stored !== null && !reopened;

  useEffect(() => {
    const open = () => setReopened(true);
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  const choose = (v: "yes" | "no") => {
    store(v);
    setReopened(false);
  };

  return (
    <div className={`ck${hidden ? " hide" : ""}`} role="dialog" aria-label="Cookie consent" aria-hidden={hidden}>
      <p>Lorem ipsum dolor sit amet, only if you agree.</p>
      <button className="ck__a" onClick={() => choose("yes")} tabIndex={hidden ? -1 : 0}>Lorem</button>
      <button className="ck__d" onClick={() => choose("no")} tabIndex={hidden ? -1 : 0}>Ipsum</button>
      <Link className="ck__l" href="/legal/cookies" tabIndex={hidden ? -1 : 0}>Dolor sit</Link>
    </div>
  );
}

export function CookieSettingsButton({ children }: { children: React.ReactNode }) {
  return <button onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}>{children}</button>;
}
