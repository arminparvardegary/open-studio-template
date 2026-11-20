import { AreaChart } from "@/components/dashboard/AreaChart";
import { activity, series, stats, topProjects } from "@/content/dashboard";
import Link from "next/link";

export default function Overview() {
  return (
    <>
      <div className="dhead">
        <div>
          <h1>Lorem ipsum, Lorem</h1>
          <p>Dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
        </div>
        <Link className="dbtn dbtn--primary" href="/dashboard/projects">View projects</Link>
      </div>

      <div className="stats">
        {stats.map((s) => (
          <div className="card" key={s.label}>
            <p className="stat__label">{s.label}</p>
            <p className="stat__value">{s.value}</p>
            <span className={`stat__delta ${s.up ? "up" : "down"}`}>{s.delta}</span>
          </div>
        ))}
      </div>

      <div className="row2">
        <section className="card">
          <div className="card__head"><div><p className="card__title">Lorem ipsum dolor</p><p className="card__sub">Sit amet consectetur · last 12 months</p></div></div>
          <AreaChart data={series} />
        </section>
        <section className="card">
          <div className="card__head"><p className="card__title">Top projects</p></div>
          <ul className="list bars">
            {topProjects.map((p) => (
              <li key={p.name}>
                <b>{p.name}</b><span className="mut">{p.value}</span>
                <span className="bar"><i style={{ width: `${p.pct}%` }} /></span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="card">
        <div className="card__head"><p className="card__title">Recent activity</p></div>
        <ul className="list">
          {activity.map((a) => (
            <li key={a.name}>
              <span className="avatar-s">{a.who}</span>
              <div className="grow"><b>{a.name}</b><span>{a.what}</span></div>
              <time>{a.when}</time>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
