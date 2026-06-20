import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Bot,
  Car,
  Database,
  MapPinned,
  RadioTower,
  Route,
  ShieldCheck,
  Smartphone
} from "lucide-react";
import { profile } from "@/data/portfolio";

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "PostgreSQL",
  "PostGIS",
  "Drizzle ORM",
  "Neon",
  "Redis",
  "API Routes",
  "AI Assistance"
];

const highlights = [
  {
    title: "Booking workflow",
    description:
      "Built the core booking flow with responsive UI components and backend APIs for creating and managing ride requests.",
    icon: Smartphone
  },
  {
    title: "Driver matching logic",
    description:
      "Structured the matching flow around driver availability, location-aware decisions, and trip state updates.",
    icon: Car
  },
  {
    title: "Geospatial data layer",
    description:
      "Used PostgreSQL with location-aware data modeling for bookings, users, trips, and driver-related workflows.",
    icon: MapPinned
  },
  {
    title: "AI-assisted routing",
    description:
      "Designed an assistance layer for route and driver suggestions that can support booking decisions and user intent.",
    icon: Bot
  }
];

export const metadata: Metadata = {
  title: "Ride-Hailing Platform | Jave Judiel",
  description:
    "Case study for a ride-hailing platform built with Next.js, TypeScript, PostgreSQL, Drizzle ORM, driver matching workflows, and responsive booking UI."
};

export default function RideHailingCaseStudy() {
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

        <section className="case-hero ride-case-hero">
          <div>
            <div className="section-label">
              <span />
              Featured Case Study
            </div>
            <h1>Ride-Hailing Platform</h1>
            <p>
              A full-stack ride-hailing platform with booking APIs,
              responsive ride-request interfaces, driver matching workflows,
              geospatial data modeling, and a modern Next.js frontend.
            </p>
            <div className="case-actions">
              <a href={`mailto:${profile.email}?subject=Ride-hailing platform case study`}>
                Discuss this work
              </a>
              <Link href="/#contact">Contact</Link>
            </div>
          </div>

          <aside className="confidential-card">
            <ShieldCheck size={24} />
            <h2>Private Product Build</h2>
            <p>
              Screenshots, source code, and deployment details are not public.
              This case study focuses on shareable architecture, booking
              workflows, data modeling, and implementation responsibilities.
            </p>
          </aside>
        </section>

        <section className="case-grid case-summary-grid">
          <article>
            <span>Role</span>
            <strong>Full Stack Developer</strong>
            <p>Frontend UI, booking APIs, database modeling, API wiring, and responsive workflow implementation.</p>
          </article>
          <article>
            <span>Domain</span>
            <strong>Mobility Platform</strong>
            <p>Ride booking, driver matching, location-aware decisions, trip status, and real-time state handling.</p>
          </article>
          <article>
            <span>Result</span>
            <strong>End-to-End Prototype</strong>
            <p>Implemented the core platform foundation from booking UI through backend APIs and database persistence.</p>
          </article>
        </section>

        <section className="case-section">
          <div className="case-section-heading">
            <div className="section-label">
              <span />
              Problem
            </div>
            <h2>Ride booking needs fast coordination across UI, APIs, and location data.</h2>
          </div>
          <p className="case-lede">
            A ride-hailing product has to connect passenger intent, driver
            availability, matching rules, trip state, and persistent booking
            records. The challenge was building a clean foundation that could
            support core booking flows while staying flexible enough for
            location-based matching and future real-time features.
          </p>
        </section>

        <section className="case-section">
          <div className="case-section-heading">
            <div className="section-label">
              <span />
              What I Built
            </div>
            <h2>A full-stack booking platform with matching and geospatial foundations</h2>
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
            <h2>Booking, matching, and data-flow architecture</h2>
          </div>
          <p className="case-lede">
            This diagram keeps the major system responsibilities visible:
            client apps, Next.js routing, booking APIs, driver matching and
            location logic, AI assistance, Redis-backed real-time state, and
            PostgreSQL persistence.
          </p>
          <div className="architecture-image">
            <Image
              src="/assets/img/ride-hailing-architecture.svg"
              alt="Simplified ride-hailing platform architecture diagram"
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
              <li>Built responsive passenger-facing ride booking UI components.</li>
              <li>Implemented core booking APIs and backend workflow boundaries.</li>
              <li>Modeled users, bookings, trips, and location-aware entities in PostgreSQL.</li>
              <li>Designed the architecture for driver matching, cached state, and AI-assisted route suggestions.</li>
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
            <h2>How the platform comes together</h2>
          </div>
          <div className="case-grid timeline-grid">
            <article>
              <Route size={22} />
              <h3>Booking request</h3>
              <p>Passenger intent flows from the client UI through Next.js routing into backend booking APIs.</p>
            </article>
            <article>
              <RadioTower size={22} />
              <h3>Matching and state</h3>
              <p>Driver availability and trip state can be cached for quick updates while booking records persist separately.</p>
            </article>
            <article>
              <Database size={22} />
              <h3>Persistence</h3>
              <p>PostgreSQL stores users, bookings, trips, and location-aware records for the core mobility workflow.</p>
            </article>
            <article>
              <Bot size={22} />
              <h3>Assistance layer</h3>
              <p>AI-assisted suggestions can support route decisions, driver matching context, and booking support flows.</p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
