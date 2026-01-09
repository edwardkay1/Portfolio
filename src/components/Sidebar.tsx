import { Mail, Phone, Calendar, MapPin, Github, Twitter, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/data';

export const Sidebar = () => (
  <aside className="w-full lg:w-72 bg-[#1e1e1f] border border-[#383838] rounded-3xl p-8 flex flex-col items-center sticky top-10">
    {/* Profile Image */}
    <div className="bg-[#2b2b2c] rounded-3xl mb-5 shadow-xl overflow-hidden">
      <img 
        src={personalInfo.avatar} 
        alt={personalInfo.name} 
        className="object-cover w-32 h-32" 
      />
    </div>

    {/* Identity */}
    <h1 className="mb-2 text-2xl font-bold text-center text-white">{personalInfo.name}</h1>
    <p className="bg-[#383838] text-[10px] text-white px-4 py-1.5 rounded-lg mb-6">{personalInfo.role}</p>
    
    <div className="w-full border-t border-[#383838] my-6"></div>

    {/* Contact List */}
    <ul className="w-full space-y-6">
      <ContactItem 
        icon={<Mail size={16}/>} 
        label="EMAIL" 
        value={personalInfo.email} 
        href={`mailto:${personalInfo.email}`} 
      />
      <ContactItem 
        icon={<Phone size={16}/>} 
        label="PHONE" 
        value={personalInfo.phone} 
        href={`tel:${personalInfo.phone}`} 
      />
      <ContactItem 
        icon={<Calendar size={16}/>} 
        label="BIRTHDAY" 
        value={personalInfo.birthday} 
      />
      <ContactItem 
        icon={<MapPin size={16}/>} 
        label="LOCATION" 
        value={personalInfo.location} 
      />
    </ul>

    {/* Social Links */}
    <div className="flex gap-4 mt-8 text-gray-400">
      <SocialLink href={personalInfo.socials.github} icon={<Github size={18} />} />
      <SocialLink href={personalInfo.socials.twitter} icon={<Twitter size={18} />} />
      <SocialLink href={personalInfo.socials.linkedin} icon={<Linkedin size={18} />} />
    </div>
  </aside>
);

/**
 * Reusable Contact Item Component
 * @param href - Optional link (mailto, tel, etc)
 */
const ContactItem = ({ icon, label, value, href }: { icon: any, label: string, value: string, href?: string }) => (
  <li className="flex items-center gap-4 group">
    <div className="p-3 bg-[#202022] rounded-xl text-[#ffdb70] shadow-md border border-[#383838] group-hover:bg-[#2b2b2c] transition-colors">
      {icon}
    </div>
    <div className="overflow-hidden">
      <p className="text-[10px] text-gray-500 font-bold mb-1">{label}</p>
      {href ? (
        <a 
          href={href} 
          className="text-xs text-gray-200 truncate block hover:text-[#ffdb70] transition-colors"
        >
          {value}
        </a>
      ) : (
        <p className="text-xs text-gray-200 truncate">{value}</p>
      )}
    </div>
  </li>
);

/**
 * Reusable Social Link Component
 */
const SocialLink = ({ href, icon }: { href: string, icon: any }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:text-[#ffdb70] transition-colors p-1"
  >
    {icon}
  </a>
);