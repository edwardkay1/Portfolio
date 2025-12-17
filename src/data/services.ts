import { Code, Monitor, Layout } from 'lucide-react'; 
import type { LucideIcon } from 'lucide-react';

//Service interface
export interface Service {
  icon: LucideIcon; 
  title: string;
  description: string;
}

//Data array
export const servicesData: Service[] = [
  {
    icon: Code,
    title: 'Front-End Development',
    description:
      'Clean, responsive, interactive web interfaces using React, TypeScript, and Tailwind CSS.'
  },
  {
    icon: Monitor,
    title: 'UI/UX Design',
    description:
      'Intuitive, visually engaging designs focused on usability and accessibility.'
  },
  {
    icon: Layout,
    title: 'WordPress Development',
    description:
      'Custom WordPress websites that are easy to manage, fast, and modern.'
  }
];
