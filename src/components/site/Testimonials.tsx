"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@/components/ui/Icons";
import { testimonials } from "@/content/people";

export function Testimonials() {
  const [k, setK] = useState(0);
  const hover = useRef(false);
  const n = testimonials.length;
  const go = (i: number) => setK((i + n) % n);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (!document.hidden && !hover.current) setK((v) => (v + 1) % n);
    }, 9000);
    return () => clearInterval(id);
  }, [n]);

  return (
    <div className="rv" onMouseEnter={() => (hover.current = true)} onMouseLeave={() => (hover.current = false)}>
      <span className="rv__mark" aria-hidden="true">
        <svg viewBox="0 0 70 62">
          <path fill="currentColor" d="M0 62V36C0 14 11 3 31 0l3 8C22 11 17 18 17 28h15v34zM38 62V36C38 14 49 3 69 0l3 8C60 11 55 18 55 28h15v34z" transform="scale(.96 .9)" />
        </svg>
      </span>
      {testimonials.map((t, i) => (
        <div className={`rv__slide${i === k ? " on" : ""}`} key={t.name} aria-hidden={i !== k}>
          <blockquote className="rv__quote">{t.quote}</blockquote>
          <div className="rv__by">
            <span className="dash" />
            <span><span className="rv__name">{t.name}</span><span className="rv__role">{t.role}</span></span>
            <span />
            <Link className="rv__link" href="/work" tabIndex={i === k ? 0 : -1}>{t.link} <ArrowUpRight /></Link>
          </div>
        </div>
      ))}
      <div className="rv__ctl">
        <button className="rv__btn" aria-label="Previous" onClick={() => go(k - 1)}><ArrowLeft /></button>
        <span className="rv__count">{String(k + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}</span>
        <button className="rv__btn" aria-label="Next" onClick={() => go(k + 1)}><ArrowRight /></button>
      </div>
    </div>
  );
}
