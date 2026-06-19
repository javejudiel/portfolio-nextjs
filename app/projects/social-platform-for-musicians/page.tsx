import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  GitBranch,
  Mail,
  Network,
  Search,
  ShieldCheck,
  Workflow,
  Zap
} from "lucide-react";
import { profile } from "@/data/portfolio";

const techStack = [
  "Node.js",
  "GraphQL",
  "Neo4j",
  "Cypher",
  "DigitalOcean",
  "Microsoft OAuth2",
  "Outlook SMTP",
  "Webhooks",
  "CI/CD"
];

const highlights = [
  {
    title: "Graph-first data model",
    description:
      "Designed relationship-focused models for users, businesses, media assets, and social connections using Neo4j.",
    icon: Network
  },
  {
    title: "GraphQL API architecture",
    description:
      "Led backend architecture for a musician networking platform with query patterns shaped around social discovery.",
    icon: GitBranch
  },
  {
    title: "Query optimization",
    description:
      "Reduced average GraphQL response time by 40% through Neo4j indexing and Cypher query refactoring.",
    icon: Zap
  },
  {
    title: "Deployment automation",
    description:
      "Configured webhook-triggered CI/CD on DigitalOcean for automatic pull-and-restart deployments from active branches.",
    icon: Workflow
  }
];

export const metadata: Metadata = {
  title: "Social Platform for Musicians | Jave Judiel",
  description:
    "Case study for a graph-backed musician social platform built with Node.js, GraphQL, Neo4j, Cypher query optimization, OAuth, SMTP, and CI/CD workflows."
};

export default function SocialPlatformCaseStudy() {
  return (
    <main className="case-page">
      <div className="case-shell">
        <header className="case-header">
          <Link className="back-link" href="/#projects">
            <ArrowLeft size={18} />
            Back to portfolio
          </Link>
          <a className="download-link" href={profile.cvPath} download>
            Download CV
          </a>
        </header>

        <section className="case-hero social-case-hero">
          <div>
            <div className="section-label">
              <span />
              Featured Case Study
            </div>
            <h1>Social Platform for Musicians</h1>
            <p>
              A LinkedIn-style networking platform for musicians, businesses,
              media assets, and social relationships, built around GraphQL APIs
              and Neo4j graph database modeling.
            </p>
            <div className="case-actions">
              <a href={`mailto:${profile.email}?subject=Musician social platform case study`}>
                Discuss this work
              </a>
              <Link href="/#contact">Contact</Link>
            </div>
          </div>

          <aside className="confidential-card">
            <ShieldCheck size={24} />
            <h2>Private Platform Work</h2>
            <p>
              Screenshots and source code are not public. This case study
              focuses on backend architecture, graph modeling, optimization, and
              deployment work that can be shared safely.
            </p>
          </aside>
        </section>

        <section className="case-grid case-summary-grid">
          <article>
            <span>Role</span>
            <strong>Backend Development Lead</strong>
            <p>Backend architecture, graph modeling, API design, optimization, and deployment automation.</p>
          </article>
          <article>
            <span>Domain</span>
            <strong>Social Networking</strong>
            <p>Relationship-heavy discovery between musicians, businesses, media, and communities.</p>
          </article>
          <article>
            <span>Result</span>
            <strong>40% Faster Queries</strong>
            <p>Improved average GraphQL response time through indexing and Cypher query refactoring.</p>
          </article>
        </section>

        <section className="case-section">
          <div className="case-section-heading">
            <div className="section-label">
              <span />
              Problem
            </div>
            <h2>Traditional relational models were not the best fit.</h2>
          </div>
          <p className="case-lede">
            The platform needed to model people, businesses, media, and social
            relationships in a way that could support discovery, recommendations,
            and network-style interactions. The core challenge was building a
            backend that could express and query those relationships naturally
            while staying performant as the graph grew.
          </p>
        </section>

        <section className="case-section">
          <div className="case-section-heading">
            <div className="section-label">
              <span />
              What I Built
            </div>
            <h2>Backend systems for a graph-backed social product</h2>
          </div>
          <div className="case-grid highlight-grid">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title}>
                  <Icon size={24} />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="case-section graph-section">
          <div className="case-section-heading">
            <div className="section-label">
              <span />
              Architecture
            </div>
            <h2>Relationship-first system architecture</h2>
          </div>
          <p className="case-lede">
            This diagram keeps the graph-heavy structure visible while removing
            private implementation details, repository names, and environment
            specifics.
          </p>
          <div className="architecture-image">
            <Image
              src="/assets/img/social-platform-architecture.svg"
              alt="Simplified social platform system architecture diagram"
              width={1600}
              height={1040}
            />
          </div>
        </section>

        <section className="case-section case-two-column">
          <div>
            <div className="section-label">
              <span />
              Impact
            </div>
            <h2>Practical outcomes</h2>
            <ul className="case-list">
              <li>Designed scalable relationship models for users, businesses, media assets, and social connections.</li>
              <li>Improved GraphQL response time by 40% through targeted Neo4j indexing and Cypher refactoring.</li>
              <li>Automated deployment workflows using webhook-triggered DigitalOcean CI/CD pipelines.</li>
              <li>Integrated Microsoft OAuth2 and Outlook SMTP for secure transactional email delivery.</li>
            </ul>
          </div>

          <div>
            <div className="section-label">
              <span />
              Tech Stack
            </div>
            <h2>Tools used</h2>
            <div className="case-tags">
              {techStack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section case-timeline">
          <div className="case-section-heading">
            <div className="section-label">
              <span />
              Workflow
            </div>
            <h2>How the backend evolved</h2>
          </div>
          <div className="case-grid timeline-grid">
            <article>
              <Search size={22} />
              <h3>Discovery and modeling</h3>
              <p>Mapped the core entities and social relationships that mattered for musician discovery and networking.</p>
            </article>
            <article>
              <Network size={22} />
              <h3>Graph API design</h3>
              <p>Built GraphQL access patterns around relationship traversal instead of forcing graph behavior into flat tables.</p>
            </article>
            <article>
              <Zap size={22} />
              <h3>Performance tuning</h3>
              <p>Refactored Cypher queries and indexes to reduce query latency and improve backend responsiveness.</p>
            </article>
            <article>
              <Mail size={22} />
              <h3>Platform integrations</h3>
              <p>Added authentication, email delivery, and deployment automation to support operational reliability.</p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
