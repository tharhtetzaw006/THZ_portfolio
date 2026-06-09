export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: "Web App" | "AI / ML" | "Systems & Tooling" | "Open Source";
  link?: string;
  github?: string;
  gradient: string; // Tailwind colors like 'from-indigo-500 to-purple-500' for interactive overlays
  featured: boolean;
  image?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  gpa?: string;
  location: string;
  description: string;
  courses: string[];
  achievements: string[];
}

export interface SkillGroup {
  category: string;
  iconName: "Code" | "Server" | "Smartphone" | "Wrench" | "Cpu" | "Database";
  skills: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  url: string;
  credentialId?: string;
  colorClass: string; // for border/glow branding
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  event: string;
  date: string;
  description: string;
  prize?: string;
}
