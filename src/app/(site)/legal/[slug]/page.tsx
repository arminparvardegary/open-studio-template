import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHead } from "@/components/site/PageHead";
import { Section } from "@/components/ui/Section";
import { legalPages } from "@/content/legal";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(legalPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { title: legalPages[(await params).slug]?.title ?? "Not found" };
}

export default async function LegalPage({ params }: Props) {
  const { slug } = await params;
  const page = legalPages[slug];
  if (!page) notFound();
  return (
    <>
      <PageHead title={page.title} />
      <Section theme="dark" className="legal">
        <div className="grid">
          <p className="legal__updated">{page.updated}</p>
          <div className="legal__body">
            {page.sections.map((s) => (
              <section key={s.heading}><h2>{s.heading}</h2><p>{s.body}</p></section>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
