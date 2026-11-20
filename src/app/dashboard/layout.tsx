import type { Metadata } from "next";
import { DashShell } from "@/components/dashboard/DashShell";

export const metadata: Metadata = {
  title: { default: "Dashboard", template: "%s — Dashboard" },
  robots: { index: false },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <DashShell>{children}</DashShell>;
}
