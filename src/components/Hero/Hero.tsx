import { MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-24 text-center text-white md:py-32">
      <div className="container max-w-4xl px-4 mx-auto">
        <p className="flex items-center justify-center mb-4 text-sm tracking-widest text-gray-400">
          <MapPin className="w-4 h-4 mr-2" /> Kampala, Uganda
        </p>
        
        <h1 className="mb-4 text-5xl font-extrabold leading-tight md:text-7xl">
          I'm Edward Kayiira <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
            Web Developer
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-300 md:text-xl">
          I build modern, responsive websites that establish your digital presence and set you apart from competitors.
        </p>

        <div className="flex justify-center space-x-4">
          <a 
            href="#projects" 
            className="px-6 py-3 font-medium text-white transition duration-300 ease-in-out border border-white hover:bg-white hover:text-black">
            View Projects
          </a>
          <a
  href="https://wa.me/256746838046?text=Hello%20Edward%2C%20I%20saw%20your%20portfolio%20and%20I%E2%80%99m%20interested%20in%20a%20website%20that%20orders%20through%20WhatsApp."
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 font-medium text-gray-300 transition duration-300 ease-in-out border border-gray-700 hover:border-green-500 hover:text-green-400"
>
  Chat on WhatsApp
</a>


        </div>

        {/* Technologies I Use */}
        <div className="pt-8 mt-16 border-t border-gray-800">
  <h3 className="mb-6 text-sm tracking-wider text-center text-gray-400 uppercase">
    Technologies I Use
  </h3>

  <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
    {/* Core Stack */}
    <span className="text-gray-500 transition-colors duration-300 cursor-default hover:text-teal-400">
      Reactjs
    </span>
    <span className="text-gray-500 transition-colors duration-300 cursor-default hover:text-teal-400">
      TypeScript
    </span>
    <span className="text-gray-500 transition-colors duration-300 cursor-default hover:text-teal-400">
      Nextjs
    </span>
    <span className="text-gray-500 transition-colors duration-300 cursor-default hover:text-teal-400">
      Tailwind CSS
    </span>

    {/* Design & Collaboration Tools */}
    <span className="text-gray-500 transition-colors duration-300 cursor-default hover:text-teal-400">
      Figma
    </span>
    <span className="text-gray-500 transition-colors duration-300 cursor-default hover:text-teal-400">
      Git
    </span>
    

    {/* Supporting Skills */}
    <span className="text-gray-500 transition-colors duration-300 cursor-default hover:text-teal-400">
      WordPress
    </span>
    <span className="text-gray-500 transition-colors duration-300 cursor-default hover:text-teal-400">
      PhP
    </span>
    <span className="text-gray-500 transition-colors duration-300 cursor-default hover:text-teal-400">
      MariaDB
    </span>
    <span className="text-gray-500 transition-colors duration-300 cursor-default hover:text-teal-400">
      MySQL
    </span>
    <span className="text-gray-500 transition-colors duration-300 cursor-default hover:text-teal-400">
      REST APIs
    </span>
    <span className="text-gray-500 transition-colors duration-300 cursor-default hover:text-teal-400">
      GitHub
    </span>
  </div>
</div>


      </div>
    </section>
  );
};

export default Hero;