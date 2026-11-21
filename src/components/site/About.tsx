import { Section } from "@/components/ui/Section";
import { RollLink } from "@/components/ui/RollLink";
import { p } from "@/content/lorem";
import { RevealText } from "./RevealText";

const words = "I'm @AV Lorem Ipsum — Dolor & Sit amet based in Consectetur, obsessed with adipiscing elit sed. I craft bold ideas, sleek products, and pages - down to the details that make them sing.".split(" ");

export function About({ link = true }: { link?: boolean }) {
  return (
    <Section theme="light" id="about" className="ch about">
      <div className="grid">
        <h2 className="sr-only">Lorem ipsum</h2>
        <RevealText words={words} />
        <div className="left">{link ? <RollLink href="/about">Lorem ipsum</RollLink> : null}</div>
        <div className="about__body">
          <p>{p.about1}</p>
          <p>{p.about2}</p>
        </div>
      </div>
    </Section>
  );
}
