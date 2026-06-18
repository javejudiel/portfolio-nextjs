import { Heart } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <a className="brand" href="#home">
          <span>{profile.initials}</span>
          <strong>{profile.name}</strong>
        </a>
        <p>Building digital solutions that make a difference.</p>
      </div>

      <div>
        <h3>Quick Links</h3>
        <nav aria-label="Footer navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>

      <div>
        <h3>Connect</h3>
        <div className="footer-socials">
          {profile.socials.map((social) => {
            const Icon = social.icon;
            return (
              <a key={social.label} href={social.href} aria-label={social.label}>
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 {profile.name}. All rights reserved.</span>
        <span>
          Built with Next.js <Heart size={14} />
        </span>
      </div>
    </footer>
  );
}
