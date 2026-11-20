import type { Metadata } from "next";
import { ContactForm } from "@/components/site/ContactForm";
import { PageHead } from "@/components/site/PageHead";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Amet consectetur" };

export default function ContactPage() {
  return (
    <>
      <PageHead title="Amet Consectetur" intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." />
      <Section theme="dark" className="contactpage">
        <div className="grid">
          <div className="contactpage__info">
            <a className="contactpage__mail" href={`mailto:${site.email}`}>{site.email}</a>
            <p style={{ color: "var(--mut)" }}>{site.location}</p>
          </div>
          <div className="contactpage__form"><ContactForm /></div>
        </div>
      </Section>
    </>
  );
}
