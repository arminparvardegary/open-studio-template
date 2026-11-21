import { p } from "./lorem";

export type Project = {
  slug: string;
  title: string;
  meta: string;
  image: string;
  client: string;
  role: string;
  year: string;
  summary: string;
};

const img = (n: number) => `/images/placeholders/work-${n}.svg`;

/** Projects shown on the home page, /work and /work/[slug]. */
export const projects: Project[] = [
  { slug: "lorem-ipsum", title: "Lorem Ipsum", meta: "Dolor sit, 2025", image: img(1), client: "Lorem Co", role: "Dolor sit amet", year: "2025", summary: p.short },
  { slug: "dolor-sit", title: "Dolor Sit", meta: "Amet website, 2024", image: img(2), client: "Dolor Inc", role: "Consectetur", year: "2024", summary: p.medium },
  { slug: "amet-console", title: "Amet Console", meta: "Elit concept, 2025", image: img(3), client: "Amet Labs", role: "Adipiscing elit", year: "2025", summary: p.short },
  { slug: "consectetur", title: "Consectetur", meta: "Sed do page, 2025", image: img(4), client: "Consectetur Ltd", role: "Eiusmod tempor", year: "2025", summary: p.medium },
  { slug: "adipiscing-elit", title: "Adipiscing Elit", meta: "Tempor site, 2026", image: img(5), client: "Elit Group", role: "Incididunt", year: "2026", summary: p.short },
  { slug: "eiusmod-tempor", title: "Eiusmod Tempor", meta: "Labore app, 2024", image: img(6), client: "Tempor Studio", role: "Magna aliqua", year: "2024", summary: p.medium },
  { slug: "magna-aliqua", title: "Magna Aliqua", meta: "Ut enim page, 2025", image: img(7), client: "Aliqua Co", role: "Veniam quis", year: "2025", summary: p.short },
];

export const getProject = (slug: string) => projects.find((x) => x.slug === slug);
