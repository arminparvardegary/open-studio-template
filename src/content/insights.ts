import { article, p } from "./lorem";

export type Note = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  read: string;
  image: string;
};

const img = (n: number) => `/images/placeholders/note-${n}.jpg`;

export const notes: Note[] = [
  { slug: "lorem-ipsum-dolor-sit-amet", title: "Lorem ipsum dolor sit amet consectetur adipiscing", excerpt: p.medium, date: "Oct 7", category: "Lorem ipsum", read: "3 min read", image: img(1) },
  { slug: "sed-do-eiusmod-tempor", title: "Sed do eiusmod tempor incididunt: ut labore et dolore magna aliqua?", excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.", date: "Oct 14", category: "Dolor", read: "3 min read", image: img(2) },
  { slug: "duis-aute-irure-dolor", title: "Duis aute irure dolor in reprehenderit in voluptate velit esse.", excerpt: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.", date: "Oct 14", category: "Amet", read: "Quick read", image: img(3) },
  { slug: "excepteur-sint-occaecat", title: "Excepteur sint occaecat cupidatat non proident sunt in culpa ✦", excerpt: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.", date: "Oct 13", category: "Dolor", read: "2 min read", image: img(4) },
  { slug: "nemo-enim-ipsam", title: "Nemo enim ipsam voluptatem quia voluptas", excerpt: "At vero eos et accusamus et iusto odio dignissimos ducimus.", date: "Oct 13", category: "Elit", read: "2 min read", image: img(5) },
];

export const getNote = (slug: string) => notes.find((x) => x.slug === slug);
export const noteBody = article;
