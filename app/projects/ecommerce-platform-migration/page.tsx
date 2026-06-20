import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Database,
  Gauge,
  Layers,
  RefreshCw,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Workflow
} from "lucide-react";
import { profile } from "@/data/portfolio";

const techStack = [
  "Laravel",
  "PHP",
  "MySQL",
  "WordPress",
  "WooCommerce",
  "REST APIs",
  "Payment Integrations",
  "Data Migration",
  "Performance Optimization"
];

const highlights = [
  {
    title: "Platform rebuild",
    description:
      "Migrated the commerce experience from WordPress/WooCommerce into a Laravel-based platform with clearer ownership of business logic.",
    icon: Layers
  },
  {
    title: "Commerce workflow",
    description:
      "Recreated product catalog, cart, checkout, order, and admin workflows around a more maintainable application structure.",
    icon: ShoppingCart
  },
  {
    title: "Data migration",
    description:
      "Mapped legacy products, categories, customer records, and order-related data into cleaner relational structures.",
    icon: Database
  },
  {
    title: "Performance and flexibility",
    description:
      "Reduced plugin dependency and improved the platform's ability to support custom features and operational changes.",
    icon: Gauge
  }
];

export const metadata: Metadata = {
  title: "E-commerce Platform Migration | Jave Judiel",
  description:
    "Case study for migrating a high-traffic e-commerce site from WordPress and WooCommerce to Laravel with improved performance, maintainability, and flexibility."
};

export default function EcommerceMigrationCaseStudy() {
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

        <section className="case-hero ecommerce-case-hero">
          <div>
            <div className="section-label">
              <span />
              Featured Case Study
            </div>
            <h1>E-commerce Platform Migration</h1>
            <p>
              A migration from a WordPress/WooCommerce storefront to a
              Laravel-based commerce platform, focused on performance,
              maintainability, custom workflows, and cleaner operational
              control.
            </p>
            <div className="case-actions">
              <a href={`mailto:${profile.email}?subject=E-commerce migration case study`}>
                Discuss this work
              </a>
              <Link href="/#contact">Contact</Link>
            </div>
          </div>

          <aside className="confidential-card">
            <ShieldCheck size={24} />
            <h2>Private Commerce Work</h2>
            <p>
              Client screenshots, source code, revenue data, and operational
              metrics are not public. This case study focuses on migration
              architecture and implementation responsibilities that can be
              shared safely.
            </p>
          </aside>
        </section>

        <section className="case-grid case-summary-grid">
          <article>
            <span>Role</span>
            <strong>Full Stack Developer</strong>
            <p>Platform migration, Laravel implementation, data mapping, checkout workflows, and admin tooling.</p>
          </article>
          <article>
            <span>Domain</span>
            <strong>E-commerce</strong>
            <p>Product catalog, cart, checkout, order management, customer data, and operational workflows.</p>
          </article>
          <article>
            <span>Result</span>
            <strong>More Flexible Platform</strong>
            <p>Moved core commerce behavior into a custom Laravel application with fewer plugin constraints.</p>
          </article>
        </section>

        <section className="case-section">
          <div className="case-section-heading">
            <div className="section-label">
              <span />
              Problem
            </div>
            <h2>The store had outgrown a plugin-heavy setup.</h2>
          </div>
          <p className="case-lede">
            The existing WordPress/WooCommerce platform depended heavily on
            plugin behavior and was harder to customize as business workflows
            became more specific. The migration needed to preserve commerce data
            and customer-facing behavior while creating a more flexible
            foundation for future features.
          </p>
        </section>

        <section className="case-section">
          <div className="case-section-heading">
            <div className="section-label">
              <span />
              What I Built
            </div>
            <h2>A Laravel commerce platform with migrated catalog and order workflows</h2>
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
            <h2>Migration architecture and commerce workflow map</h2>
          </div>
          <p className="case-lede">
            This public-safe diagram shows the legacy WooCommerce source, the
            Laravel commerce core, the migration pipeline, database,
            checkout/payment layer, admin operations, and deployment/performance
            tuning.
          </p>
          <div className="architecture-image">
            <Image
              src="/assets/img/ecommerce-migration-architecture.svg"
              alt="Simplified e-commerce platform migration architecture diagram"
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
              <li>Migrated key commerce behavior away from a plugin-heavy WordPress/WooCommerce setup.</li>
              <li>Rebuilt catalog, checkout, order, and admin workflows in Laravel.</li>
              <li>Mapped legacy data into cleaner relational structures for easier maintenance.</li>
              <li>Improved flexibility for custom features, operational changes, and performance tuning.</li>
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
            <h2>How the migration moved</h2>
          </div>
          <div className="case-grid timeline-grid">
            <article>
              <ShoppingBag size={22} />
              <h3>Audit existing commerce flow</h3>
              <p>Reviewed the legacy catalog, checkout, order, and admin workflows to identify what had to be preserved.</p>
            </article>
            <article>
              <RefreshCw size={22} />
              <h3>Map and migrate data</h3>
              <p>Translated legacy product and operational data into Laravel-friendly database structures.</p>
            </article>
            <article>
              <Workflow size={22} />
              <h3>Rebuild workflows</h3>
              <p>Implemented storefront, checkout, order, and admin paths with clearer application-level control.</p>
            </article>
            <article>
              <Gauge size={22} />
              <h3>Optimize and release</h3>
              <p>Tuned delivery, reduced unnecessary platform complexity, and prepared the Laravel platform for production use.</p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
