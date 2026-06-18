import { About } from "@/components/About";
import { ContactCta } from "@/components/ContactCta";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="page-shell">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <ContactCta />
        <Footer />
      </div>
    </main>
  );
}
