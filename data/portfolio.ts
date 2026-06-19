import {
  Code2,
  Database,
  Github,
  Globe2,
  Linkedin,
  Mail,
  MapPin,
  Server,
  Smartphone
} from "lucide-react";

export const profile = {
  name: "Jave Judiel",
  initials: "JJ",
  role: "Full Stack Developer",
  location: "Philippines",
  email: "kulong.javejudiel@gmail.com",
  experience: "7+ Years",
  availability: "Open to opportunities",
  cvPath: "/assets/files/Jave-Judiel-Kulong-CV.pdf",
  heroImage: "/assets/img/portrait-nobg.png",
  intro:
    "I build full-stack systems across Laravel, Django, React, Node.js, and modern database platforms, with a focus on scalable APIs, real-time workflows, and practical business automation.",
  about: [
    "I'm a full-stack software engineer with 7+ years of experience across Laravel, Django, React, Node.js, and API-driven systems. I enjoy turning complex workflows into reliable, usable products.",
    "My work spans healthcare platforms, ERP automation, e-commerce systems, logistics tools, graph-backed social platforms, and custom integrations across startups, agencies, and enterprise environments."
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/javejudiel", icon: Github },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/jave-judiel-kulong",
      icon: Linkedin
    },
    { label: "Email", href: "mailto:kulong.javejudiel@gmail.com", icon: Mail }
  ]
};

export const stats = [
  { label: "Experience", value: profile.experience, icon: Code2 },
  { label: "Location", value: profile.location, icon: MapPin },
  { label: "Availability", value: profile.availability, icon: Globe2 },
  { label: "Email", value: profile.email, icon: Mail }
];

export const techStack = [
  {
    name: "JavaScript",
    short: "JS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    name: "TypeScript",
    short: "TS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  },
  {
    name: "Python",
    short: "Py",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    name: "PHP",
    short: "PHP",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
  },
  {
    name: "React",
    short: "R",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "Next.js",
    short: "N",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
  },
  {
    name: "Django",
    short: "Dj",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
  },
  {
    name: "Laravel",
    short: "Lv",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
  },
  {
    name: "Node.js",
    short: "Node",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "PostgreSQL",
    short: "PG",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
  },
  {
    name: "MySQL",
    short: "SQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  },
  {
    name: "MongoDB",
    short: "DB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  },
  {
    name: "Neo4j",
    short: "Neo",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg"
  },
  {
    name: "Docker",
    short: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
  }
];

export const services = [
  {
    title: "Web Applications",
    description:
      "Responsive, maintainable applications built with React, Next.js, Vue, Laravel, and Django.",
    icon: Globe2
  },
  {
    title: "Backend APIs",
    description:
      "REST, GraphQL, webhook, and integration-heavy backends across Node.js, Laravel, and Django.",
    icon: Server
  },
  {
    title: "Database Design",
    description:
      "Production data modeling and optimization with PostgreSQL, MySQL, Neo4j, MongoDB, and Couchbase.",
    icon: Database
  },
  {
    title: "Deployment",
    description:
      "Docker, DigitalOcean, AWS, Vercel, Fly.io, and CI/CD pipelines for reliable releases.",
    icon: Server
  },
  {
    title: "Responsive UI",
    description:
      "Interfaces designed to feel sharp on desktop, tablet, and mobile without sacrificing clarity.",
    icon: Smartphone
  },
  {
    title: "Code Quality",
    description:
      "Readable architecture, query optimization, refactoring, code reviews, and maintainable delivery.",
    icon: Code2
  }
];

export const projects = [
  {
    title: "MityCloud Healthcare Platform",
    description:
      "A clinical telemedicine platform with Django, React, PostgreSQL, WebRTC conferencing, DICOM imaging workflows, real-time collaboration, consent capture, audit logging, and secure patient-information masking.",
    tags: ["Django", "React", "PostgreSQL", "WebRTC"],
    href: "/projects/mitycloud"
  },
  {
    title: "Social Platform for Musicians",
    description:
      "A next-generation social platform tailored for musicians, leveraging graph database technology for optimized data relationships and scalability.",
    tags: ["GraphQL", "Neo4j", "Node.js"],
    href: "/projects/social-platform-for-musicians"
  },
  {
    title: "Logistics Management System",
    description:
      "An order tracking and logistics platform integrating Lazada and TikTok APIs.",
    tags: ["Laravel", "MySQL", "API Integrations"],
    href: "#"
  },
  {
    title: "E-commerce Platform Migration",
    description:
      "Migrated a high-traffic e-commerce site from WordPress to Laravel, improving performance and flexibility.",
    tags: ["Laravel", "WordPress", "WooCommerce"],
    href: "#"
  },
  {
    title: "Appointment Scheduling & Patient Management System",
    description:
      "A patient management and appointment scheduling system for a healthcare client.",
    tags: ["Laravel", "MySQL", "API Development"],
    href: "#"
  },
  {
    title: "Library Management System",
    description:
      "A full-featured library management system for book tracking, borrowing, and returns.",
    tags: ["Laravel", "JavaScript", "MySQL", "API Development"],
    href: "#"
  },
  {
    title: "Shopify E-commerce Website",
    description:
      "Developed a Shopify-based e-commerce website with custom features and optimizations.",
    tags: ["Shopify", "Liquid", "JavaScript", "API Integrations"],
    href: "#"
  },
  {
    title: "Ride-Hailing Platform",
    description:
      "Built a full-stack ride-hailing platform from scratch with a TypeScript backend, Neon Serverless PostgreSQL via Drizzle ORM, and a modern React/Next.js frontend, implementing core booking APIs and responsive UI components.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    href: "#"
  }
];

export const experiences = [
  {
    role: "Software Engineer",
    company: "Infinity MCI Solutions Philippines",
    period: "Mar 2026 - Present",
    description:
      "Leading full-stack development of MityCloud, a healthcare platform with Django, React, PostgreSQL, WebRTC, DICOM imaging, and real-time collaboration workflows.",
    points: [
      "Architected a self-hosted WebRTC conferencing solution using OpenVidu, including video calls, screen sharing, session recording, whiteboards, annotations, file sharing, and meeting tools.",
      "Built patient-information masking using Canvas and MediaStream APIs to support secure clinical screen sharing.",
      "Implemented real-time collaboration with Django Channels, Daphne, WebSockets, Redis, notifications, chat persistence, and session state synchronization.",
      "Added compliance-focused workflows including consent capture, audit logging, attachment validation, and session activity tracking."
    ]
  },
  {
    role: "Backend Development Lead",
    company: "Servanthood Corp.",
    period: "Jul 2024 - Present",
    description:
      "Leading backend architecture for a LinkedIn-style networking platform for musicians powered by Neo4j graph data and GraphQL APIs.",
    points: [
      "Designed graph data models for users, businesses, media assets, and social connections.",
      "Reduced average GraphQL query response time by 40% through Neo4j indexing and Cypher query refactoring.",
      "Configured webhook-triggered CI/CD pipelines on DigitalOcean for automatic pull-and-restart deployments.",
      "Integrated Microsoft OAuth2 and Outlook SMTP for secure transactional email delivery."
    ]
  },
  {
    role: "Software Engineer",
    company: "NCS Philippines Inc. / Yondu Inc.",
    period: "Jan 2025 - Mar 2026",
    description:
      "Built ERPNext/Frappe solutions and automation across departments, improving operations for procurement, HR, finance, and CRM workflows.",
    points: [
      "Architected ERPNext/Frappe solutions across 6+ departments, reducing manual process time by 60%.",
      "Engineered Python automation scripts that turned hours-long administrative tasks into sub-minute processes.",
      "Integrated HubSpot CRM with ERP via REST APIs and webhooks, syncing 14,000+ customer and deal records at 99%+ accuracy.",
      "Built 20+ SQL-based reports and 25+ Jinja print formats for dashboards, operational tracking, and compliance documentation."
    ]
  },
  {
    role: "Software Engineer",
    company: "Fumaco, Inc.",
    period: "Jun 2021 - Jan 2025",
    description:
      "Delivered Laravel, Node.js, Shopify, ERP, and operations systems for logistics, inventory, e-commerce, reporting, and internal workflows.",
    points: [
      "Built mission-critical logistics tracking, backup management, and inventory extension systems supporting 200+ daily active users.",
      "Migrated a WordPress/WooCommerce store with 1,000+ SKUs into a custom Laravel platform, improving page load times by 40% and checkout conversion by 15%.",
      "Containerized 7 microservices with Docker, reducing deployment time by 60%.",
      "Maintained a Shopify storefront handling 300+ monthly orders with automated order syncing to internal ERP systems."
    ]
  },
  {
    role: "Web Developer",
    company: "Crius Digital, LLC",
    period: "Sep 2019 - Dec 2020",
    description:
      "Developed custom e-commerce sites and internal business systems for clients using Laravel, WordPress, WooCommerce, Shopify, and DigitalOcean infrastructure.",
    points: [
      "Built Laravel, WordPress, WooCommerce, and Shopify solutions tailored to client requirements.",
      "Provisioned and managed DigitalOcean hosting infrastructure for multiple deployments.",
      "Delivered custom business systems and e-commerce improvements across agency client work."
    ]
  }
];
