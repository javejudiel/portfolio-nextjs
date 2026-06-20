import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Boxes,
  Clock3,
  Database,
  Factory,
  PackageCheck,
  RefreshCw,
  ShieldCheck,
  ShoppingCart,
  Truck
} from "lucide-react";
import { profile } from "@/data/portfolio";

const techStack = [
  "Laravel",
  "MySQL",
  "ERPNext",
  "REST APIs",
  "Marketplace APIs",
  "Lazada",
  "TikTok Shop",
  "Shopee",
  "MES",
  "Inventory Systems"
];

const highlights = [
  {
    title: "Marketplace order intake",
    description:
      "Integrated marketplace orders from Lazada, TikTok Shop, and Shopee into a centralized logistics dashboard.",
    icon: ShoppingCart
  },
  {
    title: "Confirmation automation",
    description:
      "Handled manual confirmation windows and automated order confirmation after a defined waiting period.",
    icon: Clock3
  },
  {
    title: "ERP and MES coordination",
    description:
      "Connected order confirmation with ERP sales orders and manufacturing work order creation.",
    icon: Factory
  },
  {
    title: "Shipping status sync",
    description:
      "Synchronized inventory readiness, shipped status, stock updates, and delivery monitoring back into LMS.",
    icon: RefreshCw
  }
];

export const metadata: Metadata = {
  title: "Logistics Management System | Jave Judiel",
  description:
    "Case study for a logistics management system integrating marketplace orders, ERP workflows, MES processing, inventory updates, and delivery status monitoring."
};

export default function LogisticsManagementCaseStudy() {
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

        <section className="case-hero logistics-case-hero">
          <div>
            <div className="section-label">
              <span />
              Featured Case Study
            </div>
            <h1>Logistics Management System</h1>
            <p>
              An order tracking and fulfillment platform that connects
              marketplace sales, ERP sales orders, manufacturing workflows,
              inventory readiness, shipping updates, and delivery monitoring.
            </p>
            <div className="case-actions">
              <a href={`mailto:${profile.email}?subject=Logistics management system case study`}>
                Discuss this work
              </a>
              <Link href="/#contact">Contact</Link>
            </div>
          </div>

          <aside className="confidential-card">
            <ShieldCheck size={24} />
            <h2>Private Operational System</h2>
            <p>
              Screenshots, source code, and internal operational details are not
              public. This case study focuses on the architecture and workflow
              responsibilities that can be shared safely.
            </p>
          </aside>
        </section>

        <section className="case-grid case-summary-grid">
          <article>
            <span>Role</span>
            <strong>Full Stack Developer</strong>
            <p>Marketplace integrations, backend workflow logic, ERP/MES coordination, and status synchronization.</p>
          </article>
          <article>
            <span>Domain</span>
            <strong>Logistics and Fulfillment</strong>
            <p>Order confirmation, production coordination, inventory readiness, courier pickup, and delivery tracking.</p>
          </article>
          <article>
            <span>Result</span>
            <strong>Connected Order Lifecycle</strong>
            <p>Centralized order visibility from marketplace purchase through processing, shipping, and delivery monitoring.</p>
          </article>
        </section>

        <section className="case-section">
          <div className="case-section-heading">
            <div className="section-label">
              <span />
              Problem
            </div>
            <h2>Orders moved across teams before they were ready to ship.</h2>
          </div>
          <p className="case-lede">
            Marketplace orders needed to pass through sales confirmation,
            production, inventory readiness, courier handoff, stock updates, and
            delivery tracking. The challenge was connecting separate systems
            without losing order visibility or forcing users to manually chase
            every status change.
          </p>
        </section>

        <section className="case-section">
          <div className="case-section-heading">
            <div className="section-label">
              <span />
              What I Built
            </div>
            <h2>A fulfillment workflow across marketplace, ERP, MES, and inventory systems</h2>
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
            <h2>Order lifecycle and system integration map</h2>
          </div>
          <p className="case-lede">
            This diagram simplifies the actual operational workflow while
            keeping the important system responsibilities visible: marketplace
            intake, LMS orchestration, ERP sales orders, MES work orders,
            inventory readiness, and delivery status monitoring.
          </p>
          <div className="architecture-image">
            <Image
              src="/assets/img/logistics-management-architecture.svg"
              alt="Simplified logistics management system architecture diagram"
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
              <li>Centralized Lazada, TikTok Shop, and Shopee orders inside LMS.</li>
              <li>Added a confirmation workflow with manual updates before the 3-hour auto-confirmation window.</li>
              <li>Triggered ERP sales order creation and downstream MES work order creation after confirmation.</li>
              <li>Synchronized ready-to-ship, shipped, stock, and delivery status updates back into LMS.</li>
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
            <h2>How the order lifecycle moves</h2>
          </div>
          <div className="case-grid timeline-grid">
            <article>
              <PackageCheck size={22} />
              <h3>Order received</h3>
              <p>Marketplace purchases appear in LMS for visibility and confirmation handling.</p>
            </article>
            <article>
              <Database size={22} />
              <h3>ERP source of truth</h3>
              <p>ERP, inventory, and MES workflows depend on shared ERP data while serving different departments.</p>
            </article>
            <article>
              <Boxes size={22} />
              <h3>Production and inventory</h3>
              <p>MES processing updates inventory readiness before users confirm the item is ready for delivery.</p>
            </article>
            <article>
              <Truck size={22} />
              <h3>Shipping and delivery</h3>
              <p>LMS receives ready-to-ship and shipped updates, then monitors courier delivery progress.</p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
