import { aboutData } from '../data/data';
import { Code, Globe, Terminal, User2Icon, AppWindow } from 'lucide-react';

// Helper to map your data titles to specific Lucide icons
const IconMap = ({ title }: { title: string }) => {
  const iconProps = { size: 22, strokeWidth: 1.5 }; // Smaller size, thinner lines for pro look
  
  if (title.includes('Frontend')) return <Code {...iconProps} />;
  if (title.includes('Applications')) return <AppWindow {...iconProps} />;
  return <Terminal {...iconProps} />;
};

export const About = () => (
  <section className="animate-fade-in">
    {aboutData.description.map((p, i) => (
      <p key={i} className="mb-6 text-sm leading-relaxed text-gray-400">{p}</p>
    ))}
    
    <h3 className="mt-10 mb-8 text-xl font-bold text-white">What I'm Doing</h3>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {aboutData.services.map((s, i) => (
        <div 
          key={i} 
          className="relative flex gap-5 p-6 bg-gradient-to-br from-[#212123] to-[#1e1e1f] border border-[#383838] rounded-[24px] shadow-sm group hover:border-[#454545] transition-all"
        >
          {/* Icon Container: Small, colored background, centered icon */}
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#2b2b2c] text-[#ffdb70] shadow-inner border border-[#383838] group-hover:scale-110 transition-transform">
              <IconMap title={s.title} />
            </div>
          </div>

          <div>
            <h4 className="mb-1 text-lg font-bold text-white">{s.title}</h4>
            <p className="text-xs leading-relaxed text-gray-400">{s.description}</p>
          </div>
        </div>
      ))}
    </div>

    <h3 className="mt-12 mb-10 text-xl font-bold text-white">Testimonials</h3>
    <div className="flex gap-6 pb-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
      {aboutData.testimonials.map((t, i) => (
        <div 
          key={i} 
          className="min-w-[320px] md:min-w-[400px] bg-[#212123] border border-[#383838] p-8 rounded-[24px] relative mt-10 snap-center"
        >
          {/* Avatar container matching the pro style */}
          <div className="absolute p-1 -top-10 left-8 rounded-2xl bg-[#383838] shadow-2xl">
            <div className="bg-[#2b2b2c] rounded-xl overflow-hidden w-10 h-10 flex items-center justify-center border border-[#454545]">
               
                 <User2Icon className="w-8 h-8 text-[#ffdb70]" />
            </div>
          </div>

          <h4 className="mt-8 text-lg font-bold text-white">{t.name}</h4>
          <p className="text-[#ffdb70] text-[10px] mb-4 uppercase font-bold tracking-widest">{t.role}</p>
          <p className="text-xs italic leading-relaxed text-gray-400">"{t.text}"</p>
        </div>
      ))}
    </div>

    {aboutData.clients.length > 0 && (
      <>
        <h3 className="mt-12 mb-6 text-xl font-bold text-white">Clients</h3>
        <div className="flex flex-wrap items-center gap-12 transition-all opacity-40 grayscale hover:grayscale-0">
          {aboutData.clients.map((c, i) => <img key={i} src={c} className="h-8" alt="client" />)}
        </div>
      </>
    )}
  </section>
);