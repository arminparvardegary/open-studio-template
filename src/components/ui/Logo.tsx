import Link from "next/link";
import { site } from "@/content/site";

/**
 * Placeholder logo. Replace the contents of this component with your own
 * <svg> or <Image> — every place that shows the logo uses this component.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`logo ${className}`} aria-label={`${site.name} — home`}>
      <span className="logo__mark" aria-hidden="true" />
      <span className="logo__text">{site.logoText}</span>
    </Link>
  );
}

/** Neutral square tile used where a company/client logo would go. */
export function LogoTile({ shape = "square", dark = false }: { shape?: "square" | "circle" | "diamond"; dark?: boolean }) {
  const bg = dark ? "var(--color-ink)" : "var(--color-white)";
  const fg = dark ? "var(--color-white)" : "var(--color-ink)";
  return (
    <svg viewBox="0 0 72 72" width="72" height="72" role="img" aria-label="Logo placeholder">
      <rect width="72" height="72" fill={bg} />
      {shape === "square" && <rect x="22" y="22" width="28" height="28" rx="4" fill={fg} />}
      {shape === "circle" && <circle cx="36" cy="36" r="15" fill={fg} />}
      {shape === "diamond" && <rect x="24" y="24" width="24" height="24" fill={fg} transform="rotate(45 36 36)" />}
      <rect x="22" y="56" width="28" height="3" fill="var(--color-accent)" />
    </svg>
  );
}
