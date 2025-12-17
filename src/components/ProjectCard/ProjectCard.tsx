import React from 'react';
// NOTE: Adjust the path below if your projects type is not in a 'data' folder
import type { Project } from '../../data/projects';
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
      <div className="flex flex-col p-4 w-96">
        <div className="bg-gray-800 rounded-lg overflow-hidden mb-4 transition-transform duration-500 hover:scale-[1.03] group">
          <img 
            src={project.imagePath} 
            alt={project.title} 
            className="object-cover w-full h-auto transition-opacity duration-500 opacity-80 group-hover:opacity-100"
          />
        </div>
        <p className="mb-1 text-xs tracking-widest text-gray-400 uppercase">{project.client}</p>
        <h4 className="mb-2 text-xl font-semibold text-white">{project.title}</h4>
        <p className="mb-4 text-sm text-gray-500">{project.description}</p>
        
        {/* View Demo and GitHub Buttons */}
        <div className="flex mt-2 space-x-3">
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

  //Main Projects List
  return (
    <div className="py-6 transition-colors duration-500 border-b border-gray-800 cursor-pointer group hover:border-teal-500">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="mb-1 text-sm tracking-widest text-gray-400 uppercase">{project.client}</p>
          <h4 className="mb-2 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-teal-400">
            {project.title}
          </h4>
          <p className="max-w-lg text-base text-gray-500">{project.description}</p>
          
          {/* UPDATED: View Demo and GitHub Buttons (List Layout) */}
          <div className="flex mt-4 space-x-4">
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
             className="object-cover w-full h-full transition-opacity duration-500 opacity-80 group-hover:opacity-100" 
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;