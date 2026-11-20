"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

function read(tz: string) {
  const d = new Date();
  const time = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: tz }).format(d);
  let offset = "UTC+0";
  try {
    const part = new Intl.DateTimeFormat("en-US", { timeZone: tz, timeZoneName: "shortOffset" })
      .formatToParts(d)
      .find((x) => x.type === "timeZoneName")?.value;
    if (part) offset = part.replace("GMT", "UTC");
    if (offset === "UTC") offset = "UTC+0";
  } catch {}
  return { time, offset };
}

/** Local time for `site.timeZone`, e.g. "14:05 UTC+1". */
export function Clock({ withZone = true }: { withZone?: boolean }) {
  const [v, setV] = useState({ time: "00:00", offset: "UTC+0" });
  useEffect(() => {
    const tick = () => setV(read(site.timeZone));
    tick();
    const id = setInterval(tick, 10000);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      <time suppressHydrationWarning>{v.time}</time>
      {withZone ? <span suppressHydrationWarning> {v.offset}</span> : null}
    </>
  );
}
