import { StaticImageData } from 'next/image';

export type ExperienceObjectType = {
  name: string;
  title: string;
  Date: string;
  description: string;
};

export type ExperienceCardType = {
  title: string;
  description: string;
  date: string;
};

export type IconMapping = {
  [key: string]: StaticImageData;
};

export type ProjectObjectType = {
  title: string;
  description: string;
  techUsed: string[];
  projectLink: string;
  liveLink?: string;
  DemoVideo?: string;
};

export interface ProjectItem {
  title: string;
  description?: string;
  techUsed?: string[];
  projectLink?: string;
  liveLink?: string;
  DemoVideo?: string;
}

export interface ExperienceItem {
  name: string;
  title: string;
  Date: string;
  description: string;
}
