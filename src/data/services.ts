// src/data/services.ts

// 1. Use 'import type' for LucideIcon, as it is only used as a type.
// All the icon components (Code, Monitor, Zap) are values, so they use the standard import.
import { Code, Monitor, Layout } from 'lucide-react'; 
import type { LucideIcon } from 'lucide-react';

// 2. Define and EXPORT the Service interface
export interface Service {
  // Use LucideIcon as the type for the icon component
  icon: LucideIcon; 
  title: string;
  description: string;
}

// 3. Export the data array
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
