import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-copy">
        <div className="greeting">Hi, I'm</div>
        <h1>{profile.name}</h1>
        <p className="gradient-title">{profile.role}</p>
        <p className="hero-intro">{profile.intro}</p>

        <div className="hero-actions">
          <a className="primary-action" href="#projects">
            <span>View My Work</span>
            <ArrowUpRight size={18} />
          </a>
          <a className="secondary-action" href="#contact">
            <span>Contact Me</span>
            <MessageCircle size={18} />
          </a>
        </div>

        <div className="social-block">
          <span>Find me on</span>
          <div>
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
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="orbital-ring" />
        <div className="code-mark">&lt;/&gt;</div>
        <Image
          src={profile.heroImage}
          alt=""
          width={680}
          height={760}
          priority
          className="portrait"
        />
      </div>
    </section>
  );
}
