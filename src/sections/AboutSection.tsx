import React from 'react';
import aboutImage from '../assets/aboutImage.jpg'; 

const AboutSection: React.FC = () => {
  return (
    // About Section 
    <section id="about" className="py-20">
      <div className="container flex flex-wrap items-center max-w-6xl gap-12 px-4 mx-auto md:flex-nowrap">
        {/* Image (shami.png) */}
        <div className="w-full md:w-1/3">
          <img 
            src={aboutImage} 
            alt="Edward Kayiira Profile" 
            className="w-full object-cover rounded-lg shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-teal-500/50" />
        </div>
        {/* Bio */}
        <div className="md:w-2/3">
  <h2 className="mb-4 text-3xl font-bold text-white">
    I am Edward Kayiira, a web developer focused on building modern, functional, and user-centered web applications.
  </h2>

  <div className="space-y-4 text-base text-gray-400">
    <p>
I focus on frontend development, working with React, TypeScript, Tailwind CSS, and WordPress to build modern, user-friendly, and effective websites.
    </p>

    <p>
      My goal is to help businesses and individuals build a strong digital presence by delivering clean, responsive, and effective websites that go beyond aesthetics.
    </p>
  </div>

  <div className="flex mt-6 space-x-4">
    <a 
      href="#contact" 
      className="px-6 py-2 text-sm font-medium text-white transition duration-300 border border-white hover:bg-white hover:text-black"
    >
     Book A Call
    </a>


  </div>
</div>

          
        
      </div>
    </section>
  );
};

export default AboutSection;