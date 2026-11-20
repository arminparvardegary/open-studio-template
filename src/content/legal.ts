import { article, p } from "./lorem";

export const legalPages: Record<string, { title: string; updated: string; sections: { heading: string; body: string }[] }> = {
  privacy: {
    title: "Lorem ipsum dolor",
    updated: "Lorem 1, 2026",
    sections: [
      { heading: "Lorem ipsum", body: p.medium },
      { heading: "Dolor sit amet", body: article[2] },
      { heading: "Consectetur adipiscing", body: p.long },
    ],
  },
  cookies: {
    title: "Sit amet cookies",
    updated: "Lorem 1, 2026",
    sections: [
      { heading: "Sed do eiusmod", body: p.short },
      { heading: "Tempor incididunt", body: p.medium },
    ],
  },
  terms: {
    title: "Ut labore terms",
    updated: "Lorem 1, 2026",
    sections: [
      { heading: "Magna aliqua", body: p.long },
      { heading: "Ut enim ad minim", body: p.medium },
      { heading: "Quis nostrud", body: article[3] },
    ],
  },
};
