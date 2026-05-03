// Portfolio Data Types

export interface PortfolioData {
  meta: Meta;
  hero: Hero;
  experience: Section<ExperienceItem>;
  skills: Section<SkillCategory>;
  projects: Section<ProjectItem>;
  learning: Section<LearningItem>;
  contact: Contact;
  footer: Footer;
}

export interface Meta {
  title: string;
  description: string;
  ogImage?: string;
  url?: string;
}

export interface Hero {
  prompt: string;
  headline: string;
  subtitle: string;
  subline: string;
  availability?: string;
  cta: {
    primary: CTAButton;
    secondary: CTAButton;
  };
}

export interface CTAButton {
  text: string;
  href: string;
}

export interface Section<T> {
  title: string;
  subtitle: string;
  items: T[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  isCurrent?: boolean;
  type: string;
  description: string;
  bulletsHtml?: string[];
  stack: string[];
}

export interface SkillCategory {
  name: string;
  icon: string;
  iconColor: string;
  description: string;
}

export interface ProjectItem {
  name: string;
  description: string;
  descriptionHtml?: string;
  image?: string;
  stack: string[];
  github?: string;
  badge?: string;
}

export interface LearningItem {
  name: string;
  icon: string;
  iconColor: string;
  badge: string;
  badgeColor: string;
  description: string;
  progressPercent: number;
  progressComment: string;
}

export interface Footer {
  brand: {
    prompt: string;
    name: string;
  };
  tagline: string;
  commandLinks: CommandLink[];
  copyright: string;
}

export interface CommandLink {
  text: string;
  url: string;
}

export interface ContactLink {
  platform: string;
  handle: string;
  cta: string;
  url: string | null;
  tooltip: string;
}

export interface Contact {
  headline: string;
  paragraph: string;
  email: string;
  links: ContactLink[];
}
