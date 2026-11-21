"use client";

import { useState } from "react";

/**
 * Demo form: it does not send anything. Replace `onSubmit` with a call to
 * your own API route, form service, or email provider.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) return <p className="form__ok">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>;

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="form__row">
        <div className="field"><label htmlFor="c-name">Lorem</label><input className="input" id="c-name" name="name" placeholder="Lorem Ipsum" required /></div>
        <div className="field"><label htmlFor="c-mail">Ipsum</label><input className="input" id="c-mail" name="email" type="email" placeholder="name@example.com" required /></div>
      </div>
      <div className="field">
        <label htmlFor="c-topic">Dolor</label>
        <select className="select" id="c-topic" name="topic" defaultValue="a">
          <option value="a">Lorem ipsum</option>
          <option value="b">Dolor sit amet</option>
          <option value="c">Consectetur</option>
        </select>
      </div>
      <div className="field"><label htmlFor="c-msg">Sit amet</label><textarea className="textarea" id="c-msg" name="message" placeholder="Lorem ipsum dolor sit amet…" required /></div>
      <div><button className="btn btn--accent" type="submit">Lorem ipsum</button></div>
    </form>
  );
}
