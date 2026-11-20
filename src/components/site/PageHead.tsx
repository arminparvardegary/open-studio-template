import { Section } from "@/components/ui/Section";

/** Big heading at the top of inner pages (below the fixed header). */
export function PageHead({ title, intro, eyebrow, compact = false }: { title: string; intro?: string; eyebrow?: string; compact?: boolean }) {
  return (
    <Section theme="dark" className="pagehead">
      <div className="grid">
        {eyebrow ? <p className="pagehead__eyebrow mono">{eyebrow}</p> : null}
        <h1 className={`pagehead__title${compact ? " pagehead__title--compact" : ""}`}>{title}</h1>
        {intro ? <p className="pagehead__intro">{intro}</p> : null}
      </div>
    </Section>
  );
}
