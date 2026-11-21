import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/site/PageHead";
import { Section } from "@/components/ui/Section";
import { projects } from "@/content/work";

export const metadata: Metadata = { title: "Lorem ipsum" };

export default function WorkPage() {
  return (
    <>
      <PageHead title="Lorem Ipsum" intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." eyebrow="( 7 )" />
      <Section theme="dark" className="worklist">
        <div className="grid">
          <div className="worklist__grid">
            {projects.map((p) => (
              <Link key={p.slug} href={`/work/${p.slug}`} className="wcard">
                <div className="wcard__img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt="" width={1396} height={786} />
                </div>
                <div className="wcard__cap"><span>{p.title}</span><span>{p.meta}</span></div>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
