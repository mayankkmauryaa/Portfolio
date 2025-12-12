export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveLink?: string;
  repoLink?: string;
  image?: string;
}

export interface ProjectGroup {
  title: string;
  key: string;
  projects: Project[];
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  certLink?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
