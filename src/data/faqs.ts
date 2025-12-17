export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqsData: FAQ[] = [
  {
    id: 1,
    question: 'Who are you and what do you do?',
    answer: 'I am Edward, a frontend web developer creating modern, responsive websites using React, TypeScript, and Tailwind CSS.',
  },
  {
    id: 2,
    question: 'What services do you provide?',
    answer: 'I build responsive websites, landing pages, and UI components that are visually appealing and fully functional. I can also work with WordPress when needed.',
  },
  {
    id: 3,
    question: 'What technologies do you work with?',
    answer: 'My core stack is React, TypeScript, and Tailwind CSS. I also have experience with WordPress, Git, and Figma for design and collaboration.',
  },
  {
    id: 4,
    question: 'How do you start a new project?',
    answer: 'I start by understanding your goals, then design mockups, develop the site, test it, and finally deploy with post-launch support.',
  },
  {
    id: 5,
    question: 'Can you redesign an existing website?',
    answer: 'Yes. I can audit your site and rebuild it using modern frontend technologies for better design, performance, and usability.',
  },
  {
    id: 6,
    question: 'How can I collaborate with you?',
    answer: 'Reach out via the Contact section to schedule a call or message. We can discuss your project and see how to work together.',
  },
];