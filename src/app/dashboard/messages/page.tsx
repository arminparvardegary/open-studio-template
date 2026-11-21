import type { Metadata } from "next";
import { Inbox } from "@/components/dashboard/Inbox";

export const metadata: Metadata = { title: "Messages" };

export default function MessagesPage() {
  return (
    <>
      <div className="dhead"><div><h1>Messages</h1><p>Lorem ipsum dolor sit amet.</p></div></div>
      <Inbox />
    </>
  );
}
