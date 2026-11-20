import type { Metadata } from "next";
import { SettingsForms } from "@/components/dashboard/SettingsForms";

export const metadata: Metadata = { title: "Settings" };

export default function SettingsPage() {
  return (
    <>
      <div className="dhead"><div><h1>Settings</h1><p>Lorem ipsum dolor sit amet consectetur.</p></div></div>
      <SettingsForms />
    </>
  );
}
