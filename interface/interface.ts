interface Experience {
  title: string;
  location: string;
  description: any[]; // Replace with the actual type if known
  icon: string;
  date: string;
}

interface Socials {
  linkedin: string;
  github: string;
}

export interface Skill {
  icon: string;
  title: string;
  location: string;
  date: string;
  description: string;
}

export interface PortfolioData {
  profilePhotoUrl: string;
  description: React.ReactNode;
  about: React.ReactNode;
  projects: React.ReactNode[]; // Replace with the actual type if known
  skills: Skill; // Replace with the actual type if known
  experiences: Experience[];
  resume: string;
  socials: Socials;
}
