import { Section } from "@/components/ui/Section";
import { RollLink } from "@/components/ui/RollLink";
import { notes } from "@/content/insights";
import { InsightsList } from "./InsightsList";

export function InsightsSection({ showAll = true, heading = "Lorem" }: { showAll?: boolean; heading?: string }) {
  return (
    <Section theme="light" id="insights" className="sec insights">
      <div className="grid">
        <header className="sec-head">
          <h2>{heading}</h2>
          {showAll ? <RollLink href="/insights">Lorem ipsum</RollLink> : null}
        </header>
        <InsightsList notes={notes} />
      </div>
    </Section>
  );
}
