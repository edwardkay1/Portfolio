import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 text-gray-400 bg-gray-950">
      <div className="container px-4 py-16 mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-12 pb-12 border-b border-gray-800 md:grid-cols-4">
          
          <div className="md:col-span-2">
  <h3 className="mb-4 text-xl font-bold text-white">Beyond the Code</h3>
  <p className="mb-4 text-sm text-gray-400">
    When I’m not coding, you’ll find me playing field hockey on Saturdays, gaming online, brewing the perfect cup of coffee ☕, listening to Spotify all day 🎧, watching sci-fi movies, and experimenting with random side projects.
  </p>
</div>


         {/* Contact Info (No external link issues here) */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">Contact me</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-start">
                <Mail className="flex-shrink-0 w-4 h-4 mt-1 mr-3 text-teal-400" />
                <a href="mailto:edwardkay@email.com" className="transition-colors hover:text-white">edwardbrin1@email.com</a>
              </p>
              <p className="flex items-start">
                <Phone className="flex-shrink-0 w-4 h-4 mt-1 mr-3 text-teal-400" />
                <a href="tel:+8801700000000" className="transition-colors hover:text-white">+256746838046</a>
              </p>
              <p className="flex items-start">
                <MapPin className="flex-shrink-0 w-4 h-4 mt-1 mr-3 text-teal-400" />
                <span>Kampala, Uganda</span>
              </p>
            </div>
          </div>

          {/* Menu Links (No external link issues here) */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="transition-colors hover:text-white">Home</a></li>
              <li><a href="#services" className="transition-colors hover:text-white">Services</a></li>
              <li><a href="#projects" className="transition-colors hover:text-white">Projects</a></li>
              <li><a href="#faqs" className="transition-colors hover:text-white">FAQs</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="flex flex-col items-center justify-between pt-6 text-xs md:flex-row">
          

          {/* Copyright */}
          <p className="text-center md:text-right">
            Copyright &copy; 2025 Edward Kayiira. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;