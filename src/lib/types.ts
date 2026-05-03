// Portfolio Data Types

export interface PortfolioData {
  meta: Meta;
  about: About;
  experience: Section<ExperienceItem>;
  skills: Section<SkillCategory>;
  projects: {
    title: string;
    subtitle: string;
  };
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

export interface About {
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

export interface ProjectDetail {
  id: string;
  name: string;
  badge?: string;
  year?: string;
  description: string;
  descriptionHtml?: string;
  stack: string[];
  github?: string;
  live?: string;
  image: string;
  gallery?: string[];
  longDescription: {
    problem: string;
    approach: string;
    outcome: string;
  };
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
