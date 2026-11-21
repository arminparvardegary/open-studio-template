import Link from "next/link";
import { ArrowRight } from "./Icons";

/** "Show all →" style link whose label rolls up on hover. */
export function RollLink({ href, children, className = "" }: { href: string; children: string; className?: string }) {
  const inner = (
    <>
      <span className="roll">
        <span className="rt">{children}</span>
        <span className="rt" aria-hidden="true">{children}</span>
      </span>
      <ArrowRight />
    </>
  );
  if (href.startsWith("mailto:") || href.startsWith("http")) {
    return <a className={`showall ${className}`} href={href}>{inner}</a>;
  }
  return <Link className={`showall ${className}`} href={href}>{inner}</Link>;
}
