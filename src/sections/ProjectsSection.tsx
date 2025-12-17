import React, { useRef } from 'react';
import ProjectCard from '../components/ProjectCard/ProjectCard';
// NOTE: Ensure your Project type and projectsData array are exported from this path
import { projectsData } from '../data/projects';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  // 1. Separate projects into two groups based on the 'isDesign' flag
  const listProjects = projectsData.filter(p => !p.isDesign);
  const designProjects = projectsData.filter(p => p.isDesign);
  
  // 2. Reference for the horizontal scroll container
  const carouselRef = useRef<HTMLDivElement>(null);

  // 3. Function to handle smooth scrolling of the carousel
  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      // Scroll by approximately the width of two cards and gap (800px is a good guess)
      const scrollAmount = direction === 'right' ? 800 : -800;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container max-w-6xl px-4 mx-auto">
        
        {/* ======================================= */}
        {/* 1. Main Projects List (Standard Vertical) */}
        {/* ======================================= */}
        <h2 className="mb-12 text-4xl font-bold text-white md:text-5xl">
          Selected Client Work
        </h2>
        
        <div className="mb-20 space-y-4">
          {listProjects.map(project => (
            // The ProjectCard component handles the vertical list styling when isDesign is false (default)
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* ======================================= */}
        {/* 2. Creative Designs Carousel (Horizontal Scroll) */}
        {/* ======================================= */}
        <h2 className="mb-8 text-4xl font-bold text-white md:text-5xl">
          Additional Client Projects
        </h2>
        
        <div className="relative">
          {/* Scrollable Container */}
          <div 
            ref={carouselRef}
            // Tailwind classes for horizontal scroll, snapping, and hiding scrollbar
            className="flex pb-4 space-x-8 overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
            style={{ WebkitOverflowScrolling: 'touch' }} // For smoother iOS scrolling
          >
            {designProjects.map(project => (
              <div key={project.id} className="flex-shrink-0 snap-start">
                {/* The ProjectCard component handles the carousel styling when isDesign is true */}
                <ProjectCard project={project} isDesign={true} />
              </div>
            ))}
          </div>

          {/* Carousel Controls (Absolute Positioned) */}
          <div className="absolute top-0 right-0 flex space-x-4 max-md:hidden">
            <button 
              onClick={() => scrollCarousel('left')}
              className="p-3 text-white transition duration-300 border border-gray-800 rounded-full hover:bg-gray-800"
              aria-label="Scroll Left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollCarousel('right')}
              className="p-3 text-white transition duration-300 border border-gray-800 rounded-full hover:bg-gray-800"
              aria-label="Scroll Right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;