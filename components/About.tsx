import { stats, profile } from "@/data/portfolio";
import { SectionLabel } from "./SectionLabel";

export function About() {
  return (
    <section id="about" className="panel-section about-panel">
      <div className="about-copy">
        <SectionLabel>About Me</SectionLabel>
        <h2>Get to know me</h2>
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <a className="small-pill" href="#experience">
          Learn More About Me
        </a>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              className="stat-item"
              data-long={stat.value.length > 22 ? "true" : undefined}
              key={stat.label}
            >
              <div className="stat-icon">
                <Icon size={22} />
              </div>
              <div>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
