import type { Metadata } from "next";
import { InsightsSection } from "@/components/site/InsightsSection";
import { PageHead } from "@/components/site/PageHead";

export const metadata: Metadata = { title: "Ipsum dolor" };

export default function InsightsPage() {
  return (
    <>
      <PageHead title="Ipsum Dolor" intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." eyebrow="( 5 )" />
      <InsightsSection showAll={false} heading="Lorem" />
    </>
  );
}
