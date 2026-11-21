import { Section } from "@/components/ui/Section";
import { LogoTile } from "@/components/ui/Logo";
import { experience, freelance } from "@/content/people";

export function Experience() {
  return (
    <Section theme="dark" id="experience" className="ch exp">
      <div className="grid">
        <header className="split__head"><h2>Lorem ipsum</h2></header>
        <div className="split__body">
          <ul>
            {experience.map((x, i) => (
              <li className="xp-row" key={x.company}>
                <div className="xp__logo"><LogoTile shape={x.shape} dark={i % 2 === 1} /></div>
                <div className="xp__text">
                  <h3 className="xp__company">{x.company}</h3>
                  <p className="xp__role">{x.role}</p>
                </div>
                <span className="xp__years">{x.years}</span>
              </li>
            ))}
            <li className="xp-row end" aria-hidden="true" />
          </ul>
          <p className="free__label">Lorem ipsum dolor sit amet consectetur</p>
          <div className="free__list">
            {freelance.map((f) => <span key={f}>{f}</span>)}
          </div>
        </div>
      </div>
    </Section>
  );
}
