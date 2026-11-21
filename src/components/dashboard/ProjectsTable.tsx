"use client";

import { useMemo, useState } from "react";
import { projectRows, type ProjectRow, type Status } from "@/content/dashboard";

type SortKey = "name" | "status" | "budget" | "ts";
const FILTERS: ("all" | Status)[] = ["all", "active", "review", "paused", "done"];
const PAGE = 8;
const money = (n: number) => "$" + n.toLocaleString("en-US");

/** Searchable, filterable, sortable table with pagination. Swap `projectRows` for your own data. */
export function ProjectsTable() {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<"all" | Status>("all");
  const [sort, setSort] = useState<{ key: SortKey; dir: 1 | -1 }>({ key: "ts", dir: -1 });
  const [page, setPage] = useState(0);

  const rows = useMemo(() => {
    const s = q.trim().toLowerCase();
    const filtered = projectRows.filter(
      (r) => (status === "all" || r.status === status) && (!s || `${r.name} ${r.client} ${r.owner}`.toLowerCase().includes(s)),
    );
    return filtered.sort((a: ProjectRow, b: ProjectRow) => {
      const av = a[sort.key], bv = b[sort.key];
      return (av < bv ? -1 : av > bv ? 1 : 0) * sort.dir;
    });
  }, [q, status, sort]);

  const pages = Math.max(1, Math.ceil(rows.length / PAGE));
  const safePage = Math.min(page, pages - 1);
  const visible = rows.slice(safePage * PAGE, safePage * PAGE + PAGE);

  const th = (key: SortKey, label: string, num = false) => (
    <th className={num ? "num" : undefined} aria-sort={sort.key === key ? (sort.dir === 1 ? "ascending" : "descending") : "none"}>
      <button onClick={() => setSort((s) => ({ key, dir: s.key === key ? (s.dir === 1 ? -1 : 1) : 1 }))}>
        {label} <span aria-hidden="true">{sort.key === key ? (sort.dir === 1 ? "↑" : "↓") : "↕"}</span>
      </button>
    </th>
  );

  return (
    <>
      <div className="toolbar">
        <div className="seg" role="group" aria-label="Filter by status">
          {FILTERS.map((f) => (
            <button key={f} aria-pressed={status === f} onClick={() => { setStatus(f); setPage(0); }}>
              {f === "all" ? "All" : f[0].toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
        <div className="dsearch">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
          <input type="search" placeholder="Filter projects…" aria-label="Filter projects" value={q} onChange={(e) => { setQ(e.target.value); setPage(0); }} />
        </div>
      </div>

      <div className="tablewrap">
        <table className="table">
          <thead>
            <tr>
              {th("name", "Project")}
              {th("status", "Status")}
              <th>Owner</th>
              {th("budget", "Budget", true)}
              {th("ts", "Updated", true)}
            </tr>
          </thead>
          <tbody>
            {visible.map((r) => (
              <tr key={r.id}>
                <td><b>{r.name}</b><small>{r.client}</small></td>
                <td><span className={`pill ${r.status}`}>{r.status[0].toUpperCase() + r.status.slice(1)}</span></td>
                <td>{r.owner}</td>
                <td className="num">{money(r.budget)}</td>
                <td className="num">{r.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {visible.length === 0 ? <p className="empty">Lorem ipsum dolor — no results.</p> : null}
      </div>

      <div className="pager">
        <span>{rows.length} results · page {safePage + 1} of {pages}</span>
        <div>
          <button className="dbtn" disabled={safePage === 0} onClick={() => setPage(safePage - 1)}>Previous</button>
          <button className="dbtn" disabled={safePage >= pages - 1} onClick={() => setPage(safePage + 1)}>Next</button>
        </div>
      </div>
    </>
  );
}
