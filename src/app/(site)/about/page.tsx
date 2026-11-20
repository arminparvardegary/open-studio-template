import type { Metadata } from "next";
import { About } from "@/components/site/About";
import { Clients } from "@/components/site/Clients";
import { Experience } from "@/components/site/Experience";

export const metadata: Metadata = { title: "Dolor sit" };

export default function AboutPage() {
  return (
    <>
      <About link={false} />
      <Experience />
      <Clients />
    </>
  );
}
