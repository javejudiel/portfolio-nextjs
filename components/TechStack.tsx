"use client";

import { techStack } from "@/data/portfolio";
import { SectionLabel } from "./SectionLabel";

export function TechStack() {
  return (
    <section id="skills" className="section-block">
      <SectionLabel>Tech Stack</SectionLabel>
      <h2>Technologies I Use</h2>
      <div className="tech-grid">
        {techStack.map((tech) => (
          <div className="tech-card" key={tech.name}>
            <span className="tech-logo">
              <img
                src={tech.logo}
                alt=""
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                  event.currentTarget.nextElementSibling?.classList.add("is-visible");
                }}
              />
              <strong>{tech.short}</strong>
            </span>
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
