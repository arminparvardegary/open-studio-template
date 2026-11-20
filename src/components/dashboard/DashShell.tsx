"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useStoredValue } from "@/lib/useStoredValue";
import { Logo } from "@/components/ui/Logo";
import { messages } from "@/content/dashboard";
import { IconFolder, IconGrid, IconMail, IconMenu, IconMoon, IconOut, IconSearch, IconSettings, IconSun } from "./icons";

const items = [
  { href: "/dashboard", label: "Overview", icon: <IconGrid />, exact: true },
  { href: "/dashboard/projects", label: "Projects", icon: <IconFolder /> },
  { href: "/dashboard/messages", label: "Messages", icon: <IconMail />, badge: messages.filter((m) => m.unread).length },
  { href: "/dashboard/settings", label: "Settings", icon: <IconSettings /> },
];

const MODE_KEY = "studio-template-dash-mode";

/** Sidebar + top bar for every /dashboard screen. */
export function DashShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // the mobile menu closes by itself when the route changes
  const [openFor, setOpenFor] = useState<string | null>(null);
  const open = openFor === pathname;
  const setOpen = (v: boolean) => setOpenFor(v ? pathname : null);
  const [stored, store] = useStoredValue(MODE_KEY);
  const mode: "light" | "dark" = stored === "dark" ? "dark" : "light";
  const toggle = () => store(mode === "light" ? "dark" : "light");
  const current = items.find((i) => (i.exact ? pathname === i.href : pathname.startsWith(i.href)));

  return (
    <div className="dshell" data-mode={mode}>
      <aside className={`dside${open ? " open" : ""}`} aria-label="Dashboard">
        <Logo />
        <nav className="dnav">
          <p className="dnav__label">Menu</p>
          {items.map((i) => (
            <Link key={i.href} href={i.href} aria-current={current === i ? "page" : undefined}>
              {i.icon}
              {i.label}
              {i.badge ? <span className="badge">{i.badge}</span> : null}
            </Link>
          ))}
        </nav>
        <div className="dside__foot">
          <div className="duser">
            <span className="avatar-s">LI</span>
            <div><b>Lorem Ipsum</b><span>lorem@example.com</span></div>
          </div>
          <Link className="dside__link" href="/login"><span style={{ width: 16, display: "inline-flex" }}><IconOut /></span> Sign out</Link>
        </div>
      </aside>
      {open ? <div className="dscrim" onClick={() => setOpen(false)} /> : null}
      <div className="dmain">
        <div className="dtop">
          <button className="dtop__menu" aria-label="Open menu" onClick={() => setOpen(true)}><span style={{ width: 20, display: "inline-flex" }}><IconMenu /></span></button>
          <span className="dtop__title">{current?.label ?? "Dashboard"}</span>
          <span className="dtop__spacer" />
          <label className="dsearch">
            <IconSearch />
            <input type="search" placeholder="Search…" aria-label="Search" />
          </label>
          <button className="dicon" onClick={toggle} aria-label={mode === "light" ? "Switch to dark mode" : "Switch to light mode"}>
            {mode === "light" ? <IconMoon /> : <IconSun />}
          </button>
          <Link className="avatar-s" href="/dashboard/settings" aria-label="Account settings">LI</Link>
        </div>
        <main className="dcontent">{children}</main>
      </div>
    </div>
  );
}
