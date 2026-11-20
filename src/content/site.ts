/**
 * Site-wide settings. Edit this file to rename the template, change the
 * navigation, the contact email, or the clock location in the header/footer.
 */
export const site = {
  /** Used in <title>, the footer and the copyright line */
  name: "Studio Template",
  /** Text shown in the logo placeholder. Swap <Logo /> for your own mark. */
  logoText: "Logo",
  /** Big gradient word on the home page hero */
  heroWord: "Lorem",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.",
  email: "hello@example.com",
  location: "Lorem City, Ipsum",
  /** IANA time zone for the little clock (e.g. "Europe/Berlin", "America/New_York") */
  timeZone: "UTC",
};

export type NavItem = { label: string; href: string; count?: number };

/** Main navigation. Labels are placeholders — rename them to your own. */
export const nav: NavItem[] = [
  { label: "Lorem", href: "/work", count: 7 },
  { label: "Ipsum", href: "/insights", count: 5 },
  { label: "Dolor", href: "/about" },
  { label: "Amet", href: "/contact" },
];

export const footerServices = [
  { label: "Lorem ipsum dolor", href: "/services" },
  { label: "Sit amet", href: "/services" },
  { label: "Consectetur elit", href: "/services" },
];

export const footerSocial = [
  { label: "Lorem", href: "#" },
  { label: "Ipsum", href: "#" },
  { label: "Dolor", href: "#" },
];

export const footerLegal = [
  { label: "Lorem", href: "/legal/privacy" },
  { label: "Ipsum", href: "/legal/cookies" },
  { label: "Dolor", href: "/legal/terms" },
  { label: "Amet", href: "#" },
];
