import shamiImage from '../assets/shami.png'; 
import owojaImage from '../assets/owojaImage.png'; 
import kamuImage from '../assets/kamuImage.png'; 
import nkoziImage from '../assets/nkozi.png'; 

import oldImage from '../assets/redesign.jpg'; 

export interface Project {
  id: number;
  title: string;
  client: string;
  description: string;
  role: string;
  stack: string[];
  liveLink: string;
  githubLink: string;
  isDesign: boolean;
  imagePath: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Shami Global Shop',
    client: 'React Project',
    description:
      'A modern e-commerce website designed to showcase products and enable fast ordering through WhatsApp integration.',
    role: 'Frontend Developer',
    stack: ['React', 'Tailwind CSS', 'Git'],
    liveLink: 'https://shamiglobal-shop.vercel.app/',
    githubLink: 'https://github.com/edwardkay1/Shami-Global-Shop',
    isDesign: false,
    imagePath:  shamiImage,
  },
  {
    id: 2,
    title: 'Owoja Engineering Systems',
    client: 'WordPress Project',
    description:
      'A professional corporate website built to present company services, projects, and credibility to potential clients.',
    role: 'Frontend Developer',
    stack: ['WordPress', 'PHP', 'Custom UI'],
    liveLink: 'https://owojaengineering.com/',
    githubLink: 'https://github.com/edwardkay1',
    isDesign: false,
    imagePath: owojaImage,
  },

  // --- Creative / Design Projects ---
  {
    id: 3,
    title: 'Kamu Eco Resort',
    client: 'WordPress Project',
    description:
      'A visually focused website design highlighting eco-friendly accommodations and nature-driven experiences.',
    role: 'UI / Frontend Design',
    stack: ['UI Design', 'Responsive Layout'],
    liveLink: 'https://kamuecoresort.com/',
    githubLink: 'https://github.com/edwardkay1',
    isDesign: true,
    imagePath: kamuImage,
  },
  {
    id: 4,
    title: 'Nkozi Mart',
    client: 'React Project',
    description:
      'A clean e-commerce interface focused on usability and modern shopping experience for local customers.',
    role: 'Frontend Developer',
    stack: ['React', 'Tailwind CSS'],
    liveLink: 'https://nkozi-mart.vercel.app/',
    githubLink: 'https://github.com/edwardkay1/Nkozi-Mart',
    isDesign: true,
    imagePath: nkoziImage,
  },
  {
    id: 5,
    title: 'Redesign Project',
    client: 'Personal Portfolio',
    description:
      'A redesign of my earlier portfolio, reflecting growth in layout structure, visual hierarchy, and UI consistency.',
    role: 'Designer & Developer',
    stack: ['React', 'Tailwind CSS'],
    liveLink: 'https://kayiira-edward.vercel.app/',
    githubLink: 'https://github.com/edwardkay1/kayiira-edward',
    isDesign: true,
    imagePath: oldImage,
  },
];
