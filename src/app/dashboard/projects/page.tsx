import type { Metadata } from "next";
import { ProjectsTable } from "@/components/dashboard/ProjectsTable";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <div className="dhead">
        <div><h1>Projects</h1><p>Lorem ipsum dolor sit amet consectetur.</p></div>
        <button className="dbtn dbtn--primary">New project</button>
      </div>
      <ProjectsTable />
    </>
  );
}
