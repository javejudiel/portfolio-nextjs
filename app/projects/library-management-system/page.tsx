import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BadgeDollarSign,
  BookOpen,
  Database,
  Library,
  RefreshCw,
  Search,
  ShieldCheck,
  Users
} from "lucide-react";
import { profile } from "@/data/portfolio";

const techStack = [
  "Laravel",
  "PHP",
  "MySQL",
  "JavaScript",
  "REST APIs",
  "Authentication",
  "Role-Based Access",
  "Payment Gateway"
];

const highlights = [
  {
    title: "Catalog management",
    description:
      "Built API-backed workflows for managing books, copies, categories, and searchable library records.",
    icon: BookOpen
  },
  {
    title: "Borrowing and returns",
    description:
      "Implemented core circulation workflows for issuing books, tracking borrowed items, receiving returns, and monitoring due dates.",
    icon: RefreshCw
  },
  {
    title: "Member and librarian roles",
    description:
      "Structured user access around member-facing actions and librarian/admin workflows for managing records and transactions.",
    icon: Users
  },
  {
    title: "Payment integration",
    description:
      "Integrated a mobile wallet/payment gateway flow for account balance or fine-related transactions.",
    icon: BadgeDollarSign
  }
];

export const metadata: Metadata = {
  title: "Library Management System | Jave Judiel",
  description:
    "Case study for a Laravel API and MySQL library management system with book catalog, borrowing, returns, user roles, and payment gateway integration."
};

export default function LibraryManagementCaseStudy() {
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

        <section className="case-hero library-case-hero">
          <div>
            <div className="section-label">
              <span />
              Featured Case Study
            </div>
            <h1>Library Management System</h1>
            <p>
              A Laravel API-backed library management system for book catalog
              records, borrowing and returns, member and librarian workflows,
              MySQL persistence, and mobile wallet-style payment handling.
            </p>
            <div className="case-actions">
              <a href={`mailto:${profile.email}?subject=Library management system case study`}>
                Discuss this work
              </a>
              <Link href="/#contact">Contact</Link>
            </div>
          </div>

          <aside className="confidential-card">
            <ShieldCheck size={24} />
            <h2>Private Academic System</h2>
            <p>
              A comprehensive institutional platform designed with advanced
              security features, automated academic tracking, and a seamless
              mobile payment integration supporting secure digital wallet
              transactions.
            </p>
          </aside>
        </section>

        <section className="case-grid case-summary-grid">
          <article>
            <span>Role</span>
            <strong>Full Stack Developer</strong>
            <p>Laravel API implementation, MySQL schema work, catalog workflows, borrowing logic, and payment integration.</p>
          </article>
          <article>
            <span>Domain</span>
            <strong>Library Operations</strong>
            <p>Book tracking, member records, borrowing, returns, fines, account balance, and administrative workflows.</p>
          </article>
          <article>
            <span>Result</span>
            <strong>Operational API System</strong>
            <p>Centralized library records and circulation workflows behind a maintainable Laravel API.</p>
          </article>
        </section>

        <section className="case-section">
          <div className="case-section-heading">
            <div className="section-label">
              <span />
              Problem
            </div>
            <h2>Library circulation needed a structured backend workflow.</h2>
          </div>
          <p className="case-lede">
            The system needed to organize book records, member accounts,
            borrowing and return activity, and payment-related transactions in a
            way that librarians could manage consistently while members could
            access the catalog and account information through the application.
          </p>
        </section>

        <section className="case-section">
          <div className="case-section-heading">
            <div className="section-label">
              <span />
              What I Built
            </div>
            <h2>A Laravel API for catalog, borrowing, returns, and payments</h2>
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
            <h2>Library workflow and API architecture</h2>
          </div>
          <p className="case-lede">
            The diagram keeps the implementation public-safe while showing the
            important system responsibilities: member and librarian interfaces,
            Laravel API workflows, MySQL persistence, borrowing/return logic,
            and a mobile wallet-style payment gateway.
          </p>
          <div className="architecture-image">
            <Image
              src="/assets/img/library-management-architecture.svg"
              alt="Simplified library management system architecture diagram"
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
              <li>Centralized book, member, borrowing, return, fine, and payment data in MySQL.</li>
              <li>Built Laravel API endpoints for catalog and circulation workflows.</li>
              <li>Separated member-facing actions from librarian/admin management tasks.</li>
              <li>Integrated a mobile wallet/payment gateway flow for balance or fine-related transactions.</li>
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
            <h2>How the library workflow moves</h2>
          </div>
          <div className="case-grid timeline-grid">
            <article>
              <Search size={22} />
              <h3>Catalog search</h3>
              <p>Members search available titles while librarian-managed records stay stored through API-backed catalog data.</p>
            </article>
            <article>
              <Library size={22} />
              <h3>Borrow and return</h3>
              <p>Librarians issue books, receive returns, track due dates, and keep circulation records updated.</p>
            </article>
            <article>
              <Database size={22} />
              <h3>Persistent records</h3>
              <p>MySQL stores the core records for books, copies, users, loans, fines, and payment history.</p>
            </article>
            <article>
              <BadgeDollarSign size={22} />
              <h3>Payment handling</h3>
              <p>A mobile wallet-style gateway handles fine or account balance payments and returns confirmation status.</p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
