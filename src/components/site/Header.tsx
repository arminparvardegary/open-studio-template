"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/content/site";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <header className={`topbar${open ? " menu-open" : ""}`}>
        <Logo className="topbar__logo" />
        <nav className="topbar__nav" aria-label="Main">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} aria-current={active(n.href) ? "page" : undefined}>
              <span>{n.label}</span>
              {n.count ? <sup className="count">( {n.count} )</sup> : null}
            </Link>
          ))}
        </nav>
        <button
          className="topbar__menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </header>
      <nav id="mobile-nav" className={`mnav${open ? " open" : ""}`} aria-label="Mobile" aria-hidden={!open}>
        {nav.map((n) => (
          <Link key={n.href} href={n.href} onClick={() => setOpen(false)} aria-current={active(n.href) ? "page" : undefined} tabIndex={open ? 0 : -1}>
            {n.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
