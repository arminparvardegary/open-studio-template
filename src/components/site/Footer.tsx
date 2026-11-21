import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { ArrowUpRight } from "@/components/ui/Icons";
import { footerLegal, footerServices, footerSocial, site } from "@/content/site";
import { Clock } from "./Clock";
import { CookieSettingsButton } from "./CookieBanner";

export function Footer() {
  return (
    <footer className="foot" id="foot" data-theme="dark">
      <div className="grid">
        <div className="fc1">
          <p className="foot__label">Lorem</p>
          <p className="foot__cta"><span className="dot dot--accent" />Lorem ipsum dolor sit.</p>
          <p className="foot__label foot__services">Ipsum</p>
          {footerServices.map((l) => <Link key={l.label} className="foot__link" href={l.href}>{l.label}</Link>)}
        </div>
        <div className="fc2">
          <p className="foot__label">Dolor</p>
          {footerSocial.map((l) => (
            <a key={l.label} className="foot__link" href={l.href}>{l.label}<ArrowUpRight /></a>
          ))}
        </div>
        <div className="fc3">
          <p className="foot__label">Lorem ipsum &amp; dolor</p>
          <div className="rec">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/placeholders/cover-1.jpg" alt="" width={104} height={139} />
            <div>
              <p className="rec__k"><span className="eq"><i /><i /><i /></span>Lorem ipsum</p>
              <p className="rec__t">Dolor Sit Amet</p>
              <p className="rec__a">Consectetur, Adipiscing</p>
            </div>
          </div>
          <div className="rec">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/placeholders/cover-2.jpg" alt="" width={104} height={139} />
            <div>
              <p className="rec__k">Sed do</p>
              <p className="rec__t">Eiusmod Tempor</p>
              <p className="rec__a">Incididunt Labore</p>
            </div>
          </div>
        </div>
      </div>
      <div className="foot__rule" />
      <div className="foot__bar">
        <div className="foot__logo"><Logo /></div>
        <p className="foot__where"><Clock /> &nbsp;{site.location}</p>
        <p className="foot__copy">© {new Date().getFullYear()} {site.name}</p>
        <div className="foot__links">
          {footerLegal.map((l) => <Link key={l.label} href={l.href}>{l.label}</Link>)}
          <CookieSettingsButton>Lorem ipsum</CookieSettingsButton>
        </div>
      </div>
    </footer>
  );
}
