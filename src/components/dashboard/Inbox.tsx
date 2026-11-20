"use client";

import { useState } from "react";
import { messages } from "@/content/dashboard";
import { article } from "@/content/lorem";

/** Two-pane message list + reader. */
export function Inbox() {
  const [id, setId] = useState(messages[0].id);
  const [read, setRead] = useState<number[]>([]);
  const [sent, setSent] = useState(false);
  const m = messages.find((x) => x.id === id)!;

  return (
    <div className="inbox">
      <div className="inbox__list">
        {messages.map((x) => (
          <button
            key={x.id}
            className={`msg${x.unread && !read.includes(x.id) ? " unread" : ""}`}
            aria-current={x.id === id}
            onClick={() => { setId(x.id); setRead((r) => [...r, x.id]); setSent(false); }}
          >
            <span className="msg__top"><span>{x.from}</span><time>{x.time}</time></span>
            <span>{x.subject}</span>
            <span className="msg__prev">{article[1]}</span>
          </button>
        ))}
      </div>
      <div className="inbox__view">
        <h2>{m.subject}</h2>
        <p className="inbox__meta">{m.from} · {m.email} · {m.time}</p>
        <div className="inbox__body"><p>{article[0]}</p><p>{article[2]}</p></div>
        <form
          className="form"
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        >
          <div className="field">
            <label htmlFor="reply">Reply</label>
            <textarea className="textarea" id="reply" placeholder="Lorem ipsum dolor sit amet…" required />
          </div>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <button className="dbtn dbtn--primary" type="submit">Send reply</button>
            {sent ? <span className="saved">Sent (demo — nothing leaves your browser)</span> : null}
          </div>
        </form>
      </div>
    </div>
  );
}
