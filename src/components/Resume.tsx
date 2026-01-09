import { resumeData } from '../data/data';
import { BookOpen, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export const Resume = () => (
  <section className="animate-fade-in">
    <Timeline title="Education" icon={<BookOpen size={20}/>} items={resumeData.education} />
    <Timeline title="Experience" icon={<Briefcase size={20}/>} items={resumeData.experience} />

    <h3 className="mt-12 mb-8 text-xl font-bold text-white">My Skills</h3>
    <div className="bg-[#212123] p-8 rounded-3xl border border-[#383838] space-y-6">
      {resumeData.skills.map(skill => (
        <div key={skill.name}>
          <div className="flex gap-2 mb-2 text-sm font-bold">
            <span className="text-white">{skill.name}</span>
            <span className="text-gray-500">{skill.level}%</span>
          </div>
          <div className="h-2 bg-[#383838] rounded-full overflow-hidden">
            <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} transition={{ duration: 1 }} className="h-full bg-[#ffdb70]" />
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Timeline = ({ title, icon, items }: any) => (
  <div className="mb-10">
    <div className="flex items-center gap-4 mb-8">
      <div className="p-3 bg-[#202022] rounded-xl text-[#ffdb70] border border-[#383838]">{icon}</div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <div className="ml-7 border-l border-[#383838] space-y-8">
      {items.map((item: any, i: number) => (
        <div key={i} className="relative pl-8 before:content-[''] before:absolute before:left-[-5px] before:top-1 before:w-[10px] before:h-[10px] before:bg-[#ffdb70] before:rounded-full before:shadow-[0_0_0_4px_#383838]">
          <h4 className="mb-1 text-sm font-bold text-white">{item.title}</h4>
          <p className="text-[#ffdb70] text-xs mb-2">{item.date}</p>
          <p className="text-xs leading-relaxed text-gray-400">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);