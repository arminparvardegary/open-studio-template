import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHead } from "@/components/site/PageHead";
import { RollLink } from "@/components/ui/RollLink";
import { Section } from "@/components/ui/Section";
import { getNote, noteBody, notes } from "@/content/insights";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return notes.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const n = getNote((await params).slug);
  return { title: n?.title ?? "Not found", description: n?.excerpt };
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();

  return (
    <>
      <PageHead compact title={note.title} eyebrow={`${note.date} · ${note.category}`} />
      <Section theme="dark" className="article">
        <div className="grid">
          <div className="article__cover">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={note.image} alt="" width={810} height={1012} />
          </div>
          <div className="article__meta"><span>{note.date}</span><span>{note.category}</span><span>{note.read}</span></div>
          <div className="article__body">{noteBody.map((t, i) => <p key={i}>{t}</p>)}</div>
          <div className="article__back"><RollLink href="/insights">Lorem ipsum</RollLink></div>
        </div>
      </Section>
    </>
  );
}
