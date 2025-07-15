export type Skill = { header: string; items: string[] };
export type Experience = {
  id: string;
  company: string;
  position: string;
  time: string;
  url: string;
};
export type ProjectMedia = {
  type: 'image' | 'video' | 'pdf' | string;
  src: string;
  alt: string;
};
export type Project = {
  name: string;
  url?: string;
  description: string;
  used: string[];
  media?: ProjectMedia[];
};
export type Social = {
  name: string;
  url: string;
  ariaLabel: string;
  icon: string;
  color: string;
  hoverColor: string;
};

export type Data = {
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  socials: Social[];
};
