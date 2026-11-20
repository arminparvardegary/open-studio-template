import { site } from "@/content/site";
import { Waves } from "./Waves";
import { Clock } from "./Clock";

export function Hero() {
  return (
    <section className="hero" id="hero" data-theme="dark">
      <div className="hero__bg">
        <Waves variant="hero" />
        <div className="grain" />
      </div>
      <h1 className="sr-only">{site.name}</h1>
      <div className="hero__wordmark" aria-hidden="true">
        <span>{site.heroWord}</span>
      </div>
      <div className="hero__fade" />
      <p className="hero__tag">{site.tagline}</p>
      <div className="hero__meta">
        <p>
          <Clock />
          <span>{site.location}</span>
        </p>
        <p>
          <span className="dot" />
          <span>Lorem ipsum dolor sit.</span>
        </p>
      </div>
    </section>
  );
}
