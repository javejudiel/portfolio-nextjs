import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Gauge,
  LayoutTemplate,
  Package,
  PlugZap,
  ShoppingBag,
  Smartphone,
  Wand2
} from "lucide-react";
import { profile } from "@/data/portfolio";

const techStack = [
  "Shopify",
  "Liquid",
  "JavaScript",
  "Shopify Themes",
  "Responsive UI",
  "API Integrations",
  "Theme Sections",
  "Storefront Optimization"
];

const highlights = [
  {
    title: "Theme customization",
    description:
      "Customized Shopify theme templates, sections, and content blocks to support the store's product presentation needs.",
    icon: LayoutTemplate
  },
  {
    title: "Product browsing flow",
    description:
      "Improved product and collection experiences so customers could browse, compare, and move toward checkout more smoothly.",
    icon: ShoppingBag
  },
  {
    title: "JavaScript enhancements",
    description:
      "Added storefront interactions and UI behavior that improved usability without overcomplicating the Shopify theme.",
    icon: Wand2
  },
  {
    title: "Storefront optimization",
    description:
      "Refined responsive layouts, theme structure, and app integration points for a cleaner customer experience.",
    icon: Gauge
  }
];

export const metadata: Metadata = {
  title: "Shopify E-commerce Website | Jave Judiel",
  description:
    "Case study for the Fumaco Shopify e-commerce website built with Liquid, JavaScript, custom theme sections, storefront optimization, and app/API integrations."
};

export default function ShopifyEcommerceCaseStudy() {
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

        <section className="case-hero shopify-case-hero">
          <div>
            <div className="section-label">
              <span />
              Featured Case Study
            </div>
            <h1>Shopify</h1>
            <h1>E-commerce Website</h1>
            <p>
              A public Shopify storefront for Fumaco built with custom Liquid theme work,
              JavaScript enhancements, responsive product browsing, app
              integrations, and storefront optimizations for a smoother
              shopping experience.
            </p>
            <div className="case-actions">
              <a href="https://fumaco.com" target="_blank" rel="noreferrer">
                Visit Live Store
              </a>
              <a href={`mailto:${profile.email}?subject=Shopify e-commerce website case study`}>
                Discuss this work
              </a>
            </div>
          </div>

          <aside className="confidential-card">
            <ShoppingBag size={24} />
            <h2>Live E-commerce Storefront</h2>
            <p>
              Fumaco is an e-commerce site for lighting and electrical
              products. This case study shares the visible storefront work while
              keeping internal Shopify configuration, operational workflows,
              and business metrics private.
            </p>
          </aside>
        </section>

        <section className="case-grid case-summary-grid">
          <article>
            <span>Role</span>
            <strong>Shopify Developer</strong>
            <p>Theme customization, Liquid templates, JavaScript enhancements, responsive UI, and app integration support.</p>
          </article>
          <article>
            <span>Domain</span>
            <strong>E-commerce Storefront</strong>
            <p>Fumaco product discovery, collection browsing, cart flow, checkout handoff, and store content management.</p>
          </article>
          <article>
            <span>Result</span>
            <strong>Cleaner Shopping Flow</strong>
            <p>Improved the storefront experience with reusable sections, responsive layouts, and polished product presentation.</p>
          </article>
        </section>

        <section className="case-section">
          <div className="case-section-heading">
            <div className="section-label">
              <span />
              Problem
            </div>
            <h2>The store needed a more flexible and polished customer experience.</h2>
          </div>
          <p className="case-lede">
            Shopify handled the core commerce platform, but the storefront still
            needed careful theme customization, cleaner content sections,
            responsive behavior, and integration support so store managers could
            maintain products while customers had a smoother path from product
            discovery to checkout.
          </p>
        </section>

        <section className="case-section">
          <div className="case-section-heading">
            <div className="section-label">
              <span />
              What I Built
            </div>
            <h2>Custom Shopify storefront work with Liquid, JavaScript, and app integrations</h2>
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
            <h2>Storefront and Shopify integration architecture</h2>
          </div>
          <p className="case-lede">
            This diagram is intentionally lighter than the backend-heavy case
            studies. It shows the Shopify storefront layer, theme customization,
            Shopify platform data, third-party apps, and optimization workflow.
          </p>
          <div className="architecture-image">
            <Image
              src="/assets/img/shopify-ecommerce-architecture.svg"
              alt="Simplified Shopify storefront integration architecture diagram"
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
              <li>Customized Shopify theme sections and Liquid templates for easier storefront management.</li>
              <li>Improved product and collection presentation across desktop and mobile layouts.</li>
              <li>Added JavaScript enhancements for cleaner customer interactions.</li>
              <li>Supported third-party app/API integrations while keeping the storefront maintainable.</li>
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
            <h2>How the storefront came together</h2>
          </div>
          <div className="case-grid timeline-grid">
            <article>
              <Package size={22} />
              <h3>Product structure</h3>
              <p>Worked around Shopify products, collections, and store content so customers could browse clearly.</p>
            </article>
            <article>
              <LayoutTemplate size={22} />
              <h3>Theme customization</h3>
              <p>Updated Liquid templates, reusable sections, and storefront layouts for the store's content needs.</p>
            </article>
            <article>
              <PlugZap size={22} />
              <h3>App integrations</h3>
              <p>Connected and adjusted integration points for storefront operations, marketing, or checkout-adjacent workflows.</p>
            </article>
            <article>
              <Smartphone size={22} />
              <h3>Responsive polish</h3>
              <p>Refined the shopping experience across desktop and mobile with attention to layout, clarity, and usability.</p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
