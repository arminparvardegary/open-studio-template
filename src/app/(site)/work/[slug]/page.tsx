import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHead } from "@/components/site/PageHead";
import { Section } from "@/components/ui/Section";
import { RollLink } from "@/components/ui/RollLink";
import { article } from "@/content/lorem";
import { getProject, projects } from "@/content/work";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProject((await params).slug);
  return { title: p?.title ?? "Not found", description: p?.summary };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const i = projects.indexOf(project);
  const next = projects[(i + 1) % projects.length];

  return (
    <>
      <PageHead title={project.title} eyebrow={project.meta} />
      <Section theme="dark" className="pdetail">
        <div className="grid">
          <div className="pdetail__cover">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.image} alt="" width={1396} height={786} />
          </div>
          <dl className="pdetail__facts">
            <div className="fact"><dt>Lorem</dt><dd>{project.client}</dd></div>
            <div className="fact"><dt>Ipsum</dt><dd>{project.role}</dd></div>
            <div className="fact"><dt>Dolor</dt><dd>{project.year}</dd></div>
          </dl>
          <div className="pdetail__body">
            <p>{project.summary}</p>
            <p>{article[1]}</p>
            <p>{article[2]}</p>
          </div>
          <div className="pdetail__gallery">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={projects[(i + 2) % projects.length].image} alt="" width={1396} height={786} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={projects[(i + 3) % projects.length].image} alt="" width={1396} height={786} />
          </div>
        </div>
      </Section>
      <Section theme="light" className="pnext">
        <div className="grid">
          <Link href={`/work/${next.slug}`} className="pnext__link">
            <p className="pnext__label">Lorem ipsum</p>
            <p className="pnext__title">{next.title}</p>
          </Link>
          <div style={{ gridColumn: "1 / -1", marginTop: 40 }}><RollLink href="/work">Lorem ipsum dolor</RollLink></div>
        </div>
      </Section>
    </>
  );
}
