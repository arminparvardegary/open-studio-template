"use client";

import Link from "next/link";
import { useState } from "react";
import type { Note } from "@/content/insights";
import { ArrowRight } from "@/components/ui/Icons";

/** Article list. Hovering a row swaps the large preview image on the left. */
export function InsightsList({ notes }: { notes: Note[] }) {
  const [active, setActive] = useState(0);
  return (
    <>
      <div className="peek" aria-hidden="true">
        {notes.map((n, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={n.slug} src={n.image} alt="" className={i === active ? "on" : ""} />
        ))}
      </div>
      <ol className="notes">
        {notes.map((n, i) => (
          <li key={n.slug}>
            <Link href={`/insights/${n.slug}`} className="note-row" onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)}>
              <time className="note-date">{n.date}</time>
              <div className="note-main">
                <h3 className="note-title">{n.title}</h3>
                <span className="note-ex">{n.excerpt}</span>
              </div>
              <div className="note-side">
                <span>{n.category}</span>
                <span className="note-read">{n.read} <ArrowRight /></span>
              </div>
            </Link>
          </li>
        ))}
        <li className="note-row end" aria-hidden="true" />
      </ol>
    </>
  );
}
