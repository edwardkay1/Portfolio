import { InlineWidget } from "react-calendly";
import React from 'react';
import { Linkedin, Github, Mail, Phone } from 'lucide-react';
// Added image import
import groupImage from '../assets/groupImage.jpg'; 

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container max-w-6xl px-4 mx-auto">
        <div className="grid items-start grid-cols-1 gap-12 md:grid-cols-2">
          
          {/* Left Column: Heading and Socials */}
          <div className="px-4 py-16 text-center md:text-left">
            <p className="mb-2 text-sm tracking-widest text-gray-400 uppercase">
              Contact me
            </p>
            <h2 className="mb-6 text-5xl font-bold text-white">
              Get in touch
            </h2>
            <p className="max-w-md mb-8 text-lg text-gray-400">
              I’m always ready to answer questions or discuss new projects. Feel free to reach out via social media, email, or WhatsApp.
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <a href="https://www.linkedin.com/in/edwardkay1" className="p-3 text-gray-400 transition-colors border border-gray-800 rounded-full hover:border-teal-400 hover:text-teal-400">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/edwardkay1" className="p-3 text-gray-400 transition-colors border border-gray-800 rounded-full hover:border-teal-400 hover:text-teal-400">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://x.com/iam_ed_wa_rd" className="p-3 text-gray-400 transition-colors border border-gray-800 rounded-full hover:border-teal-400 hover:text-teal-400">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z" /></svg>
              </a>
              <a href="mailto:edwardbrin1@gmail.com" className="p-3 text-gray-400 transition-colors border border-gray-800 rounded-full hover:border-teal-400 hover:text-teal-400">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+256746838046" className="p-3 text-gray-400 transition-colors border border-gray-800 rounded-full hover:border-teal-400 hover:text-teal-400">
                <Phone className="w-5 h-5" />
              </a>
            </div>


            <div className="mt-12 overflow-hidden border rounded-2xl border-gray-800/50">
              <img 
                src={groupImage} 
                alt="Contact visual" 
                className="object-cover w-full h-auto transition-opacity duration-500 opacity-80 hover:opacity-100"
              />
            </div>
          </div>
          
          {/* Right Column: Calendly */}
          <div className="px-4 py-16">
            <p className="mb-2 text-sm tracking-widest text-gray-400 uppercase">
              Book a Call
            </p>
            <h2 className="mb-6 text-5xl font-bold text-white">
              Schedule a Meeting
            </h2>
            <p className="max-w-md mb-8 text-lg text-gray-400">
              Pick a convenient time and let's talk about your project.
            </p>


            <div className="overflow-hidden rounded-lg border border-gray-800 bg-black h-[450px]">
              <InlineWidget 
                url="https://calendly.com/edwardkay1" 
                styles={{ height: '450px' }}
                pageSettings={{
                  backgroundColor: '000000',
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: true, 
                  primaryColor: '2dd4bf',
                  textColor: 'ffffff'
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;