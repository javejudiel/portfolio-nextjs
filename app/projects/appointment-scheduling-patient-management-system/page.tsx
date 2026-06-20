import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BadgeDollarSign,
  CalendarCheck,
  ClipboardList,
  Database,
  MailCheck,
  ShieldCheck,
  Stethoscope,
  UserRoundCheck,
  Users
} from "lucide-react";
import { profile } from "@/data/portfolio";

const techStack = [
  "Vue.js",
  "Laravel",
  "PHP",
  "MySQL",
  "Stripe",
  "REST APIs",
  "Email Notifications",
  "SMS Reminders",
  "Role-Based Access"
];

const highlights = [
  {
    title: "Patient booking flow",
    description:
      "Built appointment workflows where patients can select a doctor, choose a date or time slot, and submit booking details.",
    icon: CalendarCheck
  },
  {
    title: "Doctor schedules",
    description:
      "Provided doctor-facing schedule views so physicians can see their daily appointments and patient bookings.",
    icon: Stethoscope
  },
  {
    title: "Admission monitoring",
    description:
      "Added administrative workflows for monitoring patient admissions, appointment activity, and operational records.",
    icon: ClipboardList
  },
  {
    title: "Payment and reminders",
    description:
      "Integrated Stripe for payment handling and reminder workflows through email and SMS notifications.",
    icon: BadgeDollarSign
  }
];

export const metadata: Metadata = {
  title: "Appointment Scheduling & Patient Management System | Jave Judiel",
  description:
    "Case study for a Vue.js, Laravel API, MySQL, and Stripe appointment scheduling and patient management platform with doctor schedules, admissions monitoring, and email/SMS reminders."
};

export default function AppointmentManagementCaseStudy() {
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

        <section className="case-hero appointment-case-hero">
          <div>
            <div className="section-label">
              <span />
              Featured Case Study
            </div>
            <h1>Appointment Scheduling &amp; Patient Management System</h1>
            <p>
              A healthcare appointment platform built with Vue.js, a Laravel
              API, MySQL, Stripe payments, and reminder workflows for patients,
              doctors, and administrative staff.
            </p>
            <div className="case-actions">
              <a href={`mailto:${profile.email}?subject=Appointment scheduling case study`}>
                Discuss this work
              </a>
              <Link href="/#contact">Contact</Link>
            </div>
          </div>

          <aside className="confidential-card">
            <ShieldCheck size={24} />
            <h2>Healthcare Workflow System</h2>
            <p>
              The case study focuses on public-safe architecture and workflow
              responsibilities: patient booking, doctor schedules, admin
              admissions monitoring, Stripe payments, and email/SMS reminders.
            </p>
          </aside>
        </section>

        <section className="case-grid case-summary-grid">
          <article>
            <span>Role</span>
            <strong>Full Stack Developer</strong>
            <p>Vue.js frontend work, Laravel API development, MySQL data modeling, Stripe integration, and reminder workflows.</p>
          </article>
          <article>
            <span>Domain</span>
            <strong>Healthcare Operations</strong>
            <p>Doctor appointment booking, patient admissions, daily doctor schedules, payments, and notifications.</p>
          </article>
          <article>
            <span>Result</span>
            <strong>Coordinated Appointment Flow</strong>
            <p>Connected patient, doctor, and admin workflows through a centralized API-backed scheduling system.</p>
          </article>
        </section>

        <section className="case-section">
          <div className="case-section-heading">
            <div className="section-label">
              <span />
              Problem
            </div>
            <h2>Appointment scheduling needed to coordinate patients, doctors, admins, and reminders.</h2>
          </div>
          <p className="case-lede">
            The system needed to let patients book appointments with a chosen
            doctor, give doctors a clear view of their schedule, help admins
            monitor admissions, and reduce missed appointments through automated
            email and SMS reminders.
          </p>
        </section>

        <section className="case-section">
          <div className="case-section-heading">
            <div className="section-label">
              <span />
              What I Built
            </div>
            <h2>A Vue and Laravel platform for scheduling, admissions, payments, and reminders</h2>
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
            <h2>Appointment scheduling and reminder architecture</h2>
          </div>
          <p className="case-lede">
            The architecture centers on a Vue.js client application backed by a
            Laravel API and MySQL database. Stripe handles payment flows, while
            queued reminder jobs send appointment notifications by email and SMS.
          </p>
          <div className="architecture-image">
            <Image
              src="/assets/img/appointment-management-architecture.png"
              alt="Simplified appointment scheduling and patient management system architecture diagram"
              width={1448}
              height={1086}
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
              <li>Allowed patients to choose doctors and book available appointment dates.</li>
              <li>Gave doctors a dedicated panel for viewing their daily schedules.</li>
              <li>Provided admins with tools to monitor patient admissions and appointment records.</li>
              <li>Integrated Stripe payments and automated appointment reminders through email and SMS.</li>
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
            <h2>How the appointment flow works</h2>
          </div>
          <div className="case-grid timeline-grid">
            <article>
              <UserRoundCheck size={22} />
              <h3>Patient books</h3>
              <p>Patients select a doctor, choose an appointment date, and submit booking information through the Vue.js frontend.</p>
            </article>
            <article>
              <BadgeDollarSign size={22} />
              <h3>Payment is handled</h3>
              <p>Stripe processes payments where required, and the Laravel API stores the payment and appointment status.</p>
            </article>
            <article>
              <Users size={22} />
              <h3>Schedules are visible</h3>
              <p>Doctors view their daily appointments while admins monitor admissions and operational records.</p>
            </article>
            <article>
              <MailCheck size={22} />
              <h3>Reminders are sent</h3>
              <p>Patients and doctors receive appointment reminders through email and SMS notification workflows.</p>
            </article>
            <article>
              <Database size={22} />
              <h3>Records are persisted</h3>
              <p>MySQL stores patient records, doctors, schedules, appointments, admissions, payments, and reminder history.</p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
