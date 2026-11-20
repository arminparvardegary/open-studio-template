export const stats = [
  { label: "Lorem ipsum", value: "24,810", delta: "+12.4%", up: true },
  { label: "Dolor sit", value: "1,284", delta: "+4.1%", up: true },
  { label: "Amet elit", value: "$48.2k", delta: "+8.7%", up: true },
  { label: "Tempor", value: "2.4%", delta: "−0.6%", up: false },
];

export const series = [
  { label: "Jan", value: 42 }, { label: "Feb", value: 58 }, { label: "Mar", value: 51 }, { label: "Apr", value: 74 },
  { label: "May", value: 66 }, { label: "Jun", value: 92 }, { label: "Jul", value: 84 }, { label: "Aug", value: 108 },
  { label: "Sep", value: 99 }, { label: "Oct", value: 126 }, { label: "Nov", value: 118 }, { label: "Dec", value: 142 },
];

export const activity = [
  { who: "LI", name: "Lorem Ipsum", what: "dolor sit amet consectetur", when: "2m" },
  { who: "DS", name: "Dolor Sitamet", what: "adipiscing elit sed do", when: "18m" },
  { who: "CE", name: "Consectetur Elit", what: "eiusmod tempor incididunt", when: "1h" },
  { who: "AD", name: "Adipiscing Dolor", what: "ut labore et dolore", when: "3h" },
  { who: "TI", name: "Tempor Incid", what: "magna aliqua ut enim", when: "5h" },
];

export const topProjects = [
  { name: "Lorem Ipsum", value: "$12.4k", pct: 88 },
  { name: "Dolor Sit", value: "$9.1k", pct: 64 },
  { name: "Amet Console", value: "$7.8k", pct: 55 },
  { name: "Consectetur", value: "$4.2k", pct: 30 },
];

export type Status = "active" | "review" | "paused" | "done";
export type ProjectRow = { id: number; name: string; client: string; status: Status; owner: string; budget: number; updated: string; ts: number };

const names = ["Lorem Ipsum", "Dolor Sit", "Amet Console", "Consectetur", "Adipiscing Elit", "Eiusmod Tempor", "Magna Aliqua", "Ut Enim Minim", "Veniam Nostrud", "Exercitation", "Ullamco Laboris", "Nisi Aliquip", "Commodo Duis", "Irure Dolor"];
const clients = ["Lorem Co", "Dolor Inc", "Amet Labs", "Elit Group", "Tempor Ltd"];
const owners = ["Lorem Ipsum", "Dolor Sitamet", "Consectetur Elit", "Adipiscing Dolor"];
const statuses: Status[] = ["active", "review", "active", "paused", "done", "active", "review"];

export const projectRows: ProjectRow[] = names.map((name, i) => ({
  id: i + 1,
  name,
  client: clients[i % clients.length],
  status: statuses[i % statuses.length],
  owner: owners[i % owners.length],
  budget: 3200 + ((i * 1733) % 14000),
  updated: `Nov ${20 - i}`,
  ts: 20 - i,
}));

export const messages = [
  { id: 1, from: "Lorem Ipsum", email: "lorem@example.com", subject: "Dolor sit amet consectetur", time: "09:12", unread: true },
  { id: 2, from: "Dolor Sitamet", email: "dolor@example.com", subject: "Adipiscing elit sed do eiusmod", time: "Yesterday", unread: true },
  { id: 3, from: "Consectetur Elit", email: "consectetur@example.com", subject: "Tempor incididunt ut labore", time: "Yesterday", unread: false },
  { id: 4, from: "Adipiscing Dolor", email: "adipiscing@example.com", subject: "Magna aliqua ut enim ad minim", time: "Nov 17", unread: false },
  { id: 5, from: "Tempor Incid", email: "tempor@example.com", subject: "Veniam quis nostrud exercitation", time: "Nov 15", unread: false },
];
