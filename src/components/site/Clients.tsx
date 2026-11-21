import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ArrowUpRight } from "@/components/ui/Icons";
import { clients } from "@/content/people";

export function Clients() {
  return (
    <Section theme="dark" id="clients" className="clients">
      <div className="grid">
        <h2 className="clients__title">Lorem ipsum</h2>
        <p className="clients__note">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor — ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="cl-wrap">
        <ul className="cl-grid">
          {clients.map(([label, cls, cs]) =>
            cs ? (
              <li className="cs" key={label}>
                <ArrowUpRight className="go" />
                <span className={`lg ${cls}`}>{label}</span>
                <span className="cs-t"><b>{label}</b><i>Lorem ipsum</i></span>
              </li>
            ) : (
              <li key={label}><span className={`lg ${cls}`}>{label}</span></li>
            ),
          )}
          <li className="spot">
            Lorem ipsum dolor.
            <Link href="/contact">Sit amet <ArrowUpRight style={{ width: 10, height: 10 }} /></Link>
          </li>
        </ul>
      </div>
    </Section>
  );
}
