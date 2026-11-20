import { projects } from "@/content/work";
import { RollLink } from "@/components/ui/RollLink";
import { Section } from "@/components/ui/Section";
import { ProjectCards } from "./ProjectCards";

export function WorkSection() {
  return (
    <Section theme="dark" id="work" className="work">
      <div className="work__head">
        <h2 className="work__heading">Lorem Ipsum</h2>
        <RollLink href="/work">Lorem ipsum</RollLink>
      </div>
      <ProjectCards projects={projects} />
    </Section>
  );
}
