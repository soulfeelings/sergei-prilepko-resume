export interface WorkExperience {
  company: string;
  position: string;
  period: string;
  duration: string;
  technologies: string[];
  description: string[];
}

export interface Contact {
  type: string;
  value: string;
  link?: string;
}

export interface ResumeData {
  name: string;
  position: string;
  about: string;
  techStack: {
    frontend: string[];
    backend: string[];
    testing: string[];
    design: string[];
    other: string[];
  };
  goals: string[];
  contacts: Contact[];
  experience: WorkExperience[];
}
