import type { Metadata } from "next";
import { PageHead } from "@/components/site/PageHead";
import { Section } from "@/components/ui/Section";
import { services } from "@/content/people";

export const metadata: Metadata = { title: "Lorem ipsum dolor" };

export default function ServicesPage() {
  return (
    <>
      <PageHead title="Lorem Ipsum Dolor" intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." />
      <Section theme="dark" className="services">
        <div className="grid">
          {services.map((s, i) => (
            <article className="service" key={s.title}>
              <span className="service__n">0{i + 1}</span>
              <h2 className="service__t">{s.title}</h2>
              <div className="service__b">
                <p>{s.text}</p>
                <ul>{s.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
