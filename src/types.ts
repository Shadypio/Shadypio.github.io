import { ReactNode } from "react";

export interface Skill {
  name: string;
  icon: ReactNode;
}

export interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
}

export interface Hobby {
  title: string;
  description: string;
  icon: ReactNode;
  details?: string[];
  link?: { url: string; label: string };
}
