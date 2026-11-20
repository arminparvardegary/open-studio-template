import { RollLink } from "@/components/ui/RollLink";
import { site } from "@/content/site";
import { Waves } from "./Waves";
import { Testimonials } from "./Testimonials";

/** The big accent-coloured block: testimonials + email call-to-action. */
export function AccentBlock({ reviews = true }: { reviews?: boolean }) {
  return (
    <div className={`kw${reviews ? "" : " kw--short"}`} data-theme="dark">
      <div className="kw-bg" aria-hidden="true">
        <Waves variant="accent" />
        <div className="grain" />
      </div>
      {reviews ? (
        <section className="sec reviews" id="reviews">
          <div className="grid">
            <h2>Lorem ipsum</h2>
            <Testimonials />
          </div>
        </section>
      ) : null}
      <section className="sec contact" id="contact">
        <div className="grid">
          <a className="contact__mail" href={`mailto:${site.email}`}>{site.email}</a>
          <RollLink href={`mailto:${site.email}`}>Lorem ipsum dolor</RollLink>
        </div>
      </section>
    </div>
  );
}
