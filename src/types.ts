export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
  featured: boolean;
  year: number;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
