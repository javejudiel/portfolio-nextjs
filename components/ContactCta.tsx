import { ArrowUpRight, Send } from "lucide-react";
import { profile } from "@/data/portfolio";

export function ContactCta() {
  return (
    <section id="contact" className="contact-cta">
      <div className="send-icon">
        <Send size={30} />
      </div>
      <div>
        <h2>Let's work together</h2>
        <p>I'm always open to discussing new opportunities and interesting projects.</p>
      </div>
      <a href={`mailto:${profile.email}`}>
        Get In Touch
        <ArrowUpRight size={17} />
      </a>
    </section>
  );
}
