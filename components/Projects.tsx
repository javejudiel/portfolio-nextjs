import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionLabel } from "./SectionLabel";

export function Projects() {
  return (
    <section id="projects" className="panel-section projects-panel">
      <div className="section-heading-row">
        <div>
          <SectionLabel>Featured Projects</SectionLabel>
          <h2>Some Things I've Built</h2>
        </div>
        <a href="#contact">
          View All Projects
          <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-mark" aria-hidden="true">
              <span>{project.title.slice(0, 2)}</span>
            </div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a href={project.href}>
                View Project
                <ArrowUpRight size={15} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
