import { About } from "@/components/site/About";
import { AccentBlock } from "@/components/site/AccentBlock";
import { Clients } from "@/components/site/Clients";
import { Experience } from "@/components/site/Experience";
import { Hero } from "@/components/site/Hero";
import { InsightsSection } from "@/components/site/InsightsSection";
import { WorkSection } from "@/components/site/WorkSection";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkSection />
      <About />
      <Experience />
      <InsightsSection />
      <Clients />
      <AccentBlock />
    </>
  );
}
