import { experiences, services } from "@/data/portfolio";
import { SectionLabel } from "./SectionLabel";

export function Experience() {
  return (
    <section id="experience" className="experience-layout">
      <div className="section-block">
        <SectionLabel>Services</SectionLabel>
        <h2>What I can help with</h2>
        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title}>
                <Icon size={22} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>

      <div className="section-block">
        <SectionLabel>Experience</SectionLabel>
        <h2>Where I've built</h2>
        <div className="timeline">
          {experiences.map((item) => (
            <article key={`${item.role}-${item.company}`}>
              <span>{item.period}</span>
              <h3>{item.role}</h3>
              <strong>{item.company}</strong>
              <p>{item.description}</p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
