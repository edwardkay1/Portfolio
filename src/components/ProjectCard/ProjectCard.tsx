import React from 'react';
// NOTE: Adjust the path below if your projects type is not in a 'data' folder
import type { Project } from '../data/projects'; 
import {Github, ExternalLink } from 'lucide-react'; 
// NOTE: I'm using ExternalLink for the View Demo button

interface ProjectCardProps {
  project: Project;
  isDesign?: boolean; // Toggles layout/style for the "Creative Designs" section
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isDesign = false }) => {
  // Common Button Styles
  const buttonBaseClasses = "flex items-center space-x-2 text-sm font-medium transition-colors duration-300";
  const demoButtonClasses = `px-4 py-2 bg-teal-500 text-black hover:bg-teal-400 rounded-md ${buttonBaseClasses}`;
  const githubButtonClasses = `px-4 py-2 text-gray-400 hover:text-white rounded-md ${buttonBaseClasses}`;

  if (isDesign) {
    // Layout for the Creative Designs Carousel
    return (
      <div className="flex flex-col w-96 p-4">
        <div className="bg-gray-800 rounded-lg overflow-hidden mb-4 transition-transform duration-500 hover:scale-[1.03] group">
          <img 
            src={project.imagePath} 
            alt={project.title} 
            className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          />
        </div>
        <p className="text-gray-400 text-xs mb-1 uppercase tracking-widest">{project.client}</p>
        <h4 className="text-xl font-semibold text-white mb-2">{project.title}</h4>
        <p className="text-gray-500 text-sm mb-4">{project.description}</p>
        
        {/* UPDATED: View Demo and GitHub Buttons (Design Layout) */}
        <div className="flex space-x-3 mt-2">
            {project.liveLink && (
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={demoButtonClasses}
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Demo</span>
              </a>
            )}
            {project.githubLink && (
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={githubButtonClasses}
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}
        </div>
      </div>
    );
  }

  // Layout for the Main Projects List
  return (
    <div className="py-6 border-b border-gray-800 group hover:border-teal-500 transition-colors duration-500 cursor-pointer">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-1">{project.client}</p>
          <h4 className="text-2xl font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors duration-300">
            {project.title}
          </h4>
          <p className="text-gray-500 text-base max-w-lg">{project.description}</p>
          
          {/* UPDATED: View Demo and GitHub Buttons (List Layout) */}
          <div className="flex space-x-4 mt-4">
            {project.liveLink && (
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={demoButtonClasses}
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Demo</span>
              </a>
            )}
            {project.githubLink && (
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={githubButtonClasses}
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}
          </div>
          
        </div>
        <div className="w-56 h-32 ml-8 flex-shrink-0 bg-gray-800 rounded-lg overflow-hidden transition-transform duration-500 group-hover:scale-[1.03]">
          <img 
             src={project.imagePath} 
             alt={project.title} 
             className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;