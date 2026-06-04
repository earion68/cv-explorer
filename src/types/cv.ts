export interface ContactInfo {
  email?: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  website?: string;
  location?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string | null; // Leave empty for current role
  isCurrent?: boolean;
  summary: string;
  details?: string; // For drill-down popup
  achievements?: string[];
  technologies?: string[];
  link?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string; // e.g., "Frontend", "Backend", "DevOps"
  proficiency?: number; // 1-5 or percentage
  details?: string; // For drill-down popup
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  details?: string; // For drill-down popup
  link?: string;
  image?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  graduationDate?: string;
  details?: string; // For drill-down popup
  link?: string;
}

export interface CVData {
  // Header Info
  fullName: string;
  title: string; // e.g., "Full Stack Developer"
  summary?: string;
  contact: ContactInfo;
  
  // Sections
  experiences: Experience[];
  skills: Skill[];
  projects?: Project[];
  education?: Education[];
  
  // Metadata
  theme?: {
    primaryColor?: string;
    secondaryColor?: string;
  };
  avatarImage?: string; // Optional image path
  updatedDate?: string;
}
