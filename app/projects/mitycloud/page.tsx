import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarCheck,
  FileText,
  Lock,
  Network,
  ShieldCheck,
  Stethoscope,
  Video
} from "lucide-react";
import { profile } from "@/data/portfolio";

const techStack = [
  "Django",
  "React",
  "PostgreSQL",
  "WebRTC",
  "OpenVidu",
  "Redis",
  "Django Channels",
  "Daphne",
  "Canvas API",
  "MediaStream API"
];

const highlights = [
  {
    title: "Self-hosted video conferencing",
    description:
      "Architected multi-participant calls, screen sharing, session recording, meeting tools, annotations, whiteboards, and file sharing using WebRTC and OpenVidu.",
    icon: Video
  },
  {
    title: "Patient information masking",
    description:
      "Built privacy-aware screen sharing with Canvas and MediaStream APIs to help protect sensitive clinical information during collaboration.",
    icon: ShieldCheck
  },
  {
    title: "Real-time collaboration",
    description:
      "Implemented presence tracking, live notifications, invitations, chat persistence, and synchronized session state using Django Channels, Daphne, WebSockets, Redis, and ASGI.",
    icon: Network
  },
  {
    title: "Compliance-oriented workflows",
    description:
      "Delivered consent capture, audit logging, attachment validation, and session activity tracking for healthcare collaboration contexts.",
    icon: FileText
  }
];

export const metadata: Metadata = {
  title: "MityCloud Healthcare Platform | Jave Judiel",
  description:
    "Case study for MityCloud, a healthcare collaboration platform built with Django, React, PostgreSQL, WebRTC, DICOM imaging workflows, and privacy-focused collaboration features."
};

export default function MityCloudCaseStudy() {
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

        <section className="case-hero">
          <div>
            <div className="section-label">
              <span />
              Featured Case Study
            </div>
            <h1>MityCloud Healthcare Platform</h1>
            <p>
              A clinical telemedicine and collaboration platform built with
              Django, React, PostgreSQL, WebRTC, DICOM imaging workflows, and
              privacy-focused real-time communication features.
            </p>
            <div className="case-actions">
              <a href={`mailto:${profile.email}?subject=MityCloud case study`}>
                Discuss this work
              </a>
              <Link href="/#contact">Contact</Link>
            </div>
          </div>

          <aside className="confidential-card">
            <Lock size={24} />
            <h2>Private Healthcare Work</h2>
            <p>
              Screenshots, source code, patient data, and internal workflows are
              not public. This case study focuses on architecture, role,
              technical scope, and outcomes that can be shared safely.
            </p>
          </aside>
        </section>

        <section className="case-grid case-summary-grid">
          <article>
            <span>Role</span>
            <strong>Software Engineer</strong>
            <p>Full-stack development, architecture, real-time features, and clinical collaboration workflows.</p>
          </article>
          <article>
            <span>Domain</span>
            <strong>Healthcare</strong>
            <p>Telemedicine, DICOM imaging, secure collaboration, consent capture, and auditability.</p>
          </article>
          <article>
            <span>Period</span>
            <strong>2026 - Present</strong>
            <p>Current professional work at Infinity MCI Solutions Philippines.</p>
          </article>
        </section>

        <section className="case-section">
          <div className="case-section-heading">
            <div className="section-label">
              <span />
              Problem
            </div>
            <h2>Clinical collaboration needs more than a video call.</h2>
          </div>
          <p className="case-lede">
            The platform needed to support remote clinical workflows where
            imaging, secure communication, real-time collaboration, consent, and
            audit trails all matter. The challenge was to make conferencing and
            collaboration feel integrated with clinical work rather than bolted
            on as a generic meeting tool.
          </p>
        </section>

        <section className="case-section">
          <div className="case-section-heading">
            <div className="section-label">
              <span />
              What I Built
            </div>
            <h2>Core platform capabilities</h2>
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

        <section className="case-section architecture-section">
          <div className="case-section-heading">
            <div className="section-label">
              <span />
              Architecture
            </div>
            <h2>System architecture</h2>
          </div>
          <p className="case-lede">
            This diagram is intentionally simplified for public portfolio use.
            Internal product names, table names, vendor-specific storage details,
            and sensitive operational flows were removed.
          </p>
          <div className="architecture-image">
            <Image
              src="/assets/img/mitycloud-sanitized-architecture.svg"
              alt="Simplified telemedicine system architecture diagram"
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
              <li>Enabled self-hosted clinical video collaboration rather than relying on a generic third-party meeting flow.</li>
              <li>Supported privacy-aware screen sharing through patient-information masking.</li>
              <li>Added real-time session state, presence, notifications, invitations, and persistent chat.</li>
              <li>Improved maintainability of clinical collaboration modules across the broader imaging ecosystem.</li>
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
            <h2>How the work came together</h2>
          </div>
          <div className="case-grid timeline-grid">
            <article>
              <Stethoscope size={22} />
              <h3>Clinical workflow review</h3>
              <p>Mapped collaboration needs around imaging, consultations, screen sharing, consent, and privacy constraints.</p>
            </article>
            <article>
              <Video size={22} />
              <h3>Conferencing foundation</h3>
              <p>Built a self-hosted WebRTC layer with session controls, recording, whiteboards, and meeting management.</p>
            </article>
            <article>
              <ShieldCheck size={22} />
              <h3>Privacy and auditability</h3>
              <p>Added patient masking, consent capture, attachment validation, audit logs, and session activity tracking.</p>
            </article>
            <article>
              <CalendarCheck size={22} />
              <h3>Production refinement</h3>
              <p>Integrated collaboration flows into the wider healthcare platform and maintained parity across application modules.</p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
