import { Download, Menu } from "lucide-react";
import { profile } from "@/data/portfolio";

const navItems = ["Home", "About", "Projects", "Experience", "Skills", "Contact"];

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Jave Judiel home">
        <span>{profile.initials}</span>
        <strong>{profile.name}</strong>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </nav>

      <a className="download-link" href={profile.cvPath} download>
        <span>Download CV</span>
        <Download size={16} />
      </a>

      <details className="mobile-menu">
        <summary aria-label="Open navigation menu">
          <Menu size={20} />
        </summary>
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
          <a href={profile.cvPath} download>
            Download CV
          </a>
        </nav>
      </details>
    </header>
  );
}
