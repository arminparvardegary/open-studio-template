"use client";

import { useState } from "react";

const TOKENS = [
  { name: "--color-accent", label: "Accent", initial: "#5a3cf0" },
  { name: "--color-accent-bright", label: "Accent bright", initial: "#8f7dff" },
  { name: "--color-ink", label: "Ink (dark)", initial: "#0a0b1f" },
  { name: "--color-paper", label: "Paper (light)", initial: "#f2efff" },
];

function Toggle({ title, hint, defaultOn = false }: { title: string; hint: string; defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <div className="toggle">
      <span>{title}<span>{hint}</span></span>
      <button className="switch" role="switch" aria-checked={on} aria-label={title} onClick={() => setOn(!on)} />
    </div>
  );
}

/** Profile form, live palette preview, and notification switches. */
export function SettingsForms() {
  const [saved, setSaved] = useState(false);
  const [vals, setVals] = useState<Record<string, string>>(Object.fromEntries(TOKENS.map((t) => [t.name, t.initial])));

  const setToken = (name: string, v: string) => {
    setVals((s) => ({ ...s, [name]: v }));
    document.documentElement.style.setProperty(name, v);
  };
  const reset = () => {
    TOKENS.forEach((t) => document.documentElement.style.removeProperty(t.name));
    setVals(Object.fromEntries(TOKENS.map((t) => [t.name, t.initial])));
  };

  return (
    <div className="settings">
      <form className="card form" onSubmit={(e) => { e.preventDefault(); setSaved(true); setTimeout(() => setSaved(false), 2500); }}>
        <div className="card__head"><div><p className="card__title">Profile</p><p className="card__sub">Lorem ipsum dolor sit amet.</p></div></div>
        <div className="form__row">
          <div className="field"><label htmlFor="s-first">First name</label><input className="input" id="s-first" defaultValue="Lorem" /></div>
          <div className="field"><label htmlFor="s-last">Last name</label><input className="input" id="s-last" defaultValue="Ipsum" /></div>
        </div>
        <div className="field"><label htmlFor="s-mail">Email</label><input className="input" id="s-mail" type="email" defaultValue="lorem@example.com" /></div>
        <div className="field"><label htmlFor="s-bio">Bio</label><textarea className="textarea" id="s-bio" defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." /></div>
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <button className="dbtn dbtn--primary" type="submit">Save changes</button>
          {saved ? <span className="saved">Saved</span> : null}
        </div>
      </form>

      <section className="card">
        <div className="card__head"><div><p className="card__title">Notifications</p><p className="card__sub">Lorem ipsum dolor sit amet.</p></div></div>
        <Toggle title="Lorem ipsum" hint="Dolor sit amet consectetur" defaultOn />
        <Toggle title="Dolor sit amet" hint="Adipiscing elit sed do" defaultOn />
        <Toggle title="Consectetur" hint="Eiusmod tempor incididunt" />
        <Toggle title="Adipiscing elit" hint="Ut labore et dolore" />
      </section>

      <section className="card full">
        <div className="card__head">
          <div><p className="card__title">Colour palette</p><p className="card__sub">Live preview only. Copy the values into <code>src/styles/tokens.css</code> to make them permanent.</p></div>
          <button className="dbtn" onClick={reset}>Reset</button>
        </div>
        <div className="swatches">
          {TOKENS.map((t) => (
            <label className="swatch" key={t.name}>
              <input type="color" value={vals[t.name]} onChange={(e) => setToken(t.name, e.target.value)} aria-label={t.label} />
              <span><b>{t.label}</b><code>{vals[t.name]}</code></span>
            </label>
          ))}
        </div>
        <pre className="code">{`:root {\n${TOKENS.map((t) => `  ${t.name}: ${vals[t.name]};`).join("\n")}\n}`}</pre>
      </section>
    </div>
  );
}
