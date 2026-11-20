export const experience = [
  { company: "Lorem Ipsum", role: "Dolor sit amet", years: "2024 – Present", shape: "square" },
  { company: "Dolor Labs", role: "Consectetur adipiscing", years: "2023 – Present", shape: "circle" },
  { company: "Amet Studio", role: "Sed do eiusmod", years: "2023 – 2024", shape: "diamond" },
  { company: "Tempor Agency & Studio", role: "Senior ut labore & dolore magna", years: "2018 – 2023", shape: "square" },
  { company: "Aliqua & Co", role: "Ut enim ad minim", years: "2018", shape: "circle" },
] as const;

export const freelance = ["Lorem", "ipsum.co", "dolor.io", "sitamet.co"];

export const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit — sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    name: "Lorem Ipsum",
    role: "Dolor sit at Amet Co",
    link: "Amet Co case study",
  },
  {
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
    name: "Dolor Sitamet",
    role: "Consectetur at Elit Finance",
    link: "Elit Finance case study",
  },
  {
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.",
    name: "Consectetur Elit",
    role: "Adipiscing at Tempor Health",
    link: "Tempor Health case study",
  },
];

/** [label, style class (l1…l8), hasCaseStudy] — placeholders for client logos */
export const clients: [string, string, boolean?][] = [
  ["Lorem Ipsum", "l1", true], ["DOLOR", "l2"], ["Sitamet", "l3"], ["Consectetur", "l5", true],
  ["Adipiscing", "l7"], ["ELT", "l8"], ["INCIDIDUNT", "l2"], ["TEMPOR", "l5", true],
  ["Labore", "l3"], ["Magna", "l1"], ["Ut Enim Minim", "l7", true], ["VNQX", "l4"],
  ["Veniam", "l1"], ["Nostrud", "l6"], ["Exercit", "l6"], ["Ullamco", "l7", true],
  ["Laboris Nisi", "l1", true], ["ALIQUIP", "l5"], ["◍", "l3"], ["Commodo", "l4"],
  ["Duis", "l6"], ["Irure Dolor", "l3", true], ["REPREH", "l8"], ["velit.io", "l4"],
  ["cillum", "l3"], ["fugiat.co", "l4"], ["Nulla Pariatur", "l7"], ["EXC", "l8"],
  ["OCCAECAT", "l5"], ["CUPIDATAT", "l2"], ["PROIDENT", "l5"],
];

export const services = [
  { title: "Lorem ipsum dolor", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.", items: ["Consectetur elit", "Sed do eiusmod", "Tempor incididunt"] },
  { title: "Sit amet consectetur", text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.", items: ["Ut labore et dolore", "Magna aliqua", "Ut enim ad minim"] },
  { title: "Adipiscing elit sed", text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.", items: ["Quis nostrud", "Exercitation ullamco", "Laboris nisi"] },
];
